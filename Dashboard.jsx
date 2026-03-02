import { useState } from "react";
import ForexCard from "../components/dashboard/ForexCard";
import ForexChart from "../components/dashboard/ForexChart";
import ExplanationModal from "../components/dashboard/ExplanationModal";
import { useMockSocket } from "../hooks/useMockSocket";

const Dashboard = () => {
  const rates = useMockSocket();
  const [selectedSignal, setSelectedSignal] = useState(null);

  const mockChartData = Array.from({ length: 25 }, (_, i) => ({
    time: i,
    price: 1.05 + Math.random() * 0.01,
  }));

  const aiExplanation =
    "The AI model detected bullish RSI divergence, positive MACD crossover, and strong institutional volume. Sentiment analysis from financial news sources shows a 68% bullish bias.";

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1>Forex Market Intelligence</h1>
        <p style={{ color: "#94a3b8" }}>
          AI-powered real-time Forex analytics & risk management.
        </p>
      </div>

      {/* KPI Tiles */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <KPI title="Active Signals" value="24" />
        <KPI title="Win Probability" value="78%" />
        <KPI title="Market Sentiment" value="Bullish" />
        <KPI title="Volatility Index" value="Moderate" />
      </div>

      {/* Forex Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {rates.map((r, i) => (
          <ForexCard
            key={i}
            pair={r.pair}
            price={r.price}
            signal={["BUY", "SELL", "HOLD"][Math.floor(Math.random() * 3)]}
            risk={Math.floor(Math.random() * 100)}
            onExplain={() => setSelectedSignal(true)}
          />
        ))}
      </div>

      {/* Chart */}
      <div style={{ marginTop: "50px" }}>
        <ForexChart data={mockChartData} />
      </div>

      {/* Modal */}
      <ExplanationModal
        open={selectedSignal}
        onClose={() => setSelectedSignal(false)}
        explanation={aiExplanation}
      />
    </div>
  );
};

const KPI = ({ title, value }) => {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "220px",
        padding: "25px",
        borderRadius: "18px",
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "0.3s",
      }}
    >
      <div style={{ fontSize: "13px", opacity: 0.7 }}>{title}</div>
      <div
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "8px",
          letterSpacing: "1px",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export default Dashboard;