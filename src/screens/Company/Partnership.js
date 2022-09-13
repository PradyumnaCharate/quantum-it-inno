import React from 'react'
import ProjectCounter from '../../components/Companyscreen/ProjectCounter'
import { TopProducts } from '../../components/TopProducts'

function Partnership() {
  return (
 
<div className="site-wrapper-reveal">
  {/*----modal-------*/}
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
  {/*-------modal-end-------------*/}
  {/*Banner Image Section */} 
  {/*<div class="about-banner-wrap banner-space about-us-bg">*/}
  {/*        <div class="container">*/}
  {/*            <div class="row">*/}
  {/*                <div class="col-lg-8 ml-auto mr-auto">*/}
  {/*                    <div class="about-banner-content text-center">*/}
  {/*                        <h1 class="mb-15 text-white">PARTNERSHIP</h1>*/}
  {/*<h5 class="font-weight--normal text-white">Mitech specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. </h5>*/}
  {/*                    </div>*/}
  {/*                </div>*/}
  {/*            </div>*/}
  {/*        </div>*/}
  {/*</div>*/}
  {/*===========  feature-large-images-wrapper  Start =============*/}
  <div className="container">
    <h1 className="mb-15 pt-4 text-center">PARTNERSHIP</h1>
    <div className="row">
      <div className="col-lg-7">
        <p className="text-justify mt-5">
          Partnership reduces the load and even the risk and Quantum is known for serving best services to our clients or partners. You can make your choice by partnering with us for Global clientele, Revenue Opportunity, brand association, Technical support, lower risks, and non-competitive relationship.
        </p>
        <p className="text-justify">Quantum offers four types partnership: Offshore Partnership, Referral Partnership, Re-seller partnership, Joint Partnership.</p>
        <p className="text-justify">Quantum is very strict towards providing high-quality products, delivering things in time and utilization of all latest method by our experts and this helps you on being top of the peak in the industry.</p>
        <p className="text-justify">We believe, working together as a partner will solve things easily and will be beneficial for both. We even refer our partners to our clients and being referred by us will make a special impact. This partnership will help both the brands.</p>
        <p className="text-justify">To our re-seller partners, we do something special. We find a unique way to wrap up the project without any quality suffer. Working together will help us know your requirement and will definitely provide you desired result.</p>
        <p className="text-justify">Such partner will Quantum will get a collaborate with professional team who use latest technologies to create final results and will make sure you always move ahead in this race.</p>
      </div>  
      <div className="col-lg-1" />
      <div className="col-lg-4">
        <div className="why-section mt-5">
          <h5 className="mb-3">Why Partner with us?</h5>
          <ul style={{listStyleType: 'disc'}}>
            <li>Global clientele</li>
            <li>Revenue opportunities</li>
            <li>Lower Risks</li>
            <li>Technical support</li>
            <li>Brand association</li>
            <li>Promotional opportunities</li>
            <li>Resources and tools</li>
            <li>Non-competitive relationship</li>
          </ul>
        </div>
      </div>
    </div>        
  </div>
  <div className="feature-large-images-wrapper section-space--pb_100 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* section-title-wrap Start */}
          <div className="section-title-wrap text-center section-space--mb_60">
            <h6 className="section-sub-title mb-20">Partnership we Offer</h6>
            {/*<h3 class="heading">Share the joy of achieving <span class="text-color-primary"> glorious   <br> moments</span> & climbed up <span class="text-color-primary">the top.</span></h3>*/}
          </div>
          {/* section-title-wrap Start */}
        </div>
      </div>
      <div className="cybersecurity-about-box">
        <div className="row">
          <div className="col-lg-5 col-md-6 offset-lg-1">
            <div className="modern-number-01 number-two">
              <h2 className="heading  mr-5"><span className="mark-text">10</span>Years’ Experience in IT</h2>
              <h5 className="heading mt-30">We’ve been triumphing all these <span className="text-color-primary"> 10 years. </span> Sacrifices are made up with success. </h5>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button className="btn-new" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Offshore Partnership
                    </button> </h5>
                  <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="card-body">
                    <p style={{margin: 0}}>We ensure the best services to our clients or partners and assure a high-quality product. Promised on-time delivery and use of latest technologies by our employees, keeps you well ahead of your competitors. Working together always combines the experience of both companies, in turn, being beneficial for both. Another advantage of working with us is that you don’t have to worry about our part and can focus on your business.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: '#fff'}}>
                      Referral Partnership
                    </button></h5>
                  <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div className="card-body">
                    <p>As our clients and partners, you can reward us for our services. Help Quantum grow by referring it to other companies. In turn, we will reward you by paying you for your loyalty as your commission. Being our referral partners would also give you a special place in the list of our clients. Known for our IT solutions and technical support, we will provide you with the best that we can. Also, we would always keep you updated about the latest technologies that could, in any way, do good to your business. This give-and-take partnership would certainly benefit both brands</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: '#fff'}}>
                      Re-seller Partnership
                    </button></h5>
                  <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" />
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div className="card-body">
                    <p style={{margin: 0}}> Quantum is known for its services. We value our clients the most and do not let them down. If you are in a reseller partnership with us, we will give you many benefits. We will find the most cost effective ways to complete your project without letting the quality suffer. As we will work together, we will understand your requirements and deliver the awaited results. From one project to other, our team of experts comprises of all kinds of developers and the best part is that you can choose the ones you prefer the most. Keep working with us for an unmatched experience.</p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h5 className="mb-0">
                    <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{color: '#fff'}}>
                      Joint Venture
                    </button></h5>
                  <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" />
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                  <div className="card-body">
                    <p style={{margin: 0}}> By joining hands with us, you will get to work with a reliable team of professionals who use latest technologies and bring out the desired results for you. With the amount of experience we have in the industry, we will certainly help you expand your network. Also, we will always keep you a step ahead of your competition as our employees would keep a regular check on their work. A collaboration with you would mean a great opportunity for both the companies to learn from each other and build a strong bond which will be beneficial for both the brands.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProjectCounter/>
  <TopProducts/>
</div>

  )
}

export default Partnership