import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from "react-router";
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = () => {
    const {name} = useParams();
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${name}`;
        fetch(url)
        .then(response => response.json())
        .then(data =>setCountries(data))
    }, [name])
    return (
        <Container>
           {
               countries.map(country => <CountryDetails country={country}></CountryDetails>)
           }
        </Container>
    );
};

export default Country;