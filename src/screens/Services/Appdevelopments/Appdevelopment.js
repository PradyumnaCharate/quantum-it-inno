import React from 'react'
import {Link} from "react-router-dom"
import { AndroidHero } from '../../../components/AndroidHero'
import { TopProducts } from '../../../components/TopProducts'

function Appdevelopment() {
  return (
    <div>
        <div>
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
title={["App Development ", <br /> ,"Services"]} 
description={["Empowering businesses and industries to shape the future with the Internet of Things. Make things happen."]}
/>
    
    <section className="main-top" style={{backgroundColor: '#fff'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <h2 className="top-head">
              What We Offer- Affordable App Development Service</h2>
          </div>{/*12*/}
          <div className="col-md-4 col-12 mt-5 text-center">
            <div className="box-side-a">
              <div className="one-box-a">
                <i className="fas fa-award" id="icon-top-a" />
                <h4 className="center-a">Android App Development</h4>
                <div className="side-content-a">
                  <p>Android Application Development is taking an edge over other mobile operating systems around the globe. Android apps are the most accepted operating system in the market widely, making the competition rich enough among all. Every other day in the market new versions of Android apps and games are launched.
                  </p>
                </div>{/*side-contewnt*/}
              </div>{/*one-box*/}
            </div>
          </div>{/*4*/}
          <div className="col-md-4 col-12 mt-5 text-center">
            <div className="box-side-a">
              <div className="one-box-a">
                <i className="fas fa-tv" id="icon-top-a" />
                <h4 className="center-a">Swift App Development</h4>
                <div className="side-content-a">
                  <p>Swift is a new, very fast and highly efficient programming language bundled with intuitive and powerful features, introduced by Apple for developing apps for iOS, macOS, watchOS, and tvOS. Most of the leading iOS app development companies began adopting Swift for development. Swift will be fully adopted by all the iOS, macOS app development companies because it is faster and secure like C and Java.
                  </p>
                </div>{/*side-contewnt*/}
              </div>{/*one-box*/}
            </div>
          </div>{/*4*/}
          <div className="col-md-4 col-12 mt-5 text-center">
            <div className="box-side-a">
              <div className="one-box-a">
                <i className="fas fa-american-sign-language-interpreting" id="icon-top-a" />
                <h4 className="center-a">Ipad App Development</h4>
                <div className="side-content-a">
                  <p>iPad app is used in the tablet, after the launch of it, there is a huge increment in the selling of it that tends to increase more iPad developer. People are migrating day to day from desktop, notebook, PCs to iPad. Due to its increasing demand, developers need to lead more towards application development work for iPad. We are specialized in iPad app development in India, the US, and the UK. </p>
                </div>{/*side-contewnt*/}
              </div>{/*one-box*/}
            </div>
          </div>{/*4*/}
          <div className="col-md-4 col-12 mt-5 text-center" style={{marginLeft: '17%'}}>
            <div className="box-side-a">
              <div className="one-box-a">
                <i className="fas fa-random" id="icon-top-a" />
                <h4 className="center-a">IOS App Development</h4>
                <div className="side-content-a">
                  <p>The market for mobile phones has been rapidly changing due to competition, since the release of the iPhone because it is the new Gen mobile phone trending in the market. IOS Application Development has been rapidly increased with the increase in using &amp; buying demands of iPhones, but in order to be successful, you need the best iPhone application development company to produce the right performances, functionalities, user-centric experience with the right rollout and the right support. 
                  </p>
                </div>{/*side-contewnt*/}
              </div>{/*one-box*/}
            </div>
          </div>{/*4*/}
          <div className="col-md-4 col-12 mt-5 text-center">
            <div className="box-side-a">
              <div className="one-box-a">
                <i className="fas fa-users" id="icon-top-a" />
                <h4 className="center-a">Cross Plateform App Development</h4>
                <div className="side-content-a">
                  <p>Cross-Platform mobile app development provides the user experience and all functionality of native apps with multi-platform mobile devices. A native app especially works or runs on a specific platform for which it has been developed but a multi-platform app can run on multiple platforms of mobile.
                  </p>
                </div>{/*side-contewnt*/}
              </div>{/*one-box*/}
            </div>
          </div>{/*4*/}
        </div>{/*row*/}
      </div>{/*cont*/}
    </section>
    <section className="py-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <h2 className="top-head">
              OUR INTEGRATIONS POWER YOUR APPS,
              ROCKETING THEM TO THE NEXT LEVEL
            </h2></div>{/*12*/}
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="41.147" height="43.022" viewBox="0 0 41.147 43.022">
                  <g id="Group_357" data-name="Group 357" transform="translate(-1233.5 -300.035)">
                    <path id="Path_1314" data-name="Path 1314" d="M1276.021,310.5a1.655,1.655,0,0,0,1.655-1.655V301.69a1.655,1.655,0,1,0-3.311,0v7.159A1.655,1.655,0,0,0,1276.021,310.5Z" transform="translate(-21.538)" fill="#0092ff" />
                    <path id="Path_1315" data-name="Path 1315" d="M1305.336,339.281h-8.811a1.655,1.655,0,1,0,0,3.311h8.811a1.655,1.655,0,0,0,0-3.311Z" transform="translate(-32.345 -20.684)" fill="#0092ff" />
                    <path id="Path_1316" data-name="Path 1316" d="M1243.966,339.281h-8.811a1.655,1.655,0,0,0,0,3.311h8.811a1.655,1.655,0,0,0,0-3.311Z" transform="translate(0 -20.684)" fill="#0092ff" />
                    <path id="Path_1317" data-name="Path 1317" d="M1250.452,318.907a1.655,1.655,0,1,0,2.341-2.341l-5.062-5.062a1.656,1.656,0,0,0-2.341,2.342Z" transform="translate(-6.011 -5.789)" fill="#0092ff" />
                    <path id="Path_1318" data-name="Path 1318" d="M1294.779,319.391a1.652,1.652,0,0,0,1.171-.485l5.062-5.062a1.656,1.656,0,0,0-2.341-2.342l-5.063,5.063a1.655,1.655,0,0,0,1.171,2.826Z" transform="translate(-31.424 -5.789)" fill="#0092ff" />
                    <circle id="Ellipse_1" data-name="Ellipse 1" cx="5.399" cy="5.399" r="5.399" transform="translate(1248.89 314.165)" fill="#0092ff" />
                    <path id="Path_1319" data-name="Path 1319" d="M1275.357,371.351h-5.31v-9.7a1.655,1.655,0,0,0-3.311,0v9.7H1261.4a1.655,1.655,0,0,0,0,3.311h13.959a1.655,1.655,0,1,0,0-3.311Z" transform="translate(-13.831 -31.604)" fill="#0092ff" />
                  </g>
                </svg></center>
              <p className="txt-weight">Beacon Integration</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="31.301" height="39.76" viewBox="0 0 31.301 39.76">
                  <g id="Group_358" data-name="Group 358" transform="translate(-1396 -295)">
                    <path id="Path_1320" data-name="Path 1320" d="M1411.65,295A15.668,15.668,0,0,0,1396,310.65c0,8.184,13.088,22.094,14.581,23.653a1.48,1.48,0,0,0,2.138,0c1.493-1.559,14.581-15.469,14.581-23.653A15.668,15.668,0,0,0,1411.65,295Zm0,36.11c-4.338-4.75-12.689-15.02-12.689-20.459a12.689,12.689,0,1,1,25.379,0C1424.34,316.086,1415.987,326.358,1411.65,331.11Z" fill="#fc7754" />
                    <path id="Path_1321" data-name="Path 1321" d="M1423.768,314a6.768,6.768,0,1,0,6.768,6.768A6.776,6.776,0,0,0,1423.768,314Zm0,10.574a3.807,3.807,0,1,1,3.807-3.807A3.811,3.811,0,0,1,1423.768,324.574Z" transform="translate(-12.117 -10.963)" fill="#fc7754" />
                  </g>
                </svg></center>
              <p className="txt-weight">GPS Integration</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="32.778" height="38.385" viewBox="0 0 32.778 38.385">
                  <g id="Group_388" data-name="Group 388" transform="translate(-2794.076 -304.308)">
                    <g id="Group_386" data-name="Group 386" transform="translate(2794.082 304.308)">
                      <path id="Path_1367" data-name="Path 1367" d="M2824.5,325.948a1.655,1.655,0,0,1-1.655-1.655v-8.175l-8.5-8.5h-15.1c-.406.022-1.853.323-1.853,3.256v7.717c.016.668.324,2.905,3.606,2.905h12.6l-1.45-1.338a1.655,1.655,0,1,1,2.245-2.432l4.559,4.209a1.655,1.655,0,0,1-1.122,2.871H2801c-5.673,0-6.916-4.486-6.916-6.215v-7.717c0-5.193,3.376-6.565,5.162-6.565h15.784a1.652,1.652,0,0,1,1.17.485l9.47,9.471a1.652,1.652,0,0,1,.485,1.17v8.861A1.655,1.655,0,0,1,2824.5,325.948Z" transform="translate(-2794.088 -304.308)" fill="#ffc603" />
                    </g>
                    <g id="Group_387" data-name="Group 387" transform="translate(2794.076 325.841)">
                      <path id="Path_1368" data-name="Path 1368" d="M2821.342,366.707h-20.694a6.533,6.533,0,0,1-5.023-1.91,6.2,6.2,0,0,1-1.542-4.352V351.51a1.655,1.655,0,1,1,3.309,0v8.983c0,.043,0,.085,0,.127h0a2.947,2.947,0,0,0,.683,1.946,3.44,3.44,0,0,0,2.579.832h20.509c.58-.155,2.389-.861,2.389-3.607,0-4.354-.213-4.659-3.256-4.659h-14.946l1.034,1.033a1.655,1.655,0,1,1-2.34,2.34l-3.859-3.858a1.655,1.655,0,0,1,1.17-2.825h18.941c6.094,0,6.565,3.3,6.565,7.968a6.666,6.666,0,0,1-5.217,6.889A1.629,1.629,0,0,1,2821.342,366.707Z" transform="translate(-2794.076 -349.855)" fill="#ffc603" />
                    </g>
                  </g>
                </svg></center>
              <p className="txt-weight">Porting &amp; Migration</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="32.914" height="32.914" viewBox="0 0 32.914 32.914">
                  <path id="Path_1369" data-name="Path 1369" d="M2818.559,300h-15.1a1.355,1.355,0,0,0-1.355,1.355v5.421a1.355,1.355,0,0,0,1.355,1.355h4.453a1.162,1.162,0,0,1,0,2.323h-4.453a1.355,1.355,0,0,0-1.355,1.355v4.453h-2.323v-3.1a3.872,3.872,0,1,0-7.744,0v3.1h-3.679a1.355,1.355,0,0,0-1.355,1.355v13.94a1.355,1.355,0,0,0,1.355,1.355h30.2a1.355,1.355,0,0,0,1.355-1.355v-30.2A1.355,1.355,0,0,0,2818.559,300Zm-13.746,13.166h3.1a3.872,3.872,0,1,0,0-7.745h-3.1v-2.711H2817.2V315.1h-3.678a1.355,1.355,0,0,0-1.355,1.355v4.453a1.162,1.162,0,0,1-2.323,0v-4.453a1.355,1.355,0,0,0-1.355-1.355h-3.679Zm-15.1,5.808h3.678a1.355,1.355,0,0,0,1.355-1.355v-4.453a1.162,1.162,0,0,1,2.324,0v4.453a1.355,1.355,0,0,0,1.355,1.355h3.679v1.549H2799a3.872,3.872,0,1,0,0,7.745h3.1V330.2h-12.391ZM2817.2,330.2h-12.391v-3.291a1.355,1.355,0,0,0-1.355-1.355H2799a1.162,1.162,0,0,1,0-2.323h4.453a1.355,1.355,0,0,0,1.355-1.355v-4.066h2.323v3.1a3.872,3.872,0,1,0,7.744,0v-3.1h2.323Z" transform="translate(-2787 -300)" fill="#0092ff" />
                </svg></center>
              <p className="txt-weight">MDM Integration</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom mb-12">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="41.191" height="41.191" viewBox="0 0 41.191 41.191">
                  <g id="Group_359" data-name="Group 359" transform="translate(-1540 -299)">
                    <path id="Path_1322" data-name="Path 1322" d="M1586.414,329.622a3.4,3.4,0,0,0-.016,2.824c.748,1.563,2.58,2.122,4.351,2.662,1.027.314,2.579.787,2.831,1.313a1.3,1.3,0,0,1-.13.883,1.217,1.217,0,0,1-.753.732c-1.663.655-5.128-.442-6.92-1.285a1.534,1.534,0,1,0-1.311,2.773,21.91,21.91,0,0,0,2.939,1.106l-.954,3.045a1.534,1.534,0,1,0,2.927.918l1.05-3.35c.331.032.662.052.99.052a6.578,6.578,0,0,0,2.4-.4,4.3,4.3,0,0,0,2.481-2.445,4.049,4.049,0,0,0,.05-3.35c-.833-1.743-2.889-2.37-4.7-2.923a7.261,7.261,0,0,1-2.475-1.039.862.862,0,0,1,.091-.37,1.928,1.928,0,0,1,1.128-1.155c1.772-.7,4.8.367,5.815.839a1.534,1.534,0,0,0,1.3-2.78,16.321,16.321,0,0,0-2.556-.907l.94-2.618a1.534,1.534,0,1,0-2.886-1.037l-1.153,3.209a6.951,6.951,0,0,0-2.579.44A5,5,0,0,0,1586.414,329.622Z" transform="translate(-24.488 -12.973)" fill="#fc7754" />
                    <path id="Path_1323" data-name="Path 1323" d="M1579.658,299h-38.124a1.534,1.534,0,0,0-1.534,1.534v38.124a1.534,1.534,0,0,0,1.534,1.534h38.124a1.534,1.534,0,0,0,1.534-1.534V300.534A1.534,1.534,0,0,0,1579.658,299Zm-1.534,38.124h-35.057V302.067h35.057Z" fill="#fc7754" />
                    <path id="Path_1324" data-name="Path 1324" d="M1557.262,317.935h13.927a1.534,1.534,0,0,0,0-3.067h-13.927a1.534,1.534,0,0,0,0,3.067Z" transform="translate(-8.836 -8.914)" fill="#fc7754" />
                    <path id="Path_1325" data-name="Path 1325" d="M1557.262,333.791h5.631a1.534,1.534,0,1,0,0-3.067h-5.631a1.534,1.534,0,0,0,0,3.067Z" transform="translate(-8.836 -17.822)" fill="#fc7754" />
                    <circle id="Ellipse_2" data-name="Ellipse 2" cx="1.963" cy="1.963" r="1.963" transform="translate(1546.591 330.046)" fill="#fc7754" />
                  </g>
                </svg></center>
              <p className="txt-weight">Payment Gateway</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom mb-12">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="36.926" height="40.906" viewBox="0 0 36.926 40.906">
                  <g id="Group_360" data-name="Group 360" transform="translate(-1701 -295)">
                    <path id="Path_1326" data-name="Path 1326" d="M1738.832,353.924a1.548,1.548,0,0,0-1.548-1.548h-11.876a1.548,1.548,0,1,0,0,3.1h10.274v9.342h-29.962v-9.342h1.909a1.548,1.548,0,1,0,0-3.1h-3.456a1.548,1.548,0,0,0-1.548,1.548v12.437a1.548,1.548,0,0,0,1.548,1.548h33.057a1.548,1.548,0,0,0,1.548-1.548V354.31A1.534,1.534,0,0,0,1738.832,353.924Z" transform="translate(-0.906 -32.003)" fill="#ffc603" />
                    <path id="Path_1327" data-name="Path 1327" d="M1765.207,369.1a1.548,1.548,0,1,0,0-3.1h-.159a1.548,1.548,0,0,0,0,3.1Z" transform="translate(-34.861 -39.602)" fill="#ffc603" />
                    <path id="Path_1328" data-name="Path 1328" d="M1704.1,308.488V298.1h27.418V311.8h-11.719a1.549,1.549,0,0,0-1.373.832l-3.829,7.339-4.442-9.909a1.548,1.548,0,1,0-2.824,1.267l5.749,12.824a1.547,1.547,0,0,0,1.366.914h.046a1.549,1.549,0,0,0,1.373-.832l4.872-9.339h12.328a1.548,1.548,0,0,0,1.548-1.548v-16.8a1.548,1.548,0,0,0-1.548-1.548h-30.514a1.548,1.548,0,0,0-1.548,1.548v11.94a1.548,1.548,0,0,0,3.1,0Z" fill="#ffc603" />
                  </g>
                </svg></center>
              <p className="txt-weight">XMPP Chat Server</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom mb-12">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="37.233" height="36.645" viewBox="0 0 37.233 36.645">
                  <g id="Group_349" data-name="Group 349" transform="translate(-1861.759 -308.637)">
                    <path id="Path_1298" data-name="Path 1298" d="M1891.911,345.206a14.946,14.946,0,0,1-2.766,2.168h0a14.957,14.957,0,0,1-14.332.705,15.446,15.446,0,0,1-7.64-7.215,1.676,1.676,0,0,0-.079-.156,19.011,19.011,0,0,1-.851-14.428,1.732,1.732,0,0,0-3.286-1.1,22.442,22.442,0,0,0,1.081,17.157,18.919,18.919,0,0,0,9.269,8.859,18.407,18.407,0,0,0,17.639-.867h0a18.462,18.462,0,0,0,3.407-2.671,1.732,1.732,0,0,0-2.444-2.456Z" transform="translate(0 -7.76)" fill="#0092ff" />
                    <path id="Path_1299" data-name="Path 1299" d="M1931.732,327a1.732,1.732,0,0,0-1.732,1.732v14.351a1.732,1.732,0,1,0,3.464,0V328.732A1.732,1.732,0,0,0,1931.732,327Z" transform="translate(-34.472 -9.276)" fill="#0092ff" />
                    <path id="Path_1300" data-name="Path 1300" d="M1879.659,332.389a1.734,1.734,0,0,0,1.643-2.28,14.853,14.853,0,0,1,.657-11.336,1.747,1.747,0,0,0,.08-.157,11.981,11.981,0,0,1,5.978-5.635,10.944,10.944,0,0,1,9.734.549,1.732,1.732,0,0,0,1.8-2.959,14.448,14.448,0,0,0-13.026-.717,15.454,15.454,0,0,0-7.623,7.288,18.432,18.432,0,0,0-.888,14.063A1.732,1.732,0,0,0,1879.659,332.389Z" transform="translate(-7.717 0)" fill="#0092ff" />
                  </g>
                </svg></center>
              <p className="txt-weight">Wearable Integration</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 text-center">
            <div className="card-custom mb-12">
              <center><svg xmlns="http://www.w3.org/2000/svg" width="36.217" height="40.807" viewBox="0 0 36.217 40.807">
                  <g id="Group_362" data-name="Group 362" transform="translate(-2011.624 -293.432)">
                    <path id="Path_1332" data-name="Path 1332" d="M2018.438,315.138h23.179a6.439,6.439,0,0,0,0-12.877h-10.284a1.5,1.5,0,1,0,0,3h10.284a3.434,3.434,0,0,1,0,6.868h-23.179a3.434,3.434,0,0,1,0-6.868h.481a2,2,0,0,0,1.828-1.664,7.056,7.056,0,0,1,12.72-4.319,1.5,1.5,0,1,0,2.413-1.79,10.054,10.054,0,0,0-18.059,4.8,6.438,6.438,0,0,0,.617,12.846Z" transform="translate(-0.215)" fill="#fc7754" />
                    <path id="Path_1333" data-name="Path 1333" d="M2045.266,353.376h-32.139a1.5,1.5,0,0,0-1.5,1.5V366.95a1.5,1.5,0,0,0,1.5,1.5h32.086a1.5,1.5,0,0,0,1.5-1.5V355.275a1.5,1.5,0,0,0-1.449-1.9Zm-1.555,12.072h-29.082v-9.067h29.082Z" transform="translate(0 -34.214)" fill="#fc7754" />
                    <path id="Path_1334" data-name="Path 1334" d="M2074,370h.155a1.5,1.5,0,0,0,0-3H2074a1.5,1.5,0,0,0,0,3Z" transform="translate(-34.746 -41.99)" fill="#fc7754" />
                  </g>
                </svg></center>
              <p className="txt-weight">Third Party Integration</p>
            </div>
          </div>
        </div> 
      </div>
    </section>
    <section className="py-0 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <h2 className="top-head">
              Our App Development Methodology</h2>
          </div>{/*12*/}
          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 mb-5">
              <img src="https://quantumitinnovation.com/assets/img/Group-67.png" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 mt-5">
              <h6><i className="fa fa-plus" aria-hidden="true" /> Ideation</h6>
              <p>Idea is the most essential part. We transform your idea into amazing Android Application.</p>
              <h6><i className="fa fa-plus" aria-hidden="true" /> UX/UI Design</h6>
              <p>We develop best coding to deliver perfect mobile apps.</p>
              <h6><i className="fa fa-plus" aria-hidden="true" /> Application Testing</h6>
              <p>We uses latest testing technique to check the quality and working to ensure high delivery standards.</p>
              <h6><i className="fa fa-plus" aria-hidden="true" /> Publishing to Marketplace</h6>
              <p>Post testing, we work launching the App perfectly with endless future support.</p>
            </div>
            <div className="col-lg-7 col-md-7 mt-5">
              <h6>What We Offer- Affordable App Development Service</h6>
              <ol>
                <li>Custom Android Apps Development</li>
                <li>Android Games Development</li>
                <li>Android Healthcare Apps: Exercise and fitness app, weight gain &amp; weight loss app, diet app</li>
                <li>Android Restaurants App: Online food ordering, recipe App</li>
                <li>Education/E-learning: Kids Education, school/university App, E-learning app</li>
                <li>Enterprise Android Applications</li>
                <li>Android M-commerce Applications: Retail, deals, coupon, e-commerce App, shopping</li>
                <li>Android Social Media Applications: Chat messengers, Social Networking, Video Calling</li>
                <li>Android Support, Maintenance, Testing</li>
              </ol>
            </div>
            <div className="col-lg-5 col-md-5 mt-5">
              <h6>Features of Our Android App</h6>
              <p><strong>Secured:</strong> Enhanced security for your personal and business privacy.</p>
              <p><strong>Responsive:</strong> Flexible, liquid and highly adaptive designs for all mobile screen sizes.</p>
              <p><strong>Optimized Memory:</strong> Light apps with optimized memory utilization and work process.</p>
              <p><strong>Compatibility:</strong> Adaptive designs compatible to all mobile devices.</p>
              <p><strong>Reliability:</strong> Dependable applications to work on the go.</p>
            </div>
          </div>    
        </div>  
      </div>
    </section>  
    <section className="py-0 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <h2 className="top-head">
              Our Android App Development Company Approaches
            </h2> </div>{/*12*/}
          <p style={{padding: '13px 12px', textAlign: 'justify'}}>The Native Android app is a specific device platform, it is directly installed on mobile devices and developers need to create a separate version for each device. 
            It uses Android Studio, Google Material, and Java to develop Native apps. 
            Native apps are hardware and Android-specific features that offer the fastest, most reliable and most responsive experience to 
            users but to create an app on both platforms will require two separate developers, which adds to time and cost.
            We are the best Native Android App Development Company USA, developed 100+ Native apps.
          </p>
          <h6 style={{padding: '0px 12px'}}>Hybrid Android App Development</h6>
          <p style={{padding: '13px 12px', textAlign: 'justify'}}>Hybrid apps, such as web apps, you install it like a Native app. Hybrid apps are built with standard web technologies like JavaScript, HTML5, and CSS. 
            Its approach can be called “Write Once Run Anywhere” means the same code can be served by multiple platforms along with Android.
          </p>
          <p style={{padding: '13px 12px', textAlign: 'justify'}}>Both of the above mentioned Native and Hybrid app development approaches have their own pros and cons. 
            Our team of experts can help you to out of this confusion in choosing the best platform suit for your business.</p>
        </div>   
      </div>
    </section>
    <div className="teck-stack">
      <h5 className="text-center mb-5">Technology Stack<div className="u-l" /></h5>
      <ul className="nav nav-tabs ml-3" role="tablist">
        <li className="nav-item bdr-r">
          <a className="nav-link active" data-toggle="tab" href="#home"><img src="https://quantumitinnovation.com/assets/img/icons/at1.png" /><p className="txt-white">Programming Language</p></a>
        </li>
        <li className="nav-item bdr-r">
          <a className="nav-link" data-toggle="tab" href="#menu1"><img src="https://quantumitinnovation.com/assets/img/icons/at2.png" /><p className="txt-white">IDE</p></a>
        </li>
        <li className="nav-item bdr-r">
          <a className="nav-link" data-toggle="tab" href="#menu2"><img src="https://quantumitinnovation.com/assets/img/icons/at3.png" /><p className="txt-white">Database</p></a>
        </li>
        <li className="nav-item bdr-r">
          <a className="nav-link" data-toggle="tab" href="#menu3"><img src="https://quantumitinnovation.com/assets/img/icons/at4.png" /><p className="txt-white">Tools</p></a>
        </li>
        <li className="nav-item m-bdr">
          <a className="nav-link ml-5" data-toggle="tab" href="#menu4"><img src="https://quantumitinnovation.com/assets/img/icons/at5.png" /><p className="txt-white">Frameworks</p></a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="home" className="container tab-pane active"><br />
          <img src="https://quantumitinnovation.com/assets/img/icons/kotlin.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/Java_logo_icon.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/xml.png" className="ml-5 mr-5" />
        </div>
        <div id="menu1" className="container tab-pane fade"><br />
          <img src="https://quantumitinnovation.com/assets/img/icons/android-studio.png" className="ml-5 mr-5" />
        </div>
        <div id="menu2" className="container tab-pane fade"><br />
          <img src="https://quantumitinnovation.com/assets/img/icons/realm.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/sqlite.png" className="ml-5 mr-5 mmb-1" />
        </div>
        <div id="menu3" className="container tab-pane fade"><br />
          <img src="https://quantumitinnovation.com/assets/img/icons/NDK.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/SDK.png" className="ml-5 mr-5 mmb-1" />
        </div>
        <div id="menu4" className="container tab-pane fade"><br />
          <img src="https://quantumitinnovation.com/assets/img/icons/retrofit.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/glide_logo.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/picasso.png" className="ml-5 mr-5 mmb-1" />
          <img src="https://quantumitinnovation.com/assets/img/icons/dagger.png" className="ml-5 mr-5 mmb-1" />
        </div>
      </div>
    </div>
    <section className="py-0 mb-4 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <h2 className="top-head">
              5 Simple Steps To Hire a Dedicated Mobile App Developer</h2>
          </div>{/*12*/}
          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="bottom-step">
                <div className="first-s">
                  <i className="fas fa-pencil-ruler" id="icon-d" />
                  <h4 className="content-s">Analysis Design</h4>
                </div>{/*first-s*/}
                <div className="first-s" style={{marginTop: '5%'}}>
                  <i className="fas fa-swatchbook" id="icon-d" />
                  <h4 className="content-s">Consultation</h4>
                </div>{/*first-s*/}
                <div className="first-s">
                  <i className="fas fa-brush" id="icon-d" />
                  <h4 className="content-s">Deployment</h4>
                </div>{/*first-s*/}
                <div className="first-s" style={{marginTop: '5%'}}>
                  <i className="fas fa-atom" id="icon-d" />
                  <h4 className="content-s">Initiation</h4>
                </div>{/*first-s*/}
                <div className="first-s">
                  <i className="fas fa-award" id="icon-d" />
                  <h4 className="content-s">Manage</h4>
                </div>{/*first-s*/}
              </div>{/*botom-step*/}
            </div>
          </div>{/*12*/}
        </div>{/*row*/}
      </div>{/*cont*/}
    </section>
    <div className="tabs-wrapper bg_lite_gray section-space--ptb_10" style={{paddingBottom: 0}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
              <h1 className="section-sub-title mb-2">Our Portfolio</h1>
              <h3 className="section-title">We’ve come a long way in <span className="text-color-primary"> 10 years</span> </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 ht-tab-wrap">
            <div className="text-center  ">
              <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
                {/*<li class="tab__item nav-item active">*/}
                {/*    <a class="nav-link active" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab" aria-selected="false">Mobile App</a>*/}
                {/*</li>*/}
              </ul>
            </div>
            <div className="tab-content ht-tab__content">
              <div className="tab-pane fade" id="tab_list_06" role="tabpanel">
                <div className="tab-history-wrap section-space--mt_60">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image port_img_box">
                              <img className="img-fluid" src="assets/images/portfolio/w1.png" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Superior Car Cares</h5>
                            <div className="text">
                              Superior Performance is a leading car care company that offers the best car repair and maintenance service for all kind 
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image port_img_box">
                              <img className="img-fluid" src="assets/images/portfolio/w2.png" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Treatment Tours India</h5>
                            <div className="text">
                              JTreatment Tours India is a Medical Tourism company that assists the patients coming to India for treatment. The Company
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image port_img_box">
                              <img className="img-fluid" src="assets/images/portfolio/w3.png" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Arome Global</h5>
                            <div className="text">
                              Arome Global is an online shopping site for products like Essential Oil blends, Bath Salts, Sprays, Soaps, and Roll-Ons,
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade show active" id="tab_list_07" role="tabpanel">
                <div className="tab-history-wrap section-space--mt_60">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image text-center">
                              <img className="img-phone" src="assets/images/portfolio/m1.png" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Deliverease</h5>
                            <div className="text">
                              Tell us what, when and where you want to ship. Leave the rest to deliverease
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image text-center">
                              <img className="img-phone" src="assets/images/portfolio/m2.png" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Good Sam</h5>
                            <div className="text">
                              Download the latest version of the Good Sam Camping app and get essential i
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image text-center">
                              <img className="img-phone" src="assets/images/portfolio/m3.png" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Erikhall</h5>
                            <div className="text">
                              Modest Realty application helps people to search houses for sale or rent. Moreov
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_list_08" role="tabpanel">
                <div className="tab-history-wrap section-space--mt_60">
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image port_img_box">
                              <img className="img-fluid" src="assets/images/portfolio/d1.jpg" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Cancercare Mena</h5>
                            <div className="text">
                              Cancer Care Specialties Mena bring the best cancer, and critical non-cancer care for all patients in the MENA 
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image port_img_box">
                              <img className="img-fluid" src="assets/images/portfolio/d2.jpg" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Gastroenterology</h5>
                            <div className="text">
                              This website is of Dr. Affan, he is the gastroenterologist in Abu Dhabi. For the convenience of his 
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                    <div className="col-lg-4 col-md-6">
                      {/* ht-box-icon Start */}
                      <a href="#" className="ht-large-box-images style-04">
                        <div className="large-image-box">
                          <div className="box-image">
                            <div className="default-image port_img_box">
                              <img className="img-fluid" src="assets/images/portfolio/d3.jpg" alt />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Female Surgeon</h5>
                            <div className="text">
                              This website is owned by Dr. Humaa darr, she is part of the Al Zahra Cancer Center’s multidisciplinary 
                              <strong>...</strong>
                            </div>
                            <div href="#" className="box-images-arrow">
                              <span className="button-text">Explore now</span>
                              <i className="far fa-long-arrow-right" />
                            </div>
                          </div>
                        </div>
                      </a>
                      {/* ht-box-icon End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="why-choose-us mt-5" style={{backgroundImage: "url(https://quantumitinnovation.com/assets/img/Group-new.png)"}}>
      <div className="container pt-5 pb-5">
        <h5 className="clr-wht text-center mb-3">Why Choose Us As Your Mobile App Development Partner?</h5>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht">With offices in India, UK, and the USA, we are a mobile app development company that caters to the global client base. </p>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht">We have a strong team of 50+ talented app designers and experienced mobile app developers who are well-versed to build apps that use the futuristic approach in scale and scope. </p>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht">We employ advanced methodologies and strategies to provide amazing unique app design, iOS app development, Android, Web application development, Cross-Platform, swift, Hybrid, and Native app development. </p>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht">We stand well among all the app development companies globally for successfully deploying more than 500 apps in mobile App Stores for Android &amp; iOS which are currently used by 4 million+ active users worldwide.</p>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht">We follow ISO guidelines and compliant processes to ensure maintaining high standards solution throughout the project cycle.</p>
        <i className="fas fa-circle" id="circle" />
        <p className="txt-wht">We experts in creating innovative, versatile, engaging and user-focused apps of all categories at competitive prices.
        </p>
      </div>
    </div>    
    </div>
  <style dangerouslySetInnerHTML={{__html: "\n    .faq-wrapper .card-header h5 button[aria-expanded=\"true\"] {\n    color:gray;\n    background:none;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.faq-wrapper .card-header h5 button {\n    background: #f8f8f8;\n    font-weight:0;\n}\n.faq-wrapper .card-header h5 button {}\n.site-wrapper-reveal{margin-bottom:0px !important}\n.reveal-footer {\n    position: unset !important;\n    bottom: 0  !important;\n    left: 0 !important;\n    width: 100% !important;\n    z-index: 1 !important;\n}\n" }} />
    </div>
    <TopProducts/>
  </div>
     
  )
}

export default Appdevelopment