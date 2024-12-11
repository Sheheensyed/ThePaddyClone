import React from 'react'

function About() {
  return (
    <div className='container-fluid bg-warning'>
      <div className="row p-5 mt-5">

        <div className="col-md-6 d-flex justify-content-center flex-column">
          <h1>About us</h1>
          <p style={{ textAlign: 'justify' }}>Eventfulminds is an emerging event organizing company founded by a passionate group of young individuals dedicated to developing a global collaborative music community.</p>
          <p style={{ textAlign: 'justify' }}>Our mission is to Analyse brands, identify target audiences, and develop innovative event concepts that resonate with music lovers. by managing all technical aspects prior to event launches, we ensure that every experience is seamless and engaging. with our passion for music, eventfulminds aims to redefine the way people connect through live events.
          </p>
        </div>

        <div className="col-md-6">

        <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/cc62292e4c381a2dad0d3f7d457fdc78.jpg" className='w-75' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
