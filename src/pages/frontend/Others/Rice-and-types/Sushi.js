import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import Introduction from './Introduction'
import sushi from '../../../../assets/sushi.jpg'
export default function Sushi() {
  return (
    <>
    <NavbarLight/>
    <Introduction title="Sushi Rice"/>
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <h3>Sushi Rice</h3>
          <div className="text-center my-5">
            <img src={sushi} width="60%" alt="" />
          </div>
        <p className="text-indent">Sushi rice, or sushi meshi, as short-grain Japanese rice is commonly called, is best known for the stickiness of its grains. Cultivated for over 2,000 years, rice is Japan’s most important crop, its influence reflected in Japan’s culture and language. In Japan, rice is called “O-kome” (uncooked rice) or “Go-han” (cooked rice) and is so revered that both terms have attached to them the honorific prefixes of “O” and “Go.” Japanese rice is a ‘short-grain’ rice with a much higher ratio of the starch amylopectin to the starch amylose than its medium and longer grain cousins, which results in the rice being much stickier when cooked. This stickiness (and the short-grain cultivar) has been artificially selected for over time by cultivators in Asia, which has resulted in a rice that is markedly different than the traditional rice cultivated outside Asia. This property allows the rice to be easily eaten with chopsticks as well as shaped into the myriad styles of sushi we see today.</p>
        <p className="text-indent">Rice is used in a great many products throughout Japan, being made into sake, rice flour, rice wine vinegar and mochi, a pounded rice cake traditionally eaten on the new year, now becoming more popular as an everyday item. While rice consumption is in decline in Japan, it is still a very common accompaniment to meals. In fact, people even call each meal “gohan,” such as “asa-gohan” for breakfast. </p>

        </div>
      </div>
    </div>
    </>
  )
}
