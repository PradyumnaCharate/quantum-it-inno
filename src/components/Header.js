import { Link, useLocation } from "react-router-dom"


export const Header = () => {
  const location = useLocation();
  let active = false;
  
  if (location.pathname === "/portfolio" || location.pathname === "/blogs" || location.pathname === "/why-quantumitinnovation" || location.pathname === "/partnership" ||
  location.pathname === "/termsandcondition" || location.pathname === "/disclaimer" || location.pathname === "/refundandcancellation" || location.pathname === "/privacypolicy"  ) {
    active = true;
  }
  
    return(
      
      <div>
  <div className={active ? "header-area header-area--default" : "header-area header-area--absolute"  }>
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
                    <a href="tel:+1 8778773644" className={active ? "info-link text-secondary" : "info-link text-white"}>
                      <img src="assets/images/flags/usa.png" />
                      <span className="info-text"><strong>+1 877 877 3644</strong></span>
                    </a>
                  </li>
                  <li className="info-item text-white">
                    <a href="tel:+91 9717998517" className={active ? "info-link text-secondary" : "info-link text-white"}>
                      <img src="assets/images/flags/india.png" />
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
    <div className="header-bottom-wrap header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header position-relative">
              {/* brand logo */}
              <div className="header__logo">
                <Link to="/">
                  <img src={active ? "assets/images/logo/logo.png" : "assets/images/logo/logo-white.png"} alt />
                  <img src="assets/images/logo/logo.png" className="img-fluid dark-logo" alt />
                </Link>
              </div>
              <div className="header-right">
                {/* navigation menu */}
                <div className={active ? "header__navigation d-none d-xl-block" : "header__navigation menu-style-four d-none d-xl-block"}>
                  <nav className="navigation-menu">
                    <ul>
                      <li className="has-children--multilevel-submenu">
                        <Link to="/"><span>HOME</span></Link>
                      </li>
                      <li className="has-children has-children--multilevel-submenu">
                        <Link to="/"> <span>COMPANY</span> </Link>
                        <ul className="submenu">
                          <li style={{width: '110%', paddingLeft: 0, paddingRight: 0, color: 'black'}}><Link to="/why-quantumitinnovation"><span>Why Quantum It Innovation?</span></Link></li>
                          <li style={{width: '110%', paddingLeft: 0, paddingRight: 0, color: 'black'}}><Link to="/partnership"><span>Partnership</span></Link></li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#"><span>SERVICE</span></a>
                        {/* mega menu */}
                        <ul className="megamenu megamenu--mega">
                          <li>
                            <h2 className="page-list-title"><Link to="app-development">APP DEVELOPMENT</Link></h2>
                            <ul>
                              <li><Link to="/android-application-development-company"><span>Android App Development</span></Link></li>
                              <li><Link to="/swift-application-development-company"><span>Swift App Development</span></Link></li>
                              <li><Link to="/ipad-app-development-company"><span>Ipad App Development</span></Link></li>
                              <li><Link to="/cross-platform-mobile-app-development"><span>Cross-Platform App</span></Link></li>
                              <li><Link to="/iphone-application-development-company"><span>IOS App Development</span></Link></li>
                              <li><Link to="/mobile-game-development-company"><span>Mobile Game Development</span></Link></li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title"><Link to="web-development">WEB DEVELOPMENT</Link></h2>
                            <ul>
                              <li><Link to="/php-development-company"><span>PHP Development</span></Link></li>
                              <li><Link to="/dotnet-development-company"><span>.NET Development</span></Link></li>
                              <li><Link to="/ruby-on-rails-development-company"><span>ROR Development</span></Link></li>
                              <li><Link to="/node-js-development"><span>NODE.js Development</span></Link></li>
                              <li><Link to="/joomla-development-company"><span>Joomla Development</span></Link></li>
                              <li><Link to="/web-development-company-usa"><span>Web Development Company USA</span></Link></li>
                              
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title"><Link to="digital-marketing-agency">DIGITAL MARKETING</Link></h2>
                            <ul>
                              <li><Link to="/seo-services-company"><span>SEO Service Company</span></Link></li>
                              <li><Link to="/ppc-campaign-management-services"><span>PPC Campaign Management</span></Link></li>
                              <li><Link to="/app-store-optimization-company"><span>App Store Optimization</span></Link></li>
                              <li><Link to="/social-media-marketing"><span>Social Media Marketing</span></Link></li>
                              <li><Link to="/nj-seo-company"><span>New Jersy SEO Company</span></Link></li>
                              <li><Link to="/advertising-company-usa"><span>Advertising Company USA</span></Link></li>
                              <li><Link to="/seo-services-company-usa"><span>SEO Services Company USA</span></Link></li>
                            </ul>
                          </li>
                          <li>
                            <h2 className="page-list-title">EMERGING TECHNOLOGY</h2>
                            <ul>
                              <li><Link to="/internet-of-things"><span>Internet Of Things</span></Link></li>
                              <li><Link to="/artificial-intelligence"><span>Artificial Intelligence</span></Link></li>
                              <li><Link to="/robotic-process-automation"><span>Robotic Process Automation</span></Link></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children--multilevel-submenu">
                        <Link to="/portfolio"><span>PORTFOLIO</span></Link>
                      </li>
                      <li className="has-children--multilevel-submenu">
                        <Link to="/blogs"><span>BLOGS</span></Link>
                      </li>
                   
                      
                  
                   
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
                              <Link to="javascript:void(0)">
                                  <i class="fa fa-search"></i>
                              </Link>
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
