const getSignalColor = (signal) => {
  if (signal === "BUY") return "#22c55e";
  if (signal === "SELL") return "#ef4444";
  return "#facc15";
};

const ForexCard = ({ pair, price, signal, risk, onExplain }) => {
  const signalColor = getSignalColor(signal);

  return (
    <div
      style={{
        backdropFilter: "blur(14px)",
        background: "rgba(30, 41, 59, 0.6)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "20px",
        minWidth: "250px",
        color: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        transition: "0.3s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{pair}</h3>
        <span
          style={{
            padding: "6px 12px",
            borderRadius: "20px",
            background: signalColor,
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {signal}
        </span>
      </div>

      <h1 style={{ marginTop: "10px" }}>{price}</h1>

      {/* Risk Progress */}
      <div style={{ marginTop: "15px" }}>
        <div style={{ fontSize: "13px", marginBottom: "6px" }}>
          Risk Exposure
        </div>
        <div
          style={{
            height: "6px",
            background: "#334155",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              width: `${risk}%`,
              height: "6px",
              borderRadius: "6px",
              background:
                risk > 70
                  ? "#ef4444"
                  : risk > 40
                  ? "#facc15"
                  : "#22c55e",
              transition: "0.4s",
            }}
          />
        </div>
        <div style={{ marginTop: "6px", fontSize: "12px" }}>
          {risk}% Risk Level
        </div>
      </div>

      <button
        onClick={onExplain}
        style={{
          marginTop: "15px",
          background: "transparent",
          border: "1px solid #00ffcc",
          color: "#00ffcc",
          padding: "6px 10px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Why this signal?
      </button>
    </div>
  );
};

export default ForexCard;