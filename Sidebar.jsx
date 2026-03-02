import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = ({ collapsed }) => {
  const { themeObject } = useTheme();

  const linkStyle = ({ isActive }) => ({
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: isActive ? themeObject.accent : themeObject.textSecondary,
    background: isActive ? "rgba(0,245,196,0.08)" : "transparent",
    borderRadius: "10px",
    marginBottom: "6px",
    transition: "0.2s",
  });

  return (
    <div
      style={{
        width: collapsed ? "80px" : "240px",
        transition: "0.3s",
        padding: "25px 15px",
        borderRight: `1px solid ${themeObject.border}`,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "30px",
          letterSpacing: "1px",
        }}
      >
        {collapsed ? "FX" : "AI Forex"}
      </div>

      <NavLink to="/" style={linkStyle}>📊 {!collapsed && "Dashboard"}</NavLink>
      <NavLink to="/signals" style={linkStyle}>📈 {!collapsed && "Signals"}</NavLink>
      <NavLink to="/markets" style={linkStyle}>🌍 {!collapsed && "Markets"}</NavLink>
      <NavLink to="/billing" style={linkStyle}>💳 {!collapsed && "Billing"}</NavLink>
      <NavLink to="/settings" style={linkStyle}>⚙ {!collapsed && "Settings"}</NavLink>
    </div>
  );
};

export default Sidebar;