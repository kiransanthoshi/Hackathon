import pandas as pd

FILE = "ai/data/raw/events.csv"

print("Loading sample...")

df = pd.read_csv(FILE, nrows=100000)

df["datetime"] = pd.to_datetime(df["timestamp"], unit="ms")

df = df.sort_values(["visitorid", "datetime"])

df["gap"] = df.groupby("visitorid")["datetime"].diff()

df["new_session"] = (
    df["gap"] > pd.Timedelta(minutes=30)
)

df["new_session"] = df["new_session"].fillna(True)

df["session_number"] = (
    df.groupby("visitorid")["new_session"].cumsum()
)

df["session_id"] = (
    df["visitorid"].astype(str)
    + "_"
    + df["session_number"].astype(str)
)

sessions = df.groupby("session_id").agg(
    customer_id=("visitorid", "first"),
    event_count=("event", "count"),
    views=("event", lambda x: (x == "view").sum()),
    add_to_cart=("event", lambda x: (x == "addtocart").sum()),
    transactions=("event", lambda x: (x == "transaction").sum()),
).reset_index()

sessions["potential_friction"] = (
    (sessions["add_to_cart"] > 0) &
    (sessions["transactions"] == 0)
)

print("\n===== AI SESSION ANALYSIS =====")
print("Sessions analyzed:", len(sessions))
print(
    "Potential friction sessions:",
    sessions["potential_friction"].sum()
)

print("\nSample:")
print(
    sessions[
        [
            "session_id",
            "event_count",
            "views",
            "add_to_cart",
            "transactions",
            "potential_friction"
        ]
    ].head(10).to_string(index=False)
)