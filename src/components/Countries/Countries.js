import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Countries.css';
const Countries = (props) => {
    const { name, area, capital, flag } = props.country;
    let history = useHistory();
    const handleClick = (name) => {
        const url = `countries/${name}`;
        history.push(url);
    }
    return (
        <div className="">
            <Container>
                <Card className="mb-4 w-100 shadow" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="card-image" src={flag} />
                    <Card.Body>
                        <Card.Title><b>{name}</b></Card.Title>
                        <Card.Text>
                           {capital}
                        </Card.Text>
                        <Card.Title>{area}</Card.Title>
                        <Button id="explore-button" onClick={() => handleClick(name)}>Explore</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Countries;
