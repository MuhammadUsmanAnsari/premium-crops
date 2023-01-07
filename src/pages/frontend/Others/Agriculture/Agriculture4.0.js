import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import agriculture1 from '../../../../assets/agriculture1.jpg'
import agriculture2 from '../../../../assets/agriculture2.jpg'
export default function Agriculture() {
  return (
    <>
    <NavbarLight/>
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="text-center mt-5">
            <img src={agriculture1} width="60%" alt="" />
          </div>
              <h1 className="fw-bold my-5 "><u className="text-warning">Agriculture 4.0</u> </h1>
              <p className='text-indent'>To meet a growing world population, a shrinking population of rural farmers will have to produce 70 percent more food by 2050 to meet the needs of an increasingly wealthy and urban population. There are four main developments placing pressure on agriculture to meeting the demands of the future: demographics, Scarcity of natural resources, climate change, and food waste. Climate change alone presents unique challenges to agriculture - which is itself one of the primary producers of GHGs:</p><br />
                  <ul>
                    <li>Increasing variability of precipitation, droughts, and floods is likely to reduce yields</li>
                    <li>Groundwater depletion and soil degradation will affect food systems</li>
                    <li>Crop yields decline significantly when daytime temperatures exceed a crop-specific level</li>
                  </ul><br />
              <p className='text-indent'>Meeting these challenges will require a concerted effort by governments, investors, and innovative agricultural technologies to shift to “Agriculture 4.0”. Agriculture 4.0 will no longer depend on applying water, fertilizers, and pesticides uniformly across entire fields. Instead, farmers will use the minimum quantities required and target very specific areas. Farms and agricultural operations will have to be run very differently, primarily due to advancements in technology such as sensors, devices, machines, and information technology.</p>
              <p className='text-indent'>Future agriculture will use sophisticated technologies such as robots, temperature and moisture sensors, aerial images, and GPS technology. These advanced devices and precision agriculture and robotic systems will allow farms to be more profitable, efficient, safe, and environmentally friendly.</p>
              <div className='text-center my-5'>
              <img src={agriculture2} width="60%" alt="" />
              </div>
        </div>
      </div>
    </div>
    </>
  )
}
