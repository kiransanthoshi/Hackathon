import os
import sys

from flask import Flask, request
from flask_cors import CORS
import pandas as pd


# =========================================================
# PROJECT PATH
# =========================================================

# Get the Hackathon project folder
BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

# Add Hackathon folder to Python path
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)


# =========================================================
# IMPORT AI MODULE
# =========================================================

from ai.src.friction_detector import detect_friction


# =========================================================
# FLASK APP
# =========================================================

app = Flask(__name__)
CORS(app)


# =========================================================
# FILE PATH
# =========================================================

SESSION_FILE = os.path.join(
    BASE_DIR,
    "ai",
    "data",
    "raw",
    "session_features.csv"
)


# =========================================================
# HOME
# =========================================================

@app.route("/", methods=["GET"])
def home():

    return {
        "message": "AI Friction Detection API is running",
        "status": "success",
        "endpoints": [
            "/",
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
        "status": "ok",
        "message": "Backend is running successfully"
    }


# =========================================================
# AI FRICTION ANALYSIS
# =========================================================

@app.route("/api/analyze", methods=["POST"])
def analyze():

    # Get JSON request
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


    # Check session feature file
    if not os.path.exists(SESSION_FILE):

        return {
            "error": "session_features.csv not found",
            "path": SESSION_FILE,
            "message": "Run the session feature generation script first."
        }, 500


    # Load session data
    sessions = pd.read_csv(SESSION_FILE)


    # Find requested session
    session = sessions[
        sessions["session_id"].astype(str) == str(session_id)
    ]


    # Session not found
    if session.empty:

        return {
            "error": "Session not found",
            "session_id": str(session_id)
        }, 404


    # Get session row
    row = session.iloc[0]


    # Run AI friction detection
    result = detect_friction(row)


    # Return result
    return {
        "customer_id": str(row["customer_id"]),
        "session_id": str(row["session_id"]),
        **result
    }


# =========================================================
# RUN SERVER
# =========================================================

if __name__ == "__main__":

    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )
