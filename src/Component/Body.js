import React from 'react'
import ImageCaro from './ImageCaro'
import './Body.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Body() {
  return (<>
    <div className="bcontainer">
    <ImageCaro></ImageCaro>
    </div>
    <div style={{height:'12rem',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#19376D'}} className ='container-fluid '>
        <h5 className="title" >All Your News Briefing Below</h5>
      
        {/* <i className="fa-solid fa-arrow-down" /> */}
    
    </div>
    </>
  )
}

export default Body