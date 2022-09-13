import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

    
    export const Newsletter = () => {
      const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [about, setAbout] = useState('');
  const [description, setDescription] = useState('');
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const  { data } = await axios.post('https://quantumit-backend.herokuapp.com/api/contact', {
        name:name,
        email:email,
        mobileNo:mobileNo,
        about:about,
        description:description
      });
      toast.success(data.message,{position:toast.POSITION.TOP_CENTER});
     
     
     
      

    } catch (error) {
      toast.error(error,{position:toast.POSITION.TOP_CENTER});
      
    }
  };
        return(
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
          <Form className="form p-t-20" onSubmit={submitHandler}>
           
            <div className="contact-form__two">
              <div className="contact-input">
                <div className="contact-inner">
                  <Form.Control name="name" type="text"
            onChange={(e) => setName(e.target.value)}
            required className="cust-height" placeholder="Name"/>
                </div>
                <div className="contact-inner">
                  <Form.Control name="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="cust-height" required />
                </div>
              </div>
              <div className="contact-inner">
                <Form.Control name="number" type="text" placeholder="Phone Number"  onChange={(e) => setMobileNo(e.target.value)} className="cust-height" required />
              </div>
              <div className="contact-select">
                <div className="form-item contact-inner">
                  <span className="inquiry">
                    <Form.Select name="enquiry_type" onChange={(e) => setAbout(e.target.value)} className="select-item cust-height" required>
                      <option value>Your Enquiry about</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Website Design & Development">Website Design &amp; Development</option>
                      {<option value="Digital Marketing (SEO, PPC, SMO)">Digital Marketing (SEO, PPC, SMO)</option>}
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                      <option value="Robotic Process Automation">Robotic Process Automation</option>
                    </Form.Select>
                  </span>
                </div>
              </div>
              <div className="contact-inner contact-message" style={{margin : '0px 0 17px!important'}}>
                <Form.Control as="textarea" rows={2} name="description" placeholder="Please describe what you need." defaultValue={""} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="submit-btn text-center">
                <button className="ht-btn ht-btn-md cust-height-btn" type="submit" style={{height: '31px !important'}}>Send message</button>
                <p className="form-messege" />
              </div>
              <br />
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer/>
</div>


    
    
    
        )
        
    
    }