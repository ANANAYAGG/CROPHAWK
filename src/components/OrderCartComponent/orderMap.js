import React, { memo } from 'react';
import { MapContainer, TileLayer , GeoJSON} from 'react-leaflet'
import OrderCartjaosn from'../jsonAPI/OrderCart.json'
import'leaflet/dist/leaflet.css'
import'leaflet-draw/dist/leaflet.draw.css'


function OrderMap(){
 
        
return(
    <>
{/* Leaflet Map  */}
<MapContainer center={[51.505, -0.09]}  
style={{ height: "100vh",width: "50vw",
position: "relative",zIndex: "10",
}} zoom={13} scrollWheelZoom={false}> 
 
<TileLayer
attribution='&copy; 
<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


{/* GeoJason Show on map */}

 


</MapContainer>    
    
    </>
)
}
export default memo(OrderMap) ;