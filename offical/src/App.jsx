import "./App.css";
import Head from "./components/Head";
import MainContent from "./components/MainContent";
import Shopify from "./components/Shopify";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/contactForm" element={<contactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
