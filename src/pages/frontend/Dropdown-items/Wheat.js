import React from 'react'
import NavbarLight from '../../../components/Header/NavbarLight'
import wheat1 from '../../../assets/wheat1.jpg'
import wheat2 from '../../../assets/weat2.jpg'
export default function Wheat() {
    return (
        <>
            <NavbarLight />
            <div className="container my-5">
                <div className="row ">
                    <div className="col">
                        <h1 className="fw-bold my-5 text-center"><u className="text-warning">WHEAT CROPS</u></h1>
                        <h3>Introduction</h3>
                        <p className="text-indent">As a food crop essential to the making of bread, pastry, and pasta, wheat products are eaten by many people at every meal. Wheat products are valued for their taste and for their nutritional benefit. (See also agriculture; breakfast cereal; food and nutrition.) Wheat is one of the oldest cereal crops. It was cultivated as long as 9,000 years ago in the Euphrates Valley of the Middle East. Egyptian pharaohs were buried with an ancient variety of wheat to help nourish them on their voyage into the afterlife.</p>
                        <p className="text-indent">Wheat was also harvested by the ancient Greeks and Romans. It spread from its place of origin into Central Europe and into China, where it has been grown for perhaps 5,000 years. Wheat was brought to North America after the discovery of the New World, but corn remained the major crop of the early settlers. After winter-hardy varieties of wheat were brought to the Great Plains in the 1800s, acreage grew rapidly. In 2010 more than 650 million metric tons of wheat were produced. The world’s largest producer in that year was China, with an estimated annual yield of about 115 million metric tons. Other leading producers were India, the United States, Russia, and the countries of the European Union. Wheat is a major crop throughout the United States, except in Alaska, Hawaii, and the New England states.</p>
                        <p className="text-indent">Wheat is easily handled and stored. The wheat berry is small and has high food value. Stored wheat is a highly concentrated form of food. Five bushels of wheat, when processed, will produce more than a barrel of flour. Wheat keeps so well that it can be shipped around the world or stored for years. Wheat is called a grain. A grain is a member of the grass family Gramineae that yields a starchy seed suitable for food. Other grains are barley, corn, millet, oats, rice, and sorghum.</p>
                        <h3>Kinds of Wheat</h3>
                        <p className="text-indent">There are two basic types of wheat: winter and spring. Winter wheat is seeded in the fall, grows slowly during the winter months, accelerates in growth as spring arrives, and is ready for harvest in early summer. Where winters are harsh, spring wheat is planted in the spring and harvested in late summer. It can also be sown in the fall where winters are very mild.</p>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <img src={wheat1} className='w-100' height="400px" alt="" />
                            </div>
                            <div className="col my-4 my-md-0">
                                <img src={wheat2} className='w-100' height="400px" alt="" />
                            </div>
                        </div>
                        <h3 className='mt-4'>Growing Conditions</h3>
                        <p className="text-indent">Weather that is comfortable for humans is also good for wheat. Wheat needs 12 to 15 inches (31 to 38 centimeters) of water to produce a good crop. It grows best when temperatures are warm, from 70° to 75° F (21° to 24° C), but not too hot. Wheat also needs a lot of sunshine, especially when the grains are filling. Areas with low humidity are better since many wheat diseases thrive in damp weather. Spring wheat and winter wheat differ not only in the time they are planted but also in their temperature requirements. Winter wheat, which is planted in the fall, becomes dormant when temperatures drop below freezing. It remains alive but does not grow until the weather becomes warmer. Winter wheat actually requires cold weather in order to develop normally. If planted in the spring, it will not form heads. In extreme cold, however, winter wheat can die. During cold weather, a snow-covered ground insulates the soil and keeps the wheat warmer than the air.</p>
                        <p className="text-indent">Wheat grows in many types of soil, but it grows best in well-drained loam or clay-loam soils. Two major threats to the wheat plant’s growth are poor soil drainage and high levels of soil acidity. The large amount of aluminum usually contained in acidic soils is poisonous to wheat. Some of the elements necessary for growth that are provided by the soil are nitrogen, phosphorus, potassium, sulfur, zinc, copper, boron, manganese, iron, and magnesium. Of these, nitrogen is required in the largest amount because it is part of all the proteins in the plant. Wheat also needs a lot of phosphorus, most of which ends up in the grain. Other nutrients from the soil are needed in smaller amounts, but all must be present for healthy plant growth and color.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
