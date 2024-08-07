import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { FormControl, Card,Button,Form} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import OrderDetails from'../jsonAPI/OrderDetail.json' 
import JobsSelector from '../jobSelectorComp/jobselector';
import { useMap } from 'react-leaflet';

import  L from 'leaflet';
import "react-datepicker/dist/react-datepicker.css";
import "react-multi-carousel/lib/styles.css";

 




function Modal1({modal,setModal , activatejobsmodal,setactivatejobsmodal}) {
//Date Use State  
const [dateRange, setDateRange] = useState([]);
const [startDate, endDate] = dateRange;
// Name UseSate
const [getName,setName] = useState('');
const [shoform,getshoform] = useState(true)
const [shoselect,getselctor]= useState(false)





//Function fro handling submit 
const handleSubmit = (event) => {
event.preventDefault();
OrderDetails.start_date = dateRange[0];
OrderDetails.end_date = dateRange[1];
OrderDetails.name = (getName);
console.log(OrderDetails) 
getselctor(true);
getshoform(false);
}





//handle reslect
const handleReselect =() =>{
OrderDetails.start_date = "";
OrderDetails.end_date = "";
OrderDetails.job_id = "";
OrderDetails.OrderName = ('');
OrderDetails.SelectedJobProfiles =['']
getselctor(false);
getshoform(true);


}

const map = useMap()
//handle area Reselect
const handleareaReselect = () =>{
    OrderDetails.features = [{}];
  
    setDateRange([])
    setName('')
    console.log('reslect',OrderDetails)
    console.log('map center:', map.getCenter())


    setactivatejobsmodal(false)

    setModal(true)

  
   // to remove layer easy way  
    // map.eachLayer((layer) => {
    //     if (layer instanceof L.Polygon) {
    //         map.removeLayer(layer);
    //       }
    // });



}
//fetch jobs 






//Styles For all elements 
const Featureholder={
width:'62vw',
height:'38vh',
position: 'absolute',
zIndex: '999',
left: '20rem',
bottom: '61px'};

const NextBtn={
position: 'absolute',
right: '12px',
bottom: '12px',
};

const cardBody ={
display: 'flex',
alignItems: 'center',
justifyContent: 'space-evenly'
};

const ReselectBtn = {
position: 'absolute',
right: '115px',
bottom: '12px', 
};  
const ReselectareaBtn = {
position: 'absolute',
left: '15px',
bottom: '12px', 
};  
const inputBox = {
position:'absolute',
top:'40%',
left: '32px',
width: '31%'
};

const steps ={
position:'absolute',
right: '18px',
top: '12px',   
}
const heading ={
    position:'absolute',
    left: '18px',
    top: '12px',   
    }
 

return (

<>

<Card  style={Featureholder}>
<Card.Body style={cardBody} >
{
shoform &&
<Form id='form1' onSubmit={handleSubmit} >

<h5 style={heading} > 
OrderName & DateRange
</h5>
    
<h5 style={steps}>
    Step 1 out 3
</h5>

<FormControl style={inputBox} 
type="name" value={getName}
onChange={e => setName(e.target.value)} placeholder="Order Name"/>

<DatePicker 
selectsRange={true}
startDate={startDate}
endDate={endDate}
selectsDisabledDaysInRange
inline
onChange={(update) => {
setDateRange(update);
}
}
isClearable={true}
/>

<Button type='submit' disabled={!getName}   style={NextBtn}>
Next
</Button>

<Button style={ReselectareaBtn} onClick={()=>{ handleareaReselect()}}>
reslectArea 
</Button>


</Form>


}
{
// render Jobselctor on modal
shoselect &&  <JobsSelector/>
}

<Button style={ReselectBtn} disabled={shoform} onClick={()=>{handleReselect()}}>
back
</Button>


</Card.Body>
</Card>


</>
)
}

export default Modal1;