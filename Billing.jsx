const plans = [
  {
    name: "Starter",
    price: "$0",
    highlight: false,
    features: ["Basic Signals", "Limited Sentiment"],
  },
  {
    name: "Pro AI",
    price: "$29/month",
    highlight: true,
    features: [
      "Full AI Signals",
      "Risk Insights",
      "News Sentiment Heatmap",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlight: false,
    features: [
      "API Access",
      "Dedicated AI Models",
      "Advanced Risk Engine",
      "SLA Support",
    ],
  },
];

const Billing = () => {
  return (
    <div>
      <h1 style={{ fontSize: "34px", marginBottom: "40px" }}>
        SaaS Subscription Plans
      </h1>

      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap" }}>
        {plans.map((plan, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              minWidth: "260px",
              padding: "30px",
              borderRadius: "20px",
              background: plan.highlight
                ? "linear-gradient(135deg, rgba(0,245,196,0.2), rgba(0,140,255,0.15))"
                : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              transform: plan.highlight ? "scale(1.05)" : "scale(1)",
            }}
          >
            <h2>{plan.name}</h2>
            <h3 style={{ marginTop: "10px" }}>{plan.price}</h3>

            <ul style={{ marginTop: "20px", paddingLeft: "18px" }}>
              {plan.features.map((f, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>
                  {f}
                </li>
              ))}
            </ul>

            <button
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                fontWeight: "bold",
                background: "#00F5C4",
                cursor: "pointer",
              }}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billing;