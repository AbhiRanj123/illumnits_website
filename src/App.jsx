import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
// import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar.jsx";
import NotFound from "./pages/404/Not_found.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Shared/Footer/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* <div className="slider"></div> */}
    </BrowserRouter>
  );
}

export default App;
