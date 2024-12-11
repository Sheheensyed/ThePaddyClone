import React from 'react';
import { Button } from 'react-bootstrap';

function Landinpage() {
  return (
    <>
      <div className="container-fluid w-100 bg-warning">
        <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/PosterForInsider-01-23456789-2048x1152.png" className='w-100' alt="" />
      </div>

      <div className='container-fluid bg-warning w-100'>
        <div className="row">
          <div className='text-center fa-4x my-5'>
            Feel the beat!
            <div className='d-md-flex justify-content-center flex-row my-5'>
              <button className='btn btn-danger ms-3'><div className='p-3 text-center fa-3x ms-3'>14 Days</div></button>
              <button className='btn btn-danger ms-3'><div className='p-3 text-center fa-3x ms-3'>17 Hours</div></button>
              <button className='btn btn-danger ms-3'><div className='p-3 text-center fa-3x ms-3'>24 Minutes</div></button>
              <button className='btn btn-danger ms-3'><div className='p-3 text-center fa-3x ms-3'>20 Sec</div></button>
            </div>
            <h1>Welcome to Palakkad's biggest (Indie-Music Festival)</h1>
          </div>
          <div className='text-center' style={{ fontSize: '20px', textAlign: 'justify' }}>
            Join us for an unforgettable night of music and magic. Get your tickets now and experience the ultimate musical extravaganza! Limited seats available!
          </div>
          <div className='text-center my-4'>
            <Button className='btn btn-danger' style={{ fontSize: '20px' }}>Book your seats now</Button>
          </div>
        </div>
        <div className="container-fluid w-100 my-5 bg-warning">
          <h1 className='text-center'>Artist line-Up</h1>
          <div className='row'>
            <div className="col-md-4">
              <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/jobhananvedan-1536x864.png" className='w-100' height={200} alt="" />
            </div>
            <div className="col-md-4">
              <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/mhrsajokerlilpayyan-1536x864.png" height={200} alt="" className='w-100' />
            </div>
            <div className="col-md-4">
              <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/Arivushala-1536x864.png" className='w-100' height={200} alt="" />
            </div>
          </div>
        </div>

        <div className="container-fluid w-100 my-5" style={{ height: '100%' }}>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center flex-column text-center align-items-center">
              <h1>About the Paddy Festival</h1>
              <p className='' style={{ textAlign: 'justify' }}>The paddy festival is Palakkad’s largest music and cultural festival, spotlighting local and festival, spotlighting local and international talent. this festival connects people this festival connects people through music and culture, through music and culture, drawing in a young and vibrant audience.</p>
            </div>
            <div className="col-md-6">
              <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/9eda9131-10.jpg" className='w-100 rounded' alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid w-100 my-5" style={{ height: '100%' }}>
          <div className="row">
            <div className="col-md-6">
              <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/f32c6d3a-9.jpg" className='w-100 rounded my-5' alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column text-center align-items-center">
              <h1>Experiences at The Paddy Festival</h1>
              <p className='' style={{ textAlign: 'justify' }}>Experience the best of Palakkad at the Paddy Festival! Enjoy 7 thrilling music performances, local shopping, and culinary delights. Discover the fusion of music and art, showcasing exceptional talent and stunning installations. A weekend of entertainment, creativity, and community awaits!</p>
            </div>

          </div>
        </div>
        <div className="container-fluid w-100 my-5" style={{ height: '100%' }}>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center flex-column text-center align-items-center">
              <h1>Why the paddy festival?</h1>
              <p className='' style={{ textAlign: 'justify' }}>Palakkad’s music scene has lack of diversity in events, resulting in limited opportunities for music enthusiasts to explore and engage with various genres. The district’s music lovers are craving more, but the current landscape falls short, stifling creativity and driving fans to seek entertainment elsewhere. Furthermore, the demand for live music experiences is on the rise, yet the supply remains woefully inadequate. This void presents an opportunity to revitalize Palakkad’s music scene, fostering a vibrant cultural ecosystem that showcases diverse talent, provides platforms for local artists, and satisfies the growing appetite for immersive musical experiences.</p>
            </div>
            <div className="col-md-6">
              <img src="https://thepaddyfestival.com/wp-content/uploads/2024/11/cd13ad42-3.jpg" className='w-100 rounded' alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Landinpage;
