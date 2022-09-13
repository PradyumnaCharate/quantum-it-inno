import React from 'react'

function Gradationprocess() {
  return (
    <div>
  <div className="bg_success gradation-process-area section-space--ptb_100" style={{paddingTop: '4%', paddingBottom: '3%'}}>
    <div className="container">
      <div className="row ">
        <div className="col-lg-12">
          <div className="gradation-title-wrapper section-space--mb_60">
            <div className="gradation-title-wrap ">
              <h6 className="section-sub-title text-black mb-20" style={{color: 'white!important'}}>How we works</h6>
              <h4 className="heading" style={{color: 'white'}}>How it helps <span className="text-color-primary">your <br /> business succeed</span></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="ht-gradation style-01">
            {/* Single item gradation Start */}
            <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.1s">
              <div className="line" />
              <div className="circle-wrap">
                <div className="mask">
                  <div className="wave-pulse wave-pulse-1" />
                  <div className="wave-pulse wave-pulse-2" />
                  <div className="wave-pulse wave-pulse-3" />
                </div>
                <h6 className="circle">1</h6>
              </div>
              <div className="content-wrap">
                <h6 className="heading" style={{color: 'white'}}>01. Discussion</h6>
                <div className="text" style={{color: 'white'}}>We meet customers in set place to discuss the details about needs and demands before proposing a plan.</div>
                {/*<a class="gradation-btn" href="#">*/}
                {/*<span class="button-text" data-text="Look more">*/}
                {/*    Look more </span>*/}
                {/*<span class="button-icon far fa-long-arrow-right"></span>*/}
                {/*</a>*/}
              </div>
            </div>
            {/* Single item gradation End */}
            {/* Single item gradation Start */}
            <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.15s">
              <div className="line" />
              <div className="circle-wrap">
                <div className="mask">
                  <div className="wave-pulse wave-pulse-1" />
                  <div className="wave-pulse wave-pulse-2" />
                  <div className="wave-pulse wave-pulse-3" />
                </div>
                <h6 className="circle">2</h6>
              </div>
              <div className="content-wrap">
                <h6 className="heading" style={{color: 'white'}}>02. Concepts &amp; Initatives</h6>
                <div className="text" style={{color: 'white'}}>Our experts come up with all kinds of ideas and initiatives for delivering the best solutions for IT services chosen.</div>
              </div>
            </div>
            {/* Single item gradation End */}
            {/* Single item gradation Start */}
            <div className="item item-1 animate  wow fadeInRight" data-wow-delay="0.20s">
              <div className="line" />
              <div className="circle-wrap">
                <div className="mask">
                  <div className="wave-pulse wave-pulse-1" />
                  <div className="wave-pulse wave-pulse-2" />
                  <div className="wave-pulse wave-pulse-3" />
                </div>
                <h6 className="circle">3</h6>
              </div>
              <div className="content-wrap">
                <h6 className="heading" style={{color: 'white'}}>03. Testing &amp; Trying</h6>
                <div className="text" style={{color: 'white'}}>After agreeing on the ideas and plans, we will conduct as scheduled and give comments on the results &amp; adaptations.</div>
              </div>
            </div>
            {/* Single item gradation End */}
            {/* Single item gradation Start */}
            <div className="item item-1 animate wow fadeInRight" data-wow-delay="0.25s">
              <div className="line" />
              <div className="circle-wrap">
                <div className="mask">
                  <div className="wave-pulse wave-pulse-1" />
                  <div className="wave-pulse wave-pulse-2" />
                  <div className="wave-pulse wave-pulse-3" />
                </div>
                <h6 className="circle">4</h6>
              </div>
              <div className="content-wrap">
                <h6 className="heading" style={{color: 'white'}}>04. Execute &amp; install</h6>
                <div className="text" style={{color: 'white'}}>Once the final plan is approved, everything will be conducted according to the agreed contract.</div>
              </div>
            </div>
            {/* Single item gradation End */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Gradationprocess