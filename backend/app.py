from flask import Flask, request
from flask_cors import CORS
import pandas as pd

from ai.src.friction_detector import detect_friction


app = Flask(__name__)
CORS(app)

SESSION_FILE = "ai/data/raw/session_features.csv"


@app.route("/health", methods=["GET"])
def health():
    return {"status": "ok"}


@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json()

    session_id = data.get("session_id")

    if not session_id:
        return {"error": "session_id is required"}, 400

    sessions = pd.read_csv(SESSION_FILE)

    session = sessions[sessions["session_id"].astype(str) == str(session_id)]

    if session.empty:
        return {"error": "Session not found"}, 404

    row = session.iloc[0]

    result = detect_friction(row)

    return {
        "customer_id": str(row["customer_id"]),
        "session_id": str(row["session_id"]),
        **result
    }


if __name__ == "__main__":
    app.run(debug=True)
