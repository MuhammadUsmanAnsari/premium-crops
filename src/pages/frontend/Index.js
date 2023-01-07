import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../../important/PrivateRoute'
//pages
import Home from './Home/Index'
import About from './Others/About'
import Gallery from './Others/Gallery/Gallery'
//dropdown pages
import Wheat from './Dropdown-items/Wheat'
import Maize from './Dropdown-items/Maize'
import Sugarcane from './Dropdown-items/Sugarcane'
import Oilseed from './Dropdown-items/Oilseed'
//future agriculture
import Agriculture from './Others/Agriculture/Agriculture4.0'
import NewTechnology from './Others/Agriculture/NewTechnology'
//pulses types
import BlackBean from './Others/Pulses-and-types/BlackBean'
import SplitRedLentils from './Others/Pulses-and-types/SplitRedLentils'
import YellowPigeonPeas from './Others/Pulses-and-types/YellowPigeonPeas'
import AdzukiBeans from './Others/Pulses-and-types/AdzukiBeans'
import RedKidneyBeans from './Others/Pulses-and-types/RedKidneyBeans'
import BlackGramBeans from './Others/Pulses-and-types/BlackGramBeans'
//rice types
import Basmati from './Others/Rice-and-types/Basmati'
import Jasmine from './Others/Rice-and-types/Jasmine'
import Wild from './Others/Rice-and-types/Wild'
import Calrose from './Others/Rice-and-types/Calrose'
import Japanese from './Others/Rice-and-types/Japanese'
import Sushi from './Others/Rice-and-types/Sushi'
import Footer from '../../components/Footer/Footer'
//page not found
import NotFound from '../PageNotFound'
export default function Index() {
  return (
    <>
            <main>
        <Routes>
          <Route path='/gallery' element={<PrivateRoute Component={Gallery}/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            {/* future agriculture */}
            <Route path='/new-technology' element={<NewTechnology/>}/>
            <Route path='/agriculture_4.0' element={<Agriculture/>}/>
            {/* dropdown */}
                <Route path='/crops/wheat' element={<Wheat/>}/>
                  <Route path='/crops/maize' element={<Maize/>}/>
                  <Route path='/crops/sugarcane' element={<Sugarcane/>}/>
                  <Route path='/crops/oilseed' element={<Oilseed/>}/>
            {/* pulses types */}
            <Route path='/crops/pulses/black_eyed_beans' element={<BlackBean/>}/>
                  <Route path='/crops/pulses/Split_Red_Lentils' element={<SplitRedLentils/>}/>
                  <Route path='/crops/pulses/Yellow_Pigeon_Peas' element={<YellowPigeonPeas/>}/>
                  <Route path='/crops/pulses/Adzuki_Beans' element={<AdzukiBeans/>}/>
                  <Route path='/crops/pulses/Red_Kidney_Beans' element={<RedKidneyBeans/>}/>
                  <Route path='/crops/pulses/Black_Gram_Beans' element={<BlackGramBeans/>}/>
            {/* rice types */}
            <Route path='/crops/rice/basmati_rice' element={<Basmati/>}/>
                  <Route path='/crops/rice/jasmine_rice' element={<Jasmine/>}/>
                  <Route path='/crops/rice/wild_rice' element={<Wild/>}/>
                  <Route path='/crops/rice/calrose_rice' element={<Calrose/>}/>
                  <Route path='/crops/rice/japanese_rice' element={<Japanese/>}/>
                  <Route path='/crops/rice/sushi_rice' element={<Sushi/>}/>
                  {/* page not found */}
            <Route path='*' element={<NotFound/>}/>

        </Routes>
            </main>
        <Footer/>
    </>

  )
}
