import{ React} from 'react'
import { Link } from "react-router-dom";
 
 
function Header(  ) {
 
  return (
    <div > 
    <div className="header-area header-area--absolute">
    <div className="header-top-bar-info d-none d-lg-block">
      <div className="container  border-bottom">
        <div className="row">
          <div className="col-md-12">
            <div className="top-bar-wrap">
              <div className="top-bar-left">
                <div className="top-bar-text text-white"><a href="#" className="font-medium display-inline" /></div>
              </div>
              <div className="top-bar-right">
                <ul className="top-bar-info">
                  <li className="info-item">
                    <a href="tel:+1 8778773644"  >
                      <img src=" assets/images/flags/usa.png" />
                      <span className="info-text"><strong>+1 877 877 3644</strong></span>
                    </a>
                  </li>
                  <li className="info-item text-white">
                    <a href="tel:+91 9717998517"  >
                      <img src=" assets/images/flags/india.png" />
                      <span className="info-text"><strong>+91 971 7998 517</strong></span>
                    </a>    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className=" ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header position-relative">
              {/* brand logo */}
              <div className="header__logo">
                <a href="/">
             
                  <img src=" assets/images/logo/logo-white.png" className="img-fluid light-logo" alt />
                  <img src=" assets/images/logo/logo.png" className="img-fluid dark-logo" alt />
                </a>
              </div>
              <div className="header-right">
                {/* navigation menu */}
                <div className="header__navigation menu-style-four d-none d-xl-block">
                  <nav className="navigation-menu">
                    <ul>
                      <li className="has-children--multilevel-submenu">
                         <Link to="/"><span>HOME</span></Link>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <a href="#"><span>COMPANY</span></a>
                        <ul className="submenu">
                          <li style={{width: '110%', paddingLeft: 0, paddingRight: 0, color: 'black'}}> <Link to="/whyquantumitinnovation"><span>Why Quantum It Innovation ?</span></Link> </li>
                          <li style={{width: '110%', paddingLeft: 0, paddingRight: 0, color: 'black'}}> <Link to="/partnership"><span>Partnership</span></Link></li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#"><span>SERVICE</span></a>
                        {/* mega menu */}
                        <ul className="megamenu megamenu--mega">
                          <li>
                            <h2 className="page-list-title"> <Link to="/appdevelopment">APP DEVELOPMENT</Link></h2>
                            <ul>
                              <li><Link to="androidappdevelopment"><span >Android App Development</span></Link> </li>
                              <li> <Link to="swiftappdevelopment"><span>Swift App Development</span> </Link></li>
                              <li> <Link to="ipadappdevelopment"><span>Ipad App Development</span></Link> </li>
                              <li> <Link to="crossplatformapp"><span>Cross-Platform App</span></Link> </li>
                              <li>  <Link to="iosappdevelopment"><span>IOS App Development</span></Link>   </li>
                              
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title"> <Link to="webdevelopment">WEB DEVELOPMENT</Link> </h2>
                            <ul>
                              <li> <Link to="phpdevelopment"><span>PHP Development</span></Link> </li>
                              <li> <Link to="dotnetdevelopment"><span>.NET Development</span></Link> </li>
                              <li> <Link to="rordevelopment"><span>ROR Development</span></Link> </li>
                              <li> <Link to="nodejsdevelopment"><span>NODE.js Development</span></Link> </li>
                              <li><Link to="joomladevelopment"><span>Joomla Development</span></Link> </li>
                              <li><Link to="webdevelopmentusa"><span>Web Development Company USA</span></Link>  </li>
                              
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title"><Link to="digitalmarketing"> DIGITAL MARKETING </Link></h2>
                            <ul>
                              <li> <Link to="seoservices"><span>SEO Service Company</span></Link></li>
                              <li><Link to="ppc"><span>PPC Campaign Management</span> </Link> </li>
                              <li> <Link to="appstoreoptimization"><span>App Store Optimization</span></Link> </li>
                              <li> <Link to="socialmediamarketing"><span>Social Media Marketing</span> </Link></li>
                              <li> <Link to="newjersyseocompany"><span>New Jersy SEO Company</span></Link> </li>
                              <li><Link to="topadvertisingusa"> <span>Advertising Company USA</span> </Link></li>
                              <li><Link to="seoserviceusa"><span>SEO Services Company USA</span></Link>  </li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">EMERGING TECHNOLOGY</h2>
                            <ul>
                              <li> <Link to="iot"><span>Internet Of Things</span> </Link></li>
                              <li><Link to="ai"><span>Artificial Intelligence</span> </Link> </li>
                              <li> <Link to="rpa"><span>Robotic Process Automation</span></Link> </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children--multilevel-submenu">
                         <Link to="/portfolio"><span>PORTFOLIO</span></Link>
                      </li>
                      <li className="has-children--multilevel-submenu">
                       <Link to="/blogs"><span>BLOGS</span> </Link> 
                      </li>
                      {/*<li class="has-children--multilevel-submenu">*/}
                      {/*    <a href="#"><span>CASE STUDY</span></a>*/}
                      {/*</li>*/}
                      {/*<li class="has-children--multilevel-submenu">*/}
                      {/*    <a href="#"><span>TESTIMONIALS</span></a>*/}
                      {/*</li>*/}
                      <li className="has-children--multilevel-submenu">
                        <Link to="/contactus"><span>CONTACT</span></Link> 
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* 
                  <div class="header-search-form-two white-icon">
                      <form action="#" class="search-form-top-active">
                          <div class="search-icon" id="search-overlay-trigger">
                              <a href="javascript:void(0)">
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </form>
                  </div> */}
                {/* mobile menu */}
                <div className="mobile-navigation-icon white-md-icon d-block d-xl-none" id="mobile-menu-trigger">
                  <i />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header