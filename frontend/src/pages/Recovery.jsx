function Recovery() {
  const actions = [
    ["Alternative payment", "Payment failure", "124", "High"],
    ["Show delivery estimate", "Delivery uncertainty", "98", "High"],
    ["Improve recommendations", "Recommendation mismatch", "62", "Medium"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="live"><span></span> RECOVERY ENGINE</div>
          <h1>Recovery Actions</h1>
          <p>Convert detected friction into actionable interventions.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <strong>310</strong>
          <h3>Actions identified</h3>
        </div>

        <div className="stat-card">
          <strong>68%</strong>
          <h3>Potential recovery</h3>
        </div>

        <div className="stat-card">
          <strong>₹2.4L</strong>
          <h3>Estimated opportunity</h3>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Recommended recovery actions</h2>
            <p>AI-generated interventions based on detected patterns.</p>
          </div>
        </div>

        {actions.map((a) => (
          <div
            key={a[0]}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 2fr 1fr 1fr",
              padding: "18px 25px",
              borderTop: "1px solid #eef0f4",
              fontSize: "11px",
            }}
          >
            <strong>{a[0]}</strong>
            <span>{a[1]}</span>
            <span>{a[2]} users</span>
            <strong>{a[3]}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recovery;