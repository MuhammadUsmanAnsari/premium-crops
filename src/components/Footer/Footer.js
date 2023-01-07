import React from 'react'
import logo from '../../assets/logo.png'
export default function Footer() {
    return (
        <>
        {/* row-cols-2  row-cols-lg-3 */}
            <div className='bg-dark text-white px-2 py-5 footer'>
                <div className="container py-3">
                    <div className="row">
                            <a className="text-white text-decoration-none fs-5" href="#"><img src={logo} width="50px" alt="" /><span id="companyName" className='d-block mt-2' >Premium Crops</span> </a>
                    </div>
                    <div className="row ">
                        <div className="col-6 col-lg-3">
                            <h5 className="my-5 text-warning"><u>About this Website</u></h5>
                            <p>This is just a University Project website. This is just demo Project.</p>
                        </div>
                        <div className="col-6 col-lg-3 my-5 my-lg-0">
                            <h5 className='mb-5 text-warning'><u>Quick Links</u></h5>
                            <a href="#" className="text-white text-decoration-none">Privacy Policy</a><br />
                            <a href="#" className="text-white text-decoration-none">Terms & Services</a><br />
                            <a href="#" className="text-white text-decoration-none">Code of Conduct</a><br />
                            <a href="#" className="text-white text-decoration-none">Financials</a>
                        </div><hr className='d-block d-lg-none'/>
                        <div className="col-6 mt-3 mt-lg-0 mx-auto last-column ">
                            <div className="row row-cols-1 row-cols-lg-2  ">
                                <div className="col">
                                    <div className='text-warning'>
                                        <h5><u>Muhammad Usman</u></h5>
                                        <a href="mailto:usmanarif2913@gmail.com" className="text-white text-decoration-none ">usmanarif2913 @gmail.com</a><br />
                                        <a href="tel:+923007588836" className="text-white text-decoration-none ">+92 300 7588836</a>
                                    </div>
                                    <div className="mt-4 text-warning">
                                        <h5><u>Abdul Rehman</u></h5>
                                        <a href="mailto:usmanarif2913@gmail.com" className="text-white text-decoration-none ">usmanarif2913@gmail.com</a><br />
                                        <a href="tel:+923187139577" className="text-white text-decoration-none ">+92 318 7139577</a>
                                    </div>
                                </div>
                                <div className="col">
                                    <h5 className='text-warning'><u>Address</u></h5>
                                    <p>University of Agriculture Faisalabad</p>
                                    <p>Jail Road، near Al-Khidmat Police Markaz, Police Lines, Faisalabad, Punjab 38000</p>
                                </div>
                            </div>

                        </div>
                    </div><hr />
                    <div className="text-center">Copyright &copy;2022. All Rights reserved.</div>
                </div>
            </div>

        </>
    )
}
