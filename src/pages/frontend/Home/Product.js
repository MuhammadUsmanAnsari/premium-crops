import React from 'react'
import { Link } from 'react-router-dom';

const Product=({items,handleCart})=>{
    const {id,title,price,img,link}=items;

    return (
    <>
        <div className="container">
                <div className="col mt-4">
                  <div className="card border shadow ">                                        
                  <div className="card-img products">
                        <img src={img} width="100%" height="160px" className="card-img-top hovered-pics" alt="picture"/>
                        <div className='seeMore '>
                      <Link to={link} className="text-decoration-none fs-4 text-primary m-0 p-0" ><button className='btn btn-sm btn-danger text-white shadow'>See more...</button></Link>
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <h6 className="card-title ">{title}</h6>
                        <p>{price}</p>
                        <button className='btn btn-sm btn-warning text-white w-100 mx-auto mb-3'onClick={()=>handleCart(items)} >Add to cart</button>
                    </div>
                  </div>
                </div>
            </div>
    </>
  );
};


export default Product;

