import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import "./header.css";

function Header() {
  // Hamburger menüsünün açık/kapalı durumunu yönetmek için state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar için ref tanımlama
  const navbarRef = useRef(null);

  // Hamburger menüsünü açıp kapatmak için fonksiyon
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Bir bağlantıya tıklandığında menüyü kapatmak için fonksiyon
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.classList.add("bg-color");
        } else {
          navbarRef.current.classList.remove("bg-color");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" ref={navbarRef} className="fixed-top">
      <div className="header-wrapper">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Sport Center Logo" />
          </div>
          <nav id="navbar" className="navbar">
            <ul className={`navbar-nav ${isMenuOpen ? "active" : ""}`}>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#classes" onClick={closeMenu}>
                  Classes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#trainers" onClick={closeMenu}>
                  Trainer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#review" onClick={closeMenu}>
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <a
                className="btn btn-secondary btn-sm"
                href="#"
                onClick={closeMenu}
              >
                JOIN US
              </a>
            </ul>
            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
