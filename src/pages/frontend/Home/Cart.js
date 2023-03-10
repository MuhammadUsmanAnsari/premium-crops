import React, { useContext, useEffect, useState } from 'react'
import NavbarLight from '../../../components/Header/NavbarLight';
import { AuthContext } from '../../../Context/AuthContext';

export default function Cart() {
  const [cart,setCart]=useState([]);
const {counter,setCounter}=useContext(AuthContext)
  useEffect(() => {
    const cartProduct = JSON.parse(localStorage.getItem("cart")) || []
    setCart(cartProduct)
  }, [])
const handleDelete=(get)=>{
  let filterCart=cart.filter((oldpro)=>{
    return oldpro.id!==get
  })
  setCounter(cart.length-1);
  setCart(filterCart)
  localStorage.setItem("cart",JSON.stringify(filterCart))
  window.toastify("Removed successfully","success")
}



console.log(cart);
    return (
    <>
    <NavbarLight/>
    <div className="container mt-5">
      <div className="row ">
        <div className="col">
        <h2 className="text-center fw-bold py-3 my-5"><u className="text-warning">YOUR PRODUCTS</u></h2>
        {!cart.length
        ? <div className='card text-center py-5 '>
          <h3 className='text-danger'>No Products are available</h3>
        </div>
        :<div className="table-responsive">
        <table className="table">
          <thead className='bg-warning text-white'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col" className='float-end'>Action</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          {cart.map((cart,i)=>{
            return <tr key={i}>
              <th scope="row">{i+1}</th>
              <td><img src={cart.img} className="rounded-circle" height="50px" width="50px" alt="" /> </td>
              <td>{cart.title}</td>
              <td>{cart.price}</td>

              <td><button className="btn btn-sm float-end mt-2 btn-danger rounded-pill" >Check Out</button></td>              
              <td><button type="button" class="btn btn-sm btn-close float-end" onClick={()=>{handleDelete(cart.id)}} aria-label="Close"></button></td>
            </tr>
          })}
          </tbody>
        </table>
        </div>
        }

        </div>
      </div>
    </div>
    </>
  )
}
