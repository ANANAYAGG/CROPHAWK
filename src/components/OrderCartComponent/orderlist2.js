import React, { useMemo, useState } from 'react';
import moment from 'moment/moment';
import orderCartJason from'../jsonAPI/OrderCart.json'
import {Button,Card,ListGroup, ListGroupItem,Table,Image} from 'react-bootstrap';
const data = ['helo','true','boo'] 
export default function OrdersDataEle(){
   const [value,setValue] = useState(true)
const OrdersMemo = useMemo(() => orderCartJason.Orders.map((order) => {
console.log(order.name)
  return(
    <ListGroup>  <ListGroupItem>
        Total Area = 
     {order.area},
     id = 
     {order.id}  </ListGroupItem> </ListGroup> ) }), [value]);
  
return (
  OrdersMemo

)
}