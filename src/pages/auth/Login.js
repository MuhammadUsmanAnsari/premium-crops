import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../config/Firebase'
const initialState={
    email:"",
    password:""
}

export default function Login(props) {
    const [state,setState]=useState(initialState)
const {setAuthenticated}=useContext(AuthContext)
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
const {email,password}=state
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    setAuthenticated(true)
    window.toastify("Logged in successfully","success")
})
.catch((error) => {
      window.toastify(error.message,"error")
  });
}

  return (
    <>
    <div className=' form-section'>
        <div className="container py-5">
        <div className="row py-5">
            <div className="col-12 offset-0 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <div className="card px-4 px-md-5 py-5 shadow-lg rounded-4">
                    <div className='text-danger text-center'>{props.restrict}</div>
                    <h2 className='text-center py-4'>LOGIN</h2>
                <form className='text-center pb-4' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 shadow-none border-bottom border-warning border-2 rounded-0" id="email" name='email' onChange={handleChange} placeholder="name@example.com"/>
                        <label htmlFor="floatingInput" className='text-secondary'>Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control border-0 shadow-none border-bottom border-warning border-2 rounded-0" id="password" name='password' onChange={handleChange} placeholder="Password"/>
                        <label htmlFor="floatingPassword" className='text-secondary'>Password</label>
                    </div>
                        <div className='text-start mb-5 mx-2'>
                            <Link to="/auth/forgot-password" className='text-warning'>Forgot password?</Link>
                        </div>
                    <button className="btn btn-warning w-50 rounded-0 text-white signin ">LOGIN</button>
                    <div className='mt-5 mx-2'>
                        <span>Don't have account?</span>
                            <Link to="/auth/sign-up" className=' mx-2 text-warning '>Sign Up</Link>
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
