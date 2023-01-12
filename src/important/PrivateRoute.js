import { onAuthStateChanged } from 'firebase/auth';
import React, { useContext, useEffect } from 'react'
import NavbarLight from '../components/Header/NavbarLight';
import { auth } from '../config/Firebase';
import { AuthContext } from '../Context/AuthContext'
import Login from '../pages/auth/Login'

export default function PrivateRoute(props) {
    const {isAuthenticated,setAuthenticated}=useContext(AuthContext)
    
    const {Component}=props
    if (!isAuthenticated) {
        return <>
     <NavbarLight/> 
     <Login restrict="Please Login to see your products"/>
     </>
    }
    return (
    <Component/>
  )
}
