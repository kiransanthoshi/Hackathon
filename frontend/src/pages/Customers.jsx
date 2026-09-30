function Customers() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="live"><span></span> CUSTOMER INTELLIGENCE</div>
          <h1>Customers</h1>
          <p>Monitor customer behaviour and risk signals.</p>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <strong>8,924</strong>
          <h3>Active customers</h3>
        </div>

        <div className="stat-card">
          <strong>420</strong>
          <h3>High-risk customers</h3>
        </div>

        <div className="stat-card">
          <strong>1,240</strong>
          <h3>Returning customers</h3>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <div>
            <h2>Customer monitoring</h2>
            <p>Behavioural signals detected by JourneyAI</p>
          </div>
        </div>

        <div style={{ padding: "25px", color: "#8993a6", fontSize: "11px" }}>
          Customer-level behavioural data will appear here when connected to
          the backend.
        </div>
      </div>
    </div>
  );
}

export default Customers;