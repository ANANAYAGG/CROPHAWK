import React, { useEffect, useState,memo } from 'react';
import {Button , Card,Image} from 'react-bootstrap';
import { MapContainer, TileLayer,FeatureGroup , GeoJSON , useMap , WMSTileLayer } from 'react-leaflet'
import { ImageOverlay } from 'react-leaflet/ImageOverlay'
import { EditControl } from "react-leaflet-draw";
import Modal1 from '../MainModal/Modal1';
import Settings  from '../settings/settings';
import OrderDetails from'../jsonAPI/OrderDetail.json'
import OrderList from '../OrderCartComponent/OrderList.js'
import * as turf from '@turf/turf' 
import { useNavigate } from "react-router-dom";
import'leaflet/dist/leaflet.css'
import'leaflet-draw/dist/leaflet.draw.css'
import  L from 'leaflet';
// import img from './marker.png'



const Attribution = {
  attribution:"\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e"
  ,url:"https://api.maptiler.com/maps/satellite/{z}/{x}/{y}@2x.jpg?key=Zuzm2L8phuSpDb17uc5F"
} 

const Drawjson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
         
              [
                  75.117642,
                  30.677011
              ],
              [
                  75.117642,
                  30.685608
              ],
              [
                  75.135752,
                  30.685608
              ],
              [
                  75.135752,
                  30.677011
              ],
              [
                  75.117642,
                  30.677011
              ]
     
        ]
          
        ],
        "type": "Polygon"
      }
    }
  ]
}

const boundJson = {
  'featurepoints':[{
    'boundCords':[
      [75.104942,
        30.6834],
          [
            75.174465,
            30.671444
        ],
        



    ]

  }
  ]
}



