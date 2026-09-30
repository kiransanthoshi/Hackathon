import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  LayoutDashboard,
  Package,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";

import FrictionChart from "../components/FrictionChart";

function Dashboard() {
  return (
    <div className="app-shell">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            <Brain size={21} />
          </div>

          <div>
            <div className="brand-name">JourneyAI</div>
            <div className="brand-subtitle">Friction Intelligence</div>
          </div>
        </div>

        <nav className="navigation">

          <div className="nav-label">OVERVIEW</div>

          <div className="nav-item active">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </div>

          <div className="nav-item">
            <Activity size={18} />
            <span>Customer Journeys</span>
          </div>

          <div className="nav-item">
            <AlertTriangle size={18} />
            <span>Friction Analysis</span>
          </div>

          <div className="nav-label">INSIGHTS</div>

          <div className="nav-item">
            <Users size={18} />
            <span>Customers</span>
          </div>

          <div className="nav-item">
            <Brain size={18} />
            <span>AI Insights</span>
          </div>

          <div className="nav-item">
            <ShoppingCart size={18} />
            <span>Recovery</span>
          </div>

          <div className="nav-label">SYSTEM</div>

          <div className="nav-item">
            <Settings size={18} />
            <span>Settings</span>
          </div>

        </nav>

        <div className="sidebar-footer">
          <div className="status-dot"></div>

          <div>
            <div className="system-status">System operational</div>
            <div className="system-time">Updated just now</div>
          </div>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOP BAR */}
        <header className="topbar">

          <div className="breadcrumb">
            Analytics
            <ChevronRight size={15} />
            <strong>Dashboard</strong>
          </div>

          <div className="topbar-actions">

            <div className="search-box">
              <Search size={17} />
              <input
                type="text"
                placeholder="Search customers..."
              />
              <span className="search-shortcut">⌘ K</span>
            </div>

            <div className="avatar">
              A
            </div>

          </div>

        </header>


        {/* PAGE HEADER */}
        <section className="page-header">

          <div>
            <div className="eyebrow">
              <span className="live-dot"></span>
              LIVE CUSTOMER INTELLIGENCE
            </div>

            <h1>Customer Journey Intelligence</h1>

            <p>
              Monitor friction, understand customer behaviour,
              and identify recovery opportunities.
            </p>
          </div>

          <button className="date-filter">
            Last 30 days
            <ChevronRight size={16} />
          </button>

        </section>


        {/* KPI CARDS */}
        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon blue">
                <Users size={19} />
              </div>

              <span className="stat-change positive">
                <ArrowUpRight size={14} />
                12.4%
              </span>
            </div>

            <div className="stat-value">10,284</div>

            <div className="stat-label">
              Total sessions
            </div>

            <div className="stat-description">
              Customer journeys analyzed
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon orange">
                <AlertTriangle size={19} />
              </div>

              <span className="stat-change negative">
                <ArrowUpRight size={14} />
                8.2%
              </span>
            </div>

            <div className="stat-value">2,340</div>

            <div className="stat-label">
              Friction detected
            </div>

            <div className="stat-description">
              Journeys requiring attention
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon red">
                <Activity size={19} />
              </div>

              <span className="stat-change negative">
                <ArrowUpRight size={14} />
                5.7%
              </span>
            </div>

            <div className="stat-value">420</div>

            <div className="stat-label">
              High-risk journeys
            </div>

            <div className="stat-description">
              Immediate intervention recommended
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-top">
              <div className="stat-icon green">
                <CheckCircle2 size={19} />
              </div>

              <span className="stat-change positive">
                <ArrowUpRight size={14} />
                18.6%
              </span>
            </div>

            <div className="stat-value">310</div>

            <div className="stat-label">
              Recovery actions
            </div>

            <div className="stat-description">
              Customers successfully recovered
            </div>

          </div>

        </section>


        {/* MAIN ANALYTICS */}
        <section className="analytics-grid">

          {/* FRICTION DISTRIBUTION */}
          <div className="panel">

            <div className="panel-header">

              <div>
                <h2>Friction distribution</h2>
                <p>Where customers are experiencing problems</p>
              </div>

              <button className="icon-button">
                •••
              </button>

            </div>

            <div className="friction-content">

              <div className="donut-placeholder">
                <div className="donut-inner">
                  <strong>2,340</strong>
                  <span>detected</span>
                </div>
              </div>

              <div className="legend">

                <div className="legend-row">
                  <span className="legend-color payment"></span>
                  <span>Payment</span>
                  <strong>35%</strong>
                </div>

                <div className="legend-row">
                  <span className="legend-color delivery"></span>
                  <span>Delivery</span>
                  <strong>27%</strong>
                </div>

                <div className="legend-row">
                  <span className="legend-color product"></span>
                  <span>Product information</span>
                  <strong>21%</strong>
                </div>

                <div className="legend-row">
                  <span className="legend-color recommendation"></span>
                  <span>Recommendations</span>
                  <strong>11%</strong>
                </div>

                <div className="legend-row">
                  <span className="legend-color post"></span>
                  <span>Post-purchase</span>
                  <strong>6%</strong>
                </div>

              </div>

            </div>

          </div>


          {/* AI INSIGHT */}
          <div className="panel ai-panel">

            <div className="ai-heading">

              <div className="ai-icon">
                <Brain size={20} />
              </div>

              <div>
                <h2>AI-detected insight</h2>
                <p>Behavioural pattern analysis</p>
              </div>

            </div>

            <div className="insight-highlight">
              Payment friction is concentrated around
              repeated failed transactions.
            </div>

            <div className="insight-evidence">

              <div className="evidence-title">
                <Activity size={16} />
                Detected pattern
              </div>

              <div className="pattern">
                Checkout
                <ChevronRight size={15} />
                Payment failed
                <ChevronRight size={15} />
                Retry
                <ChevronRight size={15} />
                Exit
              </div>

            </div>

            <div className="recommendation">

              <div className="recommendation-icon">
                <CreditCard size={17} />
              </div>

              <div>
                <strong>Recommended action</strong>
                <p>
                  Offer an alternative payment method
                  before the customer exits.
                </p>
              </div>

            </div>

            <button className="view-insights">
              View full AI analysis
              <ArrowUpRight size={16} />
            </button>

          </div>

        </section>


        {/* JOURNEY STAGE */}
        <section className="panel journey-panel">

          <div className="panel-header">

            <div>
              <h2>Journey friction by stage</h2>
              <p>Identify where customers experience the most resistance</p>
            </div>

            <button className="view-button">
              View details
              <ArrowUpRight size={15} />
            </button>

          </div>

          <div className="journey-stages">

            <div className="stage">
              <div className="stage-icon">
                <Search size={18} />
              </div>
              <div className="stage-info">
                <strong>Discovery</strong>
                <span>8.4% friction</span>
              </div>
              <div className="stage-bar">
                <div style={{ width: "32%" }}></div>
              </div>
            </div>

            <div className="stage">
              <div className="stage-icon">
                <Package size={18} />
              </div>
              <div className="stage-info">
                <strong>Consideration</strong>
                <span>14.2% friction</span>
              </div>
              <div className="stage-bar">
                <div style={{ width: "48%" }}></div>
              </div>
            </div>

            <div className="stage">
              <div className="stage-icon">
                <ShoppingCart size={18} />
              </div>
              <div className="stage-info">
                <strong>Checkout</strong>
                <span>21.8% friction</span>
              </div>
              <div className="stage-bar">
                <div style={{ width: "72%" }}></div>
              </div>
            </div>

            <div className="stage">
              <div className="stage-icon">
                <CreditCard size={18} />
              </div>
              <div className="stage-info">
                <strong>Payment</strong>
                <span>28.6% friction</span>
              </div>
              <div className="stage-bar">
                <div style={{ width: "91%" }}></div>
              </div>
            </div>

            <div className="stage">
              <div className="stage-icon">
                <Truck size={18} />
              </div>
              <div className="stage-info">
                <strong>Post-purchase</strong>
                <span>11.3% friction</span>
              </div>
              <div className="stage-bar">
                <div style={{ width: "40%" }}></div>
              </div>
            </div>

          </div>

        </section>


        {/* CUSTOMERS */}
        <section className="panel">

          <div className="panel-header">

            <div>
              <h2>High-risk customer journeys</h2>
              <p>Customers requiring attention</p>
            </div>

            <button className="view-button">
              View all
              <ArrowUpRight size={15} />
            </button>

          </div>

          <div className="customer-table">

            <div className="table-header">
              <span>Customer</span>
              <span>Friction</span>
              <span>Risk</span>
              <span>Status</span>
            </div>

            <div className="table-row">
              <div className="customer">
                <div className="customer-avatar">C</div>
                <div>
                  <strong>C1024</strong>
                  <span>2 min ago</span>
                </div>
              </div>

              <span className="friction-badge payment-badge">
                Payment
              </span>

              <span className="risk-badge high">
                HIGH
              </span>

              <span className="status-text">
                Unrecovered
              </span>
            </div>

            <div className="table-row">
              <div className="customer">
                <div className="customer-avatar">C</div>
                <div>
                  <strong>C1092</strong>
                  <span>8 min ago</span>
                </div>
              </div>

              <span className="friction-badge delivery-badge">
                Delivery
              </span>

              <span className="risk-badge high">
                HIGH
              </span>

              <span className="status-text success">
                Recovered
              </span>
            </div>

            <div className="table-row">
              <div className="customer">
                <div className="customer-avatar">C</div>
                <div>
                  <strong>C1145</strong>
                  <span>14 min ago</span>
                </div>
              </div>

              <span className="friction-badge product-badge">
                Product info
              </span>

              <span className="risk-badge medium">
                MEDIUM
              </span>

              <span className="status-text">
                Open
              </span>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;