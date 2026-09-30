import pandas as pd

files = [
    "ai/data/raw/item_properties_part1.csv",
    "ai/data/raw/item_properties_part2.csv",
    "ai/data/raw/category_tree.csv"
]

for file_path in files:
    print("\n" + "=" * 60)
    print("FILE:", file_path)
    print("=" * 60)

    df = pd.read_csv(file_path, nrows=5)

    print("\nColumns:")
    print(df.columns.tolist())

    print("\nFirst 5 rows:")
    print(df.to_string(index=False))