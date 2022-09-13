import React from 'react'
import {Link} from "react-router-dom"
import { AndroidHero } from '../../../components/AndroidHero'

function Digitalmarketing() {
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
  <AndroidHero image={"https://quantumitinnovation.com/assets/images/3.jpg"} 
title={["Digital Marketing",<br></br>,"Services"]} 
description={["Empowering businesses and industries to shape the future with the Internet of Things. Make things happen."]}

/>
  
  <section className="main-top" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h2 className="top-head">
            Our Guaranteed Digital Marketing Services</h2>
        </div>{/*12*/}
        <div className="col-md-4 col-12 mt-5">
          <div className="box-side-a">
            <div className="one-box-a">
              <div className="main-icon-center text-center">
                <img src="https://quantumitinnovation.com/assets/images/icon_portal_design.png" id="icon-top-d" title="automation" /> 
              </div>
              <h4 className="center-a-s-center">Search Engine Optimization</h4>
              <div className="side-content-d-main">
                <ul className="side-center">
                  <li>E commerce SEO</li>
                  <li>Global &amp; Local SEO</li>
                  <li>Enterprise SEO</li>
                  <li>Local SEO</li>
                  <li>Voice SEO</li>
                  <li>App Store Optimization</li>
                  <li>Online Reputation Management</li>
                </ul>
              </div>{/*side-contewnt*/}
            </div>{/*one-box*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5">
          <div className="box-side-a">
            <div className="one-box-a">
              <div className="main-icon-center text-center">
                <img src="https://quantumitinnovation.com/assets/images/ppc.png" id="icon-top-d" title="automation" /> 
              </div>
              <h4 className="center-a-s-center">Pay Per Click Advertisement</h4>
              <div className="side-content-d-main">
                <ul className="side-center">
                  <li>Search Advertising</li>
                  <li>Display Advertising</li>
                  <li>Mobile Advertising</li>
                  <li>Email Marketing</li>
                  <li>Lead Generation</li>
                  <li>Re-marketing</li>
                  <li>Conversion Rate Optimization</li>
                </ul>
              </div>{/*side-contewnt*/}
            </div>{/*one-box*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5">
          <div className="box-side-a">
            <div className="one-box-a">
              <div className="main-icon-center text-center">
                <img src="https://quantumitinnovation.com/assets/images/Mobile.png" id="icon-top-d" title="automation" /> 
              </div>
              <h4 className="center-a-s-center">Mobile App Development</h4>
              <div className="side-content-d-main">
                <ul className="side-center">
                  <li>Android App Development</li>
                  <li>iOS App Development</li>
                  <li>iPhone App Development</li>
                  <li>Swift App Development</li>
                  <li>Cross Platform App Development</li>
                </ul>
              </div>{/*side-contewnt*/}
            </div>{/*one-box*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5">
          <div className="box-side-a">
            <div className="one-box-a">
              <div className="main-icon-center text-center">
                <img src="https://quantumitinnovation.com/assets/images/Facebook-Marketing.png" id="icon-top-d" title="automation" /> 
              </div>
              <h4 className="center-a-s-center">Social Media Marketing</h4>
              <div className="side-content-d-main">
                <ul className="side-center">
                  <li>Facebook Marketing</li>
                  <li>LinkedIn Marketing</li>
                  <li>Twitter Marketing</li>
                  <li>Instagram Marketing</li>
                </ul>
              </div>{/*side-contewnt*/}
            </div>{/*one-box*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5">
          <div className="box-side-a">
            <div className="one-box-a">
              <div className="main-icon-center text-center">
                <img src="https://quantumitinnovation.com/assets/images/Visual-Marketing-1.png" id="icon-top-d" title="automation" /> 
              </div>
              <h4 className="center-a-s-center">Content Marketing</h4>
              <div className="side-content-d-main">
                <ul className="side-center">
                  <li>Guest Writing</li>
                  <li>Article &amp; Blog Writing</li>
                  <li>SEO Copy-writing</li>
                </ul>
              </div>{/*side-contewnt*/}
            </div>{/*one-box*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5">
          <div className="box-side-a">
            <div className="one-box-a">
              <div className="main-icon-center text-center">
                <img src="https://quantumitinnovation.com/assets/images/joomla-main.png" id="icon-top-d" title="automation" /> 
              </div>
              <h4 className="center-a-s-center">Website Development</h4>
              <div className="side-content-d-main">
                <ul className="side-center">
                  <li>Website Design &amp; Development</li>
                  <li>Mobile friendly Website Development</li>
                  <li>E-commerce Website Development</li>
                </ul>
              </div>{/*side-contewnt*/}
            </div>{/*one-box*/}
          </div>
        </div>{/*4*/}
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  <section className="py-0" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h2 className="top-head">Top Rated Digital Marketing Agency with World Wide Presence</h2>
        </div>{/*12*/} 
        <div className="col-md-12 col-12">
          <div className="top-box-content">
            <p> Digital marketing is trending day by day not only for business but also for jobs oriented. It is like an umbrella, which is also known for Data-Driven Marketing. A professional, an entrepreneur needs to learn because it has more than 15 strategy types which result surprising in boosting your business. It has vast targeting all over the worlds through mobiles, smartphones, tablets, computers via internet for the marketing of products and services.</p><br />
            <p>If you wish to see your business growing on the internet, then being a top digital marketing Agency in USA we will ake it to the next level. We helped and guided to the numerous brands. We have a certified team of professionals who are industry experts. You can be assured of the outcomes of your Digital Marketing Campaign will bring you to the next level.</p><br />
            <p>Top digital Marketing Agency in USAAs a leading top Digital Marketing Agency in USA, UK &amp; India our clientele is spread across the world. We help your website get found the first page in all search engines. We at Quantumitinnovation always try to provide the best Digital Marketing Services to our customers and that makes satisfy them. Our Online Marketing services include search engine optimization, Local SEO, Voice SEO, Google Advertising, PPC Services, eCommerce marketing, Online Reputation Management (ORM), Social Media Marketing etc.</p><br />
            <p>We have a long history of delivering successful business outcomes through digital marketing services for clients from diverse industry to verticals. Our goal is to going above with our clients and beyond to deliver results.</p><br />
            <p>We Build Website and Mobile Apps for Every User, Every Platform and Every Industry
              We are capable of designing &amp; developing fully customized websites, apps, and software. No technology is left untouched because we adopt new trends &amp; technologies that change with time and market demands. We use SEO friendly approach &amp; user-friendly interface that will offer you the most amazing web experience also helps in ranking on multiple search engines. Being a top Digital Marketing Agency in USA we know all the rules and regulation of developing a website and promoting your business that very well interact with the search engine and helps in better ranking from the beginning.Our advanced approach &amp; vast experience will rank you on the top of the searches. We’ve worked with infinite possibilities not only in the mobile app but also web development.</p>
            <button className="side-btn-seo mt-4"> Free Analysis Seo<i className="fas fa-arrow-alt-circle-right" id="left-arrow-s" /></button>
          </div>{/*12*/}
        </div>{/*col-12*/}
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  <section className="pb-5 mt-4 accordion-tab" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h2 className="top-head">Why, we are trusted &amp; top Digital Marketing Agency in USA</h2>
        </div>{/*12*/}
        <div className="col-md-6 mt-5">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn-new" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    9+ years of experience
                  </button> </h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  <p>We have over 9+ years of experience in delivering effective Digital Marketing services including SEO, PPC, SMO, SMM, advertising for clients from different industries. Throughout this period, we have proven track records of delivering the projects of any requirement and complexity within a given time.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: '#fff'}}>
                    Highly Skilled and Experienced Team
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  <p>We are a team of 150+ highly skilled and experienced professionals that include SEO specialists, Web designers &amp; Business analysts and Digital Marketers and are well-versed with all the major digital marketing strategies &amp; trends. They very well know what exactly will work for you and what not, what are your targeting audiences, industry, and deliverables.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: '#fff'}}>
                    99% Customer satisfaction
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" />
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  <p>Being a top digital marketing agaency in USA, customer satisfaction is our primary motto. In the past 9 years, we have delivered 400+ Digital Marketing projects to 180+ clients from worldwide and earn a reputation that sets a milestone. We feel proud and blesses that our customers keep coming back to us for services and solutions.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{color: '#fff'}}>
                    Quality Focused and reversed driven approach
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" />
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body">
                  <p> Our team delivers quality focused services with proven methodologies and our results-driven approach to our clients. We first understand the client’s requirements and then create the best strategic actionable plan. We treat each and every project in right manner that passes through testing, positioning, monitoring etc. We work to take your business to the next level.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{color: '#fff'}}>
                    Competitive pricing and packages
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" />
              </div>
              <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div className="card-body">
                  <p>There are many Web Development &amp; Digital Marketing Agency in USA but we are the best. See our portfolio you’ll know the reality. Quantum IT Innovation offers competitive pricing and custom packages for customers to give result oriented services. We use the best optimal approach for clients to get high return on investment.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingSix">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{color: '#fff'}}>
                    We Work for Every plateform and Industry
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix" />
              </div>
              <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                <div className="card-body">
                  <p>We are capable of designing &amp; developing fully customized websites, mobile apps, and software with SEO &amp; user-friendly interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>{/*6*/}
        <div className="col-md-6">
          <img src="https://quantumitinnovation.com/assets/images/137 SEO.jpg" className="industry-one" title="automation" />
        </div>{/*6*/}
      </div>{/*row*/}
    </div>{/*cont*/}</section>
</div>

  )
}

export default Digitalmarketing