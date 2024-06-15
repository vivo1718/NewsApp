import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageCaro.css';
import svgImage from '../assets/im1.jpeg';
import svgImage2 from '../assets/im2.jpeg';
import svgImage3 from '../assets/im3.jpeg';

function ImageCaro() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
       <img src={svgImage} className="svgImg" alt="img1"/> 

       
    </div>
    <div className="carousel-item">
     <img src={svgImage2} className="svgImg" alt="img2"/> 

      
    </div>
    <div className="carousel-item">
     <img src={svgImage3} className="svgImg" alt="img3"/> 

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default ImageCaro;
