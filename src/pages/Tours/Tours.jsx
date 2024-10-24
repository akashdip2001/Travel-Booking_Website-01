import React, { useState, useEffect } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { popularsData } from "../../components/utils/data";
import ProductCard from "../../components/Cards/ProductCard";
import Filters from "./Filters";

function Tours() {
  const [showFiter, setShowFiter] = useState(false);

  const handleFilter = () => {
    setShowFiter(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "tour";
  }, []);

  return (
    <>
      <Breadcrumbs title="Tours" pagename="Tours " childnamed="d-none" />
      <section className="tour_list py-5">
        <Container>
          <Row className="g-3">
            <Col xl="3" lg="4" md="12" sm="12">
              <div className=" d-lg-none d-block">
                <button onClick={handleFilter} className="primaryBtn">
                <i className="bi bi-funnel"></i>  Filters
                </button>
              </div>

              <div className="filters d-lg-block d-none">
                <Filters />
              </div>
            </Col>
            <Col xl="9" lg="8" md="12" sm="12">
              <Row>
                {popularsData.map((val, inx) => {
                  return (
                    <Col xl={4} lg={6} md={4} sm={6} xs={12} className="mb-5" key={inx}>
                      <ProductCard val={val} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Offcanvas show={showFiter} onHide={() => setShowFiter(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Filters />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Tours;
