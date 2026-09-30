import pandas as pd

# Path to the raw dataset
file_path = "ai/data/raw/events.csv"

print("Loading events.csv...")
df = pd.read_csv(file_path)

# --------------------------------------------------
# 1. Basic information
# --------------------------------------------------

print("\n========== DATASET INFO ==========")

print("Total events:", len(df))
print("Unique customers:", df["visitorid"].nunique())
print("Unique products:", df["itemid"].nunique())

# --------------------------------------------------
# 2. Columns
# --------------------------------------------------

print("\n========== COLUMNS ==========")

print(df.columns.tolist())

# --------------------------------------------------
# 3. Event types
# --------------------------------------------------

print("\n========== EVENT COUNTS ==========")

print(df["event"].value_counts())

print("\nUnique event types:")
print(df["event"].unique())

# --------------------------------------------------
# 4. Transactions
# --------------------------------------------------

print("\n========== TRANSACTIONS ==========")

print("Transaction records:", df["transactionid"].notna().sum())
print("Unique transactions:", df["transactionid"].nunique())

# --------------------------------------------------
# 5. Missing values
# --------------------------------------------------

print("\n========== MISSING VALUES ==========")

print(df.isnull().sum())

# --------------------------------------------------
# 6. Timestamp conversion
# --------------------------------------------------

df["datetime"] = pd.to_datetime(
    df["timestamp"],
    unit="ms"
)

print("\n========== DATE RANGE ==========")

print("First event:", df["datetime"].min())
print("Last event:", df["datetime"].max())

# --------------------------------------------------
# 7. Sample rows
# --------------------------------------------------

print("\n========== FIRST 10 ROWS ==========")

print(
    df[
        [
            "timestamp",
            "datetime",
            "visitorid",
            "event",
            "itemid",
            "transactionid"
        ]
    ].head(10).to_string(index=False)
)

print("\n========== INSPECTION COMPLETE ==========")