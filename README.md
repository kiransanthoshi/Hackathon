# AI / Data Module

## Purpose

Detect potential customer journey friction and recommend recovery actions.

## Pipeline

Customer Events
→ Customer Sessions
→ Session Features
→ Friction Detection
→ Likely Cause
→ Evidence
→ Recovery Recommendation

## Current Friction Signals

1. Cart abandonment
2. Repeated product views without add-to-cart
3. No strong friction detected

## Output

The AI produces:

- friction_type
- risk_level
- likely_cause
- evidence
- recommended_action

## Dataset

Retailrocket eCommerce event dataset.

The current prototype uses behavioral events:
- view
- addtocart
- transaction

Important limitation: the dataset does not directly contain payment failures, delivery issues, support tickets, or customer complaints. Therefore those friction types are not claimed to be detected from the current real data.