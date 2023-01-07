import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
//animation
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Products() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])  
  return (
    <>
        <div className="container pb-5 mt-4"  data-aos="zoom-in">
            <div className="row row-cols-2 row-cols-md-6">
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/pulses/Black_Gram_Beans" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src="https://media.istockphoto.com/id/1225389860/photo/black-gram-or-a-pile-of-dry-black-beans-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=c_7yDxn255F5rSowZB74AWD7UL68WbEhOMD9OnKZvK8=" width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Black Gram Beans</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/pulses/Red_Kidney_Beans" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src="https://media.istockphoto.com/id/1313946012/photo/red-beans-or-kidney-bean.jpg?b=1&s=170667a&w=0&k=20&c=HYkmxyTotf61DyU0Xn8LeF17OK29F4c_pc4qfnirTIA=" width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Red Kidney Beans</p>
                    </div>
                    </Link>
                  </div>
                </div><div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/pulses/Yellow_Pigeon_Peas" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src="https://thumbs.dreamstime.com/b/yellow-pigeon-peas-scientifically-known-as-cajanus-cajan-top-view-arhar-toor-dal-split-pea-lentils-224327494.jpg" width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Yellow Pigeon Peas</p>
                    </div>
                    </Link>
                  </div>
                </div><div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/pulses/Adzuki_Beans" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src="https://media.istockphoto.com/id/1213628179/photo/azuki-beans-in-wooden-bowl.jpg?s=612x612&w=0&k=20&c=O5ASKvdkypU5LAyYGC16gSiTDZUdN3_Hz02QRwVq69g=" width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Adzuki Beans</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/pulses/Split_Red_Lentils" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src="https://media.istockphoto.com/id/1254599298/photo/red-lentils-in-a-basket-on-a-white-background.jpg?s=612x612&w=0&k=20&c=1VHjCjPj9naIUM5AyFbWoikhJrjRiMIVX6i1EqkaNnA=" width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Split Red Lentils</p>
                    </div>
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div className="card border-0 " >
                    <Link to="/crops/pulses/black_eyed_beans" className="text-dark text-decoration-none ">
                    <div className="card-img products">
                        <img src="https://media.istockphoto.com/id/647288166/photo/black-beans-in-a-bowl.jpg?s=612x612&w=0&k=20&c=Tl63z0RYzDW38xdFC2mBpwcyGVNbiUQVGl7OGz6lBpo=" width="100%" height="160px" className="card-img-top" alt="picture"/>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-title ">Black Eyed Beans</p>
                    </div>
                    </Link>
                  </div>
                </div>








            </div>
        </div>
    </>
  )
}
