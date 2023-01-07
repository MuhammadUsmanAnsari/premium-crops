import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import Introduction from './Introduction'
import basmati from '../../../../assets/basmati.jpg'
export default function Basmati() {
  return (
    <>
    <NavbarLight/>
    <Introduction title="Basmati Rice"/>
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <h3>Basmati Rice</h3>
          <div className="text-center my-4 ">
            <img src={basmati}  width="60%" alt="" />
          </div>
            <p className="text-indent">Basmati is a special type of rice with long, slender grains having a specific smell of aroma. Historical and scientific evidences clearly show that traditional basmati quality is ecologic specific in terms of climatic and edaphic characteristics and can only be achieved when basmati cultivars are grown in the traditional basmati area locally named as ‘kallar tract’ of Punjab province of Pakistan and explicit areas of India. Pakistan earns about 2 billion US$ through its export annually. Since establishment of explicit rice research station in 1926, twenty seven (27) basmati rice varieties have been released for Basmati rice growers of Pakistan. First ever basmati variety ‘Basmati 370’ was released in 1933 for rice farming by Rice Farm, Kala Shah Kaku (now Rice Research Institute, Kala Shah Kaku). This basmati variety “Basmati 370” has been utilized as mother variety of almost all basmati varieties released hereafter. In 1968, another famous basmati variety ‘Basmati Pak’ with extra-long grain length was released by Rice Research Institute, Kala Shah Kaku using Basmati 370 as parent variety through conventional hybridization technique.</p>
            <p className="text-indent"> The world’s famous ‘Super Basmati’ rice variety was released in 1996 by RRI KSK; that is still famous in international market due to its exceptional cooking quality. Super Basmati is also a famous cultivar among basmati growers in Pakistan due to its export price, agro-physiological traits and unwavering yield returns. Strenuous research efforts resulted in drastic increase in yield potential from 3.0 t/ha to 7.5 t/ha, reduction in plant height from 170 cm to 115 cm, increase in grain length from 6.5 mm to 8.1 mm and reduction in maturity period from 130 days to 98 days. Modern molecular breeding approaches were also deployed for development of new basmati rice varieties having tolerance for biotic (bacterial leaf blight) and abiotic (drought, submergence and salinity) stresses. Development of basmati hybrids is one of major research emphases these days in basmati research & Development. So far, a number of cytoplasmic male strile (CMS) lines, restorers and maintainers have been developed in basmati background for evolving basmati hybrids. </p>          
        </div>
      </div>
    </div>
    </>
  )
}
