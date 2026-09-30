import pandas as pd


def detect_friction(row):
    # Cart activity without purchase
    if row["add_to_cart"] > 0 and row["transactions"] == 0:
        return {
            "friction_type": "cart_abandonment",
            "risk_level": "high",
            "likely_cause": "Customer added product to cart but did not complete purchase",
            "evidence": [
                f'{row["add_to_cart"]} add-to-cart event(s)',
                f'{row["transactions"]} transaction(s)'
            ],
            "recommended_action": "Show checkout assistance or alternative purchase options"
        }

    # Many views but no cart activity
    if row["views"] >= 3 and row["add_to_cart"] == 0:
        return {
            "friction_type": "product_interest_without_cart",
            "risk_level": "medium",
            "likely_cause": "Repeated product views without adding to cart",
            "evidence": [
                f'{row["views"]} product views',
                "No add-to-cart event"
            ],
            "recommended_action": "Improve product information or provide clearer product recommendations"
        }

    # Normal browsing
    return {
        "friction_type": "none_detected",
        "risk_level": "low",
        "likely_cause": "No strong friction signal detected",
        "evidence": [
            f'{row["views"]} view(s)',
            f'{row["add_to_cart"]} add-to-cart event(s)',
            f'{row["transactions"]} transaction(s)'
        ],
        "recommended_action": "No intervention required"
    }


if __name__ == "__main__":

    # Load the session features created earlier
    sessions = pd.read_csv(
        "ai/data/raw/session_features.csv"
    )

    results = sessions.apply(
        detect_friction,
        axis=1,
        result_type="expand"
    )

    output = pd.concat(
        [sessions, results],
        axis=1
    )

    print("\n========== FRICTION DETECTION ==========")

    print(
        output[
            [
                "session_id",
                "friction_type",
                "risk_level",
                "likely_cause",
                "recommended_action"
            ]
        ].head(20).to_string(index=False)
    )