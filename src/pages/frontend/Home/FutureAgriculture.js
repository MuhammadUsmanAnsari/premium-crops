import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './_pages.scss'
//animation
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function FutureAgriculture() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])
  return (
    <>
    <div className="container my-5 my-md-5 my-lg-0" data-aos="flip-right">
    <div className="row ">
      <div className="col">
        <h2 className="fw-bold"><u className="text-warning">TYPES OF AGRICULTURE</u></h2>
        <p className="text-indent"> Agriculture is the term used to describe the act of growing crops and raising livestock
          for human consumption and use. Currently, agriculture is divided into two different types, including
          industrialized agriculture and subsistence agriculture. Let's explore and learn more about these two types of
          agriculture.</p>
        <ul>
          <li>
            <dl>
              <dt>
                <h2>Industrialized Agriculture</h2>
              </dt>
              <dd className="text-indent">Industrialized agriculture is the type of agriculture where large quantities of
                crops and livestock are produced through industrialized techniques for the purpose of sale. The goal of
                industrialized agriculture is to increase crop yield, which is the amount of food that is produced for
                each unit of land. Crops and livestock made through this type of agriculture are produced to feed the
                masses and the products are sold worldwide.</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <h2>Subsistence Agriculture</h2>
              </dt>
              <dd className="text-indent">Although industrialized agriculture is necessary to feed the growing human
                population, there is another type of agriculture that is regularly practiced today. Subsistence
                agriculture is when a farmer lives on a small amount of land and produces enough food to feed his or her
                household and have a small cash crop. The goal of subsistence agriculture is to produce enough food to
                ensure the survival of the individual family. If there is excess food produced, it is sold locally to
                other families or individuals.</dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    {/* future of agriculture */}
    <div className="row text-center ">
      <h2 className="text-center fw-bold py-3 mb-5"><u className="text-warning">FUTURE OF AGRICULTURE</u></h2>
            <div className="col-12 col-md-5 ">
              <div className="card rounded-0" >
                <Link to="/agriculture_4.0" className="text-dark">
                  <div className="card-img rounded-0">
                    <img src="https://source.unsplash.com/1920x800/?wheat" width="100%" className="card-img-top rounded-0" alt="picture"/>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">What is "Agriculture 4.0?"</h5>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col my-3 my-md-0">
              <div className="card rounded-0" >
                <Link to="/new-technology" className="text-dark">
                  <div className="card-img rounded-0">
                <img src="https://source.unsplash.com/1920x580/?harvester"width="100%" className="card-img-top rounded-0" alt="picture"/>
                  </div>
                <div className="card-body">
                  <h5 className="card-title">New Technology for Agriculture</h5>
                </div>
                </Link>
              </div>
            </div>
    </div>
  </div>  
    </>
  )
}
