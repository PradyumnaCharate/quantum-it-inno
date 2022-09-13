import React from 'react'

function Getintouch() {
  return (
<div>
  <div className="contact-us-area service-contact-bg section-space pb-3">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="contact-info sytle-one service-contact text-left">
            <div className="contact-info-title-wrap">
              <h3 className="heading text-white mb-10">4.9/5.0</h3>
              <div className="ht-star-rating lg-style">
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <p className="sub-text" style={{textAlign: 'left !important'}}>
                Global Presence
                <br /> Worldwide 400+ Clients
                <br /> 1000+ Projects Delivered
              </p>
            </div>
            <div className="contact-list-item">
              <a className="single-contact-list">
              </a><div className="content-wrap"><a className="single-contact-list">
                </a><div className="content"><a className="single-contact-list">
                    <div className="icon">
                      <span className="fal fa-phone" />
                    </div>
                  </a><div className="main-content"><a className="single-contact-list">
                      <h6 className="heading">Call for advice now!</h6>
                    </a><div className="text" style={{fontSize: '1.5em'}}><a className="single-contact-list">
                      </a><a href="tel:+91 9717998517">+91 971 799 8517</a>
                    </div>
                    <div className="text" style={{fontSize: '1.5em'}}>
                      <a href="tel:+1 8778773644">+1 877 877 3644</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="single-contact-list">
              </a><div className="content-wrap"><a className="single-contact-list">
                </a><div className="content"><a className="single-contact-list">
                    <div className="icon">
                      <span className="fal fa-envelope" />
                    </div>
                  </a><div className="main-content"><a className="single-contact-list">
                      <h6 className="heading">Say hello</h6>
                    </a><div className="text" style={{fontSize: 18}}><a className="single-contact-list" /><a href="mailto:sales@quantumitinnovation.com">sales@quantumitinnovation.com</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ml-auto mt-3">
          <div className="contact-form-service-wrap">
            <div className="contact-title text-center section-space--mb_">
              <h4 className>Get In Touch</h4>
              <p className="text">Tell us what's on your mind and we'll get right back to you !</p>
            </div>
            <form method="post" action="https://quantumitinnovation.com/user_post_inquiry" className="form p-t-20 needs-validation" noValidate id="contactus">
              <input type="hidden" name="_token" defaultValue="YruPvrW5oPUZZIsmjkxRNVGS55kzPaU7HT4ka44F" />
              <div className="contact-form__two">
                <div className="contact-input">
                  <div className="contact-inner">
                    <input name="name" type="text" placeholder="Name *" className="cust-height" required />
                  </div>
                  <div className="contact-inner">
                    <input name="email" type="email" placeholder="Email *" className="cust-height" required />
                  </div>
                </div>
                <div className="contact-inner">
                  <input name="number" type="text" placeholder="Phone Number *" className="cust-height" required />
                </div>
                <div className="contact-select">
                  <div className="form-item contact-inner">
                    <span className="inquiry">
                      <select name="enquiry_type" className="select-item cust-height" required>
                        <option value>Your Enquiry about</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Website Design & Development">Website Design &amp; Development</option>
                        <option value="Digital Marketing (SEO, PPC, SMO)">Digital Marketing (SEO, PPC, SMO)</option>
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Robotic Process Automation">Robotic Process Automation</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className="contact-inner contact-message">
                  <textarea name="description" placeholder="Please describe what you need." defaultValue={""} />
                </div>
                <div className="submit-btn text-center">
                  <button className="ht-btn ht-btn-md cust-height-btn" type="submit">Send message</button>
                  <p className="form-messege" />
                </div>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default Getintouch