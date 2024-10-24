import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // Function to open the booking form in a new window
  const openBookingForm = () => {
    const bookingFormWindow = window.open("/booking-form.html", "_blank");
    bookingFormWindow.document.title = "Booking Form";
  };

  return (
    <>
      <header className="header-section">
        <Container>
          <Navbar expand="lg" className="p-0">
            <Navbar.Brand>
              <NavLink to="/" onClick={() => handleLinkClick("home")}>
                TravelTrove
              </NavLink>
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
              <Offcanvas.Header>
                <h1 className="logo">TravelTrove</h1>
                <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={() => handleLinkClick("home")}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/about-us"
                    onClick={() => handleLinkClick("about")}
                  >
                    ABOUT US
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/tours"
                    onClick={() => handleLinkClick("tours")}
                  >
                    TOURS
                  </NavLink>

                  <NavDropdown
                    title="DESTINATION"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item onClick={() => handleLinkClick("delhi")}>
                      DELHI TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleLinkClick("kolkata")}
                    >
                      KOLKATA TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => handleLinkClick("varanasi")}
                    >
                      VARANASI TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      MANALI TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      GOA TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      DARJEELING TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      DIGHA TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      SUNDARBANS TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      PURI TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      KASHMIR TOURS
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      LONDON TOURS
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavLink
                    className="nav-link"
                    to="/gallery"
                    onClick={() => handleLinkClick("gallery")}
                  >
                    GALLERY
                  </NavLink>
                  <NavLink
                    className="nav-link"
                    to="/contact-us"
                    onClick={() => handleLinkClick("contact")}
                  >
                    CONTACT
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <div className="ms-md-4 ms-2">
              <NavLink
                className="primaryBtn d-none d-sm-inline-block"
                onClick={openBookingForm} // Open booking form in new window
              >
                Book Now
              </NavLink>
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i
                  className={open ? "bi bi-x-lg" : "bi bi-list"}
                  onClick={toggleMenu}
                ></i>
              </li>
            </div>
          </Navbar>
        </Container>
      </header>

      <div className="content-section">
        <Container>
          {activeLink === "home" && (
            <p className="center-text">
              Welcome to{" "}
              <span
                className="highlight"
                style={{ color: "#ff6347", fontWeight: "bold" }}
              >
                TravelTrove!
              </span>{" "}
              Explore the best travel packages and destinations worldwide.
            </p>
          )}
          {activeLink === "about" && (
            <p className="center-text">
              <span
                className="highlight"
                style={{ color: "#ff6347", fontWeight: "bold" }}
              >
                TravelTrove
              </span>{" "}
              is a leading travel company dedicated to providing top-notch
              travel experiences. Join us to discover the beauty of the world!
            </p>
          )}
          {activeLink === "tours" && (
            <p className="center-text">
              Check out our amazing tour packages tailored for every type of
              traveler.
            </p>
          )}
          {activeLink === "gallery" && (
            <p className="center-text">
              Explore our gallery to see stunning photos from our past trips and
              destinations.
            </p>
          )}
          {activeLink === "contact" && (
            <p className="center-text">
              Contact us for inquiries, support, and to book your dream
              vacation!
            </p>
          )}
        </Container>
      </div>
    </>
  );
};

export default Header;
