import React from 'react'

function Testimonial() {
  return (
    <div>
  <div className="testimonial-slider-area section-space--ptb_120 bg-gray-3">
    <div className="container-fluid container-fluid--cp-80">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-wrap text-center section-space--mb_60">
            <h6 className="section-sub-title mb-20">Testimonials</h6>
            <h3 className="heading">Here's What Our <span className="text-color-primary">Clients Say</span></h3>
          </div>
          <div className="testimonial-slider">
            <div className="swiper-container testimonial-slider__container-two">
              <div className="swiper-wrapper testimonial-slider__wrapper">
                {/*testimonial box*/}
                <div className="swiper-slide">
                  <div className="testimonial-slider__single wow move-up">
                    {/* <h6 class="testimonial-subject">???????????????</h6> */}
                    <div className="testimonial-slider__text"><i className="fa fa-quote-left left_quote" />First of all, I want to recommend Quantumitinnovation, because they stay connected with you even after the project is delivered to ensure the maximum ROI. The team is efficient in responding and in dealing with new challenges.</div>
                    <div className="author-info">
                      <div className="testimonial-slider__media">
                        <img src="https://quantumitinnovation.com/assets/images/testimonial/1.jpg" className="img-fluid" alt />
                      </div>
                      <div className="testimonial-slider__author">
                        <h6 className="name">Peter Albert</h6>
                        {/* <span class="designation">WEB DESIGNER</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*testimonial box*/}
                <div className="swiper-slide">
                  <div className="testimonial-slider__single wow move-up">
                    {/* <h6 class="testimonial-subject">???????????????</h6> */}
                    <div className="testimonial-slider__text"><i className="fa fa-quote-left left_quote" />I must say Quantumitinnovation have an outstanding technical team. We have been able to achieve a major milestone in this initiative so quickly because of the undying dedication that your team maintained throughout the project cycle.</div>
                    <div className="author-info">
                      <div className="testimonial-slider__media">
                        <img src="https://quantumitinnovation.com/assets/images/testimonial/2.jpg" className="img-fluid" alt="dd" />
                      </div>
                      <div className="testimonial-slider__author">
                        <h6 className="name">Gary Eagly</h6>
                        {/* <span class="designation">Marketing</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*testimonial box*/}
                <div className="swiper-slide">
                  <div className="testimonial-slider__single wow move-up">
                    {/* <h6 class="testimonial-subject">???????????????</h6> */}
                    <div className="testimonial-slider__text"><i className="fa fa-quote-left left_quote" />Team Quantumitinnovation consistently went above and beyond in terms of responsiveness, adaptability to new requirements, and dedication to client and concept.</div>
                    <div className="author-info">
                      <div className="testimonial-slider__media">
                        <img src="https://quantumitinnovation.com/assets/images/testimonial/3.jpg" className="img-fluid" alt="fgdf" />
                      </div>
                      <div className="testimonial-slider__author">
                        <h6 className="name">Bonnie Schaffer</h6>
                        {/* <span class="designation">PR Officer</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/*testimonial box*/}
                <div className="swiper-slide">
                  <div className="testimonial-slider__single wow move-up">
                    {/* <h6 class="testimonial-subject">???????????????</h6> */}
                    <div className="testimonial-slider__text"><i className="fa fa-quote-left left_quote" />I had a plain boring website until I got it redesigned from Quantum IT Innovation. The team of designers and developers at Quantum IT Innovation is truly professional and certainly cares about its clients’ needs. Highly recommended!</div>
                    <div className="author-info">
                      <div className="testimonial-slider__media">
                        <img src="https://quantumitinnovation.com/assets/images/testimonial/4.jpg" className="img-fluid" alt="tert" />
                      </div>
                      <div className="testimonial-slider__author">
                        <h6 className="name">Milbrey Thompson</h6>
                        {/* <span class="designation">PR Officer</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-slider__single wow move-up">
                    {/* <h6 class="testimonial-subject">???????????????</h6> */}
                    <div className="testimonial-slider__text"><i className="fa fa-quote-left left_quote" />Quantum IT Innovation gave value to my business website. I highly recommend Quantum IT Innovations a web development company that is professional, talented, and competent. </div>
                    <div className="author-info">
                      <div className="testimonial-slider__media">
                        <img src="https://quantumitinnovation.com/assets/images/testimonial/5.jpg" className="img-fluid" alt="ggr" />
                      </div>
                      <div className="testimonial-slider__author">
                        <h6 className="name">Phillis Marshall</h6>
                        {/* <span class="designation">PR Officer</span> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-slider__single wow move-up">
                    {/* <h6 class="testimonial-subject">???????????????</h6> */}
                    <div className="testimonial-slider__text"><i className="fa fa-quote-left left_quote" />Can't speak highly enough of Quantum IT Innovation and their team. Assisted me understand what exactly I needed. The web application they developed is everything I needed. Thanks a ton guys, keep up the good work!</div>
                    <div className="author-info">
                      <div className="testimonial-slider__media">
                        <img src="https://quantumitinnovation.com/assets/images/testimonial/6.jpg" className="img-fluid" alt="htryhty" />
                      </div>
                      <div className="testimonial-slider__author">
                        <h6 className="name">Kristopher Neuvirth</h6>
                        {/* <span class="designation">PR Officer</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination-t0 section-space--mt_30" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonial