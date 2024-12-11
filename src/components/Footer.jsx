import { faInstagram, faPinterest, faThreads, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark w-100">
                <div className="row">

                    <div className="col-md-4">
                        <img
                            src="https://thepaddyfestival.com/wp-content/uploads/2024/10/%E0%B4%A8%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B3%E0%B5%81%E0%B4%9F%E0%B5%86-%E0%B4%B8%E0%B5%8D%E0%B4%B5%E0%B4%AA%E0%B5%8D%E0%B4%A8-%E0%B4%AD%E0%B4%B5%E0%B4%A8%E0%B4%82-5-1-e1730233815536-2048x1078.png"
                            width="160" height="100" className="" alt="Logo"
                        />
                    </div>

                    <div className="col-md-4">
                        <h4 className='ms-5 py-1 mb-1'>Useful Links</h4>
                        <div className='d-md-flex justify-content-around p-2'>
                            <Link to={'/'} style={{textDecoration:'none'}}><p className='text-light'>Home</p></Link>
                            <Link to={'/about'} style={{textDecoration:'none'}}><p className='text-light'>About Us</p></Link>
                            <Link to={'/contact'} style={{textDecoration:'none'}}><p className='text-light'>Contact us</p></Link>
                        </div>

                    </div>

                    <div className="col-md-4 col-sm-10">
                        <div className='d-flex md:justify-content-around mt-3'>
                        <FontAwesomeIcon icon={faPinterest} className='fa-2x mt-4 ms-md-5 ms-4' />
                        <div className='text-light'><FontAwesomeIcon icon={faInstagram} className='fa-2x mt-4 ms-md-5 ms-4' /></div>
                        <div className='text-light'><FontAwesomeIcon icon={faYoutube} className='fa-2x mt-4 ms-md-5 ms-4' /></div>
                        <div className='text-light'><FontAwesomeIcon icon={faThreads} className='fa-2x mt-4 ms-md-5 ms-4' /></div>
                        <div className='text-light'><FontAwesomeIcon icon={faXTwitter} className='fa-2x mt-4 ms-md-5 ms-4' /></div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
