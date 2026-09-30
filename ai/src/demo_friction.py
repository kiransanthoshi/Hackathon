import json


def detect_friction(customer):
    if customer["add_to_cart"] > 0 and customer["transactions"] == 0:
        return {
            "customer_id": customer["customer_id"],
            "friction_type": "cart_abandonment",
            "risk_level": "high",
            "likely_cause": "Customer added a product to the cart but did not complete purchase",
            "evidence": [
                f'{customer["add_to_cart"]} add-to-cart event(s)',
                "0 transaction(s)"
            ],
            "recommended_action": "Offer checkout assistance or an alternative payment option"
        }

    if customer["views"] >= 3 and customer["add_to_cart"] == 0:
        return {
            "customer_id": customer["customer_id"],
            "friction_type": "product_information",
            "risk_level": "medium",
            "likely_cause": "Customer repeatedly viewed products without adding to cart",
            "evidence": [
                f'{customer["views"]} product views',
                "0 add-to-cart events"
            ],
            "recommended_action": "Improve product information or provide clearer recommendations"
        }

    return {
        "customer_id": customer["customer_id"],
        "friction_type": "none_detected",
        "risk_level": "low",
        "likely_cause": "No strong friction signal",
        "evidence": [],
        "recommended_action": "No intervention required"
    }


# Demo customer journey
customer = {
    "customer_id": "C1024",
    "views": 5,
    "add_to_cart": 1,
    "transactions": 0
}

result = detect_friction(customer)

# Save AI result for backend integration
with open("ai/src/friction_result.json", "w") as f:
    json.dump(result, f, indent=2)

print(json.dumps(result, indent=2))
print("\nSaved to: ai/src/friction_result.json")