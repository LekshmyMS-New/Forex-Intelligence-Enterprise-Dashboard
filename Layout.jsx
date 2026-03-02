import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useTheme } from "../../context/ThemeContext";

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { themeObject } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: themeObject.background,
        color: themeObject.textPrimary,
      }}
    >
      <Sidebar collapsed={collapsed} />

      <div style={{ flex: 1 }}>
        <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div
          style={{
            padding: "40px",
            background:
              "radial-gradient(circle at 20% 20%, rgba(0,245,196,0.08), transparent 40%)",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;