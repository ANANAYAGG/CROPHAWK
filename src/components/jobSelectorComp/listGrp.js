import React, {memo ,useEffect,useRef ,useState} from 'react';
import {ListGroup,Card,Button,Modal,Form} from 'react-bootstrap';
import OrderDetails from'../jsonAPI/OrderDetail.json'
import apidummyjobs from '../jsonAPI/apidummyjobs.json'   
import { feature } from '@turf/turf';







function ListGrp (){
const [show2, setShow2] = useState(false);
const [demans2, setDemands2] = useState([]); 
const [editJob, setEditJob] = useState();
const [currentInd,setCurrentInd] = useState('');
const [goPreview, setGoPreview] = useState(false);

// HandleClick events
const handleClick = (jobs , index) =>{
OrderDetails.job_id = jobs.id;
const selectedJobprofile = document.getElementById(index) 
selectedJobprofile.style.backgroundColor='#94D1BE';
console.log(OrderDetails)
}


const nameRef2 = useRef(null);


const handleEdit = (Editjob,index) =>{
setEditJob(Editjob) ;
setCurrentInd(index)
setShow2(true)
setDemands2([null]);
console.log('firstdemans',demans2)



}


function editorModalSubmit(){
const newName = nameRef2.current.value; 
apidummyjobs.jobs[currentInd].name = newName; 
apidummyjobs.jobs[currentInd].feature = demans2;     
console.log('demands',demans2)
console.log(editJob)    
console.log('CurrentIndex',currentInd)
console.log('newOrderDetails',apidummyjobs)
setShow2(false)    



}





// List Grp design

const listGrpDesign ={
width:'38vw',
display:'grid',
overflowX:'scroll',
gridAutoColumns: 'max-content',
gridAutoFlow: 'column',
}
const singleItem={
height:'200px',
overflow:'hidden'
}



return(
<>

{ show2 == false && <ListGroup id={'listgrp2'} horizontal style={listGrpDesign}>

{/* Iterating over all job profiles */}
{ apidummyjobs.jobs.map((job,index)=>{
    console.log(index)
    let featureKeys = Object.keys(job.feature);
   let jsonArray = Object.values(job.feature);
  console.log(jsonArray)
return( 
<>
<ListGroup.Item  key={job.id} style={singleItem} >
<Card  id={index}  style={{ width: '14rem' }}>
<Card.Body>
<Card.Title> {job.name}</Card.Title>
<Card.Subtitle className="mb-2 text-muted"> {job.name}</Card.Subtitle>
<ListGroup>
{/* Iterating inside job profiles for Features */}
{           featureKeys.map((key) => {
                if(job.feature[key] === true) {
                    console.log(key)
                    return(
                     <ListGroup.Item>{key}</ListGroup.Item>
                    )
                }
            })
       

 }
</ListGroup>     
</Card.Body>
<Card.Body style={{display: 'flex' ,justifyContent: 'space-around'}}>
<Button  onClick={()=>handleClick(job,index)}> Select</Button>
<Button onClick={()=>handleEdit(job,index)}> Edit</Button>
</Card.Body>
</Card> 
</ListGroup.Item>


{/* EditModal */}




</>
) 
}
)
}
</ListGroup>  

}

<Modal id={'valueChange'} show={show2}
onHide={()=>{setShow2(false)}}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered>
       
      
<Modal.Header closeButton>
<Modal.Title id="contained-modal-title-vcenter">
Edit JOB preset
</Modal.Title>
</Modal.Header>
<Modal.Body>

{/* //Modal Form */}

<Form onSubmit={(event) => {
  event.preventDefault(); editorModalSubmit();
  // Your form submission code here
}}>
  
<input 
type="text"
ref={nameRef2}>
</input>


<Form.Check type="checkbox" 

id= "custom-switch" 
       label="Pin-1"
       onChange= {()=>{setDemands2({...demans2, "Pin-1": true})}}/>
<Form.Check type="checkbox" 
       id="custom-switch"
       label="Pin-2"
       onChange={()=>{setDemands2({...demans2, "Pin-2": true})}}/>
<Form.Check type="checkbox" 
       id= "custom-switch"
       label="Pin-3"
       onChange={()=>{setDemands2({...demans2, "Pin-3": true})}}/>

<Button  type='submit' 
      >Save
</Button>

</Form>
</Modal.Body>
</Modal>






</>
) 
}

export default memo(ListGrp);