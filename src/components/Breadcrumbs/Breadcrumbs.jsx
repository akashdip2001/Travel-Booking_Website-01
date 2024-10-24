import React from 'react'
import { Row, Breadcrumb, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Breadcrumbs/breadcrumbs.css"

const Breadcrumbs = (props) => {
  return (
    <>
           <div className="inner-banner-wrap">
                <div className="inner-baner-container" >
                    <div className="container">
                        <div className="inner-banner-content">
                            <h1 className="page-title fs-1">{props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" navbar-link ">
                <Container>
                    <Row>
                        <Breadcrumb className="py-1 m-0 text-white">
                            <li className='breadcrumb-item'>
                            <i className="fad fa-home-alt me-1"></i> <NavLink to="/">   Home </NavLink>
                            </li>

                            <li className={`${props.named} text-white breadcrumb-item active`} >
                                <NavLink to="#">   {props.pagename} </NavLink>
                            </li>

                            <li className={`${props.childnamed} text-white breadcrumb-item  active`} >
                                <NavLink to="#" >    {props.childpagename} </NavLink>
                            </li>

                        </Breadcrumb>
                    </Row>
                </Container>
            </div>
    </>
  )
}

export default Breadcrumbs