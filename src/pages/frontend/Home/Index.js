import React from 'react'
import '../Home/_pages.scss'
//navbar
import Navbar from '../../../components/Header/Navbar'
//home page components
import Home from './Carousel'
import FutureAgriculture from './FutureAgriculture'
import Section from '../Others/About'
import Products from './Products'
import ProductsCopy from './ProductsCopy'

export default function Index() {
  
  return (
    <>
    <Navbar />
    <Home/>
    <FutureAgriculture />
    <Section/>
    <Products/>
    <ProductsCopy/>
    
    </>
  )
}
