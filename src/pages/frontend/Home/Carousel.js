import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
//pics
import img1 from '../../../assets/carousel first pic.jpg'
import img2 from '../../../assets/carousel first pic2.jpg'
import img3 from '../../../assets/carousel first pic3.jpg'
import { AuthContext } from '../../../Context/AuthContext'

export default function Carousel() {
    
  const {isAuthenticated}=useContext(AuthContext)
  return (
   <>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <div className="overlay">
        <img src={img1} className="d-block w-100" alt="..."/>
        </div>
      <div className="carousel-caption ">
         <h1 id='special'><u>AGRICULTURE</u></h1>
         {isAuthenticated?<div className=" mx-2">
            <a href="https://www.facebook.com/UniversityOfAgricultureFaisalabadPakistan/" target="_blank"><i className="fa-brands fa-facebook fs-3 text-light mx-2"></i></a>
            <a href="https://www.instagram.com/uaf_official/?hl=en" target="_blank"><i className="fa-brands fa-instagram fs-3 text-light mx-2"></i></a>
            <a href="https://twitter.com/UniversityofAg2?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fs-3 text-light mx-2"></i></a>
          </div>        
        :<Link type="button" className="btn btn-warning px-5 py-2 rounded-0 mt-3 text-white signin" to="/auth/login" >LOGIN</Link>            
         }         
      </div>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
      <h1 className="agri">Major Crops in Pakistan</h1>
          <h5 >Cultivating Agriculture that Works for the Future</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
       <h1 className="agri">Vegetables for life</h1>
         <h5 >The vegetable is a healthy choice for a wealthy mind</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>  

   </>
  )
}
