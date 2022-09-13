import React from 'react'
import ProjectCounter from '../../components/Companyscreen/ProjectCounter'
import Contactus from '../../components/HomeScreen/Contactus'
import Getintouch from '../../components/HomeScreen/Getintouch'
import { Newsletter } from '../../components/NewsLetter'

function Whyquantum() {
  return (
<div className="site-wrapper-reveal">
  {/*----modal-------*/}
  <div className="modal fade" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header" style={{position: 'relative', backgroundColor: '#0d2933'}}>
          <h4 className="modal-title text-white ml-auto">Leave Ad Message</h4>  <img src="https://quantumitinnovation.com/assets/images/mobile-icon.gif" className="mobile-i" title="automation" />
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
  {/*-------modal-end-------------*/}
  {/*<div class="about-banner-wrap banner-space about-us-bg">*/}
  {/*    <div class="container">*/}
  {/*        <div class="row">*/}
  {/*            <div class="col-lg-8 ml-auto mr-auto">*/}
  {/*                <div class="about-banner-content text-center">*/}
  {/*                    <h1 class="mb-15 text-white">WHY QUANTUMITINNOVATION</h1>*/}
  {/*                    <h5 class="font-weight--normal text-white">Quantum wants you to feel comfortable with what we’re planning to make right choice for your business. We have been into this business since and our experts have gained a lot from working with hundreds of clients all over the world.</h5>*/}
  {/*                </div>*/}
  {/*            </div>*/}
  {/*        </div>*/}
  {/*    </div>*/}
  {/*</div>*/}
  {/*===========  feature-large-images-wrapper  Start =============*/}
  <div className="feature-large-images-wrapper section-space--pt_100">
    <div className="container">
      {/*<h1 class="mb-15">WHY QUANTUMITINNOVATION</h1>*/}
      <div className="row">
        <div className="col-lg-12">
          {/* section-title-wrap Start */}
          <div className="section-title-wrap text-center section-space--mb_60">
            <h6 className="section-sub-title mb-20">Our company</h6>
            <h3 className="heading">We run all kinds of IT services that <br /> vow your <span className="text-color-primary"> success</span></h3>
          </div>
          {/* section-title-wrap Start */}
        </div>
      </div>
      <div className="cybersecurity-about-box section-space--pb_70">
        <div className="row">
          <div className="col-lg-4 offset-lg-1">
            <div className="modern-number-01">
              <h2 className="heading  mr-5"><span className="mark-text">10</span>Years’ Experience in IT</h2>
              <h6 className="heading">More About Our Success Stories</h6>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cybersecurity-about-text">
              <div className="text">Quantum wants you to feel comfortable with what we’re planning to make right choice for your business. We have been into this business since and our experts have gained a lot from working with hundreds of clients all over the world.</div>
              <div className="text">You definitely need a digital marketing agency to help your product and services to sell online. Quantum understands your need and accordingly. Our experts will help you with marketing research, web design planning, data analytics, content strategy. We assure you to get customers on your website and want to stay.</div>
              <div className="text">Our experts at Quantum will search for your customer and will look where they roam online and what all they are searching for. Website design and content generation will help the visitors to find your site and by staying at your website, we will get to know what he really wants. Now when you have made things in place, it the time for data analytics, data analyst will see where the traffic to your website is coming from and experts will even make sure that what will work for you and what will not.</div>
              <div className="button-text">
                {/*<a href="#" class="btn-text">*/}
                {/*    Discover now*/}
                {/*    <span class="button-icon ml-1">*/}
                {/*        <i class="far fa-long-arrow-right"></i>*/}
                {/*    </span>*/}
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-wrapper-reveal">
    {/*===========  feature-large-images-wrapper  Start =============*/}
    <div className="feature-large-images-wrapper bg-gray section-space--pt_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section-title-wrap Start */}
            <div className="section-title-wrap text-center section-space--mb_30">
              <h6 className="section-sub-title mb-20">Quantum IS THE BEST IT PARTNER THAT HELP YOU PROSPER</h6>
              {/*<h3 class="heading">How we claim to<span class="text-color-primary">  excel?</span></h3>*/}
            </div>
            {/* section-title-wrap Start */}
          </div>
        </div>
        <div className="row">
          <div id="owl-4" className="owl-carousel owl-theme">
            <div className="item item-bg">
              <img src="assets/img/icons/why_technical_prowess-1.png" className="box-icons" alt />
              <div className="content">
                <h6 className="text-center clr-wht mt-4">
                  Technical Prowess
                </h6>
                <p className="txt-wht">Quantum conducts extensive research to find out what’s trending in the market. We combine expertise and the latest technology to exceed the clients’ expectations. We use global best practices to deliver excellent services.</p>
              </div>
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_accountability.png" className="box-icons" alt />
              <div className="content">   
                <h6 className="text-center clr-wht mt-4">
                  Accountability
                </h6>
                <p className="txt-wht">We keep you acquainted with every phase of your project. We send you project update every week as well as the plan of the following week, via email. It helps you keep track of status and costs.</p>
              </div>    
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_box_solutions.png" className="box-icons" alt />
              <div className="content">   
                <h6 className="text-center clr-wht mt-4">
                  Out of the Box Solutions
                </h6>
                <p className="txt-wht">We offer you cutting-edge technical solutions that suit the goals of your business as well increase your market value. Our custom solutions are tailored to fulfill your specifications.</p>
              </div>   
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_designers_developers.png" className="box-icons" alt />
              <div className="content">
                <h6 className="text-center clr-wht mt-4">
                  Dedicated Designers &amp; Developers
                </h6>
                <p className="txt-wht">Our experienced and dedicated team provide you proactive support and help to redefine your business processes. They offer high-end quality mobile and web application development solutions that set you apart from your competitors.</p>
              </div>
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_long_client_engagement.png" className="box-icons" alt />
              <div className="content">
                <h6 className="text-center clr-wht mt-4">
                  Strive for Long Client Engagement
                </h6>
                <p className="txt-wht">We always look forward to creating a long-term relationship with our clients. We are committed and extremely responsive to our clients and leave no stone unturned to meet the given deadlines.</p>
              </div>
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_pricing.png" className="box-icons" alt />
              <div className="content">
                <h6 className="text-center clr-wht mt-4">
                  Affordable Pricing
                </h6>
                <p className="txt-wht"> Quantum offers flexible pricing models to the clients. We use cost-effective methodologies to deliver you result-driven solutions. We deliver the project within your budget, without compromising the quality.</p>
              </div>
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_consulting.png" className="box-icons" alt />
              <div className="content">
                <h6 className="text-center clr-wht mt-4">
                  Consulting
                </h6>
                <p className="txt-wht">You can consult us for your IT related problems. From inception to execution of your project, we will guide you at every step and let you know what will work best for you.</p>
              </div>
            </div>
            <div className="item item-bg">
              <img src="assets/img/icons/why_experienced_evelopers.png" className="box-icons" alt />
              <div className="content">
                <h6 className="text-center clr-wht mt-4">
                  Experienced Developers
                </h6>
                <p className="txt-wht">We have a team of experienced and deft developers who offer solutions that best fit your business. What makes us distinctive from the rest is the passion of our developers for the technology.</p>
              </div>
            </div>
          </div>    
          {/*<div class="section-under-heading text-center section-space--mt_40">Challenges are just opportunities in disguise. <a href="#">Take the challenge!</a></div>*/}
        </div>
      </div>
      {/*===========  feature-large-images-wrapper  End =============*/}
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_40">
              <h3 className="heading">Proud projects that<span className="text-color-primary"> make us stand out</span></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 portfolioBox cat--1">
            <a href="https://quantumitinnovation.com/10th-gate-tours" className="projects-wrap style-01">
            </a><div className="hovereffect"><a href="https://quantumitinnovation.com/10th-gate-tours" className="projects-wrap style-01">
                <img className="img-responsive web_img_shadows" width="100%" src="assets/images/projects/thumbnail/10th-gate-tours.jpg" alt />
              </a><div className="overlay"><a href="https://quantumitinnovation.com/10th-gate-tours" className="projects-wrap style-01">
                </a><a className="port_info" href="https://quantumitinnovation.com/10th-gate-tours">10th gate tours</a>
                <br /><br />
              </div>
            </div>
          </div>
          {/* BOX-END */}
          {/* BOX-START */}
          <div className="col-lg-3 col-md-3 portfolioBox cat--1">
            <a href="https://quantumitinnovation.com/adelphia" className="projects-wrap style-01">
            </a><div className="hovereffect"><a href="https://quantumitinnovation.com/adelphia" className="projects-wrap style-01">
                <img className="img-responsive web_img_shadows" width="100%" src="././assets/images/projects/thumbnail/adelphia.jpg" alt />
              </a><div className="overlay"><a href="https://quantumitinnovation.com/adelphia" className="projects-wrap style-01">
                </a><a className="port_info" href="https://quantumitinnovation.com/adelphia">adelphia</a>
                <br /><br />
              </div>
            </div>
          </div>
          {/* BOX-END */}
          {/* BOX-START */}
          <div className="col-lg-3 col-md-3 portfolioBox cat--1">
            <a href="https://quantumitinnovation.com/bhamas" className="projects-wrap style-01">
            </a><div className="hovereffect"><a href="https://quantumitinnovation.com/bhamas" className="projects-wrap style-01">
                <img className="img-responsive web_img_shadows" width="100%" src="assets/images/projects/thumbnail/bhamas.jpg" alt />
              </a><div className="overlay"><a href="https://quantumitinnovation.com/bhamas" className="projects-wrap style-01">
                </a><a className="port_info" href="https://quantumitinnovation.com/bhamas">bhamas</a>
                <br /><br />
              </div>
            </div>
          </div>
          {/* BOX-END */}
          {/* BOX-START */}
          <div className="col-lg-3 col-md-3 portfolioBox cat--1">
            <a href="https://quantumitinnovation.com/canahemp" className="projects-wrap style-01">
            </a><div className="hovereffect"><a href="https://quantumitinnovation.com/canahemp" className="projects-wrap style-01">
                <img className="img-responsive web_img_shadows" width="100%" src="assets/images/projects/thumbnail/canahemp.jpg" alt />
              </a><div className="overlay"><a href="https://quantumitinnovation.com/canahemp" className="projects-wrap style-01">
                </a><a className="port_info" href="https://quantumitinnovation.com/canahemp">canahemp</a>
                <br /><br />
              </div>
            </div>
          </div>
          {/* BOX-END */}
        </div>
      </div> 
      {/*===========  feature-icon-wrapper  Start =============*/}
      <div className="feature-icon-wrapper section-space--pb_80 section-space--pt_80 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="feature-list__three">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="grid-item animate">
                      <div className="ht-box-icon style-03">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                              <i className="fal fa-life-ring" />
                            </div>
                            <h5 className="heading">
                              Quality Assurance System
                            </h5>
                          </div>
                          <div className="content">
                            <div className="text">Our service offerings enhance customer experience throughout secure &amp; highly functional end-to-end warranty management.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grid-item animate">
                      <div className="ht-box-icon style-03">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                              <i className="fal fa-lock-alt" />
                            </div>
                            <h5 className="heading">
                              Accurate Testing Processes
                            </h5>
                          </div>
                          <div className="content">
                            <div className="text">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grid-item animate">
                      <div className="ht-box-icon style-03">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                              <i className="fal fa-globe" />
                            </div>
                            <h5 className="heading">
                              Smart API Generation
                            </h5>
                          </div>
                          <div className="content">
                            <div className="text">Develop and propose product improvements through periodical and accurate testing, repairing &amp; refining every version.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="grid-item animate">
                      <div className="ht-box-icon style-03">
                        <div className="icon-box-wrap">
                          <div className="content-header">
                            <div className="icon">
                              <i className="fal fa-medal" />
                            </div>
                            <h5 className="heading">
                              Infrastructure Integration Technology
                            </h5>
                          </div>
                          <div className="content">
                            <div className="text">At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===========  feature-icon-wrapper  End =============*/}
      
        <ProjectCounter/>
      
         <Newsletter/>
    </div></div></div>

  )
}

export default Whyquantum