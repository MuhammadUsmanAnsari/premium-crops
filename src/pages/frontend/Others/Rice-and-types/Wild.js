import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import Introduction from './Introduction'
import wildRice from '../../../../assets/wildRice.jpg'
export default function Wild() {
  return (
   <>
    <NavbarLight/>
    <Introduction title="Wild Rice"/>
    <div className="container mb-5">
      <div className="row">
        <div className="col">
        <h3>Wild Rice</h3>
        <p className="text-indent">The methods used to harvest rice have remained unchanged for centuries.  A canoe is pushed through the rice beds with a long forked pole.  The "poler" stands in the front, while the "knocker" sits in the rear of the canoe.  The knocker uses two carved cedar sticks to harvest the rice grains.  The knocker will use a stick to gently bend the rice stalks over the side of the canoe and the other stick to stroke or tap the rice kernels off the stalk. Some kernels fall into the water to re-seed the rice bed. Past generations would process the "green" rice at the landing using traditional methods. Today, the rice is put into large bags upon returning to the landing and taken to rice processing facilities.</p>
        <p className="text-indent">Historically, rice was dried by spreading it out on birch bark or blankets on the ground and continuously raking it to allow the air and sun to dry it. The rice was allowed to dry for a day or two. Another method used was to spread the rice out on drying racks constructed from green branches and grass and then by placing the racks over the fire. With the introduction of the cast-iron kettle during the fur trade era, parching became the preferred drying method. The rice is roasted in a cast-iron kettle over a fire and stirred with a cedar paddle. Parchers know the rice is properly dried when they pinch a kernel between their fingers and the kernel breaks. Parching usually takes about an hour to complete. After parching, the rice kernel is further loosened from the hull by strenuous foot thrashing, also known as "jigging." The common method of jigging is to dig a small pit in the earth, line it with wood slats or a blanket, place a closed bag of rice into the pit, and start treading. To assist balance and help the treader control the amount of weight applied to the rice, two poles are placed alongside the pit in a V-shape. The final step in processing wild rice is "winnowing," or tossing the rice in the air. Using a winnowing basket, or "nooshkaachinaaganan," the rice is tossed in the air numerous times to allow the lighter weight chaff to blow away, leaving the rice kernels ready for cooking or long-term storage.</p>
            <div className="text-center my-5">
              <img src={wildRice} width="60%" alt="" />
            </div>
        <p className="text-indent">Wild rice was a staple food of American Indians. It is also a food for wild birds and waterfowl, especially mallard, bobolink, blackbirds, and Carolina rail. It has been a luxury food that has complimented wild game dishes for many years, but only when harvested from lakes and rivers. However, during the last fifteen years, since its cultivation, wild rice has become more plentiful and can be found in many stores. One of the most famous Indian dishes was tassimanonny, which is wild rice, corn, and fish boiled together. Perhaps its greatest fame is when it is used as side dish with (or inside) wild gamebirds, ducks, pheasants, quail, and turkeys. Aquatic birds readily stuff themselves with wild rice, which may constitute more than 10% of the stomach contents of black ducks, mallards, and wood ducks. Today, because of its increased abundance, wild rice is used in a variety of ways. It is used in place of potatoes, either alone or mixed with other rice, in soups, salads and even deserts.</p>
        </div>
      </div>
    </div>
   </>
  )
}
