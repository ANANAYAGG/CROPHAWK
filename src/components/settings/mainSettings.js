import React,{useRef, useState, inputRef1} from 'react';
import { useNavigate } from "react-router-dom";
import {CgOrganisation,CgUserAdd} from 'react-icons/cg/'
import {MdPayment,MdModeEditOutline} from 'react-icons/md/'
import {BsBank2} from 'react-icons/bs/'
import Avatar from 'react-avatar';
import {Button,Alert,ListGroup,Card, ListGroupItem,Navbar,Container,Form} from 'react-bootstrap';
export default function MainSettingsPage (){


//Model Data
const dummySettings ={
  "name": "sharmakartick512@gmial.com",
  "AccountId": "sharmakartick",
  "Company":"KingInternational",
  "Password": "sharmakartick"
  }
  
//UseStates 
const [input1,setInput1] = useState(true);
const [input2,setInput2] = useState(true);
const [input3,setInput3] = useState(true);

const [logoState,setLogoState] = useState(dummySettings.Company);
//UseRefrences

const inputRef1 = useRef('');
const inputRef2 = useRef('');
const inputRef3 = useRef('');

// refrence values 
const name1  = inputRef1.current.value; 
const name2  = inputRef2.current.value; 
const name3  = inputRef3.current.value; 

//navigation links
let navigate = useNavigate();
  const goHome = () => {
      navigate("/");
  };


//handel Submit 
function submit2(){ 

  
if(name1.length>8){
dummySettings.name = name1.toString();
}
if(name2.length>8){
  dummySettings.Password = name2.toString();
  }
if(name3.length>3){
    dummySettings.Company = name3.toString();
    setLogoState(name3.toString())
    }
console.log(dummySettings)

}




//Styles
const Sidebar ={
 width: '20vw',
 height:'100vh'
}
const MainBody ={
    width: '50vw',
    height:'100vh',
    flexdirection: 'row',
    
    alignitems: 'flex-start'

}

const maindiv = {
    display: 'flex',
    width:'100vw'
}
    return(
<>
<Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <strong style={{color:'white'}}>
                GALAXEYE BLUE
            </strong>
          </Navbar.Brand>

          <Navbar.Text>
            <Button onClick={goHome} >
              Home
            </Button>
          </Navbar.Text>
        </Container>
      </Navbar>

<div style={maindiv}>     
<Card style={Sidebar} >

 <ListGroup variant="flush" style={{padding:'12px'}} >
    <ListGroupItem size="lg">
      <MdPayment/> Billing and Plans
    </ListGroupItem>
    <ListGroupItem size="lg">
    <CgOrganisation/>  Organisation
    </ListGroupItem>
    <ListGroupItem size="lg">
    <BsBank2/>  Account
    </ListGroupItem>
    <ListGroupItem size="lg">
    <CgUserAdd/>  Add Users
    </ListGroupItem>
 </ListGroup>   

</Card>

<Card style={MainBody} >
<Alert  variant={'light'}>
    <h4>
  Your Profile     
    </h4>

</Alert>
<Form  onSubmit={(event)=>{event.preventDefault(); submit2();}  } style={{padding:'12px'}}  >
      <Form.Group className="mb-3">
        <Form.Control ref={inputRef1} size="lg" type="email" placeholder={dummySettings.name}  disabled={input1}    />
        <Button  variant="light"  style={{marginTop:'12px'}}
        onClick={()=>{
          if (input1 === true){
            inputRef1.current.value = "";
            setInput1(false)
          
            
          }
          else if (input1 === false) {
            setInput1(true);
            

          }

          ;}}>


        {input1 === true ? 'Edit': 'Done'} <MdModeEditOutline/>
      </Button>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword1">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={inputRef2}  size="lg" type="password" value={''} placeholder={dummySettings.Password} disabled={input2}  />
        <Button variant="light"  style={{marginTop:'12px'}}
        onClick={()=>{
          if (input2 === true){
            setInput2(false)
            inputRef2.current.value = "";

         
           
          }
          else if (input2 === false) {
            setInput2(true)
          
          }

          ;}}>
       {input2 === true ? 'Edit': 'Done'} <MdModeEditOutline/>
      </Button>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox2">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword3">
        <Form.Label>Company</Form.Label>
        <Form.Control ref={inputRef3} size="lg" type="name" disabled={input3}  placeholder={dummySettings.Company}/>
        <Button variant="light"  style={{marginTop:'12px'}}
        onClick={()=>{
          if (input3 === true){
            setInput3(false)
         
        
            
          }
          else if (input3 === false) {
            setInput3(true)

           

          }

          ;}}>
        {input3 === true ? 'Edit': 'Done'}<MdModeEditOutline/>
      </Button>
      </Form.Group>
      <Button variant="dark"  type={'submit'}>Save </Button>
    </Form>




</Card>
<div>
<Avatar style={{margin:'22px'}} color={'black'} name={logoState} size="100" round={true} />
</div>
</div> 
</>        
)
}