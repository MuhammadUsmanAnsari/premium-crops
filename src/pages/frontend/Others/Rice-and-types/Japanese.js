import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import Introduction from './Introduction'
import japanese from '../../../../assets/japanese.jpg'
export default function Japanese() {
  return (
        <>
        <NavbarLight/>
        <Introduction title="Japanese Rice"/>
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <h3>Japanese Short Grain Rice</h3>
        <p className="text-indent">Hinode Koshihikari is a premium short grain variety of rice named after the historic Koshi Province in Japan. The grains are exquisite when traditionally prepared with the proper time and technique. Perfect rice cannot be rushed. This is a variety chosen by chefs for is pure pearly, white color and soft yet slightly sticky texture. Translated from Japanese as the “Light of Koshi,” we savor this delicacy in its purist form. There is no need to cover it with seasonings or sauces. It is often formed into rice balls with seaweed, sashimi or pickled plum to make onigiri or musubi.</p>
            <div className="text-center my-5">
              <img src={japanese} width="60%" alt="" />
            </div>
        <p className="text-indent">Japanese immigrants brought this coveted variety of rice with them during the Gold Rush in the mid 1800’s. With similar clay soils and growing climates, Japanese farmers learned to grow their Koshihikari variety of rice in the Central Valley of Northern California. The tradition continues through generations of rice farmers so you can enjoy Hinode Koshihikari premium short grain rice across the Pacific.</p>
            </div>
          </div>
        </div>
      </>
  )
}
