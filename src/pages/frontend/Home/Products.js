import React, { useEffect, useState } from 'react'
//animation
import AOS from 'aos'
import 'aos/dist/aos.css'
import list from './Data'
import Product from './Product'

export default function Products() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])  
  //
  const [cart,setCart]=useState([]);
  useEffect(() => {
    const cartProduct = JSON.parse(localStorage.getItem("cart")) || []
    setCart(cartProduct)
  }, [])

  const handleCart=(items)=>{
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    
    cart.push(items)
    setCart(cart)
    // console.log(cart);
    localStorage.setItem("cart",JSON.stringify(cart))
  window.toastify("Added successfully.","success")
  }
 
  return (
    <>  
        <div className="container pb-5 mb-5" data-aos="zoom-in">
        <h2 className="text-center fw-bold py-3 my-5"><u className="text-warning">PRODUCTS</u></h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
          {list.map((items)=>(
            <Product key={items.id} items={items} handleCart={handleCart}/>
            ))}            
        </div>
        </div>
    </>
  )
}
