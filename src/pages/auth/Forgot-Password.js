import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/Firebase';
import { AuthContext } from '../../Context/AuthContext';

const initialState={
    email:"",
}

export default function ForgotPassword() {
    const [state,setState]=useState(initialState)
    const {isAuthenticated,setAuthenticated}=useContext(AuthContext)
    //useEffect
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {          
          console.log(user.uid); 
          setAuthenticated(true)
        } else {
            console.log("no data found"); 
        }
    });
},[])
//getting values
const handleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
}
//submit
const handleSubmit=(e)=>{
    e.preventDefault()
const {email}=state
sendPasswordResetEmail(auth, email)
.then(() => {
    window.toastify("Reset link is sent. Check inbox","success")   
  })
  .catch((error) => {
    window.toastify(error.message,"error")
  });
}
  return (
    <>
    <div className='form-section '>
        <div className="container py-5">
        <div className="row py-5">
            <div className="col-12 offset-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="card px-4 px-md-5 py-5 shadow-lg rounded-4">
                    <h2 className='text-center py-4'>FORGOT PASSWORD</h2>
                <form className='text-center ' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 shadow-none border-bottom border-warning border-2 rounded-0" id="email" name='email' onChange={handleChange} placeholder="name@example.com"/>
                        <label htmlFor="floatingInput" className='text-secondary'>Email address</label>
                    </div>
                    <button className="btn btn-warning w-50 my-3 rounded-0 text-white signin ">RESET PASSWORD</button>
                        <div className='my-5 mx-2'>
                            <Link to="/auth/login" className='text-warning fs-4'>LOGIN</Link>
                        </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
