import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import WebsiteLayout from "./layouts/WebsiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import About from "./pages/about-us";
import Home from "./pages/home";
import ContactUsPage from "./pages/contact-us";
import BookAppointment from "./pages/book-appointment";
import Services from "./pages/services";

import Dashboard from "./pages/dashboard/home";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* 🌐 Website routes */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services" element={<Services />} />
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
