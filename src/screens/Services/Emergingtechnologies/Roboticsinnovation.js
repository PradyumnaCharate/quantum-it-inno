import React from 'react'
import {Link} from "react-router-dom"
import { AndroidHero } from '../../../components/AndroidHero'
import { TopProducts } from '../../../components/TopProducts'

function Roboticsinnovation() {
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
title={["Robotic Process",<br></br>, "Automation",<br></br>," (RPA) Services"]} 
description={["Empowering businesses and industries to shape the future with the Internet of Things. Make things happen."]}

/>
 
  <section className="py-0 pb-5" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h5 className="txt-center">Robotic Process Automation Services</h5>
        </div>{/*12*/} 
        <div className="col-md-12 col-12">
          <div className="top-box-content">
            <p>With the growing demand in the technological sector, a majority of organizations are adopting the task-level Robotic Process Automation (RPA) to tackle the organizational challenges such as increasing workforce efficiency, Total cost of ownership (TCO), decreasing human error and much more. RPA refers to the technology where manual work of humans is reduced by replacing them with robots.</p><br />
            <p> It enables the companies to bring digital in the market, which not only increases the speed of work but cuts down the cost of employing humans for executing standard operating procedures (SOP). The RPA technology in an organization can be used to carry out various work including capturing and interpreting application processes, manipulating data, trigger responses, configuring existing software while keeping other devices undisturbed, creating communication channels with other systems and much more. </p><br />
            <p>Moreover, RPA has the ability to re-configure rule-based processes due to its code-free nature, which does not need critical programming skills for the modification of pre-coded bots. It helps in bringing scalability and elasticity in the process execution to meet the requirements of a dynamic business environment. RPA helps you survive in the market competition by replacing manual work with robots, which helps in increasing productivity, reducing cost and transforming the business ecosystem. 
            </p>
          </div>{/*12*/}
        </div>{/*col-12*/}
        <div className="col-md-12 mt-3
        ">
          <img src="assets/images/AI.jpg" className="bottom-img" alt />
        </div>{/*12*/}
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  <section className="main-top" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h5 className="txt-center">Some Key Benefits Of Adopting RPA For Your Company</h5>
        </div>{/*12*/}
        <div className="col-md-4 col-12 mt-5 text-center">
          <div className="box-side">
            <i className="fas fa-archway" id="icon-top" />
            <h4 className="heading-mid">Cost efficiency</h4>
            <div className="side-content">
              <p className="clr-wht">RPA is a cost-efficient software as it enables the company to replace human work with robots. Using robots to carry out the work costs very less than a human worker.</p>
            </div>{/*side-contewnt*/}
          </div>{/*box*/}
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5 text-center">
          <div className="box-side">
            <i className="fas fa-asterisk" id="icon-top" />
            <h4 className="heading-mid">Higher Accuracy</h4>
            <div className="side-content">
              <p className="clr-wht">RPA is a software, which provides high-quality work with 100% accuracy. A work done by RPA does not require any rework and provides error-free data. 
              </p>
            </div>{/*side-contewnt*/} 
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5 text-center">
          <div className="box-side">
            <i className="fas fa-running" id="icon-top" />
            <h4 className="heading-mid">Speedy Work</h4>
            <div className="side-content">
              <p className="clr-wht">A robot works at a speed higher than the human worker. Even the robot can work 24/7 without getting tired but human work cannot. Hence, completing the task in a very less amount of time. </p>
            </div>{/*side-contewnt*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5 text-center">
          <div className="box-side">
            <i className="fas fa-bolt" id="icon-top" />
            <h4 className="heading-mid">Enhanced operational agility</h4>
            <div className="side-content">
              <p className="clr-wht">Switching to another task can be a bit difficult for a human worker. Since robots have the ability to switch to other work without any constraints. A business organization can anytime train a robot.
              </p>
            </div>{/*side-contewnt*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5 text-center">
          <div className="box-side">
            <i className="fab fa-canadian-maple-leaf" id="icon-top" />
            <h4 className="heading-mid">Enhanced customer experience</h4>
            <div className="side-content">
              <p className="clr-wht"> RPA provides great customer experience with its efficient services such as fast delivery and 24-hour coverage. 
              </p>
            </div>{/*side-contewnt*/}
          </div>
        </div>{/*4*/}
        <div className="col-md-4 col-12 mt-5 text-center">
          <div className="box-side">
            <i className="fas fa-bookmark" id="icon-top" />
            <h4 className="heading-mid">Reduced Response Time</h4>
            <div className="side-content">
              <p className="clr-wht"> A human worker takes a lot of time in calculating data and responding. Since, robots are quicker to the gathering, analyzing and calculating the data.
              </p>
            </div>{/*side-contewnt*/}
          </div>
        </div>{/*4*/}
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  {/*process*/}
  <section className="main-top" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h5 className="txt-center">
            Our Process</h5>
          <p className="process-content" style={{textAlign: 'center'}}>Adoption of RPA for your organization means bringing efficiency in business workflow, data extraction, enhanced operational task. RPA works in a very smooth process with help in achieving the upper hand over your competition.  
          </p>
        </div>{/*12*/}
        <div className="col-md-1 mt-5">
          <div className="side-bar" style={{float: 'left', minHeight: 0, width: '100%'}}>
            <div className="bullet-text-center"><i className="fas fa-stop-circle" /></div>
            <div className="border-side text-center" />
            <div className="bullet-text-center"><i className="fas fa-stop-circle" /></div>
            <div className="border-side text-center" />
            <div className="bullet-text-center"><i className="fas fa-stop-circle" /></div>
          </div>
        </div>
        <div className="col-md-11 col-12">
          <div className="row mt-4">
            <div className="box-side-seo pb-2" style={{boxShadow: 'none !important'}}>
              <h4 className="center-a-s">Analyzing</h4>
              <div className="side-content-d">
                <p style={{textAlign: 'left !important'}}>The first and foremost step is analyzing the process, which requires automation and selection of the right tools for its implementation. The elements including process lifetime.
                </p>
              </div>{/*side-contewnt*/}
            </div>
            <div className="box-side-seo pb-2 mt-3" style={{boxShadow: 'none !important'}}>
              <h4 className="center-a-s">Application</h4>
              <div className="side-content-d">
                <p style={{textAlign: 'left !important'}}>After the identification of all aspects such as the procedure of implementation, costs, and risks involved, the company begins with the real application of design and development. 
                </p>
              </div>{/*side-contewnt*/}
            </div>
            <div className="box-side-seo pb-2 mt-3" style={{boxShadow: 'none !important'}}>
              <h4 className="center-a-s">Authorization</h4>
              <div className="side-content-d">
                <p style={{textAlign: 'left !important'}}>In the authorization stage, a POC is developed for the determination of estimated ROI, bot design process, and financial model. All these works are carried out based on the analysis. 
                </p>
              </div>{/*side-contewnt*/}
            </div>
            <div className="box-side-seo pb-2 mt-3" style={{boxShadow: 'none !important'}}>
              <h4 className="center-a-s">Actualization</h4>
              <div className="side-content-d">
                <p style={{textAlign: 'left !important'}}>After analyzing, authorization and application, now it is the time, to begin with, the actual work. Release your bot into large organizations to work with employees. 
                </p>
              </div>{/*side-contewnt*/}
            </div>
          </div>{/*11*/}
        </div>
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  {/*end*/}
  <section className="pb-5 accordion-tab" style={{backgroundColor: '#fff'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3 text-center">
          <h2 className="top-head">Industry Focus</h2>
        </div>{/*12*/}
        <div className="col-md-6 mt-5">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button className="btn-new" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Banking
                  </button> </h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" />
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                  <h5 className="tab-head">RPA makes deposits and withdrawal processing easier</h5><br />
                  <h5 className="tab-head">It enables loan processing</h5><br />
                  <h5 className="tab-head">RPA helps in annual reporting</h5><br />
                  <h5 className="tab-head"> It helps in handling account opening requests</h5><br />
                  <h5 className="tab-head">RPA helps in handling account documents and templates </h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: '#fff'}}>
                    Insurance
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" />
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                  <h5 className="tab-head">RPA enables claims registration and processing
                  </h5><br />
                  <h5 className="tab-head">Providing services such as underwriting
                  </h5><br />
                  <h5 className="tab-head">It helps in regulatory compliance
                  </h5><br />
                  <h5 className="tab-head"> It improvises legacy system integration</h5><br />
                  <h5 className="tab-head">RPA helps in policy admin and servicing
                  </h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: '#fff'}}>
                    Healthcare
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" />
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                  <h5 className="tab-head">RPA helps in making appointment bookings and cancelation easier
                  </h5><br />
                  <h5 className="tab-head">It enables patient data management
                  </h5><br />
                  <h5 className="tab-head">It enables third-party management
                  </h5><br />
                  <h5 className="tab-head"> It helps in claims processing and management</h5><br />
                  <h5 className="tab-head">It enables account settlement
                  </h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{color: '#fff'}}>
                    Construction
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" />
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div className="card-body">
                  <h5 className="tab-head">It helps in procurement and inventory management</h5><br />
                  <h5 className="tab-head">RPA helps in material/equipment management</h5><br />
                  <h5 className="tab-head">It enables vendor management
                  </h5><br />
                  <h5 className="tab-head">It improvises security management</h5><br />
                  <h5 className="tab-head">It helps to enhance document management
                  </h5>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFive">
                <h5 className="mb-0">
                  <button className="btn-new collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{color: '#fff'}}>
                    CrossIndustry
                  </button></h5>
                <i className="fas fa-plus" id="plus" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" />
              </div>
              <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                <div className="card-body">
                  <h5 className="tab-head">It enables finance and accounting</h5><br />
                  <h5 className="tab-head">IT makes account payment and receiving easier
                  </h5><br />
                  <h5 className="tab-head">RPA improvises sales operations
                  </h5><br />
                  <h5 className="tab-head">It helps in increasing human resources and payroll</h5><br />
                  <h5 className="tab-head">Enhanced customer service
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>{/*8*/}
        <div className="col-md-6 mt-5">
          <img src="assets/images/Robot-01.png" className="industry-one" title="automation" />
        </div>{/*4*/}
      </div>{/*row*/}
    </div>{/*cont*/}
  </section>
  {/*new-section*/}
  <section className="mt-2 mb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-4 mb-5 text-center">
          <h5 className="txt-center">Services we offer</h5>
          <p className="clr-wht" style={{textAlign: 'center !important', color: '#000'}}>Robotic Process Automation (RPA) offers a number of services to lessen the human burden such as avoiding repetitive tasks and transforming the business process framework. 
          </p>
        </div>{/*12*/}
        <div className="col-md-3 col-sm-6">
          <div className="serviceBox-side">
            <div className="service-icon">
              <span><i className="fa fa-globe" /></span>
            </div>
            <div className="service-content">
              <h3 className="title-1">Digital business process Automation</h3>
              <p className="description-2">Digital business process automation enables the business to reduce their work burden by delegating the lower level or routine work to the bots. Along with the existing employees, robots work in a data-driven approach to fulfill various requirements such as automating business workflow, content analysis, management and much more while saving a lot of time and manual labor.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="serviceBox-side">
            <div className="service-icon">
              <span><i className="fa fa-globe" /></span>
            </div>
            <div className="service-content">
              <h3 className="title-1">Digital business process Automation</h3>
              <p className="description-2">Digital business process automation enables the business to reduce their work burden by delegating the lower level or routine work to the bots. Along with the existing employees, robots work in a data-driven approach to fulfill various requirements such as automating business workflow, content analysis, management and much more while saving a lot of time and manual labor.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="serviceBox-side">
            <div className="service-icon">
              <span><i className="fa fa-globe" /></span>
            </div>
            <div className="service-content">
              <h3 className="title-1">Support Automation</h3>
              <p className="description-2">RPA provides automation services, which enables the company to provide 24-hour customer support, resolve queries, route tickets and streamline escalation process. These automation services will help in saving time, meet SLAs, exceed customer expectations and increasing overall efficiency. </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="serviceBox-side">
            <div className="service-icon">
              <span><i className="fa fa-globe" /></span>
            </div>
            <div className="service-content">
              <h3 className="title-1">Web Extraction Services</h3>
              <p className="description-2">RPA provides web extraction services, which enables the company to access accurate, relevant, structured and legitimate data according to the preferences. It helps in providing several benefits such as sentiment analysis, price comparison, and market research. Moreover, it enables to save time, money and make informed business decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <TopProducts/></div>

  )
}

export default Roboticsinnovation