import React from 'react';
import OrderMap from './orderMap';
import Orderslist from '../OrderCartComponent/OrderList';




function  OrderCart(){

return (
<>
<div style={{display: 'flex',
justifycontent: 'space-between',
flexdirection: 'row',
alignitems: 'stretch'}}>

{/* OrderCartComponent to render Order Details*/}
<Orderslist/>

<OrderMap/>


</div>
</>
);  
}
export default (OrderCart);