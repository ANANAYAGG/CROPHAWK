import React, {} from 'react';
import {Button,Table} from 'react-bootstrap';
import OrderDetail from '../jsonAPI/OrderDetail.json'
import OrderCart from '../jsonAPI/OrderCart.json'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Preview(){
  let OrderDetails ={...OrderDetail} ;

  let navigate = useNavigate();
  const goHome = () => {
      navigate("/OrderCart");
  };



async function postJobs1() {
    try {
  
      console.log(OrderDetails);
      

      return console.log(OrderDetails);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

const NextBtn = {
      position: 'absolute',
      right: '12px',
      bottom: '12px',
};
const steps ={
position:'absolute',
right: '18px',
top: '12px',   
};
const heading ={
position:'absolute',
left: '18px',
top: '12px',   
}      
      
const codebox={
 color:'green',
 height: 'max-content'
}

const para ={
  height: '200px', /* Adjust the height as needed */
  overflow: 'hidden',
  backgroundColor:'black',
  width:'50%',
  overflow:'hidden',
  overflowY:'scroll',
 
}

 return(
<>
<h5 style={heading} > 
Check Preview
</h5>
    
<h5 style={steps}>
    Step 3 out 3
</h5>

{/* 
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> Date</th>
          <th> OrderName </th>
          <th>SelectedJobProfiles</th>
          <th>TotalArea</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{OrderDetails.name.toString()}</td>
          <td>{OrderDetails.job_id.toString()}</td>
          <td>{OrderDetails.area.toString()}</td>
        </tr>
      </tbody>
    </Table> */}
    <p style={para}>
    <pre style={codebox}>
    {
      JSON.stringify(OrderDetails, null, 2)
    }
  </pre>

    </p>



 
<Button style={NextBtn} onClick={goHome} >CheckOut</Button>
      </>
    )
}

export default Preview