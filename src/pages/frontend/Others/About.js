import React from 'react'
import '../Home/_pages.scss'
//images
import usman from '../../../assets/usman.jpg'
import abdulrehman from '../../../assets/abdul rehman.jpg'
export default function Section() {
  return (
    <>
      <h2 className="text-center fw-bold py-3 mt-5" id='about'><u className="text-warning">ABOUT US</u></h2>
       <section  >     
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col ">
            <div>
              <img src={usman} className="rounded-pill " width="180px" alt="" />
            </div>
            <div className=" mt-5">
                <h3 className='block'>Muhammad Usman</h3>
                <div><u>Phone:</u> <a href="tel:+923007588836" className='fs-5  text-white text-decoration-none'> +92 300 7588836</a> </div> 
                <div><u>Email:</u>  <a href="mailto:usmanarif2913@gmail.com" className="fs-5 text-white text-decoration-none "> usmanarif2913 @gmail.com</a></div>
                </div>
          </div>
          <div className="col mt-5 mt-md-0">
          <div>
              <img src={abdulrehman} className="rounded-pill " width="180px" alt="" />
            </div>
            <div className=" mt-5">
                <h3 className='block'>Abdul Rehman</h3>
                <div><u>Phone:</u> <a href="tel:+923187139577" className="fs-5 text-white text-decoration-none ">+92 318 7139577</a> </div> 
                <div><u>Email:</u>  <a href="mailto:usmanarif2913@gmail.com" className="fs-5 text-white text-decoration-none "> usmanarif2913 @gmail.com</a></div>
                </div>
          </div>
        </div>
    </section>
    </>
  )
}
