import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Inquire from "./pages/Inquire";
import Gallery from "./pages/Gallery";
import Lighting from "./pages/Lighting";
import Montage from "./pages/Montage";
import Testimonials from "./pages/Testimonials";
import SubmitReview from "./pages/SubmitReview";
import EventMasterclass from "./pages/EventMasterclass";
import MasterclassSignup from "./pages/MasterclassSignup";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="main-container mt-4 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/lighting" element={<Lighting />} />
          <Route path="/montage" element={<Montage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/submit-review" element={<SubmitReview />} />
          <Route path="/event-masterclass" element={<EventMasterclass />} />
          <Route path="/masterclass-signup" element={<MasterclassSignup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
