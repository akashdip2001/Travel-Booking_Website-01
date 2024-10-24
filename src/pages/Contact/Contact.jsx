import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "../Contact/contact.css";
import image from "../../assets/images/new/contact-us.png";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact us ";
  }, []);

  return (
    <>
      <Breadcrumbs
        title="Contact us"
        pagename="Contact us"
        childnamed="d-none"
      />
      <section className="contact pt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="mb-2 h1 font-bold">
                {" "}
                Let's connect and get to know each other{" "}
              </h1>

              <p className="body-text mt-1">
                PLet's connect and explore how we can make your travel dreams
                come true!
              </p>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-info bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-3">
                      <i className="bi bi-headset h3"></i>
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Call us</Card.Title>
                  <p className="mb-2 body-text">
                    Let's connect and explore how we can make your travel dreams
                    come true!
                  </p>
                  <div className=" d-block justify-content-between">
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-phone me-1"></i>
                      +91 7319378166
                    </a>
                    <a type="button" className="btn btn-light btn-sm">
                      <i className="bi bi-telephone me-1"></i>
                      +91 7319378166
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow  rounded-3">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle mb-2 flex-centered p-3">
                      <i className="bi bi-envelope h3"></i>
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Email us</Card.Title>
                  <p className="mb-2 body-text">
                    Let's connect and explore how we can make your travel dreams
                    come true!
                  </p>
                  <div className=" d-block justify-content-between">
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-envelope me-1"></i>
                      <span className="body-text">example@gmail.com</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow  rounded-3">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-warning bg-opacity-10 text-warning rounded-circle mb-2 flex-centered p-3">
                      <i className="bi bi-globe2 h3"></i>
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Social media
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Let's connect and explore how we can make your travel dreams
                    come true!
                  </p>

                  <ListGroup
                    horizontal
                    className="border-0 justify-content-center"
                  >
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-facebook"></i>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-instagram"></i>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-linkedin"></i>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-twitter"></i>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="g-4 g-lg-5 align-items-center py-5">
            <Col xl={6} md={6} className="d-none d-md-block">
              <img src={image} alt="contact " className="img-fluid me-3" />
            </Col>
            <Col xl={6} md={6}>
              <Card className="bg-light p-4 card border-0  shadow-sm">
                <div className="form-box">
                  <h1 className="h3 font-bold mb-4">Send us message </h1>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="floatingName"
                          label="Full Name"
                          className="mb-4"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Full Name"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter your name
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="floatingEmail"
                          label="Email address"
                          className="mb-4"
                        >
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter your email
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Col>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="floatingEmail"
                          label="Phone Number"
                          className="mb-4"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Phone Number"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter your Phone number
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Col>

                      <Col md={12}>
                        <FloatingLabel
                          controlId="floatingEmail"
                          label="Your Message*"
                          className="mb-4"
                        >
                          <Form.Control
                            type="number"
                            placeholder="Your Message*"
                            required
                            as="textarea"
                            style={{ minHeight: "125px" }}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter your message
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Col>
                    </Row>

                    <button type="submit" className="primaryBtn">
                      Send Message
                    </button>
                  </Form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
