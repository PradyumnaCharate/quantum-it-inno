import React from 'react'

function Companyhistory() {
  return (
   <div>
  <div className="our-company-history section-space--ptb_100" style={{paddingTop: 30, paddingBottom: 30}}>
    <div className="container-fluid">
      <div className="grid-wrapper">
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
        <div className="line line-4" />
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="faq-custom-col">
            <div className="section-title-wrap">
              <h6 className="section-sub-title mb-20">Our company</h6>
              <h3 className="heading">Why <span className="text-color-primary">Quantum</span> ?</h3>
              <p className="text mt-30">Quantum wants you to feel comfortable with what we’re planning to make right choice for your business. We have been into this business since and our experts have gained a lot from working with hundreds of clients all over the world.</p>
              <p className="text mt-30">You definitely need a digital marketing agency to help your product and services to sell online. Quantum understands your need and accordingly. Our experts will help you with marketing research, web design planning, data analytics, content strategy. We assure you to get customers on your website and want to stay...</p>
              <div className="inner-button-box section-space--mt_60">
                <Link to="/whyquantumitinnovation" className="ht-btn ht-btn-md">Read more</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rv-video-section">
            <div className="ht-banner-01 ">
              <img className="img-fluid border-radus-5 animation_images one wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-02.jpg" alt={6} />
            </div>
            <div className="ht-banner-02">
              <img className="img-fluid border-radus-5 animation_images two wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-03.jpg" alt={5} />
            </div>
            <div className="main-video-box x_video-popup">
              <a className="video-link  mt-30">
                <div className="single-popup-wrap">
                  <img className="img-fluid border-radus-5" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-01.jpg" alt={56} />
                  <div className="ht-popup-video video-button">
                    <div className="video-mark">
                      <div className="wave-pulse wave-pulse-1" />
                      <div className="wave-pulse wave-pulse-2" />
                    </div>
                    <div className>
                      <div className="video-play">
                        <span className="video-play-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="ht-banner-03">
              <img className="img-fluid border-radus-5 animation_images three wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-04.jpg" alt="ht" />
            </div>
            <div className="ht-banner-04">
              <img className="img-fluid border-radus-5 animation_images four wow fadeInDown" src="assets/images/banners/home-processing-video-intro-slider-slide-01-image-05.jpg" alt="rr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Companyhistory