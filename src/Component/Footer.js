import React from 'react'
import  './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
  return (
    <div className= "container-fluid1">   
    <div className="row">
            <div className='col-sm-3'>
                <h5 className = "he5">NewsSource</h5>
                <p className="p5"> By delivering targeted messages within a trusted and engaging environment, news apps enable brands to connect with their audience</p>
                
                </div>
                <div className='col-sm-3'>
                <h5 className = "he5">Network</h5>
                <p className="p5">Facebook</p>
                <p className="p5">Instatgram</p>
                <p className="p5">x</p>
                <p className="p5">Reddit</p>
                <p className="p5">Google</p>

                 </div>
            
                <div className='col-sm-3'><h5 className = "he5">Documentation</h5>
                <p className="p5">Account</p>
                <p className="p5">Privacy</p>
                <p className="p5">Terms</p>
                <p className="p5">Documentation</p>
                <p className="p5">Google</p>
</div>
            
                <div className='col-sm-3'><h5 className = "he5">Address</h5>
                <p className="p5"> 123 Main StreetRock Hill, SC 29730 United States</p>
                <div><a href="https://www.facebook.com/yourpage"><i className="fab fa-facebook"></i></a>
      <a href="https://x.com/yourpage"><i className="fab fa-x-twitter"></i></a>
      <a href="https://www.instagram.com/yourpage"><i className="fab fa-instagram"></i></a></div>
                        </div>
            
        </div>
        <div className="row">
            <div className="col"><h5 className="he5">©Copyright NewsSource 2024.All Rights Reserved</h5></div>
        </div>
        </div>

    
  )
}

export default Footer;