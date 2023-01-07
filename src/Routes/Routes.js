import React, { useContext } from 'react'
import { BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import ScrollToTop from '../scrollTop/ScrollToTop'
//private routing 
import IndexRouting from '../pages/auth/Index'
import FrontEnd from '../pages/frontend/Index'
export default function RoutingArea() {
  const {isAuthenticated}=useContext(AuthContext)
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>            
        <Routes>
          <Route path='/*' element={<FrontEnd/>}/>
          <Route path='/auth/*' element={!isAuthenticated?<IndexRouting/>:<Navigate to='/'/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}
