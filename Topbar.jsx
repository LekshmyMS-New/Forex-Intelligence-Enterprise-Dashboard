import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Topbar = ({ collapsed, setCollapsed }) => {
  const { toggleTheme, themeObject } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        borderBottom: `1px solid ${themeObject.border}`,
        backdropFilter: "blur(12px)",
      }}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
          color: themeObject.textPrimary,
        }}
      >
        ☰
      </button>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          onClick={toggleTheme}
          style={{
            background: themeObject.card,
            border: `1px solid ${themeObject.border}`,
            padding: "6px 12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Theme
        </button>

        <div style={{ position: "relative" }}>
          <div
            onClick={() => setOpen(!open)}
            style={{
              background: themeObject.accent,
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
              cursor: "pointer",
              color: "#000",
            }}
          >
            LM
          </div>

          {open && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "45px",
                background: themeObject.surface,
                border: `1px solid ${themeObject.border}`,
                borderRadius: "10px",
                width: "160px",
                padding: "10px",
              }}
            >
              <div style={{ padding: "8px" }}>Profile</div>
              <div style={{ padding: "8px" }}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;