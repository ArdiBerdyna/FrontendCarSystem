// AdminDashboard.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

const Admin = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col sm={3} className="bg-dark text-white">
          <h2>Sidebar</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link text-white" href="#link1">Link 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#link2">Link 2</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </Col>

        {/* Main Content Area */}
        <Col sm={9} className="bg-light">
          <h2>Main Content</h2>
          {/* Add your main content here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
