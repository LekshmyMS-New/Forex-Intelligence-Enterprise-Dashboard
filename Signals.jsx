import { useTheme } from "../context/ThemeContext";

const Signals = () => {
  const { role } = useTheme();

  if (role === "viewer") {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Access Restricted</h1>
        <p style={{ opacity: 0.7 }}>
          Upgrade your plan to access AI-powered trading signals.
        </p>
      </div>
    );
  }

  const signals = [
    { pair: "EUR/USD", action: "BUY", confidence: 82 },
    { pair: "GBP/USD", action: "SELL", confidence: 74 },
    { pair: "USD/JPY", action: "HOLD", confidence: 61 },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        AI Trading Signals
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {signals.map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              minWidth: "250px",
              padding: "25px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              transition: "0.3s",
            }}
          >
            <h3>{s.pair}</h3>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>
              {s.action}
            </div>
            <div style={{ marginTop: "10px", opacity: 0.7 }}>
              AI Confidence: {s.confidence}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Signals;