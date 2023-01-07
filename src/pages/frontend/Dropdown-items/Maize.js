import React from 'react'
import NavbarLight from '../../../components/Header/NavbarLight'
import maize from '../../../assets/maize.jpg'
export default function Maize() {
  return (
    <div>
      <NavbarLight/>
      <div className="container my-5">
        <div className="row">
          <div className="col">
          <h1 className="fw-bold my-5 text-center"><u className="text-warning">MAIZE CROPS</u></h1>
          <h3>Introduction</h3>
          <p className="text-indent">Corn is an annual C4 grass plant. It has large, elongated, narrow leaves that grow alternately in opposite sites around the stems. Thanks to its strong, erect stem, the plant can reach from 1 to 4 meters (depending on the variety). The root system, which can become even 60 cm long, consists of seminal, adventitious, and prop roots produced from the lower or underground nodes of the stem. </p>
          <p className="text-indent">Maize is a wind-pollinated monoecious plant, meaning that each plant produces both male (tassel, staminate) and female inflorescences (pistillate, ears, or cobs). The male part is at the apex of the stem, at the top of the plant, while the female flower (could be one or more per plant) grows at the side of the stem and becomes easily detectable when the silks (elongate stigmas) appear at the end of the ear. The pollen production-dispersal starts around three days before the emergence of the silks and continues for a week to ensure that there will be enough viable pollen grains to stick on the sticky hairs of the silks and fertilize them. Although maize is self-compatible, only 5% of the ovules are self-pollinated, while 95% are cross-pollinated with the help of wind. For this reason, generally, it is suggested not to plant corn in a single long row but keep the plants in a group. </p>
          <div className="text-center my-5">
            <img src={maize} width="60%" alt="" />
          </div>
          <h3>Maize production, commercial variety types, and uses of corn</h3>
          <p className="text-indent">Except for maize (originally a Spanish word), another common name of the crop is corn, mainly used in British-speaking countries since maize was the most abundant of all grains.  The top maize-producing country globally is the USA. At the same time, China, Brazil, and Argentina account for over 60 percent of total maize production , followed by Ukraine and France for Europe. The type of maize cultivated varies significantly between the different regions or countries (for example, in the USA, more than 80% of the production accounts for yellow maize, while in the developing countries, the areas cultivated with white maize are much larger compared to yellow corn varieties . Except for the yellow and white varieties, there is a significant variation in the natural pigments of the maize grains from white to yellow, red, blue, purple, etc. </p>
          <p className="text-indent">The maize varieties with the highest commercial-economic importance are grouped into four main categories: Dent maize, Flint maize, popcorn, and sweetcorn. Some include the groups of the pod, waxy and high-amylose corn. This classification is mainly based on the kernel texture.<br /> Depending on the product’s final use, people can use both the grains and the vegetative parts of the plant. </p>
          <p className="">The grain of maize is used as:</p>
            <ul>
              <li>Animal feed</li>
              <li>Human consumption (it is considered a staple food in many countries, and it is gluten-free) and oil production for culinary purposes.</li>
              <li>Industrial products (biodegradable foams, plastics, and adhesives)</li>
              <li>The maize stover, the leaves, and stalk of the maize plant, are used for</li>
              <li>Forage</li>
              <li>Biofuel production</li>
              <li>Chemical production</li>
            </ul>
          <p className="text-indent">Almost 70% of maize production in the USA is used for animal feed and ethyl alcohol production (biofuels). However, in the EU, things are different, with most of the output being used as feedstuff. Finally, maize is a plant of great importance for the scientific community since it has been used as a model organism for genetics and molecular biology for over 100 years now. </p>
          
          
          
          


          </div>
        </div>
      </div>
    </div>
  )
}
