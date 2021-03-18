import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './CountryDetails.css';
const CountryDetails = (props) => {
    const { name, flag, region, capital, population, nativeName, area, subregion } = props.country;
    return (
        <Container className="mb-4">
            <Row className="d-flex justify-content-center">
                <Col md={5}>
                    <Card className="country-details text-left shadow">
                        <Card.Img variant="top" className="text-left img-fluid" src={flag} />
                        <Card.Body>
                            <h5><b>Name</b>: {name}</h5>
                            <p className="display-5"><b>Region</b>: {region}</p>
                            <p><b>Capital</b>: {capital}</p>
                            <p><b>Population</b>: {population}</p>
                            <p><b>Native Name</b>: {nativeName}</p>
                            <p><b>Area</b>: {area}</p>
                            <p><b>Sub Region</b>: {subregion}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CountryDetails;