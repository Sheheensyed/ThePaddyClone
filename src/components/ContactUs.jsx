import { faGlobe, faHeadset, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactUs() {
  return (
    <>
      <div className="container-fluid bg-dark w-100 p-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1 className='text-light text-center' style={{ marginTop: '150px' }}>Contact Us</h1>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

      <div className="container-fluid bg-warning p-3">
        <div className="row p-5">

          <div className="col-md-4">
            <h1 className='text-center'><FontAwesomeIcon icon={faHeadset} /></h1>
            <p className='text-center'>+91 8606 323 867</p>
          </div>

          <div className="col-md-4">
            <h1 className='text-center'><FontAwesomeIcon icon={faLocationDot} /></h1>
            <h4 className='text-center'>Salmath nagar near civil station, palakkad</h4>
          </div>

          <div className="col-md-4">
            <h4 className='text-center'><FontAwesomeIcon icon={faGlobe} /></h4>
            <h4 className='text-center'>infoeventfulminds@gmail.com</h4>
            <h4 className='text-center'> infopaddyfestival@gmail.com</h4>
          </div>

        </div>
      </div>

      <div className="container-fluid">
        <div className='row bg-warning p-4'>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className='text-center text-dark'>Get in tounch</h1>
            <div className='d-flex justify-content-center p-3'>
              <input type="text" placeholder='First name' className='form-control' />
              <input type="text" placeholder='Last name' className='form-control' />
            </div>
            <input type="text" placeholder='Email Address' name="" id=""  className='form-control mt-3'/>
            <input type="text" placeholder='Name of Business' name="" id=""  className='form-control mt-3'/>
            <button className='btn btn-primary'>Submit form</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
