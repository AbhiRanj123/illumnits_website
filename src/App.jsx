import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Shared/Footer/Footer.jsx";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Not_Found from "./pages/404/Not_found.jsx";

function App() {

  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="*" element={<Not_Found/>} />
      </Routes>
      <Footer />
      {/* <div className="slider"></div> */}
    </BrowserRouter>
  );
}

export default App;
