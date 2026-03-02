import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Signals from "./pages/Signals";
import Markets from "./pages/Markets";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signals" element={<Signals />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;