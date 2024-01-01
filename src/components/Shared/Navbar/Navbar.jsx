import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import logo from "../../../assets/images/logo.svg";

import "./Navbar.scss";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [hamburg, setHamburg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWinWidth(window.innerWidth);
    });
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    if (location.pathname === "/" || location.pathname === "/contact") {
      window.addEventListener("scroll", changeBackground);
    } else {
      setScroll(true);
    }
  }, [location,scroll]);


  // console.log(document.body.scrollTop)

  return (
    <div className={`Navbar ${scroll && !hamburg ? "scrolled-navbar" : ""}`}>
      <img className="logo" src={logo} alt="logo" />

      {winWidth < 900 ? (
        <div
          className={`hamburg-icon ${hamburg ? "active-ham" : ""}`}
          role="button"
          tabIndex={0}
          onClick={() => {
            setHamburg(!hamburg);
          }}
          onKeyDown={() => {
            setHamburg(!hamburg);
          }}
        >
          {!hamburg ? <GiHamburgerMenu /> : <ImCross />}
        </div>
      ) : (
        ""
      )}

      <div
        className={`links ${hamburg ? "active-links" : ""}  ${
          hamburg && scroll ? "scrolled-navbar" : ""
        }`}
      >
        <NavLink onClick={() => setHamburg(false)} to="/">
          Home
        </NavLink>
        <NavLink onClick={() => setHamburg(false)} to="/clubs">
          Clubs
        </NavLink>
        <NavLink onClick={() => setHamburg(false)} to="/team">
          Team
        </NavLink>
        <NavLink onClick={() => setHamburg(false)} to="/gallery">
          Gallery
        </NavLink>
        <NavLink onClick={() => setHamburg(false)} to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
