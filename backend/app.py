from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from ai.src.friction_detector import detect_friction
app = Flask(__name__)
CORS(app)


@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})


@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json(silent=True)

    if not data:
        return jsonify({"error": "Request body must be JSON"}), 400

    customer_id = data.get("customer_id")

    if not customer_id:
        return jsonify({"error": "customer_id is required"}), 400

    try:
        features = {
            "views": int(data.get("views", 0)),
            "add_to_cart": int(data.get("add_to_cart", 0)),
            "transactions": int(data.get("transactions", 0))
        }
    except (TypeError, ValueError):
        return jsonify({
            "error": "views, add_to_cart and transactions must be numbers"
        }), 400

    result = detect_friction(features)

    result["customer_id"] = customer_id

    return jsonify(result)


if __name__ == "__main__":
    app.run(debug=True)