
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';

export const Contact = () => {
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
        <div className="contact-us-area service-contact-bg section-space--ptb_100">
  <div className="container-fluid">
    <div className="row align-items-center" style={{marginTop: '5%'}}>
      <div className="col-lg-7">
        <h4 className="text-center set-heading pt-2" style={{backgroundColor: '#fff'}}>Our Presence</h4>
        <img src="assets/img/service-images/Capture.png" className="img-fluid " style={{borderBottomLeftRadius: '0.4rem', borderBottomRightRadius: '0.4rem'}} />
      </div>
      <div className="col-lg-5 ml-auto pd-l-0">
        <div className="contact-form-service-wrap contact-us-form" style={{padding: '5px 21px 0px 23px !important'}}>
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