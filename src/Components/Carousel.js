import React from 'react';
export default function Carousel() {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="https://c4.wallpaperflare.com/wallpaper/292/446/516/ultra-wide-photography-wallpaper-preview.jpg" className="d-block w-100" alt="Image not found error 404"/>
      <div className="carousel-caption d-none d-md-block">
        <p className='head'>WELCOME</p>
        <p>To the India's biggest tourism website:</p>
        <p>All India Travel @ AIT.com</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://wallpapers.com/images/featured/wg3fo21njjv2n9nd.jpg" className="d-block w-100" alt="Image not found error 404"/>
      <div className="carousel-caption d-none d-md-block">
        <p className='head'>PLAN YOUR HOLIDAYS WITH US</p>
        <p>Let's explore this whole world.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://thumbs.dreamstime.com/b/wide-ocean-2462885.jpg" className="d-block w-100" alt="Image not found error 404"/>
      <div className="carousel-caption d-none d-md-block">
        <p className='head'>JOIN THE JOURNEY</p>
        <p>Experience the beauty and culture of the different parts of this world.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

