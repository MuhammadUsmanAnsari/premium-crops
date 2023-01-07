import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import Introduction from './Introduction'
import calrose from '../../../../assets/calrose.jpg'
export default function CalroseFunction() {
  return (
    <>
    <NavbarLight/>
    <Introduction title="Calrose Rice"/>
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <h3>Calrose Rice</h3><br /><br />
          <h5>What Exactly is Calrose Rice?</h5>
        <p className="text-indent">Calrose rice is a medium grain rice variety. After cooking, it becomes slightly soft and sticky, making it a versatile rice perfect for use in a wide range of dishes. The name "Calrose" comes from "Cal" as a nod to California, where the grain is grown, and "rose," which is a continuation of a naming tradition that includes "Blue Rose," a medium grain rice previously developed in Louisiana.</p>
        <h5>Where is Calrose Rice From?</h5>
        <p className="text-indent">Calrose rice was developed at the Rice Experiment Station run by the California Cooperative Rice Research Foundation and is sometimes referred to as the "founding" grain for the California rice industry. Calrose rice was released to California growers during 1948 and quickly grew to be one of the state's most popular rice varieties. Today, 85 percent of all Californian rice production is made up of Calrose rice.</p>
        <h5>What Dishes Should Calrose Rice Be Used In?</h5>
        <p className="text-indent">Calrose is a medium grain rice. Once cooked, it becomes slightly soft and sticky, making it ideal for dishes where the grains need to hold up, like sushi, soups, or salads. Calrose rice also has a very mild flavor, meaning it can absorb any bold ingredients, such as herbs and spices, with ease.</p>
        <div className="text-center my-5">
          <img src={calrose} width="60%" alt="" />
        </div>


        </div>
      </div>
    </div>
    </>
  )
}
