import { Routes, Route } from "react-router-dom";

import WebsiteLayout from "./layouts/WebsiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import About from "./pages/aboutus";
import Home from "./pages/home";

import Dashboard from "./pages/dashboard/home";
function App() {
  return (
    <>
      <Routes>

        {/* 🌐 Website routes */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* 📊 Dashboard routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
