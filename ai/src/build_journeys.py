import pandas as pd

# -----------------------------------------
# 1. Load data
# -----------------------------------------

file_path = "ai/data/raw/events.csv"

df = pd.read_csv(file_path)

# -----------------------------------------
# 2. Convert timestamp
# -----------------------------------------

df["datetime"] = pd.to_datetime(
    df["timestamp"],
    unit="ms"
)

# -----------------------------------------
# 3. Sort customer events by time
# -----------------------------------------

df = df.sort_values(
    ["visitorid", "datetime"]
).reset_index(drop=True)

# -----------------------------------------
# 4. Calculate time gap between events
# -----------------------------------------

df["time_gap"] = (
    df.groupby("visitorid")["datetime"]
    .diff()
)

# -----------------------------------------
# 5. Start a new session if gap > 30 min
# -----------------------------------------

df["new_session"] = (
    df["time_gap"] > pd.Timedelta(minutes=30)
)

# First event of every customer starts a session
df.loc[
    df.groupby("visitorid").head(1).index,
    "new_session"
] = True

# -----------------------------------------
# 6. Create session number
# -----------------------------------------

df["session_number"] = (
    df.groupby("visitorid")["new_session"]
    .cumsum()
)

# -----------------------------------------
# 7. Create session ID
# -----------------------------------------

df["session_id"] = (
    df["visitorid"].astype(str)
    + "_"
    + df["session_number"].astype(str)
)

# -----------------------------------------
# 8. Show one customer's sessions
# -----------------------------------------

first_customer = df["visitorid"].iloc[0]

customer_data = df[
    df["visitorid"] == first_customer
]

print("Customer:", first_customer)

print("\nCustomer sessions:")

print(
    customer_data[
        [
            "session_id",
            "datetime",
            "event",
            "itemid",
            "transactionid"
        ]
    ].to_string(index=False)
)

# -----------------------------------------
# 9. Session summary
# -----------------------------------------

print("\n========== SESSION SUMMARY ==========")

print(
    df.groupby("session_id")
    .agg(
        customer_id=("visitorid", "first"),
        start_time=("datetime", "min"),
        end_time=("datetime", "max"),
        event_count=("event", "count")
    )
    .head(10)
)
# -----------------------------------------
# 10. Identify potentially abandoned sessions
# -----------------------------------------

session_summary = (
    df.groupby("session_id")
    .agg(
        customer_id=("visitorid", "first"),
        start_time=("datetime", "min"),
        end_time=("datetime", "max"),
        event_count=("event", "count"),
        has_add_to_cart=("event", lambda x: (x == "addtocart").any()),
        has_transaction=("event", lambda x: (x == "transaction").any())
    )
    .reset_index()
)

session_summary["potential_abandonment"] = (
    session_summary["has_add_to_cart"]
    & ~session_summary["has_transaction"]
)

print("\n========== POTENTIAL ABANDONMENT ==========")

print(
    session_summary[
        [
            "session_id",
            "customer_id",
            "event_count",
            "has_add_to_cart",
            "has_transaction",
            "potential_abandonment"
        ]
    ].head(20).to_string(index=False)
)

print(
    "\nPotentially abandoned sessions:",
    session_summary["potential_abandonment"].sum()
)