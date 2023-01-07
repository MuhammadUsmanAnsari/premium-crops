import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../../config/Firebase'
const initialState={
    email:"",
    password:""
}
export default function SignUp() {
const [state,setState]=useState(initialState)
const {isAuthenticated,setAuthenticated}=useContext(AuthContext)
const navigate=useNavigate()
//useEffect
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {          
          setAuthenticated(true)
          navigate('/')
        } else {
            
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
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setAuthenticated(true)
    window.toastify("You are registered successfully","success")
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
                    <h2 className='text-center py-4'>SIGN UP</h2>
                <form className='text-center' onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control border-0 shadow-none border-bottom border-warning border-2 rounded-0" id="email" name='email' onChange={handleChange} placeholder="name@example.com"/>
                        <label htmlFor="floatingInput" className='text-secondary'>Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control border-0 shadow-none border-bottom border-warning border-2 rounded-0" id="password" name='password' onChange={handleChange} placeholder="password"/>
                        <label htmlFor="floatingInput" className='text-secondary'>Password</label>
                    </div>
                        <div className='text-start mt-4 mx-2'>
                            <span>Already have account?</span>                
                            <Link to="/auth/login" className=' mx-2 text-warning '>Login</Link>
                        </div>
                    <button className="btn btn-warning my-5 w-50 rounded-0 text-white signin ">SIGN UP</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
