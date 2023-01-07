import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
//pics
import basmati from '../../../assets/basmati.jpg'
import sushi from '../../../assets/sushi.jpg'
import wild from '../../../assets/wildRice.jpg'
import calrose from '../../../assets/calrose.jpg'
import jasmine from '../../../assets/jasmine.jpg'
import japanese from '../../../assets/japanese.jpg'
//animation
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Products() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])  
  return (
    <>  
        <div className="container" data-aos="zoom-in">
      <h2 className="text-center fw-bold py-3 my-5"><u className="text-warning">PRODUCTS</u></h2>
            <div className="row row-cols-2 row-cols-md-6">
                <div className="col">
                  <div className="card border-0 " >
                    <Link to='/crops/rice/basmati_rice'  scr className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src={basmati} width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Basmati Rice</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/rice/sushi_rice" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src={sushi} width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Sushi Rice</p>
                    </div>
                    </Link>
                  </div>
                </div><div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/rice/wild_rice" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src={wild} width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Wild Rice</p>
                    </div>
                    </Link>
                  </div>
                </div><div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/rice/calrose_rice" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src={calrose} width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Calrose Rice</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/rice/jasmine_rice" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src={jasmine} width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Jasmine Rice</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/rice/japanese_rice" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src={japanese} width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Japanese Rice</p>
                    </div>
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
