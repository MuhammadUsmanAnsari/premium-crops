import React from 'react'
import firstPic from '../../../../assets/new technology1.jpg'
import laser from '../../../../assets/laser scarecrow.jpg'
import farm from '../../../../assets/form-automation.png'
import NavbarLight from '../../../../components/Header/NavbarLight'
export default function NewTechnology() {
  return (
      <>
      <NavbarLight/>
      <div className="container ">
            <div className="row">
                <div className="col">
                    <div className="text-center mb-5">
                        <img src={firstPic} className="w-75 " alt=""/>
                    </div>
                    <h1 className="fw-bold mb-5 "><u className="text-warning">5 New Technologies in Agriculture</u> </h1>
                    <dl>
                        <dt><h2>Bee Vectoring Technologies</h2></dt>
                        <dd className="text-center">
                            <p className="text-indent">When it comes to U.S. crop production, honey bees are worth $20
                                billion. These insects are essential to human survival, so there is increasing
                                innovation in agriculture equipment to help protect bees and maximize their pollination
                                capabilities.BVT uses commercially reared bees to deliver targeted crop controls through
                                pollination, replacing chemical pesticides with an environmentally safe crop protection
                                system.</p>
                            <p className="text-indent">The system doesn't require spraying water or the use of tractors.
                                Instead, the scientifically designed bumblebee hive allows bees to pick up a trace
                                amount of pest control powders on their legs to spread as they travel within the field.
                                This innovation in agriculture technology supports improved sustainable farming, crop
                                yield, and soil quality. BVT's solution is suitable for many crops, including
                                blueberries, sunflowers, apples, and tomatoes, and it also works for farms of all sizes.
                            </p>
                        </dd>
                        <dt><h2> Indoor Vertical Farming</h2></dt>
                        <dd>
                            <p className="text-indent">The average yield of rice per hectare is between three and six
                                tonnes. However, farmers don't have to face this limitation when using indoor vertical
                                farming. This Indoor vertical farming grows farm produce stacked above another in a
                                closed and controlled environment. The technology uses growing shelves mounted
                                vertically to increase crop yield in limited spaces. Quite often, the shelves don't
                                require soil—they're either hydroponic or aeroponic:</p>
                            <ol>
                                <li><strong>Hydroponics</strong> is a gardening practice that grows plants in water and
                                    nutrient solutions.</li>
                                <li><strong>Aeroponics</strong> suspends the roots of the crops in the air, with
                                    emitters intermittently spraying them with water and nutrients.</li>
                            </ol>
                            <p className="text-indent mt-3">Indoor vertical farms enable growers to control variables such
                                as light, temperature, water, and sometimes, carbon dioxide levels, allowing them to get
                                healthier and bigger yields. Other benefits of the technology include 70% less water
                                usage, which conserves energy, and reduced labor costs due to the use of robots for
                                harvesting and planting.</p>
                            </dd>
                        <dt><h2>Laser Scarecrows</h2></dt>
                        <dd className="text-center">
                            <p className="text-indent">Pesky birds or rodents can be a menace to growing crops in an open
                                field. In the past, farmers relied on traditional scarecrows to ward off hungry
                                invaders. But today, farm owners and managers are turning to high-tech devices with
                                motion sensors to keep birds from pillaging crops.</p>
                                <p className="text-indent">After discovering that birds are sensitive to the color green, a
                                    researcher from the University of Rhode Island helped design a laser scarecrow, which
                                    projects green laser light. The light isn't visible by humans in sunlight, but it can
                                    shoot 600 feet across a field to startle birds before destroying crops.</p>
                                    <p className="text-indent">Early tests with laser scarecrows found that the devices can minimize
                                        crop damages by reducing the bird population around farmlands by up to 70% to 90%.</p>
                                <img src={laser} width="50%" alt=""/>
                         </dd>
                                <dt><h2>Farm Management Software</h2></dt>
                                <dd>
                                   <p className="text-indent">Farm management software is an integrated platform that provides
                                            real-time data and information, like a digital checklist, to assist farmers with
                                tracking daily activities. With this monitoring and reporting software, farmers can
                                improve decision-making throughout all operations.</p>
                            <p className="text-indent">FarmERP, an enterprise resource planning solution, allows farms to
                                streamline their processes and enables seamless collaborations. It lets users manage
                                procurement, supply chain, finances, and processing from a single hub.</p>
                            <p className="text-indent">This innovation in agriculture technology will continue to advance as
                                internet-enabled devices become ubiquitous. Mordor Intelligence predicts the farm
                                management software market will witness a CAGR of 11.2% in the ten years leading to
                                2026.</p>
                        </dd>
                        <dt><h2>Farm Automation</h2></dt>
                        <dd className="text-center">
                            <p className="text-indent">Farm automation brings together agricultural machinery, computer
                                systems, electronics, chemical sensors, and data management to improve equipment
                                operation and decision-making, and ultimately, reduce human input and error.</p>
                            <p className="text-indent">Reduced labor time, higher yields, and the efficient use of resources
                                are driving the large-scale adoption of the technology. Farmers now use automated
                                harvesters, drones, autonomous tractors, seeding, and weeding to transform how they
                                cultivate their crops. The technology takes care of menial and recurring tasks, allowing
                                them to focus on more critical functions.</p>
                                <img src={farm} width="50%" alt=""/>

                        </dd>
                    </dl>
                </div>
            </div>
        </div>
      </>
  )
}
