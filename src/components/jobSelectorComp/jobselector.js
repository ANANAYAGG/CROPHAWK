import React, { useRef, useState,memo,useEffect} from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import OrderDetails from'../jsonAPI/OrderDetail.json' 
import apidummyjobs from '../jsonAPI/apidummyjobs.json'
import ListGrp from './listGrp';
import Preview from './preview' ;
import axios from 'axios';



// Main Export function for element 
function JobsSelector(props){


  const Jobs  = []; 
//Fetch API's
// useEffect(()=>{
 
//     async function fetchJobs() {
//         const options = {
//             method: 'POST',
//             url: 'https://409q6jw99h.execute-api.ap-south-1.amazonaws.com/fetch_all_jobs',
//             headers: {'Content-Type': 'application/json'},
//             data: {organization: 1}
//           };
          
//               try {
//                 const response = await axios(options);
//                 Jobs.push(response.data)  
               
               
    
//               } catch (error) {
//                return console.error(error);
//               }      
//     }
//     fetchJobs()
    

// },[])

console.log(Jobs )

//All useStates for JobSelector  
const [show, setShow] = useState(false);
const [demans, setDemands] = useState(['']);
const [showPreview, setPreview] = useState(false);



// UserRef to get name
const nameRef = useRef(null);


// Submit function for Form of Modal
const submit =(event)=>{
event.preventDefault();
const input = nameRef.current.value;

var JobJSON ={
     id: 11,
    name:input  ,
    created_at: "2023-01-27T06:35:02.432584+00:00",
    feature: demans
}

apidummyjobs.jobs.push(JobJSON);

setDemands('')
setShow(false)
}

//Terminate Modal
const terminateModal = () => {
const jobselectordiv = document.getElementById('jobselectordiv')
jobselectordiv.style.display ='none' ; 
setPreview(true) 
}






// All Styles
const NextBtn = {
position: 'absolute',
right: '12px',
bottom: '12px',
};
const addJob = {
position: 'absolute',
left: '12px',
bottom: '12px',
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
<div id='jobselectordiv'>

<h5 style={heading} > 
Select JobPrests
</h5> 

<h5 style={steps}>
    Step 2 out 3
</h5>
<Modal show={show}
onHide={()=>{setShow(false)}}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered>
       
      
<Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
Create New JOB preset
</Modal.Title>
</Modal.Header>
<Modal.Body>

{/* //Modal Form */}

<Form onSubmit={submit}>
  
<input 
type="text"
ref={nameRef}>
</input>


<Form.Check type="checkbox" 

id= "custom-switch" 
       label="Pin-1"
       onChange={()=>{setDemands({...demans, "Pin-1": true})}}/>
<Form.Check type="checkbox" 
       id="custom-switch"
       label="Pin-2"
       onChange={()=>{setDemands({...demans, "Pin-2":true})}}/>
<Form.Check type="checkbox" 
       id= "custom-switch"
       label="Pin-3"
       onChange={()=>{setDemands({...demans, "Pin-3": true})}}/>
<Button  type='submit' 
      >Save
</Button>
</Form>
</Modal.Body>
</Modal>


{/* Buttons for Modal */}
<Button style={NextBtn} 
    onClick={()=>{terminateModal();}}> 
    Preview</Button>{''}

<Button style={addJob} 
    onClick={()=>{setShow(true); }}>
    addJob</Button>


{/* Conditionally rendered list */}

{
show === false &&  <ListGrp/>
}
</div>  

{ 
showPreview === true && <Preview/>
}
</>
)
}

export default memo(JobsSelector);