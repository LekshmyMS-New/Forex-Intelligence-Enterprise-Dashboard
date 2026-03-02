const markets = [
  { name: "EUR/USD", change: "+0.42%" },
  { name: "GBP/USD", change: "-0.31%" },
  { name: "USD/JPY", change: "+0.18%" },
  { name: "Gold", change: "+1.2%" },
];

const Markets = () => {
  return (
    <div>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Global Markets Overview
      </h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {markets.map((m, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              minWidth: "220px",
              padding: "25px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
            }}
          >
            <h3>{m.name}</h3>
            <div
              style={{
                marginTop: "10px",
                fontSize: "22px",
                fontWeight: "bold",
                color: m.change.includes("+") ? "#22c55e" : "#ef4444",
              }}
            >
              {m.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Markets;