import React from 'react'
import {Link} from "react-router-dom"

function Homebanner() {
  return (
    <div>
       <div id="video-carousel-example2" className="carousel slide carousel-fade resolutions-hero-bg" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#video-carousel-example2" data-slide-to={0} className="active" />
    <li data-target="#video-carousel-example2" data-slide-to={1} />
    <li data-target="#video-carousel-example2" data-slide-to={2} />
    <li data-target="#video-carousel-example2" data-slide-to={3} />
  </ol>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active">
      <div className="view view1">
        <img width="100%" className="title_img" src="assets/images/hero/5.jpg" alt="title" />
        <div className="mask rgba-purple-slight" />
        <div className="mask rgba-indigo-light" />
      </div>
      <div className="carousel-caption text-left">
        <div className="animated fadeInDown">
          <h1 className="title_h1">Artificial<br />Intelligence</h1>
          <p className="text-white title_p">
            <span>Make your business future-ready with<br />Artificial Intelligence Development Services.</span>
          </p>
          <div className="button_cont">
            <a className="banner_btn" href="https://quantumitinnovation.com/contact" rel="nofollow noopener">Get A Quote</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item ">
      <div className="view view1">
        <img width="100%" className="title_img" src="assets/images/hero/6.jpg" alt="titl" />
        <div className="mask rgba-purple-slight" />
        <div className="mask rgba-purple-slight" />
      </div>
      <div className="carousel-caption text-left">
        <div className="animated fadeInDown">
          <h1 className="title_h1">Web<br />Development</h1>
        </div>
        <div className="animated fadeInDown">
          <p className="text-white title_p">
            <span>We analyse your business to design a website<br />Which increases conversion rates and produces positive results.</span>
          </p>
          <div className="button_cont">
            <a className="banner_btn" href="https://quantumitinnovation.com/contact" rel="nofollow noopener">Get A Quote</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view view1">
        <img width="100%" className="title_img" src="assets/images/hero/305.jpg" alt="tt" />
        <div className="mask rgba-purple-slight" />
        <div className="mask rgba-purple-slight" />
      </div>
      <div className="carousel-caption text-left">
        <div className="animated fadeInDown">
          <h1 className="title_h1">Mobile App<br />Development</h1>
          <p className="text-white title_p">
            <span>Android, IOS, Swift and Cross-platform<br />Build an application that grow your business.</span>
          </p>
          <div className="button_cont">
            <a className="banner_btn" href="https://quantumitinnovation.com/contact" rel="nofollow noopener">Get A Quote</a>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="view view1">
        <img width="100%" className="title_img" src="assets/images/hero/web_dev1.jpg" alt="tite" />
        <div className="mask rgba-purple-slight" />
        <div className="mask rgba-purple-slight" />
      </div>
      <div className="carousel-caption text-left">
        <div className="animated fadeInDown">
          <h1 className="title_h1">Digital<br />Marketing</h1>
        </div>
        <div className="animated fadeInDown">
          <p className="text-white title_p">
            <span>
              We are a results driven top ranked<br />Marketing agency that delivers powerful results.
            </span>
          </p>
          <div className="button_cont">
            <a className="banner_btn" href="https://quantumitinnovation.com/contact" rel="nofollow noopener">Get A Quote</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev" style={{display: 'none'}}>
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next" style={{display: 'none'}}>
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>









 
    </div>
  )
}

export default Homebanner