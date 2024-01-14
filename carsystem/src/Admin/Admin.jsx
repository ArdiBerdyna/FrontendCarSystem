// AdminDashboard.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, NavItem } from 'reactstrap';
import { FaHome, FaUser, FaCog, FaChartBar,FaCar,FaCalendarAlt } from 'react-icons/fa';
import CarsForm from './CarsForm';
import { Link ,Route, Router} from 'react-router-dom';
import Reservation from './Reservation';
import { useEffect, useState, useRef } from "react";

const Admin = () => {
    const [activeComponent, setActiveComponent] = useState('reservations');

  const loadComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <Container fluid>
      {/* Navbar */}
      

      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-dark text-white p-3">
          
          <Nav vertical>
          <button onClick={() => loadComponent('cars')}>Load Cars Form</button>
        <button onClick={() => loadComponent('reservations')}>Load Reservations Form</button>
            {/* Add more links as needed */}
          </Nav>
        </Col>

        {/* Main Content Area */}
        <Col md={9} className="bg-light p-4">
          <h2>Main Content</h2>
          {activeComponent === 'cars' && <CarsForm />}
        {activeComponent === 'reservations' && <Reservation />}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
