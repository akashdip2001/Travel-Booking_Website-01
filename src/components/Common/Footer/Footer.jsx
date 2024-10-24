import React, { useState } from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(""); // Track which link is clicked

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update state with clicked link's name
  };

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4>Company</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("about")}>
                    About Us
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("news")}>
                    News
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("faq")}>
                    Faq
                  </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4>Explore</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("faq")}>
                    Faq
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("tour")}>
                    Tour Listings
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink
                    to="/"
                    onClick={() => handleLinkClick("destination")}
                  >
                    Destination
                  </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0">
              <h4>Quick Link</h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("home")}>
                    Home
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/" onClick={() => handleLinkClick("about")}>
                    About Us
                  </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink
                    to="/contact"
                    onClick={() => handleLinkClick("contact")}
                  >
                    Contact Us
                  </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0">
              <h4>Contact Info</h4>
              <div className="d-flex align-items-center">
                <p>Kanthi, Purba Medinipur, WB, India</p>
              </div>
              <div className="d-flex align-items-top my-2">
                <a href="mailto:garudipankar8@gmail.com">
                  garudipankar8@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-top">
                <a href="tel:7319378166">7319378166</a>
              </div>
            </Col>
          </Row>

          {/* Render the related text based on which link is clicked */}
          <Row className="mt-4">
            <Col>
              {activeLink === "home" && (
                <p>Welcome to the Home page! Explore travel destinations.</p>
              )}
              {activeLink === "about" && (
                <p>About Us: Learn more about our company and mission.</p>
              )}
              {activeLink === "contact" && (
                <p>Contact Us: We are here to assist you. Reach out anytime!</p>
              )}
              {activeLink === "faq" && (
                <p>FAQ: Find answers to common questions about our services.</p>
              )}
              {activeLink === "tour" && (
                <p>Tour Listings: Check out exciting travel packages.</p>
              )}
              {activeLink === "destination" && (
                <p>Destination: Discover amazing places to visit worldwide.</p>
              )}
              {!activeLink && <p>Select a link to learn more!</p>}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
