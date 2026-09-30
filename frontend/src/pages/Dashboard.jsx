import "../App.css";

function Dashboard() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="live">
            <span></span>
            LIVE CUSTOMER INTELLIGENCE
          </div>

          <h1>Customer Journey Intelligence</h1>

          <p>
            Monitor friction, understand customer behaviour, and identify
            recovery opportunities.
          </p>
        </div>

        <button className="date-button">Last 30 days ⌄</button>
      </div>

      <section className="stats">
        <div className="stat-card">
          <strong>10,284</strong>
          <h3>Total sessions</h3>
          <p>Customer journeys analyzed</p>
        </div>

        <div className="stat-card">
          <strong>2,340</strong>
          <h3>Friction detected</h3>
          <p>Across customer journeys</p>
        </div>

        <div className="stat-card">
          <strong>420</strong>
          <h3>High-risk journeys</h3>
          <p>Require attention</p>
        </div>

        <div className="stat-card">
          <strong>310</strong>
          <h3>Recovery actions</h3>
          <p>Opportunities identified</p>
        </div>
      </section>

      <section className="analysis-grid">
        <div className="panel">
          <div className="panel-header">
            <div>
              <h2>Friction distribution</h2>
              <p>Where customers are experiencing problems</p>
            </div>
          </div>

          <div className="friction-body">
            <div className="donut">
              <div className="donut-center">
                <strong>2,340</strong>
                <span>incidents</span>
              </div>
            </div>

            <div className="legend">
              <div><span className="dot payment"></span><label>Payment</label><strong>35%</strong></div>
              <div><span className="dot delivery"></span><label>Delivery</label><strong>27%</strong></div>
              <div><span className="dot product"></span><label>Product information</label><strong>21%</strong></div>
              <div><span className="dot recommendation"></span><label>Recommendations</label><strong>11%</strong></div>
              <div><span className="dot other"></span><label>Post-purchase</label><strong>6%</strong></div>
            </div>
          </div>
        </div>

        <div className="panel insight-panel">
          <div className="panel-header">
            <div className="ai-title">✦ AI-detected insight</div>
          </div>

          <div className="insight-content">
            <h2>
              Payment friction is concentrated around repeated failed
              transactions.
            </h2>

            <div className="detected">
              <span>⌁</span>
              <div>
                <strong>Detected pattern</strong>
                <p>Checkout › Payment failed › Retry › Exit</p>
              </div>
            </div>

            <div className="recommendation">
              <span>▣</span>
              <div>
                <strong>Recommended action</strong>
                <p>
                  Offer an alternative payment method before the customer exits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;