import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Payment", value: 35 },
  { name: "Delivery", value: 27 },
  { name: "Product Information", value: 21 },
  { name: "Recommendations", value: 11 },
  { name: "Post-Purchase", value: 6 },
];

const COLORS = [
  "#6366f1",
  "#f59e0b",
  "#10b981",
  "#8b5cf6",
  "#94a3b8",
];

function FrictionChart() {
  return (
    <div className="friction-chart-wrapper">

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => [`${value}%`, "Friction"]}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="chart-center">
          <strong>2,340</strong>
          <span>detected</span>
        </div>
      </div>

      <div className="chart-legend">
        {data.map((item, index) => (
          <div className="chart-legend-row" key={item.name}>
            <div className="legend-name">
              <span
                className="legend-dot"
                style={{ background: COLORS[index] }}
              />
              {item.name}
            </div>

            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>

    </div>
  );
}

export default FrictionChart;