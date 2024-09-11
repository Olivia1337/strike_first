import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PricesPage from "./pages/PricesPage";
import Schedule from "./pages/Schedule";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import FaqPage from "./pages/FaqPage";
import MemberPage from "./pages/MemberPage";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop

function App() {
  return (
    <Router className="App">
      <ScrollToTop className="App" />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/member" element={<MemberPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
