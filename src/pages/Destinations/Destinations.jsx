import React, { useEffect } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Breadcrumbs from '../../ReusableComponents/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import DestinationsList from './DestinationsList';

function Destinations(props) {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "destinations"
    }, [])

    return (
        <>
            <Breadcrumbs title="Destinations " pagename="Destinations " childnamed='d-none' />

            <section className='tours_section'>
                <Container>
                    <Row>
                        {DestinationsList.map((val, inx) => {
                            return (
                                <Col md='3' sm='6' key={inx} className='pb-4'>
                                    <div className="img-box p-0">
                                        <Card>
                                            <NavLink to={val.link}
                                                state={{ location: val.location }}
                                            >
                                                <Card.Img variant="top" src={val.image}
                                                    className='img-fluid'
                                                    alt={val.name}
                                                />
                                            </NavLink>
                                            <Card.Title>
                                                <NavLink to={val.link}
                                                    state={{ location: val.location }}
                                                >
                                                    {val.name} {inx}
                                                </NavLink>
                                            </Card.Title>
                                            <span className="tour_list">  {val.tours}  </span>
                                        </Card>
                                    </div>

                                </Col>
                            )
                        })}

                    </Row>
                </Container>
            </section>

        </>
    );
}

export default Destinations;