import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './Forgot-Password'
import SignUp from './SignUp'
import Login from './Login'
import NavbarLight from '../../components/Header/NavbarLight'
//not found
import NotFound from '../../pages/PageNotFound'
export default function Index() {
  return (
    <>
      <NavbarLight/>
      <div id=''>
    <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='forgot-password' element={<ForgotPassword/>}/>
        <Route path='sign-up' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
      </div>

    </>
  )
}
