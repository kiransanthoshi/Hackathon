import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CustomerJourneys from "./pages/CustomerJourneys";
import FrictionAnalysis from "./pages/FrictionAnalysis";
import Customers from "./pages/Customers";
import AIInsights from "./pages/AIInsights";
import Recovery from "./pages/Recovery";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* =====================================================
            SIDEBAR
        ====================================================== */}

        <aside className="sidebar">

          {/* Brand */}
          <div className="brand">
            <div className="brand-icon">✦</div>

            <div>
              <h2>JourneyAI</h2>
              <span>Friction Intelligence</span>
            </div>
          </div>


          {/* =================================================
              OVERVIEW
          ================================================== */}

          <div className="nav-section">

            <p className="nav-label">OVERVIEW</p>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span>▦</span>
              <span>Dashboard</span>
            </NavLink>

            <NavLink
              to="/journeys"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span>⌁</span>
              <span>Customer Journeys</span>
            </NavLink>

            <NavLink
              to="/friction"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span>△</span>
              <span>Friction Analysis</span>
            </NavLink>

          </div>


          {/* =================================================
              INSIGHTS
          ================================================== */}

          <div className="nav-section">

            <p className="nav-label">INSIGHTS</p>

            <NavLink
              to="/customers"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span>♙</span>
              <span>Customers</span>
            </NavLink>

            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span>✦</span>
              <span>AI Insights</span>
            </NavLink>

            <NavLink
              to="/recovery"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <span>▣</span>
              <span>Recovery</span>
            </NavLink>

          </div>


          {/* =================================================
              SYSTEM
          ================================================== */}

          <div className="nav-section system">

            <p className="nav-label">SYSTEM</p>

            <button
              className="nav-item"
              type="button"
            >
              <span>⚙</span>
              <span>Settings</span>
            </button>

          </div>


          {/* =================================================
              SYSTEM STATUS
          ================================================== */}

          <div className="system-status">

            <span className="status-dot"></span>

            <div>
              <strong>System operational</strong>
              <small>Updated just now</small>
            </div>

          </div>

        </aside>


        {/* =====================================================
            MAIN APPLICATION
        ====================================================== */}

        <main className="main">

          {/* =================================================
              TOP BAR
          ================================================== */}

          <header className="topbar">

            {/* Breadcrumb */}
            <div className="breadcrumb">
              Analytics
              <span>/</span>
              Customer Intelligence
            </div>


            {/* Top actions */}
            <div className="top-actions">

              {/* Search */}
              <div className="search">

                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search customers..."
                />

              </div>


              {/* Notifications */}
              <button
                className="notification"
                type="button"
                title="Notifications"
              >
                ♧
              </button>


              {/* User avatar */}
              <div className="avatar">
                A
              </div>

            </div>

          </header>


          {/* =================================================
              PAGE CONTENT
          ================================================== */}

          <section className="content">

            <Routes>

              {/* ---------------------------------------------
                  DASHBOARD
              ---------------------------------------------- */}

              <Route
                path="/"
                element={<Dashboard />}
              />


              {/* ---------------------------------------------
                  CUSTOMER JOURNEYS
              ---------------------------------------------- */}

              <Route
                path="/journeys"
                element={<CustomerJourneys />}
              />


              {/* ---------------------------------------------
                  FRICTION ANALYSIS
              ---------------------------------------------- */}

              <Route
                path="/friction"
                element={<FrictionAnalysis />}
              />


              {/* ---------------------------------------------
                  CUSTOMERS
              ---------------------------------------------- */}

              <Route
                path="/customers"
                element={<Customers />}
              />


              {/* ---------------------------------------------
                  AI INSIGHTS
              ---------------------------------------------- */}

              <Route
                path="/insights"
                element={<AIInsights />}
              />


              {/* ---------------------------------------------
                  RECOVERY
              ---------------------------------------------- */}

              <Route
                path="/recovery"
                element={<Recovery />}
              />

            </Routes>

          </section>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;