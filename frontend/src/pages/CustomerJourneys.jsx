function CustomerJourneys() {
  const journeys = [
    ["CJ-10482", "Payment failed", "Checkout", "High", "82%"],
    ["CJ-10479", "Delivery uncertainty", "Post-purchase", "Medium", "64%"],
    ["CJ-10461", "Poor recommendation", "Discovery", "Medium", "58%"],
    ["CJ-10455", "Product information", "Consideration", "High", "76%"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="live"><span></span> CUSTOMER JOURNEYS</div>
          <h1>Customer Journeys</h1>
          <p>Explore customer behaviour across the complete journey.</p>
        </div>
      </div>

      <div className="panel" style={{ padding: "20px" }}>
        <div className="panel-header">
          <div>
            <h2>Recent high-risk journeys</h2>
            <p>AI-identified customer friction patterns</p>
          </div>
        </div>

        {journeys.map((j) => (
          <div
            key={j[0]}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr 1fr 1fr 1fr",
              padding: "18px 10px",
              borderTop: "1px solid #eef0f4",
              fontSize: "11px",
              alignItems: "center",
            }}
          >
            <strong>{j[0]}</strong>
            <span>{j[1]}</span>
            <span>{j[2]}</span>
            <strong>{j[3]}</strong>
            <span>{j[4]} risk</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerJourneys;