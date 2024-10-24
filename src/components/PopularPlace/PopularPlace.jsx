import React from "react";
import "../PopularPlace/popular-place.css";
import {  Col, Container, Row, } from "react-bootstrap";

import { popularsData } from "../utils/data";
import ProductCard from "../Cards/ProductCard";

const PopularPlace = () => {
  



  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {popularsData.map((val, inx)=>{
          return(
            <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
              <ProductCard  val={val} />
           
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;
