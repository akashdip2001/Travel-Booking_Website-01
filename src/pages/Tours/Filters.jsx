import React from "react";
import { Accordion, Form } from "react-bootstrap";
import "./tour.css"

const Filters = () => {
  const location = [
    "Rishikesh",
    "Manali",
    "Haridwar",
    "Dehradun",
    "Uttarkhashi",
    "Mussoorie",
  ];
  const Categories = ["History", "Calture", "Netural", "Urban Tour", "Relax"];
  const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Day"];
  const PriceRange = [
    "₹ 0 - ₹ 1500",
    "₹ 1500 - ₹ 2500",
    "₹ 2500 - ₹ 3500",
    "₹ 3500 - ₹ 5500",
  ];

  const Ratings = [
    "⭐",
    "⭐⭐",
    "⭐⭐⭐",
    "⭐⭐⭐⭐",
    "⭐⭐⭐⭐⭐",
  ];


  



  return (
    <>
      <div className="side_bar">

        <div className="filter_box shadow-sm rounded-2">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Location</Accordion.Header>
              <Accordion.Body>
                {location.map((val, inx) => {
                  return (
                    <Form.Check
                      key={inx}
                      type="checkbox"
                      id={val}
                      label={val}
                      value={val}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Categories</Accordion.Header>
              <Accordion.Body>
                {Categories.map((val, inx) => {
                  return (
                    <Form.Check
                      key={inx}
                      type="checkbox"
                      id={val}
                      label={val}
                      value={val}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>
                {PriceRange.map((val, inx) => {
                  return (
                    <Form.Check
                      key={inx}
                      type="checkbox"
                      id={val}
                      label={val}
                      value={val}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Duration</Accordion.Header>
              <Accordion.Body>
                {Duration.map((val, inx) => {
                  return (
                    <Form.Check
                      key={inx}
                      type="checkbox"
                      id={val}
                      label={val}
                      value={val}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Rating</Accordion.Header>
              <Accordion.Body>
                {Ratings.map((val, inx) => {
                  return (
                    <Form.Check
                      key={inx}
                      type="checkbox"
                      id={val}
                      label={val}
                      value={val}
                    />
                  );
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>


        </div>

      
      </div>
    </>
  );
};

export default Filters;
