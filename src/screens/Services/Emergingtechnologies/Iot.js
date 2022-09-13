import React from 'react'
import {Link} from "react-router-dom"
import { AndroidHero } from '../../../components/AndroidHero'
import { TopProducts } from '../../../components/TopProducts'

function Iot() {
  return (
<div>
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
  <AndroidHero image={"https://quantumitinnovation.com/assets/images/2.jpg"} 
title={["Internet of Things ",<br></br>," (IoT) Services"]} 
description={["Empowering businesses and industries to shape the future with the Internet of Things. Make things happen."]}

/>
  
  <div className="container pt-4 pb-4">
    <div className="top_sec">
      <h5 className="text-center">Internet of things (IoT) services and solutions</h5>
      <p className="mt-4 txt-algn">
        The Internet of things (IoT) is a process, where several technological and non-technological means such as interrelated computing devices,
        mechanical as well as digital machines, objects, animals or people are having required unique identifiers (UIDs) and skills to transfer 
        data over a network without the need of human-to-human and human-to-computer interaction. 
        Over the period, the convergence of multiple technologies such as real-time analytics, machine learning, embedded systems, 
        commodity sensors, wireless sensor networks, automation and control systems has contributed to evolving the definition of the Internet of Things (IoT). 
        IoT technology covers the devices and home appliances such as thermostats, lighting fixtures, home security systems, and cameras to contribute to promoting 
        ecosystems and associated devices including smart speakers and smartphones. The industries and government have taken these steps concerning the pertaining 
        issues in the growth of IoT, especially in the privacy and security terms.
      </p>
      <p>IoT services &amp; solutions have given rise to a world of the new digital ecosystem, which helps to avoid the challenges faced by customers and provide them with beneficial experience. Moreover,
        it enables the business to avail of accurate insights enabled via machine learning, analytics, and artificial intelligence (AI). IoT is responsible for boosting enterprise productivity, deliver enhanced customer experience, modify service quality, 
        generating new revenue streams, manifest cost-effectiveness and much more, all by enabling the devices to connect and gather, collect and process data. 
      </p>
    </div>    
  </div>
  <div className="benefit-img" style={{backgroundImage: 'url(https://quantumitinnovation.com/assets/img/service-images/benefits_bg.jpg)'}}>
    <div className="container mt-3 mb-3 pt-5 pb-5">
      <h4 className="mb-3 clr-wht text-center"><span>Benefits</span></h4>
      <p className="text-justify mb-3 clr-wht">
        Internet of things (IoT) is a system, which offers numerous benefits by creating a world of the digital ecosystem and providing advantages to the people. Moreover, it helps businesses to create an enhanced customer experience. In other words, IoT helps in facilitating the digital transformation journey of an enterprise.  
      </p>
      <h6 className="mt-4 mb-4 clr-wht">Here are the various benefits of the Internet of Things (IoT), which an enterprise experience. These include: </h6>
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="row">
            <div className="row">
              <div className="col-lg-2 col-md-2">
                <h2><i className="fa fa-cog clr-wht" /></h2>
              </div>
              <div className="col-lg-10 col-md-10">
                <h6 className="clr-wht">Device Management</h6>
                <p className="clr-wht" style={{textAlign: 'left !important'}}>
                  Most of the companies face challenges in terms of security and privacy, which hampers their customer experience and overall growth. 
                  With the help of the Internet of Things (IoT), the company can avoid all kinds of security issues and establish a safe and secure enterprise, 
                  which has stable management of all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="row">
            <div className="col-lg-2">
              <h2><i className="fas fa-chart-line clr-wht" /></h2>
            </div>
            <div className="col-lg-10">
              <h6 className="clr-wht">Edge Analytics</h6>
              <p className="clr-wht" style={{textAlign: 'left !important'}}>IoT provides analytic solutions to an organization which is verticalized and innovative and helps the decision-makers of an enterprise in preparing an insight for their business. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="row">
            <div className="col-lg-2">
              <h2><i className="fa fa-shield clr-wht" /></h2>
            </div>
            <div className="col-lg-10">
              <h6 className="clr-wht">Secure Ecosystem</h6>
              <p className="clr-wht" style={{textAlign: 'left !important'}}>IoT helps the business to protect themselves from all kinds of security issues, especially in terms of privacy by providing them with safety-net services to perform transaction and connections across the ecosystem. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 mt-3">
          <div className="row">
            <div className="col-lg-2">
              <h2><i className="fa fa-server clr-wht" /></h2>
            </div>
            <div className="col-lg-10">
              <h6 className="clr-wht">Engineering Services</h6>
              <p className="clr-wht" style={{textAlign: 'left !important'}}>IoT provides engineering services to the business in terms of hardware, software, and cloud to enable the companies to achieve a competitive edge. </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 mt-3">
          <div className="row">
            <div className="col-lg-2">
              <h2><i className="fa fa-check-square clr-wht" /></h2>
            </div>
            <div className="col-lg-10">
              <h6 className="clr-wht">Standards compliment</h6>
              <p className="clr-wht" style={{textAlign: 'left !important'}}>The automated management provided by IoT enables the companies to easily control compliance across various standards. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>    
  {/*-------------------new-tab----------------------------*/}
  <section className="pb-5 accordion-tab" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h2 className="top-head">Services Offering</h2>
        </div>{/*12*/}
        <div className="col-md-6 mt-5">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn-new" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Consulting and development solutions 
                  </button> </h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>IoT fulfills the requirement for elicitation and analysis</li>
                    <li>IoT enables in structuring the business processes with the help of technology and in-process consulting</li>
                    <li>IoT helps in identifying the problem statement and provides relevant solutions for the same</li>
                    <li>IoT provides thought leadership and repository of business-ready use cases</li>
                    <li>IoT enables the enhancements in products and services</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: '#fff'}}>
                    Intelligent platforms    
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>The emergence of IoT has helped in establishing an open platform architecture, which provides effective connectivity</li>
                    <li>In order to support the IoT resources by keeping in mind the cost efficiency and security, the internet of things has provided services such as multi-tenant architecture to establish the same</li>
                    <li>With the help of IoT, companies are able to support large data with the help of mashup builder and business intelligence</li>
                    <li>IoT has helped the companies to establish devise vendor agnostic and devise virtualization</li>
                    <li>IoT has helped to establish reliable, secure, safe, scalable and OTA (online travel agency) firmware updates</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: '#fff'}}>
                    Connected Devices
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" />
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>IoT has provided services such as hardware product design (PCB, firmware) to provide solutions to the company and accelerate time to market</li>
                    <li>It enables the implementation of design flow and supports PCB fabrication</li>
                    <li>it helps to prepare the IoT framework and enablement</li>
                    <li>It helps in establishing a customized-form factor design and prototyping according to the requirements</li>
                    <li>It provides services, which results in enhancement of the features and certifications</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{color: '#fff'}}>
                    Vertical Applications
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" />
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>It provides end-devise application development along with multiple protocols and supporting cross-platform</li>
                    <li>Internet of things helps in providing native and mobile application development</li>
                    <li>It enables easy to import or export of data to manage applications</li>
                    <li>It enables vertical domain expertise</li>
                    <li>It helps the company in re-engineering and optimization with iterative refinement and customer-driven design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSix">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{color: '#fff'}}>
                    End-To-End System Integration
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix" />
              </div>
              <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>It provides web contents including CRM</li>
                    <li>It enables ERP system integration</li>
                    <li>It helps in the integration of SMS and emails</li>
                    <li>It helps in integration of map and billing engine</li>
                    <li>It helps in integrating multiple IoT assets several departments, functionalities, and stages</li>
                  </ul> 
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSeven">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={{color: '#fff'}}>
                    Testing
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven" />
              </div>
              <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>It enables devise lab testing</li>
                    <li>It enables testing in devise field</li>
                    <li>It enables platform testing</li>
                    <li>It helps in testing a mobile application</li>
                    <li>It enables application automated testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingEight">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight" style={{color: '#fff'}}>
                    Managed services and support
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight" />
              </div>
              <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                <div className="card-body">
                  <ul style={{listStyleType: 'disc'}}>
                    <li>It helps in managing applications</li>
                    <li>It helps in cloud hosting</li>
                    <li>It provides L1/L2/L3 support</li>
                    <li>It helps in managing remote infrastructure</li>
                    <li>It helps in incident managing</li>
                    <li>It enables the command center: SoC/NoC </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{/*8*/}
        <div className="col-md-6 mt-5">
          <img src="https://quantumitinnovation.com/assets/images/137 IOT.jpg" className="industry-one" title="automation" />
        </div>{/*4*/}            
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  {/*--------------------new tab end-=---------------------*/}
  <div className="key-section">
    <img src="https://quantumitinnovation.com/assets/img/key-back.png" alt="key-image" className="img-fluid" />
  </div>
  <div className="focus-area mt-5 mb-5">
    <div className="container">
      <h5>Focus area</h5>
      <p className="text-justify mt-3">The internet of things (IoT) has some seamless solutions, which connect assets, operations/logistics and services to empower smart living, smart industries, smart enterprises, and deliver a connected experience.
      </p>
      <h6 className="mb-3">There are some important segments on which, the focus area of IoT revolves around. These include:  
      </h6>
      <p><i className="fas fa-circle" id="circle" style={{color: '#5d5b5b'}} /><strong>Smart industries:</strong> It involves re-imaging processes such as manufacturing, energy, and utilities to enhance the potential of the industry and facilitating sustainable development. 
      </p>
      <p><i className="fas fa-circle" id="circle" style={{color: '#5d5b5b'}} />
        <strong>Smart living:</strong> It involves enhancing the emerging technologies
        such as wearables, healthcare, and security to establish a 
        healthier, happier and secure environment. 
      </p>
      <p style={{textAlign: 'left !important'}}>
        <i className="fas fa-circle" id="circle" style={{color: '#5d5b5b'}} /><strong>Smart enterprise:</strong> It involves connecting people, machines, and information through large data to increase the efficiency of the business. 
      </p>
    </div>
  </div>
  <div className="why-choose-us mt-5" style={{backgroundImage: 'url(https://quantumitinnovation.com/assets/img/Group-new.png)'}}>
    <div className="container pt-5 pb-5">
      <h5 className="clr-wht text-center mb-3">Why choose Quantum IT for the Internet of Things (IoT)?</h5>
      <i className="fas fa-circle" id="circle" />
      <p className="txt-wht" style={{textAlign: 'left !important'}}>Internet of things (IoT) is a system where physical objects and devices are connected via the internet empowering an ecosystem. These objects can gather data using a network without any manual assistance. </p>
      <i className="fas fa-circle" id="circle" />
      <p className="txt-wht" style={{textAlign: 'left !important'}}>Quantum IT Innovation is a leading IoT company, which provides services to the organization enabling them to convert business needs into competitive advantages by giving IoT solutions. Quantum provides seamless IoT driven services to the clients including the integration of right censor, deriving insights and selecting the best development platform. These services further allow the companies to focus primarily on their outcomes while digital transformation being handled. Quantum is the top IoT company that provides immense benefits to the organizations with the help of their IoT solution portfolio, which includes gateways, coverage over censor, connectivity, cloud user experience, and analytics. Moreover, quantum’s IoT solutions help the companies to improve cost efficiency, business value, increase efficiency and reduce operations. In order to provide the best IoT solutions, quantum has collaborated with top innovators such as Microsoft, Azure, AWS IoT, MongoDB, WindRiver and Intel. </p>
    </div>
  </div>    
  <TopProducts/>
</div>

  )
}

export default Iot