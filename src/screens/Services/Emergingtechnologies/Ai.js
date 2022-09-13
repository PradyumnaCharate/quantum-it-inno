import React from 'react'
import {Link} from "react-router-dom"
import { AndroidHero } from '../../../components/AndroidHero'
import { TopProducts } from '../../../components/TopProducts'

function Ai() {
  return (
<div>
  <div className="site-wrapper-reveal">
    <div className="modal fade" id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header" style={{position: 'relative', backgroundColor: '#0d2933'}}>
            <h4 className="modal-title text-white ml-auto">Leave A Message</h4>  <img src="https://quantumitinnovation.com/assets/images/mobile-icon.gif" className="mobile-i" title="automation" />
            <button type="button" className="close text-white" data-dismiss="modal">×</button>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <form action="#" method="POST" id="leavemessage">
              <div className="form-group">
                <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" />
                <span className="small-icon"><i className="fas fa-user" /></span> </div>
              <div className="form-group">
                <input type="text" name="email" id="email" className="form-control" placeholder="Enter Email" />
                <span className="small-icon"><i className="fas fa-envelope-open" /></span> </div>
              <div className="form-group">
                <input type="text" name="phone" id="phone" onkeypress="return isNumber(event)" className="form-control" placeholder="Enter Contact" />
                <span className="small-icon"><i className="fas fa-mobile-alt" /></span> </div>
              <div className="form-group mb-20">
                <div className="styled-select">
                  <select id="person_select" name="person_select" className="form-control" required aria-required="true">
                    <option value>Choose Services</option>
                    <option value="1 Person">Mobile App Development</option>
                    <option value="2 Person">Seo</option>
                    <option value="3 Person">Web Development</option>
                    <option value="Family Pack">PPC</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea name="lt_message" placeholder="Message Here.." style={{width: '100%', border: '1px solid #ccc', padding: '3px 11px', fontSize: 15, fontWeight: 500}} defaultValue={""} /></div>
              <button className="center-button mx-auto my-2" name="GetStarted"><a>Submit</a></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="main-modal">
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" style={{height: 228, marginTop: '6em', width: 44, /* textAlign: 'center', */
    border: '1px solid', letterSpacing: 1, fontSize: 19, color: '#000', backgroundColor: '#fff', textTransform: 'uppercase', padding: '0.78rem 0.35rem 0px 0px', borderRadius: '25px 0 0 25px'}}>
        <span style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>Let's Connect</span><i className="fas fa-envelope" id="email-id" />
      </button>
    </div>
    {/*-------modal-------------*/}
    <AndroidHero image={"https://quantumitinnovation.com/assets/images/4.jpg"} 
title={["Artificial Intelligence ",<br></br>, "Development Company"]} 
description={[" Make Your Enterprise AI-Ready"]}

