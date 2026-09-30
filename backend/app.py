from flask import Flask, request
from flask_cors import CORS
import pandas as pd

from ai.src.friction_detector import detect_friction


app = Flask(__name__)
CORS(app)

SESSION_FILE = "ai/data/raw/session_features.csv"


@app.route("/health", methods=["GET"])
def health():
    return {
        "status": "ok"
    }


@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json(silent=True) or {}

    session_id = data.get("session_id")

    if not session_id:
        return {
            "error": "session_id is required"
        }, 400

    try:
        sessions = pd.read_csv(SESSION_FILE)

        session = sessions[
            sessions["session_id"].astype(str) == str(session_id)
        ]

        if session.empty:
            return {
                "error": "Session not found",
                "session_id": session_id
            }, 404

        row = session.iloc[0]

        # Run the AI/Data friction detector
        friction_result = detect_friction(row)

        return {
            "customer_id": int(row["customer_id"]),
            "session_id": str(row["session_id"]),

            "friction_type": friction_result["friction_type"],
            "risk_level": friction_result["risk_level"],
            "likely_cause": friction_result["likely_cause"],
            "evidence": friction_result["evidence"],
            "recommended_action": friction_result["recommended_action"]
        }

    except FileNotFoundError:
        return {
            "error": "Session features file not found",
            "file": SESSION_FILE
        }, 500

    except Exception as e:
        return {
            "error": "Failed to analyze session",
            "details": str(e)
        }, 500


if __name__ == "__main__":
    app.run(debug=True)
