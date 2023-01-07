import React, { useContext, useEffect, useRef } from 'react'
import './_navbar.scss'
import logo1 from '../../../src/assets/logo.png'
import { Link } from 'react-router-dom'
import { Link as Linked } from 'react-scroll'
import { AuthContext } from '../../Context/AuthContext'
import { auth } from '../../config/Firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export default function Navbar() {
const values=useRef()
const values1=useRef()
const show=()=>{ 
  switch (values.current.className) {
    case "d-none":
    values.current.className="d-block"
      break;
      case "d-block":
        values.current.className='d-none'      
        break;
        default:
      values.current.className="d-none"

      break;
  }  
}
const show1=()=>{ 
  switch (values1.current.className) {
    case "d-none":
    values1.current.className="d-block"
      break;
      case "d-block":
        values1.current.className='d-none'      
        break;
        default:
      values1.current.className="d-none"

      break;
  }
}
//authentication
const {isAuthenticated,setAuthenticated}=useContext(AuthContext)
//useEffect
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setAuthenticated(true)
        // ...
      }
    });
  },[])
const handleLogOut=()=>{
  signOut(auth).then(() => {
    setAuthenticated(false)
    window.toastify("You are logged out","success")
  }).catch((error) => {    
    window.toastify("Something went wrong","error")
  });
}
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark ">
  <div className="container">    
    <Link className="navbar-brand" to="/"><img src={logo1} alt="" width="70px"/><span className='companyName'> Premium Crops</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Linked className="nav-link " to="about"  >About</Linked>
        </li>

        <li className="nav-item dropdown">
              <button className="btn btn-link dropdown-toggle text-light text-decoration-none " href="#" role="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">Crops</button>
              <ul className="dropdown-menu text-center">
                <li><Link to="/crops/wheat" className="dropdown-item" >Wheat</Link></li>
                <li><Link to="/crops/maize" className="dropdown-item" href="#">Maize</Link></li>
                <li><Link to="/crops/sugarcane" className="dropdown-item" href="#">SugarCane</Link></li>
                <li><Link to="/crops/oilseed" className="dropdown-item" href="#">OilSeed</Link></li>
                <li><a className="dropdown-item last-dropdown" onClick={show} >Rice and its Types <i className="fa-solid fa-arrow-down"></i></a></li>
                 <div className='d-none' ref={values} >
                    <ol className='text-primary'>
                      <li><Link className="dropdown-item text-primary"   to="/crops/rice/basmati_rice">Basmati Rice</Link></li>
                      <li><Link className="dropdown-item text-primary"  to="/crops/rice/jasmine_rice">Jasmine Rice</Link></li>
                      <li><Link className="dropdown-item text-primary"  to="/crops/rice/wild_rice">Wild Rice</Link></li>
                      <li><Link className="dropdown-item text-primary"  to="/crops/rice/calrose_rice">Calrose Rice</Link></li>
                      <li><Link className="dropdown-item text-primary"  to="/crops/rice/japanese_rice">Japanese short grain Rice</Link></li>
                      <li><Link className="dropdown-item text-primary"  to="/crops/rice/sushi_rice">Sushi Rice</Link></li>
                    </ol>
                  </div>
                <li><a className="dropdown-item last-dropdown" onClick={show1} >Pulses<i className="fa-solid fa-arrow-down"></i></a></li>
                  <div className='d-none' ref={values1} >
                   <ol className='text-primary'>
                   <li><Link className="dropdown-item text-primary"   to="/crops/pulses/black_eyed_beans">Black eyed Beans</Link></li>
                   <li><Link className="dropdown-item text-primary"   to="/crops/pulses/Split_Red_Lentils">Split Red Lentils</Link></li>
                   <li><Link className="dropdown-item text-primary"   to="/crops/pulses/Yellow_Pigeon_Peas">Yellow Pigeon Peas </Link></li>
                   <li><Link className="dropdown-item text-primary"   to="/crops/pulses/Adzuki_Beans">Adzuki Beans</Link></li>
                   <li><Link className="dropdown-item text-primary"   to="/crops/pulses/Red_Kidney_Beans">Red Kidney Beans</Link></li>
                   <li><Link className="dropdown-item text-primary"   to="/crops/pulses/Black_Gram_Beans">Black Gram Beans</Link></li>  
                   </ol>
                 </div>
                  
              </ul>
            </li>

        <li className="nav-item mx-2">
          <Link className="nav-link " to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="d-flex align-items-center justify-content-center">
          {isAuthenticated?<button className='btn btn-warning px-4 rounded-pill text-white signin' onClick={handleLogOut}>LOGOUT</button>
            :<div className=" mx-2">
            <a href="https://www.facebook.com/UniversityOfAgricultureFaisalabadPakistan/" target="_blank"><i className="fa-brands fa-facebook fs-3 text-light mx-2"></i></a>
            <a href="https://www.instagram.com/uaf_official/?hl=en" target="_blank"><i className="fa-brands fa-instagram fs-3 text-light mx-2"></i></a>
            <a href="https://twitter.com/UniversityofAg2?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fs-3 text-light mx-2"></i></a>
          </div>                   
      }
        </div>
    </div>
  </div>
</nav>    
    
     </>
  )
}
