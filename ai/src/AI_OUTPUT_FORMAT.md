# AI Friction Detection Output

The AI module returns one JSON object per customer journey.

## Fields

- `customer_id` — unique customer identifier
- `friction_type` — detected friction category
- `risk_level` — low, medium, or high
- `likely_cause` — explanation of the suspected cause
- `evidence` — behavioral signals supporting the detection
- `recommended_action` — suggested recovery action

## Example

```json
{
  "customer_id": "C1024",
  "friction_type": "cart_abandonment",
  "risk_level": "high",
  "likely_cause": "Customer added a product to the cart but did not complete purchase",
  "evidence": [
    "1 add-to-cart event",
    "0 transaction(s)"
  ],
  "recommended_action": "Offer checkout assistance or an alternative payment option"
}