import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card,
  ListGroup,
  Stack,
  Accordion,
} from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { tourDetails } from "../../components/utils/data";
import "./tour.css";

function TourDetails() {
  useEffect(() => {
    // window.scrollTo(0, 0);
    // document.title = "Tour Details  ";
  }, []);

  return (
    <>
      <Breadcrumbs
        title="Beautiful Bali with Malaysia "
        pagename="Tours "
        childpagename="Tour Details"
      />
      <section className="tour_details py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="fs-2 font-bold  mb-4">
                {tourDetails.title}
              </h1>
             
              <ImageGallery
                items={tourDetails.images}
                showNav={false}
                showBullets={false}
                showPlayButton={false}
              />
            </Col>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="py-5">
              <Col md={8}>
                <Col sm={12}>
                  <Nav variant="pills" className="flex-row nav_bars rounded-2">
                    <Nav.Item>
                      <Nav.Link eventKey="1">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Itinerary</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Inclusions & Exclusions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Location</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Tab.Content className="mt-4">
                  <Tab.Pane eventKey="1">
                    <div className="tour_details">
                      <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                        Overview
                      </h1>
                      <p className="text">{tourDetails.des}</p>

                      <h5 className="font-bold mb-2 h5 mt-3 ">Tour Info</h5>
                      <ListGroup>
                        {tourDetails.tourInfo.map((tourInfo, index) => {
                          return (
                            <ListGroup.Item
                              className="border-0"
                              key={index}
                              dangerouslySetInnerHTML={{ __html: tourInfo }}
                            ></ListGroup.Item>
                          );
                        })}
                      </ListGroup>

                      <h5 className="font-bold mb-2 h5 mt-3 ">
                        Tour Highlights
                      </h5>
                      <ListGroup>
                        {tourDetails.highlights.map((val, index) => {
                          return (
                            <ListGroup.Item className="border-0 body-text pb-0" key={index}>
                              {val}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="2">
                    <div className="tour_plan">
                      <h1 className="font-bold mb-4 h3 border-bottom pb-2">
                        Itinerary
                      </h1>

                      <Accordion>
                        {tourDetails.itinerary.map((val, index) => {
                          return (
                            <Accordion.Item
                              eventKey={index}
                              key={index}
                              className="mb-4"
                            >
                              <Accordion.Header>
                                <h1
                                  className="h6"
                                  dangerouslySetInnerHTML={{
                                    __html: val.title,
                                  }}
                                ></h1>
                              </Accordion.Header>
                              <Accordion.Body className="body-text">
                                {" "}
                                {val.des}
                              </Accordion.Body>
                            </Accordion.Item>
                          );
                        })}
                      </Accordion>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="3">
                    <div className="tour_details">
                      <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                        Inclusions & Exclusions
                      </h1>

                      <h5 className="font-bold mb-2 h5 mt-3 ">Inclusion</h5>
                      <ListGroup >
                        {tourDetails.included.map((val, index) => {
                          return (
                            <ListGroup.Item className="border-0 d-flex align-items-center" key={index}>
                            <i className="bi bi-check-lg me-2 text-success h4 m-0"></i>  {val}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>

                      <h5 className="font-bold mb-2 h5 mt-3 ">Exclusion</h5>
                      <ListGroup>
                        {tourDetails.exclusion.map((val, index) => {
                          return (
                            <ListGroup.Item className="border-0 d-flex align-items-center" key={index}>
                            <i className="bi bi-x-lg me-2 text-danger  h5  m-0"></i> {val}
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </div>
                  </Tab.Pane>
             

                <Tab.Pane eventKey="4">
                  <div className="tour_details">
                    <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                      Location
                    </h1>

                  
                    <iframe
                      title="map"
                      className="pt-4"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6837.12424345053!2d78.73329512290132!3d31.03844727612637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39087c1cc3e1761b%3A0x2802670114b374ab!2sHarsil%2C%20Uttarakhand%20249135!5e0!3m2!1sen!2sin!4v1649588408634!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col md="4">
                <aside>
                  <Card className="rounded-3 p-2 shadow-sm mb-4 price-info">
                    <Card.Body>
                      <Stack direction="horizontal" gap={2}>
                        <h1 className="card-title mb-0 h2 font-bold">
                          $280.00
                        </h1>
                        <span className="fs-4">/ person</span>
                      </Stack>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <ListGroup horizontal>
                          <ListGroup.Item className="border-0 me-2 fw-bold">
                            4.5
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1"></i>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1"></i>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1"></i>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1"></i>
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-half "></i>
                          </ListGroup.Item>
                        </ListGroup>
                        <h5 className="h6">(365 reviews)</h5>
                      </div>
                      <NavLink
                        className="primaryBtn w-100  d-flex justify-content-center fw-bold "
                        href="/tours/booking"
                      >
                        Book Now
                      </NavLink>
                    </Card.Body>
                  </Card>

                  <Card className="card-info p-2 shadow-sm">
                    <Card.Body>
                      <h1 className="font-bold mb-2 h3">Need Help?</h1>
                      <ListGroup>
                        <ListGroup.Item>
                          <i className="bi bi-telephone me-1"></i> Call us on:
                          <strong>+31 123 456 789</strong>
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
                </aside>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
}

export default TourDetails;
