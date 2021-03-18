import React from 'react';
import { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Countries from '../Countries/Countries';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="home">
            <Container>
                <Row className="no-gutters">
                    {
                        countries.map(country => {
                            return <Col className="" md={4} sm={6} xs={12}>
                                        <Countries key={country.alpha3Code}
                                         country={country}>
                                         </Countries>
                                   </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;