function LeafletMap () {


//Navigate in react 

const redOptions = { color: 'red' } 


let navigate = useNavigate();
const goHome = () => {
    navigate("/OrderCart");
};
console.log('hello i ran twice')

//useState to store DrawnPoints
const[getDrawPoints,setDrawPoints] = useState(null);

//useState to store BoundPoints
const[getBoundDrawPoints,setBoundDrawPoints] = useState([]);

// show modal 
const [modal , setModdal] = useState(false);

// // draw Controller
// const [drawControl, setDrawControl] = useState(null);



//LeafletDraw feature grp to 
const onEdit = (e)=>{
    const { layerType, layer } = e;
    console.log(e)
  

  }


const onDelete = (e)=>{

  setModdal(false)
}
 
const [mapLayersId,setmapLayersId] = useState([{id:0}])
//LeafletDraw feature grp to save polygonCordinates in geojason   
  const onCreate = (e) =>{
      const { layerType, layer } = e;
       
      console.log(layer["_leaflet_id"]);
      // setmapLayersId(...mapLayersId,{id:layer["_leaflet_id"]});
      setmapLayersId((prevMapLayersId) => [...prevMapLayersId, { id: layer["_leaflet_id"] }]);
      setDrawPoints(layer.toGeoJSON());
      setBoundDrawPoints([e.layer._bounds._northEast ,e.layer._bounds._southWest])
      setModdal(true)
  
    }

//Use Effect to save to GeoJason


const handleDelete = () => {
  console.log('map')
}
 useEffect(()=>{
      if(!getDrawPoints){
        return;
      }
      var newFeature = getDrawPoints;
      console.log(getDrawPoints)
      //turf code to get all features 
      
    
     

      OrderDetails.polygon.splice(0, 1);
      
      OrderDetails.polygon.push(newFeature.geometry.coordinates[0][0]);
     
      console.log("orderDetails-Nigga",OrderDetails);
      setModdal(true)
      
    
      
     
},[getDrawPoints])




//Styles
const cart = {
  right: '12px',
  top:'12px',
 
  zIndex:'999',
  position: 'absolute',
}

const Layers = {
  right: '12px',
  top:'212px',
 
  zIndex:'999',
  position: 'absolute',
}


const savedrawbtn = {
  left: "81%",
  bottom:'18rem',
 
  zIndex:'999',
  position: 'absolute',
}
const Orcart = {
  left: '112px',
  top:'112px',
 
  zIndex:'999',
  position: 'absolute',
}


const [editableFG, setEditableFG] = useState(null);

const onFeatureGroupReady = reactFGref => {
  // store the ref for future access to content
  setEditableFG(reactFGref);
};


//removing all layers 
const [removeAllLayers,setremoveAllLayers]=useState(false)
useEffect(()=>{
  if (removeAllLayers == true){
  console.log("Editable layer",editableFG)
  mapLayersId.forEach(element => {
  console.log("layeridbeforemove",element.id); // Process each element within the callback
  editableFG.removeLayer(element.id);
  });
  setremoveAllLayers(false)
  setModdal(false)
console.log("I am gonna fuckin remove all layers ",)

}
},[removeAllLayers])



const[activatejobsmodal,setactivatejobsmodal] = useState(false);

useEffect(()=>{
  if (activatejobsmodal == true){
    console.log("showing jobs")

    setModdal(false)

}
},[activatejobsmodal])

const[activatelayers,setactivatelayers] = useState(false);

// useEffect(()=>{
//   if (activatelayers == true){
//     console.log("showing jobs")
// }
  

// },[activatelayers])

//WMTS TILE LAYER 



return (
  <>


<Settings/>


{/* MapContainer for showing Map */}
<MapContainer center={[30.682361,75.12507 ]}  
style={{ height: "100vh",width: "100vw",position: "relative",zIndex: "10", color:'black'}} 
zoom={16} scrollWheelZoom={false}> 

{/* //Navigate to cart Button */}
<Button style={cart} variant="primary"
onClick={()=>{
  
}}>
Order
</Button> 


<Button style={Layers} variant="primary"
onClick={()=>{
  setactivatelayers(!activatelayers)
}}>
NDVI-Layers
</Button> 

{activatelayers &&
<div style={Orcart}  class="card text-white bg-secondary mb-3" >

<div class="card-header">Orders</div>

<Card.Body>
<Image src='./marker.png'></Image>
<ul class="list-group list-group-flush">
    <li class="list-group-item">🟥 Detected Heat Stroke</li>
    <li class="list-group-item">🟩 Detected Healthy Plant</li>
    <li class="list-group-item">🟨 Unhealthy Plant</li>
  </ul>
</Card.Body>

</div>  
}

{
  modal && 
  <div style={savedrawbtn} class="card text-white bg-secondary mb-3" >
  <div class="card-header">Draw Options</div>
  <Card.Body>
 
  <ul class="list-group list-group-flush">
      <li class="list-group-item"><Button  variant="primary"
  onClick={()=>{
    setactivatejobsmodal(true)
  }}>
  Save Draw 
  </Button> </li>
      <li class="list-group-item"><Button variant="primary"
  onClick={()=>{setremoveAllLayers(true)

  }}>
  Re Draw
  </Button> </li>
  <li class="list-group-item"><Button variant="primary"
  onClick={()=>{setModdal(false)

  }}>
  Lock Draw
  </Button> </li>
  
    
    </ul>
  </Card.Body> 
  </div>
}


{activatelayers &&
<WMSTileLayer
        url="https://services.sentinel-hub.com/ogc/wms/dfe9e1c7-849d-479d-ae01-21264345372b"
        layers="NDVI"
        transparent={true}
        opacity={0.4}
        
      />  
}


{// Conditinally render Modem when drawpoints gets value
    activatejobsmodal &&  <Modal1  modal={modal} setModal={setModdal} activatejobsmodal ={activatejobsmodal} setactivatejobsmodal = {setactivatejobsmodal}/>
}
    
<TileLayer
  attribution={Attribution.attribution}
  url={Attribution.url}
  />

 < FeatureGroup  ref={featureGroupRef => {
                    onFeatureGroupReady(featureGroupRef);
                }} 
                >
{!activatejobsmodal && <EditControl   
 position="bottomright"
 left='10rem'
 style={{left: '-30px',
 top :'-49px'}} 
 onCreated={(e) => onCreate(e) }
 onEdited={(e) => onEdit(e)}
 onDeleted={(e) => onDelete(e)}
 
draw={{   
 marker: false,
 polyline: true,
 circle: false,
 circlemarker: false,
              
 rectangle: {
 allowIntersection: true,
 shapeOptions: { color: "blue" },
 edit: true,
 showLength: true,
 metric: ["km", "m"],
 feet: false,
 showArea: true,
},
}
}
/>}
</FeatureGroup>

 {/* To show the farm image  */}


</MapContainer>

</>
);
}
export default LeafletMap;
