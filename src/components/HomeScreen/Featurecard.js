import React from 'react'

function Featurecard() {
  return (

    
   <div className="feature-images-wrapper bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="feature-images__five resolutions-hero-bottom">
          <div className="row">
            <div className="col-lg-4 col-md-6 wow move-up" style={{padding: '1%'}}>
              {/*ht-box-icon Start */}
              <div className="ht-box-images style-05">
                <div className="image-box-wrap" style={{borderRadius: '13px 13px 0px 0px'}}>
                  <div className="box-image digital_sbox">
                  </div>
                  <div className="content sbox_content">
                    <h5 className="heading">Digital<br />Marketing </h5>
                    <div className="divider_san" />
                    <div className="text" style={{paddingTop: '2%'}}>We offer innovative Digital Marketing services. We based out of India, USA, and UK. We are catering to our clients <strong>...</strong>
                    </div>
                    <div className="box-images-arrow">
                      <a href="#">
                        <span className="button-text">Explore now</span>
                        <i className="far fa-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*ht-box-icon End */}
            </div>
            <div className="col-lg-4 col-md-6 wow move-up" style={{padding: '1%'}}>
              {/* ht-box-icon Start */}
              <div className="ht-box-images style-05">
                <div className="image-box-wrap" style={{borderRadius: '13px 13px 0px 0px'}}>
                  <div className="box-image web_sbox">
                    {/*  */}
                  </div>
                  <div className="content sbox_content">
                    <h5 className="heading">Web<br />Development</h5>
                    <div className="divider_san" />
                    <div className="text" style={{paddingTop: '2%'}}>Quantum expertise in developing dynamic, robust and high-end CMS websites utilizing latest technologies like VB.Net<strong>...</strong>
                    </div>
                    <div className="box-images-arrow">
                      {/*<a href="#">*/}
                      {/*    <span class="button-text">Explore now</span>*/}
                      {/*    <i class="far fa-long-arrow-right"></i>*/}
                      {/*</a>*/}
                    </div>
                  </div>
                </div>
              </div>
              {/* ht-box-icon End */}
            </div>
            <div className="col-lg-4 col-md-6 wow move-up" style={{padding: '1%'}}>
              {/* ht-box-icon Start */}
              <div className="ht-box-images style-05">
                <div className="image-box-wrap" style={{borderRadius: '13px 13px 0px 0px'}}>
                  <div className="box-image mobile_sbox">
                    {/*  */}
                  </div>
                  <div className="content sbox_content">
                    <h5 className="heading">Mobile<br />Development</h5>
                    <div className="divider_san" />
                    <div className="text" style={{paddingTop: '2%'}}>Quantum is one of the leading mobile application development company offices in India, USA &amp; UK that started making<strong>...</strong>
                    </div>
                    <div className="box-images-arrow">
                    </div>
                  </div>
                </div>
              </div>
              {/* ht-box-icon End */}
            </div>
          </div>
        </div>
        <div className="section-under-heading text-center section-space--mt_80" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Featurecard