import React from 'react'
import { useEffect, useState} from "react";
import axios from "axios";

function Reservation() {
    const [reservimet, setRezervimet] = useState([]);
  useEffect(() => {
    (async () => await Load())();
  }, []);
  async function Load() {
    
    const result = await axios.get("https://localhost:7112/api/Reservations");
    setRezervimet(result.data);
    console.log(result.data);
  }
  

  return (
    <div className="table-responsive m-3">
  <table className="table border-dark ">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Pick Up Date</th>
        <th scope="col">Drop Off Date</th>
        <th scope="col">Id Of Car in Reservation</th>
        <th scope="col">Price for Day</th>
        <th scope="col">Phone</th>
        <th scope="col">Description</th>
        <th scope="col">Total</th>
        <th scope="col">User Id</th>
     
      </tr>
    </thead>
    <tbody>
      {reservimet.map(function fn(rez) {
        return (
          <tr key={rez.id}>
            <td>{rez.id}</td>
            <td>{rez.firstName}</td>
            <td>{rez.lasttName}</td>
            <td>{rez.pickUpDate.substring(0, 10)}</td>
            <td>{rez.dropOffDate.substring(0, 10)}</td>
            <td>{rez.carID}</td>
            <td>{rez.priceDay}$</td>
            <td>{rez.phone}</td>
            <td>{rez.description}</td>
            <td>{rez.total}</td>
            <td>{rez.userId}</td>
            
            

         
      
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
  )
}

export default Reservation