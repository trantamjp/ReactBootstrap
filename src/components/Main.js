import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Home from './Home';
import CustomerTable from './Customer';
import FilmTable from './Film';

const Main = () => {

  return (
    <>
      <Navbar bg="light" variant="light" className="mb-3">
        {/* <Navbar.Brand>Menu</Navbar.Brand> */}
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Button variant="outline-info" className="mr-3">Home</Button>
          </LinkContainer>
          <LinkContainer to="/customers">
            <Button variant="outline-info" className="mr-3">Customers</Button>
          </LinkContainer>
          <LinkContainer to="/films">
            <Button variant="outline-info" className="mr-3">Films</Button>
          </LinkContainer>
        </Nav>
      </Navbar>

      <Switch>
        <Route exact path='/customers'
          render={routeProps => (
            <CustomerTable {...routeProps} />
          )} />
        <Route exact path='/films'
          render={routeProps => (
            <FilmTable {...routeProps} />
          )} />
        {/* Anything else */}
        <Route exact path='/home' component={Home} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default Main;
