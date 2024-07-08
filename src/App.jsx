import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DigitalMarketing from "./Pages/DigitalMarketing/DigitalMarketing";

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
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
