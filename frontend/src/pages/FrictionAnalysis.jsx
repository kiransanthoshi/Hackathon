function FrictionAnalysis() {
  const issues = [
    ["Payment failures", "35%", "High"],
    ["Delivery uncertainty", "27%", "High"],
    ["Product information gaps", "21%", "Medium"],
    ["Poor recommendations", "11%", "Medium"],
    ["Post-purchase issues", "6%", "Low"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="live"><span></span> FRICTION ANALYSIS</div>
          <h1>Friction Analysis</h1>
          <p>Understand what prevents customers from completing their journey.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <strong>2,340</strong>
          <h3>Total friction events</h3>
        </div>
        <div className="stat-card">
          <strong>35%</strong>
          <h3>Payment friction</h3>
        </div>
        <div className="stat-card">
          <strong>27%</strong>
          <h3>Delivery friction</h3>
        </div>
        <div className="stat-card">
          <strong>18.4%</strong>
          <h3>Recovery opportunity</h3>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Detected friction categories</h2>
            <p>AI analysis of customer interaction patterns</p>
          </div>
        </div>

        {issues.map((issue) => (
          <div
            key={issue[0]}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr",
              padding: "18px 25px",
              borderTop: "1px solid #eef0f4",
              fontSize: "11px",
            }}
          >
            <strong>{issue[0]}</strong>
            <span>{issue[1]}</span>
            <span>{issue[2]} priority</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrictionAnalysis;