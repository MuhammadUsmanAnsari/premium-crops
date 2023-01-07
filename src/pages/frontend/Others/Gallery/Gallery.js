import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import './_pictures.scss'
export default function Gallery() {
  return (
    <>
    <NavbarLight/>
    <div className="container mb-5">
      <div className="row g-2  mt-5 gallery">
        <h2 class="text-center fw-bold py-3 my-5" id='about'><u className="text-warning">GALLERY</u></h2>
          <div className="col-12 col-md-6">
            <img src="https://source.unsplash.com/1920x1300/?harvester" className='w-100' alt="picture" />
          </div>
          <div className="col ">
            <img src="https://source.unsplash.com/1920x2800/?rice-crops" className='w-100' alt="picture" />
          </div>
          <div className="col ">
            <img src="https://source.unsplash.com/1920x1800/?farmers" className='w-100' alt="picture" />
          </div>
          <div className="col ">
            <img src="https://source.unsplash.com/1920x1800/?black-beans" className='w-100' alt="picture" />
          </div>
      </div>
      {/* second row */}
      <div className="row g-2 mt-1 gallery">          
          <div className="col ">
            <img src="https://source.unsplash.com/1920x2800/?wheat" className='w-100' alt="picture" />
          </div>
          <div className="col ">
            <img src="https://source.unsplash.com/1920x1800/?maize" className='w-100' alt="picture" />
          </div>
          <div className="col ">
            <img src="https://source.unsplash.com/1920x1800/?harvester" className='w-100' alt="picture" />
          </div>
          <div className="col-3 col-md-4">
            <img src="https://source.unsplash.com/1920x1300/?sugarcane-crops" className='w-100' alt="picture" />
          </div>
      </div>
      {/* third row */}
      <div className="row g-2 mt-1 gallery">          
          <div className="col ">
            <img src="https://source.unsplash.com/1920x2800/?harvester" className='w-100' alt="picture" />
          </div>
          <div className="col-6">
            <img src="https://source.unsplash.com/1920x1300/?crops" className='w-100' alt="picture" />
          </div>
          <div className="col-12 col-md-3">
            <img src="https://source.unsplash.com/1920x1800/?lemon" className='w-100' alt="picture" />
          </div>
          
      </div>
      
    </div>
    </>
  )
}
