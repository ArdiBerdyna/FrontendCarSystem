import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [carData, setCarData] = useState([]);

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
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts
    console.log("Asdasda",carData)
  // Return the fetched data
  return carData;
};

export default CarList;
