import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { role, setRole } = useTheme();

  return (
    <div>
      <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
        Platform Settings
      </h1>

      <div
        style={{
          maxWidth: "400px",
          padding: "25px",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <label>Change Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <option value="viewer">Viewer</option>
          <option value="analyst">Analyst</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;