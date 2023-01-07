import React from 'react'
import NavbarLight from '../components/Header/NavbarLight'

export default function PageNotFound() {
  return (
    <>
    <NavbarLight/>
        <div className="container mt-5">
            <div className="row notFound">
                <div className="col text-center">
                    <div className='text-warning '>404!</div>
                    <h2 className='fw-bold'>PAGE NOT FOUND</h2>
                </div>
            </div>
        </div>
    </>
  )
}
