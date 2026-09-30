function AIInsights() {
  const insights = [
    {
      title: "Repeated payment failures",
      text: "Customers experiencing two or more payment failures frequently exit during checkout.",
      action: "Offer an alternative payment method.",
    },
    {
      title: "Delivery uncertainty",
      text: "Customers spend longer on product pages when delivery estimates are unclear.",
      action: "Show delivery estimates earlier in the journey.",
    },
    {
      title: "Recommendation mismatch",
      text: "Low recommendation relevance is associated with shorter browsing sessions.",
      action: "Improve recommendation relevance using behaviour signals.",
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <div className="live"><span></span> AI ANALYSIS</div>
          <h1>AI Insights</h1>
          <p>Patterns detected across customer behaviour.</p>
        </div>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        {insights.map((item) => (
          <div className="panel" key={item.title}>
            <div className="insight-content">
              <div className="ai-title">✦ DETECTED PATTERN</div>

              <h2>{item.title}</h2>

              <p style={{ fontSize: "11px", color: "#8993a6", lineHeight: 1.7 }}>
                {item.text}
              </p>

              <div className="recommendation">
                <span>▣</span>
                <div>
                  <strong>Recommended action</strong>
                  <p>{item.action}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AIInsights;