/>
   
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="top_sec">
            <h5>WE TURN THE INSIGHTS FROM CONNECTED DEVICES INTO ACTION WITH ADVANCED AI DEVELOPMENT</h5>
            <p className="mt-4" style={{textAlign: 'left !important'}}>
              Internet of Things or AI is an ecosystem of connected physical objects and devices that are accessible through the internet. The ‘thing’ in AI could be a person or an automobile with attached or inbuilt sensors i.e. objects that have been assigned an IP address and have the ability to collect and transfer data over a network without manual assistance. Quantum’s internet of things services enables organizations to transform business needs into competitive advantages by delivering innovative AI powered solutions. We provide comprehensive AI development services to our clients like integrating the right sensors, deriving insights and choosing the best development platform. Quantum’s AI solutions allow businesses to focus on outcomes while we facilitate their digital transformation journey. As a leading AI development company, our end-to-end AI solutions portfolio with coverage over sensors, gateways, connectivity, cloud, user experience and analytics provide immense benefits to organizations. We help you improve business value, enhance efficiency and reduce operations and maintenance cost. We have partnered with leading innovators like Microsoft Azure, AWS AI, MongoDB, WindRiver, Intel and various other device and sensor providers and deliver best-of-class solutions for all of your Internet of Things (AI) requirements.
            </p>
          </div>    
        </div>
        <div className="col-lg-7 plr-30">
          <div className="rgt_sec">
            <div className="row">
              <div className="col-lg-6">
                <img src="https://quantumitinnovation.com/assets/img/icons/mobile-app-strategy.png" />
                <h6 className="ser-sec">AI CONSULTING</h6>
                <p className="txt-algn" style={{textAlign: 'left !important'}}>Quantum’s AI consulting service helps you embark on the AI journey while we guide you in assessment of your organizational readiness, technology stack, domain based value chain mapping, roadmap creation and building complete market strategy.</p>
              </div>
              <div className="col-lg-6">
                <img src="https://quantumitinnovation.com/assets/img/icons/mobile-app-designs.png" />
                <h6 className="ser-sec">AI APP DEVELOPMENT</h6>
                <p className="txt-algn" style={{textAlign: 'left !important'}}>Boost your business and streamline your operations with Quantum’s high-end AI application development services with tight integration of hardware and software technologies for superior performance.</p>
              </div>
              <div className="col-lg-6 mt-5">
                <img src="https://quantumitinnovation.com/assets/img/icons/mobile-app-testing.png" />
                <h6 className="ser-sec">AI TESTING</h6>
                <p className="txt-algn" style={{textAlign: 'left !important'}}>Quantum’s AI testing service provides end-to-end validation services for testing AI implementations which includes functional validation, device simulation, performance testing, load testing, API testing, automation and security verification.</p>
              </div>
              <div className="col-lg-6 mt-5">
                <img src="https://quantumitinnovation.com/assets/img/icons/mobile-app-development.png" />
                <h6 className="ser-sec">DATA ANALYTICS</h6>
                <p className="txt-algn" style={{textAlign: 'left !important'}}>Derive intelligence from data using Quantum’s expert AI Data Analytics services and stay ahead of the competition. Our AI data analysts extract business intelligence from AI data using machine learning and neural network algorithms.</p>
              </div>
              <div className="col-lg-6 mt-5">
                <img src="https://quantumitinnovation.com/assets/img/icons/iot-integrations.png" />
                <h6 className="ser-sec">AI INTEGRATIONS</h6>
                <p className="txt-algn" style={{textAlign: 'left !important'}}>We provide successful AI environment which can integrate and enable new business processes. Our experience rich services can help you in successful AI deployment. We leverage robust analytics, machine learning and big data and can help you integrate solutions that provide secure AI experience.</p>
              </div>
              <div className="col-lg-6 mt-5">
                <img src="https://quantumitinnovation.com/assets/img/icons/iot-extension.png" />
                <h6 className="ser-sec" style={{textAlign: 'left !important'}}>AI EXTENSION</h6>
                <p className="txt-algn" style={{textAlign: 'left !important'}}>Quantum has relevant experience in turning existing hardware into smart AI enabled devices and can help you in sensor selection, quick prototyping, full stack software development, security protocols implementation and firmware updates management.</p>
              </div>
            </div>
          </div>    
        </div>        
      </div>
    </div>
    <div className="container mt-3 mb-3">
      <h4 className="text-center"><span>OUR DEVELOPMENT PROCESS</span></h4>
      <p className="text-center">We deliver highest level of customer service by deploying innovative and collaborative project management systems to build the most professional, robust and highly scalable web &amp; mobile solutions with highest quality standards.</p>
      <div className="row mt-5">
        <div className="col-lg-3 text-center">
          <img src="https://quantumitinnovation.com/assets/img/icons/post-project-requirements.png" className="img-icon" />
          <h6 className="mt-5">POST YOUR PROJECT REQUIREMENTS</h6>
          <p className="text-justify">Our analysts will thoroughly review your project requirements and select the most experienced resource that is best-suited for your project.</p>
        </div>
        <div className="col-lg-3 text-center">
          <img src="https://quantumitinnovation.com/assets/img/icons/discuss-project.png" className="img-icon" />
          <h6 className="mt-5">DISCUSS PROJECT DETAILS WITH OUR ANALYSTS</h6>
          <p className="text-justify">Our experts will contact you within no time to discuss your project related queries and to offer the best solution for your project development.</p>
        </div>
        <div className="col-lg-3 text-center">
          <img src="https://quantumitinnovation.com/assets/img/icons/engagement-terms.png" className="img-icon" />
          <h6 className="mt-5">CHOOSE ENGAGEMENT TERMS &amp; TIMELINES</h6>
          <p className="text-justify">Based on the project consultation provided by our experts, you can choose the engagement timelines for your project execution.</p>
        </div>
        <div className="col-lg-3 text-center">
          <img src="https://quantumitinnovation.com/assets/img/icons/secure-payment.png" className="img-icon" />
          <h6 className="mt-5">SECURELY PAY ONLINE AND GET STARTED!</h6>
          <p className="text-justify">Make payment through our 100% secure online system and our team shall immediately get started on your project within 24 hours.</p>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-6 nopadding">
          <img src="https://quantumitinnovation.com/assets/img/service-images/software.jpg" className="img-fluid" />
        </div>
        <div className="col-lg-6 nopadding back-clr">
          <div className="cust-container">
            <h4 className="clr-wht">OUR CHARTER IS TO MAKE IT THINK, TALK AND PERFORM  LIKE A BUSINESS.</h4>
            <p className="clr-wht">Quantum exhibits expertise in deploying AI solutions for a wide array of business domains spread globally. We provide quick and cost-effective customized AI solutions and services that help enterprises address their technical limitations and exert better control over their business.</p>
          </div>    
        </div>
      </div>
    </div>
    <div className="container mt-5">
      <h4 className="text-center">OUR COMMITMENT &amp; GUARANTEE</h4>
      <p className="text-center">Quantum delivers robust, scalable and high performance software, web and mobile app development services to help you harness the power of technology, consulting and maximize your online business investment.</p>
      <div className="row mt-5">
        <div className="col-lg-3 text-center">
          <h6 className="mt-5">100% TRANSPARENCY</h6>
          <p className="text-justify">At Quantum, we believe in complete transparency with our clients and we keep them fully updated during the entire development production cycle.</p>
        </div>
        <div className="col-lg-3 text-center bdr-lft">
          <h6 className="mt-5">95% ONTIME DELIVERY</h6>
          <p className="text-justify">Our pursuit of agile development methodology have resulted in an enviable 95% on-time delivery track record for the past of our operations.</p>
        </div>
        <div className="col-lg-3 text-center bdr-lft">
          <h6 className="mt-5">FLEXIBLE ENGAGEMENTS</h6>
          <p className="text-justify">Quantum offers tailor-made engagement models, hand crafted to meet the exact requirements of clients with diverse business needs.</p>
        </div>
        <div className="col-lg-3 text-center bdr-lft">
          <h6 className="mt-5">24X7 SUPPORT</h6>
          <p className="text-justify">Our communication channels are open 24/7 that connects you with the appropriate team of experts to ensure smooth execution of your project.</p>
        </div>
      </div>
    </div>
    <hr className="mt-5 mb-5" />
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-lg-5">
          <h4>WHY CUSTOMERS IN OVER 50+ COUNTRIES CHOOSE QUANTUM?</h4>
          <table className="mt-5 table-responsive" style={{width: '100%'}}>
            <tbody><tr>
                <td className="pad-20">FLEXIBLE ENGAGEMENT MODELS</td>
                <td className="pad-20">24X7 SUPPORT ACROSS ALL TIMEZONES</td>
                <td className="pad-20">COMPETITIVE PRICING &amp; ONTIME DELIVERY</td>
              </tr>
              <tr>
                <td className="pad-20">STATE OF THE ART IT INFRASTRUCTURE</td>
                <td className="pad-20">STRONG TECHNOLOGY COMPETENCY</td>
                <td className="pad-20">SEAMLESS COMMUNICATION COMPANY</td>
              </tr>
            </tbody></table>
        </div>
        <div className="col-lg-7 mt-5">
          <img src="https://quantumitinnovation.com/assets/img/service-images/customer-bg1.jpg" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
  <TopProducts/>
</div>

  )
}

export default Ai