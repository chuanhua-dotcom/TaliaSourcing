/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { TopBar } from "./components/TopBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Contact";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import WhyUsPage from "./pages/WhyUsPage";
import InsightsPage from "./pages/InsightsPage";
import ContactPage from "./pages/ContactPage";
import LegalPage from "./pages/LegalPage";
import ArticlePage from "./pages/ArticlePage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:id" element={<ArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
