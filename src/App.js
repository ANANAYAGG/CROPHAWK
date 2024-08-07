import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import'leaflet/dist/leaflet.css'
import OrderCart from './components/OrderCartComponent/OrderCart.js';
import MainSettingsPage from './components/settings/mainSettings';
import LeafletMap from './components/MainModal/maping';
import React from 'react';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
  
   <div style={{height:'100vh',width:'100vw',position:'relative' }}>
   <div style={{height:'100%',width:'100%'}}>
  
  <Routes>
   <Route  path='/' element={<LeafletMap/>}/>
   <Route  path='/OrderCart' element={<OrderCart/>}/>
   <Route  path='/Settings' element={<MainSettingsPage/>}/>
  </Routes>    
   
   </div>
   

 </div>
  );
}

export default App;
