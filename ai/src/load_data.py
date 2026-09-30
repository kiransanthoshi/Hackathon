import pandas as pd


def load_events(file_path="ai/data/raw/events.csv"):
    df = pd.read_csv(file_path)

    df["datetime"] = pd.to_datetime(
        df["timestamp"],
        unit="ms"
    )

    return df


def load_category_tree(
    file_path="ai/data/raw/category_tree.csv"
):
    return pd.read_csv(file_path)


if __name__ == "__main__":
    events = load_events()
    categories = load_category_tree()

    print("Events loaded:", len(events))
    print("Categories loaded:", len(categories))