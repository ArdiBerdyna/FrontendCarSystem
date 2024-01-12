import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

function Check() {
    const location = useLocation();
    const formData = location.state;
    const navigate = useNavigate();
    if (!formData) {
      // Handle the case where there is no form data
      return <p>No form data available</p>;
    }

    async function save(event) {
    


        event.preventDefault();
        try {
            const response = await axios.post("https://localhost:7112/api/Reservations/PostCar", {
            
            firstName: formData.firstName,
            lasttName: formData.lasttName,
            pickUpDate: formData.pickUpDate,
            dropOffDate: formData.dropOffDate,
            phone: formData.phone,
            description: formData.description,
            total: formData.discountedPrice,
            userId: formData.userId,
           
            
          
          });
    
          alert("Blerja eshte ber me sukses")
          navigate("/cars")
    
         
              
          
        
          
        } catch (err) {
          alert(err);
        }
      }
  
    return (
      <div>
        {formData.discountedPrice != formData.total && (
        <p>Congratulations! You've received a 20% discount on your purchase</p>
      )} 
        <h2>Check Component</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lasttName}</p>
        <p>Pick Up Date: {formData.pickUpDate}</p>
        <p>Drop Off Date: {formData.dropOffDate}</p>
        <p>Phone: {formData.phone}</p>
        <p>Description: {formData.description}</p>
        <p>UserId: {formData.userId}</p>
        <p>Total: {formData.discountedPrice}</p>
        <button class="btn btn-primary m-4" onClick={save}>
            Reserve Now
            </button>
      </div>
    );
  };

export default Check