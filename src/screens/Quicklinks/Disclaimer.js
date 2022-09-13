import React from 'react'

function Disclaimer() {
  return (
<div>
  <div className="container pt-5">
    <div className="row">
      <div className="col-lg-6">
        <h5 className>Disclaimer for Quantum IT Innovation</h5>
        <p>If you require any more information or have any questions about our disclaimer, please feel free to contact us by email at <strong>sales@quantumitinnovation.com</strong></p>
        <ul style={{listStyleType: 'disc'}}>
          <li><h6 className="mb-3">All the contact number mentioned on the website are routed to India Development Center.</h6></li>
          <li><h6>All sales point of contact that are mentioned on the website are reference contacts, not necessarily be commercial premises.</h6></li>
        </ul>
      </div>
      <div className="col-lg-6 pb-5">
        <div className="contact-form-service-wrap contact-us-form">
          <div className="contact-title text-center section-space--mb_">
            <h4 className>Get In Touch</h4>
            <p className="text">Tell us what's on your mind and we'll get right back to you !</p>
          </div>
          <form method="post" action="https://quantumitinnovation.com/user_post_inquiry" className="form p-t-20 needs-validation" noValidate>
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
              <div className="contact-select">
                <div className="form-item contact-inner">
                  <span className="inquiry">
                    <select name="enquiry_type" className="select-item cust-height" required>
                      <option value="Your inquiry about">Your Enquiry about</option>
                      <option value="General Information Request">General Information Request</option>
                      <option value="Partner Relations">Partner Relations</option>
                      <option value="Careers">Careers</option>
                      <option value="Software Licencing">Software Licencing</option>
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

    
  )
}

export default Disclaimer