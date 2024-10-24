import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css";
import AboutImg from "../../assets/images/about/aboutimg.png";

import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";

const About = () => {
  return (
    <>
      <Breadcrumbs title="About us" pagename="About us" childnamed="d-none" />
      <section className="about">
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img src={AboutImg} alt="" className="img-fluid rounded-5" />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3  rounded-5 shadow-sm ">
                    <h3 className="h2 fw-bold text-white">
                      WE ARE BEST FOR TOURS TRAVEL !
                    </h3>
                  </div>
                </div>
                <h2 className="h2  pt-4 pb-2 font-bold">
                  HOW WE ARE BEST FOR TRAVEL !
                </h2>
                <p className="body-text mb-2">
                  A trusted travel agency providing various camping, rafting,
                  tour sites near by Rishikesh, Mussoorie, Dhanaulti, Kanatal,
                  Harsil trusted by all and our previous guests.{" "}
                </p>
                <p className="body-text mb-2">
                  Besides that Weekend Monks is having a well experienced and
                  professional staff who are happy to serve 24×7 to our clients
                  and rather provide their best assistant throughout the tour,
                  from the time of planning the trip and consulting traveler
                  according to their budget and liking till catering all the on
                  tour services our team works each day to arrange a trip in the
                  best possible way and beside this takes the utmost care of our
                  clients.
                </p>
                <p className="body-text mb-2">
                  This agency is also expertise in providing well-customized
                  packages according to the budget and needs of our customers.
                  Weekend Monks, Travel Agent in Rishikesh is having more than
                  100+ packages of Uttarakhand and National destinations to
                  serve the people of a different mindset, with different pocket
                  kinds.Our priority is to provide our clients with a
                  hassle-free and memorable trip. Since our establishment in the
                  year 2023, we Carter for more than 10 Thousand happy travelers
                  by providing our best assistant for travel all around
                  Uttarakhand.
                </p>
              </div>
            </Col>

            <Col lg="4" md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10  rounded-circle mb-2 flex-centered p-2">
                      <img src={icons1} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    50+ Destinations
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Explore over 50+ breathtaking destinations, each offering
                    unique experiences and unforgettable adventures!
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons2} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Best Price In The Industry
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Unlock unbeatable deals with the Best Price In The Industry,
                    ensuring top-notch travel experiences at the lowest rates!
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons3} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Super Fast Booking
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Experience hassle-free travel with our Super Fast Booking,
                    making your dream trip just a click away!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
