import React from 'react'

function Contactus() {
  return (
 <div className="site-wrapper-reveal">
  {/*====================  Conact us Section Start ====================*/}
  <div className="contact-us-area service-contact-bg section-space--ptb_100">
    <div className="container-fluid">
      <div className="row align-items-center" style={{marginTop: '5%'}}>
        <div className="col-lg-7"  >
          <div  style={{backgroundColor: '#fff',borderRadius:"20px"}}>
          <h4 className="text-center set-heading pt-2" style={{backgroundColor: '#fff'}}>Our Presence</h4>
          <img src="https://quantumitinnovation.com/assets/img/service-images/Capture.png" className="img-fluid " style={{borderBottomLeftRadius: '0.4rem', borderBottomRightRadius: '0.4rem'}} />
        </div>
        </div>
        <div className="col-lg-5 ml-auto pd-l-0">
          <div className="contact-form-service-wrap contact-us-form" style={{padding: '5px 21px 0px 23px !important'}}>
            <div className="contact-title text-center section-space--mb_">
              <h4 className>Get In Touch</h4>
              <p className="text">Tell us what's on your mind and we'll get right back to you !</p>
            </div>
            <form method="post" action="https://quantumitinnovation.com/user_post_inquiry" className="form p-t-20 needs-validation" noValidate>
              <input type="hidden" name="_token" defaultValue="DBw9697XuPVowmV4WFeM6wF3FkMe3xpggNUXO2XM" />
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
                        {/*<option value="Digital Marketing (SEO, PPC, SMO)">Digital Marketing (SEO, PPC, SMO)</option>*/}
                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                        <option value="Robotic Process Automation">Robotic Process Automation</option>
                      </select>
                    </span>
                  </div>
                </div>
                <div className="contact-inner contact-message" style={{margin : '0px 0 17px!important'}}>
                  <textarea name="description" placeholder="Please describe what you need." defaultValue={""} />
                </div>
                <div className="submit-btn text-center">
                  <button className="ht-btn ht-btn-md cust-height-btn" type="submit" style={{height: '31px !important'}}>Send message</button>
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

export default Contactus