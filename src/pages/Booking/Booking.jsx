import React, { useState, useEffect } from "react";

import { Container, Row, Col, Form, Card, ListGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "../Booking/booking.css";
import "react-datepicker/dist/react-datepicker.css";

function Booking(props) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Booking  ";
  }, []);

  return (
    <>
      <Breadcrumbs title="Booking  " pagename="Booking " childnamed="d-none" />

      <section className="booking-section py-5">
        <Container>
          <Row>
            <Col lg="8" md="8" className="order-2 order-md-1">
              <div className="booking-form-wrap border rounded-3">
                <div className="form-title  px-4 border-bottom py-3">
                  <h3 className="h4 font-bold m-0 ">Your Details</h3>
                </div>
                <Form className="p-4">
                  <Row>
                    <Col md="6" className="mb-4">
                      <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>

                    <Col md="6" className="mb-4">
                      <Form.Group controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>

                    <Col md="6" className="mb-4">
                      <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                    </Col>

                    <Col md="6" className="mb-4">
                      <Form.Group controlId="phone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </Col>

                    <Col md="6" className="mb-4">
                      <Form.Label className="d-block">Check In </Form.Label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className="form-control w-100"
                        todayButton="Today "
                        minDate={new Date()}
                      />
                    </Col>

                    <Col md="6" className="mb-4">
                      <Form.Label className="d-block">Check out </Form.Label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className="form-control w-100"
                      />
                    </Col>

                    <Col md="12">
                      <button className="primaryBtn  btn">Submit Now</button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col lg="4" md="4" className="order-1 order-md-2 mb-3 mb-md-0">
              <Card className="card-info  shadow-sm mb-4 bg-white">
                <Card.Header>
                  {" "}
                  <h5 className="h4  font-bold mt-2"> Price Summary </h5>
                </Card.Header>
                <Card.Body className="pb-0">
                  <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between border-0 h5 pt-0">
                      <span> Base Price </span> <strong>$28,660</strong>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-flex justify-content-between border-0 h5 pt-0">
                      <span>
                        {" "}
                        Total Discount{" "}
                        <span className="badge bg-danger">10%</span>{" "}
                      </span>{" "}
                      <strong>-$2,560</strong>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-flex justify-content-between border-0 h5 pt-0">
                      <span> Taxes % Fees </span>
                      <strong>$350</strong>
                    </ListGroup.Item>

                    <ListGroup.Item className="d-flex justify-content-between border-0 h5 pt-0">
                      <span> Payable Now </span>
                      <strong>$22,500</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between py-4">
                  <span className="font-bold  h5"> Payable Now</span>{" "}
                  <strong className="font-bold  h5">$22,500</strong>
                </Card.Footer>
              </Card>

              <Card className="card-info p-2 shadow-sm">
                <Card.Body>
                  <h1 className="font-bold mb-2 h3">Need Help?</h1>
                  <ListGroup>
                    <ListGroup.Item>
                      <i className="bi bi-telephone me-1"></i> Call us on:
                      <strong>+91 7319378166</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="bi bi-alarm me-1"></i> Timing:
                      <strong>10AM to 7PM</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <i className="bi bi-headset me-1"></i>
                      <strong>Let Us Call You</strong>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-calendar-check me-1"></i>
                      <strong>Book Appointments</strong>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Booking;
