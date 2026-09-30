from flask import Flask, request

app = Flask(__name__)


@app.route("/health", methods=["GET"])
def health():
    return {"status": "ok"}


@app.route("/api/analyze", methods=["POST"])
def analyze():
    data = request.get_json()

    customer_id = data.get("customer_id")

    return {
        "customer_id": customer_id,
        "friction_type": "cart_abandonment",
        "risk_level": "high",
        "likely_cause": "Customer added a product to the cart but did not complete purchase",
        "evidence": [
            "1 add-to-cart event",
            "0 transaction(s)"
        ],
        "recommended_action": "Offer checkout assistance or an alternative payment option"
    }


if __name__ == "__main__":
    app.run(debug=True)