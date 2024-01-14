import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//import carData from "../assets/data/carData";
//import CarList from "../assets/data/CarList";

const CarListing = () => {
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Get the token from local storage (assuming it is stored there)
  // if (!token) {
  //   navigate('/login'); // Redirect to the login page if the token is not set
  //   // Return early to prevent further execution of the function
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7112/api/Cars/GetCar');
        setCarData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Sort By
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
