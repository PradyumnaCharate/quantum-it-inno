import React from 'react'
import {Link} from "react-router-dom"
import { AndroidHero } from '../../../components/AndroidHero'
import Ourprocess from '../../../components/Companyscreen/Services/Webdevelopment/Ourprocess'
import Projectmakestandusout from '../../../components/Companyscreen/Services/Webdevelopment/Projectmakestandusout'
import { TopProducts } from '../../../components/TopProducts'

function Nodejsdevelopment() {
  return (
<div>

  <div className="site-wrapper-reveal">
    {/*============ Resolutions Hero Start ============*/}
      <AndroidHero image={"https://quantumitinnovation.com/assets/img/NODE.jpg"} 
  title={["NODE.JS ", <br></br>,  "DEVELOPMENT"]} 
  description={["Best Node.js development company building ", <br></br>,  "infinitely scalable and high performance applications."]}/>
  
    <div className="container mt-5 mb-3">
      <div className="row">
        <div className="col-lg-3">
          <h6>Node.js <br /> Development</h6>
          <p style={{textAlign: 'left !important'}}>Leading Node.js Development Service Provider</p>
        </div>    
        <div className="col-lg-9">
          <p style={{textAlign: 'left !important'}}>
            Quantum is an Indian Node.js development company that holds the expertise in using the features of Node.js and offering the best development services. Our proficient developers in JavaScript use the agile-based technique to build scalable and highly efficient network applications. Thus, we help you to deliver your business, the best solutions, and services.
          </p>
          <p style={{textAlign: 'left !important'}}>
            Our team is highly experienced in Node.js development, an event-driven, lightweight, non-blocking, and efficient I/O model built on Google V8 JavaScript engine. We offer safe, flexible, robust, and expandable web solutions to a wide range of areas such as CRM, social networking, e-commerce, etc.
          </p>
        </div>
      </div> 
      {/*<h5 class="text-center mt-5 mb-3">.NET Application Development Services</h5>*/}
      {/*<p>The .NET Framework offers powerful programming model and extensive API set which help to develop business solution easily.*/}
      {/*    We have a separate certified team for .NET based web and application development. We work on full stack development in building ASP.NET, VB.NET and*/}
      {/*    ADO.NET based applications. ASP.NET is the best framework to build websites, Web application and software in many industries. */}
      {/*    Dot net helps to develop mobile website and web API easily.*/}
      {/*    We are the leading .NET Development Company serving worldwide. */}
      {/*   We have a very good team of full stack .Net developer who can develop any kind of .net software solution.*/}
      {/*</p>*/}
    </div>
    <div className="node-stack mt-3 mb-2">
      {/*<div class="container-fluid">*/}
      <img src="https://quantumitinnovation.com/assets/img/2020-01-20.png" className="img-fluid" />
      {/*</div>    */}
    </div>
    <div className="process-section mt-5 mb-5">
      {/*<div class="container-fluid">*/}
      <Ourprocess/>
    </div>
    <div className="container">
      <h5 className="text-center mt-5">A Brief Look at Our Successful Web Development Projects</h5>
      <p className="text-center">So far, we have developed more than 100 innovative web apps for clients in more than 20 countries…</p>
      <div className="row">
        <div className="col-lg-6 mt-3">
          <h6 className="title-c">OUR FORTE</h6>
          <ol style={{listStyle: 'none'}} className="order-c">
            <li>Premier mobile app development company</li>
            <li>24/7 technical support and excellent after sales services</li>
            <li>Result-oriented strategies</li>
            <li>Focus on 100% customer satisfaction</li>
            <li>Strong technical competency</li>
            <li>Project completion on time</li>
            <li>Client’s data is kept confidential</li>
            <li>Seamless communication via Email/Skype/Phone</li>
          </ol>
        </div>   
        <div className="col-lg-6 mt-3">
          <h6 className="title-c">OUR PROPOSITION</h6>
          <ol style={{listStyle: 'none'}} className="order-c">
            <li>Leverage Innovative Technologies</li>
            <li>Project Development Techniques</li>
            <li>Industry-leading Solutions</li>
            <li>Technology Consulting</li>
            <li>Competitive Pricing</li>
            <li>Customer-Focused Engagement Model</li>
            <li>A Team of Experts and Professionals</li>
            <li>Quality Assurance</li>
          </ol>
        </div>    
      </div>
    </div>    
     
         <Projectmakestandusout/>
         
    
       
     
    <div className="why-choose-us pt-5" style={{backgroundImage: 'url(https://quantumitinnovation.com/assets/img/Group-new.png)'}}>
      <div className="container pb-5">
        <h6 className="clr-wht text-center mb-3">Why Quantum is the Best Choice to acquire your Business Goals?</h6>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht" style={{textAlign: 'left !important'}}>A team of versatile developers at Quantum offers services and assistance to several small as well as large enterprises. 
          We provide completely transparent solutions to our clients and deliver scalable and flexible Node.js web development projects to them. 
          This takes your business to the next level.
        </p>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht" style={{textAlign: 'left !important'}}>We work according to the needs of customers, involve them at every phase of the project, 
          and take their feedback after creating the final product. 
          We believe in long term commitment and try our best to meet the expectations of the clients.
        </p>
      </div>              
    </div>
  </div>
  <TopProducts/>
</div>

  )
}

export default Nodejsdevelopment