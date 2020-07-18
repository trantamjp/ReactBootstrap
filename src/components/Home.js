import React from 'react';
import { Container } from "react-bootstrap";

import { CUSTOMER_API_URL, FILM_API_URL } from '../config';

const Home = () => {

    return (
        <Container fluid>
            <h3 className="mt-2">Github</h3>
            <div className="mt-3"><h5>Frontend React Bootstrap</h5>
                <a href="https://github.com/trantamjp/ReactBootstrap" target="_blank" rel="noopener noreferrer">
                    https://github.com/trantamjp/ReactBootstrap</a></div>
            <p>Provide this frontend page. <strong>Customers</strong> and <strong>Films</strong> pages request data to the backend API via a POST method.</p>
            <div className="mt-3">
                <h5>Backend API</h5>
                <a href="https://github.com/trantamjp/JavaSpringBootJooq" target="_blank" rel="noopener noreferrer">
                    https://github.com/trantamjp/JavaSpringBootJooq</a>
                <p>The API provides 2 endpoints located at <strong>{CUSTOMER_API_URL}</strong> and <strong>{FILM_API_URL}.</strong></p>
            </div>
            <h3 className="mt-2">Sample Data</h3>
            <p>Download from here <a href="https://www.postgresqltutorial.com/postgresql-sample-database/" target="_blank" rel="noopener noreferrer">
                https://www.postgresqltutorial.com/postgresql-sample-database/</a></p>
        </Container>
    )
};

export default Home;
