import React from 'react'
import NavbarLight from '../../../components/Header/NavbarLight'
import sugarcane1 from '../../../assets/sugarcane1.jpg'
import sugarcane2 from '../../../assets/sugarcane2.jpg'
export default function Sugarcane() {
  return (
    <>
    <NavbarLight/>
    <div className="container my-5">
      <div className="row">
        <div className="col">
        <h1 className="fw-bold my-5 text-center"><u className="text-warning">SUGARCANE CROPS</u></h1>
        <h3>Introduction</h3>
        <p className="text-indent">Sugarcane, Saccharum officinarum, is a perennial grass in the family Poaceae grown for its stem (cane) which is primarily used to produce sucrose. Sugarcane has a thick, tillering stem which is clearly divided into nodes and internodes. The leaves of the plant grow from the nodes of the stem, arranged in two rows on either side of the stem. The leaves are tubular and blade-like, thicker in the centres than at the margins and encircle the stem. The inflorescence of sugarcane is a terminal panicle which possesses two spikelets and seeds protected by husks (glumes) covered in silky hair. Two flowers are produced on the inflorescence, one sterile and the other bisexual. Sugarcane can reach a height of up to 6 m (3.3 ft) and once harvested, the stalk will regrow allowing the plant to live for between 8 and 12 years. Sugarcane may also be referred to as nobel cane and originates from New Guinea.</p>
            <div className="text-center my-5">
              <img src={sugarcane1} width="60%" alt="" />
            </div>
        <h3>Uses of SugarCane</h3>
        <p className="text-indent">Sugarcane is primarily used for the production of cane sugar (sucrose). One of the biproducts of sugarcane production is bioethanol which can be used as a fuel in place of gasoline. The dried fibre which is left over after the extraction of the sugarcane juice is called bagasse and is used in paper and textile production, as a fuel or as an organic mulch.</p>
        <h3>Propagation</h3>
        <p className="text-indent">Basic requirements Sugarcane grows best in tropical and subtropical regions as the plants require a warm, sunny and moist environment for growth. Plants will grow optimally at temperatures between 26 and 33°C (78.8–91.4°F) where there are no frosts which will damage the plants. Sugarcane can be grown successfully in a variety of soils but will perform optimally in deep, well-draining soils, rich in organic matter with a pH between 5.0 and 8.0. Sugarcane requires an average annual rainfall of between 1800 and 2500 mm per year for adequate growth. If rainfall is too low, plants should be grown with irrigation to maximize yield. Propagation Sugarcane is vegetatively propagated by planting part of a mature cane called “setts”. Setts should be cut from carefully selected mature canes. A few days before the cuttings are taken, the end of the canes are removed to break the apical dominance of the cane and promote the breaking of buds. </p>
        <p className="text-indent">The best cuttings are taken from the upper portions of the cane and should be approximately 40 cm (16 in) in length with 2–3 buds. Sugarcane setts should be planted horizontally or at a 45° angle in furrows 15–30 cm (6–12 in) deep. Once in the ground, the setts should be covered with a thin layer of soil. Setts can be grown in a nursery bed and transplanted to the field or planted directly at the final growing site. The average planting density for sugarcane is 15,000–24,000 cuttings per hectare of land. Normally furrow method of planting is followed. A new method called pit method of planting promises two to three times more yield and more ratoon (up to 10) compared to furrow method. General care and maintenance Plantations should be kept free from weeds with weeding being carried out every 3–4 weeks. Weeds can be removed by hand or through the use of machinery or appropriate chemicals. If rainfall is not sufficient to meet the growth requirements of the plants then irrigation must be supplied every 2–4 weeks through furrow or sprinkler irrigation. Soil should be mounded up around the base of the canes 1–2 times during the growing season to promote good root development, aid drainage in heavy soil or prevent lodging in light soils. Harvesting Sugarcane is most commonly harvested by hand cutting Stalks should be cut close to the ground with a sharp knife when the canes are fully mature.</p>
        <h3>Fertilizers</h3>
        <p className="text-indent">Adequate manuring is essential for sustained high yields. The general recommendation in most places is to apply half to two-thirds of the nitrogen in the form of bulky organic manures, such as farmyard manure, compost, green manure or tree leaves, and the remainder in the form of ammonium sulphate or oil-cakes or a combination of the two. For sugarcane fertilizer is recommended according to planting season and it is varied from growing tract to tract. In general for suru sugarcane 250:115:115 for Adsali 400:170:170 and for pre seasonal 340:170:170 kg nitrogen, phosphorus and potash per hectare is recommended respectively. For ratooning 250:115:115kg nitrogen, phosphorus and potash per hectare is recommended.</p>
        <div className="text-center my-5" >
          <img src={sugarcane2} width="60%" alt="" />
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
