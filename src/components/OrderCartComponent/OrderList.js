import React, { useEffect } from 'react';
import {Button,Card,ListGroup, ListGroupItem,Table,Image} from 'react-bootstrap';
import orderCartJason from'../jsonAPI/OrderCart.json'
import { useNavigate } from "react-router-dom";
import Orderlist2 from './orderlist2'


 function Orders(){


// const  isOrderCartEmpty = orderCartJason.Orders.length=== 0; 

const  isOrderCartEmpty = orderCartJason.Orders.length=== 0; 




let navigate = useNavigate();
const goHome = () => {
      navigate("/");
};
  



const OrderCart={
width:'10%',
overflow:'auto',
height:'100vh'
}  
const home = {
right: '12px',
top: '4px',

zIndex:'12',
position: 'absolute',
}


    
    return(
        <>
         
<Card style={OrderCart} >
<Card.Title><h2>Orders</h2></Card.Title>
<Button style={home} variant="primary"
onClick={goHome}>
home
</Button>
<ListGroup variant="flush">
{

isOrderCartEmpty ? 
<div>     
 <h4 style={{margin:'2%' }}  >Looks Like you have not placed any Orders Yet..</h4> 
<Image src="./undraw_order_delivered_re_v4ab.svg" style={{width:'100%', height:'100%',marginTop:'22%' }} alt="My Image" /> </div> 
: 
<Orderlist2/>

}

       
      </ListGroup>
    </Card>
        
        
        </>
    )

}
export default React.memo(Orders) ;