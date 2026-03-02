const ExplanationModal = ({ open, onClose, explanation }) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#1e293b",
          color: "#fff",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <h2>AI Explanation</h2>
        <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
          {explanation}
        </p>

        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            background: "#00ffcc",
            border: "none",
            padding: "8px 14px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ExplanationModal;