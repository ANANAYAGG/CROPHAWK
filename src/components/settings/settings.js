import React,{useState} from 'react';
import settings from './settings.json'
import {Button,Popover,Overlay,ListGroup} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar';

export default function Settings(){
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
    let navigate = useNavigate();
    const goSettings = () => {navigate("/Settings");};

//Styles

const setStyle = {
    right: '112px',
    top:'8px',
    zIndex:'12',
    position: 'absolute',
}
 return(
 <>
<Button variant='none'  style={setStyle} onClick={handleClick}>
<Avatar  color={'black'} name={settings.Company} size="40" round={true}  /> 
 </Button>

<Overlay
  show={show}
  target={target}
  placement="bottom"
  containerPadding={20}
>
  <Popover id="popover-contained">
    <Popover.Header as="h3">Account</Popover.Header>
    <Popover.Body>
    <ListGroup>
      <ListGroup.Item>Name: { settings.name}</ListGroup.Item>
      <ListGroup.Item>AccountId: { settings.AccountId}</ListGroup.Item>
      <ListGroup.Item>Organisation: { settings.Company}</ListGroup.Item>
      <ListGroup.Item><Button onClick={goSettings} style={{width:'100%'}} >Go to Settings</Button></ListGroup.Item>
    </ListGroup>

    </Popover.Body>
  </Popover>
</Overlay>
</>
)

}