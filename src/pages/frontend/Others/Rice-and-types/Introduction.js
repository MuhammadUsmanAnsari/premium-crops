import React from 'react'

export default function Introduction(props) {
  return (
    <>
    <div className="container mt-5 mb-4">
        <div className="row">
            <div className="col">
        <h1 className="fw-bold my-5 text-center"><u className="text-warning">{props.title}</u></h1>
        <h3>Introduction</h3>
        <p className="text-indent">Rice, just like other grains, is the edible seed of a grass. We are most familiar with rice that comes from Oryza sativa, or Asian rice. Each grain, or seed, of rice contains: A tough outer hull – also known as the husk, the hull needs to be removed before it can be eaten. The hull is removed in all types of rice.</p>
        <p className="text-indent">Bran - An additional layer that lies just under the hull, the bran layer is only removed in certain types of rice varieties, such as white rice. The bran is the nutritious, whole-grain section of a rice grain and though it is typically brownish-tan in color, it may also be red or black depending on the pigmentation in the bran layers. Endosperm (also known simply as white rice) – What remains once the outer hull and bran layers are stripped away. Though this is the most commonly consumed part of rice, it is also the least nutritious.</p>
        <p className="text-indent">Germ - Found under the hull, the germ is not a layer, but a small kernel. It is nutrient-dense and packed full of B vitamins, minerals, proteins, and contributes to the overall color of rice. In general, the white rice we purchase from our local supermarket or grocery store has been milled or stripped of the hull, bran, and germ, leaving behind just the endosperm.</p>
        <h5>Types of Rice:</h5>
            <ul>
                <li>Basmati Rice</li>
                <li>Jasmine Rise</li>
                <li>Wild Rice</li>
                <li>Calrose Rice</li>
                <li>Japanese Short Grain Rice</li>
                <li>Sushi Rice</li>
            </ul>
            </div>
        </div>
    </div>
    </>
  )
}
