import React from 'react'
import NavbarLight from '../../../../components/Header/NavbarLight'
import Introduction from './Introduction'
import jasmine from '../../../../assets/jasmine.jpg'
export default function jasmineFunction() {
  return (
    <>
    <NavbarLight/>
    <Introduction title="Jasmine Rice"/>
    <div className="container mb-5">
      <div className="row">
        <div className="col">
        <h3>Jasmine Rice</h3>
        <p className="text-indent">In over 100 countries, rice is a prominent nutritional source that is served with a variety of flavorful dishes. Jasmine rice, also known as Thai fragrant rice, is an aromatic “long-grain” rice where each grain is about four times as long as it is wide. </p>
            <div className="text-center my-4">
              <img src={jasmine} width="60%" alt="" />
            </div>
        <p className="text-indent">Jasmine rice comes in a variety of colors. White jasmine rice, in particular, is largely processed and has more nutritional similarities to white rice than to brown jasmine rice. Jasmine rice also comes in black, purple, and red varieties, each with slightly different nutritional profiles. Be sure to read the nutritional label of the jasmine rice you’re cooking for the most accurate nutritional information. Adding jasmine rice to your diet can offer you health benefits. However, there are also a few risks that you should watch out for.</p>
        <h5>Nutrition Information</h5>
        <p>One ¼ cup serving of brown jasmine rice contains: </p>
          <ul>
            <li>Calories: 160</li>
            <li>Fat: 1 gram</li>
            <li>Cholesterol: 0 grams</li>
            <li>Sodium: 0 grams</li>
            <li>Carbohydrates: 36 grams</li>
            <li>Fiber: 2 grams</li>
            <li>Sugar: 0 grams</li>
            <li>Protein: 3 grams</li>
          </ul><br /><br />
          <h5>Potential Health Benefits of Jasmine Rice</h5>
        <p className="text-indent">Because rice is a staple food in many countries, scientists have focused a lot of energy on researching how different rices affect the human body. Jasmine rice offers a number of health benefits such as:</p>
          <ul>
              <li>
                <h5>Improved Immune System</h5>
              <p className="text-indent">Colorful varieties of jasmine rice, including red, purple, and blue, are packed with phytonutrients. Phytonutrients help protect your body’s cells, improving your immune system and overall health.</p>
              </li>
              <li>
                <h5>Promotes Healthy Pregnancy</h5>
              <p className="text-indent">Jasmine rice is packed with folic acid. Folic acid has been linked to promoting healthy pregnancies, especially when taken before pregnancy and within the first trimester. Specifically, regular folic acid intake has been linked to reduced levels of birth defects and neural tube defects. This makes jasmine rice a healthy choice while trying to conceive and during pregnancy. </p>
              </li>
              <li>
                <h5>Supports Digestive Health</h5>
              <p className="text-indent">Brown jasmine rice has a higher fiber content than white jasmine rice. Brown rice is less processed which means that fiber and nutrients remain intact. Dietary fiber normalizes bowel movements and helps maintain your digestive health.</p>
              </li>
              
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}
