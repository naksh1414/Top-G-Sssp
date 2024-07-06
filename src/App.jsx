import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";

import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  // useEffect(() => {
  //   const arrow = document.querySelectorAll(".slick-next");
  //   arrow[0].classList.add("nnn");
  // }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
