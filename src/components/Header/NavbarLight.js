import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './_navbar.scss'
import logo1 from '../../assets/logo.png'

export default function NavbarLight() {
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
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100 top-0 shadow ">
  <div className="container">    
    <Link className="navbar-brand" to="/"><img src={logo1} alt="" width="50px"/><span> Premium Crops</span> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item mx-2">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        
        <li className="nav-item dropdown">
              <button className="btn btn-link dropdown-toggle text-dark text-decoration-none "  role="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">Crops</button>
              <ul className="dropdown-menu text-center">
                <li><Link to="/crops/wheat" className="dropdown-item" >Wheat</Link></li>
                <li><Link to="/crops/maize" className="dropdown-item" >Maize</Link></li>
                <li><Link to="/crops/sugarcane" className="dropdown-item" >SugarCane</Link></li>
                <li><Link to="/crops/oilseed" className="dropdown-item" >OilSeed</Link></li>
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
                
                  
              </ul>
            </li>
            

<li className="nav-item mx-2">
          <Link className="nav-link " to="/gallery">Gallery</Link>
        </li>
        <li className="nav-item dropdown">
        <button className="btn btn-link dropdown-toggle text-dark text-decoration-none "  role="button" data-bs-auto-close="false" data-bs-toggle="dropdown" aria-expanded="false">Pulses</button>
          <ul className="dropdown-menu">
                   <li><Link className="dropdown-item "   to="/crops/pulses/black_eyed_beans">Black eyed Beans</Link></li>
                   <li><Link className="dropdown-item "   to="/crops/pulses/Split_Red_Lentils">Split Red Lentils</Link></li>
                   <li><Link className="dropdown-item "   to="/crops/pulses/Yellow_Pigeon_Peas">Yellow Pigeon Peas </Link></li>
                   <li><Link className="dropdown-item "   to="/crops/pulses/Adzuki_Beans">Adzuki Beans</Link></li>
                   <li><Link className="dropdown-item "   to="/crops/pulses/Red_Kidney_Beans">Red Kidney Beans</Link></li>
                   <li><Link className="dropdown-item "   to="/crops/pulses/Black_Gram_Beans">Black Gram Beans</Link></li>
          </ul>
        </li>
        
      </ul>
      <div className="d-flex align-items-center justify-content-center">
          <div className=" mx-2">
            <a href="https://www.facebook.com/UniversityOfAgricultureFaisalabadPakistan/" target="_blank"><i className="fa-brands fa-facebook fs-3 text-dark mx-1"></i></a>
            <a href="https://www.instagram.com/uaf_official/?hl=en" target="_blank"><i className="fa-brands fa-instagram fs-3 text-dark mx-1"></i></a>
            <a href="https://twitter.com/UniversityofAg2?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><i className="fa-brands fa-twitter fs-3 text-dark mx-1"></i></a>
          </div>
        </div>
    </div>
  </div>
</nav>        
     </>
  )
}
