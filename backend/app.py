from flask import Flask, request
from flask_cors import CORS
import pandas as pd

from ai.src.friction_detector import detect_friction


app = Flask(__name__)
CORS(app)

# Path to the generated session features file
SESSION_FILE = "ai/data/raw/session_features.csv"


# =========================================================
# HOME ROUTE
# =========================================================

@app.route("/", methods=["GET"])
def home():
    return {
        "message": "AI Friction Detection API is running",
        "endpoints": [
            "/health",
            "/api/analyze"
        ]
    }


# =========================================================
# HEALTH CHECK
# =========================================================

@app.route("/health", methods=["GET"])
def health():
    return {
        "status": "ok"
    }


# =========================================================
# AI FRICTION ANALYSIS
# =========================================================

@app.route("/api/analyze", methods=["POST"])
def analyze():

    # Get JSON data sent by the client
    data = request.get_json()

    if not data:
        return {
            "error": "JSON data is required"
        }, 400

    # Get session ID
    session_id = data.get("session_id")

    if not session_id:
        return {
            "error": "session_id is required"
        }, 400

    # Check whether session features file exists
    try:
        sessions = pd.read_csv(SESSION_FILE)
    except FileNotFoundError:
        return {
            "error": "session_features.csv not found. Run the session feature generation script first."
        }, 500

    # Find requested session
    session = sessions[
        sessions["session_id"].astype(str) == str(session_id)
    ]

    if session.empty:
        return {
            "error": "Session not found",
            "session_id": str(session_id)
        }, 404

    # Get first matching session
    row = session.iloc[0]

    # Run AI friction detection
    result = detect_friction(row)

    # Return final result
    return {
        "customer_id": str(row["customer_id"]),
        "session_id": str(row["session_id"]),
        **result
    }


# =========================================================
# START FLASK SERVER
# =========================================================

if __name__ == "__main__":
    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )
