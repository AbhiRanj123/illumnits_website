import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Shared/Navbar/Navbar.jsx";
import Contact from "./components/Contact/contact.jsx";
import NotFound from "./pages/404/Not_found.jsx";
import Footer from "./components/Shared/Footer/Footer.jsx";
import Clubs from "./pages/Clubs/Clubs.jsx";
import ClubsComponent from "./pages/Clubs Pages/ClubesPages.jsx";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:clubName" element={<ClubsComponent />} />
      </Routes>
      <Footer />
      {/* <div className="slider"></div> */}
    </BrowserRouter>
  );
}

export default App;
