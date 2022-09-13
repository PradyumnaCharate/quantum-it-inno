import { Link } from "react-router-dom"


export const Footer = () => {
    return(
      <div>
  <div className="footer-area-wrapper   sFooter">
    <div className="footer-area section-space--ptb_80" style={{paddingBottom: 11}}>
      <div className="container-fluid">
        <div className="row footer-widget-wrapper">
          <div className="col-sm-12 col-md-5 col-lg-5 footer-widget">
            <h6 className="footer-widget__title mb-20" style={{fontSize: 20, color: '#fff!important'}}>PARTNER LOCATIONS</h6>
            <div className="faq-wrapper section-space--pt_90" style={{paddingTop: 0}}>
              <div id="accordion">
                <div className="footer_address">
                  <div className="footer_single_address">
                    <p className="hover-style-link" style={{textAlign: 'left !important'}}><strong>USA: </strong> 173 E Columbine LN, Westfield, Indiana 46074-9741.</p>
                    {/*<span><i class="fas fa-mobile-alt" aria-hidden="true">&nbsp;</i>+ 1 877 877 3644</span>*/}
                  </div>
                  {/*<div class="footer_single_address">*/}
                  {/*    <p class="hover-style-link"><strong>UK: </strong>9 Thirlmere Road, London, DA7 6PU.</p>*/}
                  {/*<span><i class="fas fa-mobile-alt" aria-hidden="true">&nbsp;</i>+ 1 877 877 3644</span>*/}
                  {/*</div>*/}
                  {/*<div class="footer_single_address">*/}
                  {/*    <p class="hover-style-link"><strong>USA: </strong>United States: 7815 McCallum Blvd #R9203 Dallas, TX 75252</p>*/}
                  {/*<span><i class="fas fa-mobile-alt" aria-hidden="true">&nbsp;</i>+ 1 877 877 3644</span>*/}
                  {/*</div>*/}
                  <div className="footer_single_address">
                    <p className="hover-style-link" style={{textAlign: 'left !important'}}><strong>USA: </strong>1001 Avenida Pico Suite C -256 San Clemente, CA 92673.</p>
                    {/*<span><i class="fas fa-mobile-alt" aria-hidden="true">&nbsp;</i> + 1 877 877 3644</span>*/}
                  </div>
                  <div className="footer_single_address">
                    <p className="hover-style-link" style={{textAlign: 'left !important'}}><strong>USA: </strong>127 Mountainside Dr Pompton Lakes, NJ 07442.</p>
                    {/*<span><i class="fas fa-mobile-alt" aria-hidden="true">&nbsp;</i>+ 1 877 877 3644</span>*/}
                  </div>
                  {/*<div class="footer_single_address">*/}
                  {/*    <p class="hover-style-link"><strong>Dubai: </strong>1202. Al Sharhan building , Al Nahda-2 , Dubai.</p>*/}
                  {/*<span><i class="fas fa-mobile-alt" aria-hidden="true">&nbsp;</i>+ 1 877 877 3644</span>*/}
                  {/*</div>*/}
                  <h6 className="footer-widget__title mb-20" style={{fontSize: 20, color: '#fff!important', padding: '2% 0%', marginBottom: '-12px'}}>DEVELOPMENT CENTER (HEAD OFFICE)</h6>
                  <div className="footer_single_address">
                    <p className="hover-style-link" style={{textAlign: 'left !important'}}><strong>India: </strong> H-11, 1st Floor, Sector 63, Noida - 201301</p>
                    <span style={{display: 'block', padding: '1% 0%'}}><i className="fas fa-envelope footer_fa" aria-hidden="true">&nbsp;</i>sales@quantumitinnovation.com</span> 
                    <span style={{padding: '0% 0.4%'}}><i className="fas fa-mobile-alt footer_fa" aria-hidden="true">&nbsp;</i> + 91 971 799 8517</span> 
                  </div>
                  <span style={{display: 'block', padding: '0% 1%'}}><i className="fas fa-envelope footer_fa" aria-hidden="true">&nbsp;</i><a href="mailto:sales@quantumitinnovation.com">sales@quantumitinnovation.com</a></span>
                  <span style={{display: 'block', padding: '0% 1%'}}><i className="fas fa-envelope footer_fa" aria-hidden="true">&nbsp;</i><a href="mailto:hr@quantumitinnovation.com">hr@quantumitinnovation.com</a></span>
                </div>
                {/* Card Body */}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 footer-widget">
            <h6 className="footer-widget__title mb-20" style={{fontSize: 20, color: '#fff!important'}}>TOP SERVICES</h6>
            <ul className="footer-widget__list">
              <li><Link to="ai">Artificial Intelligence</Link>  </li>
              <li><Link to="iot">Internet Of Things </Link> </li>
              <li><Link to="crossplatformapp">Cross-Platform</Link>  </li>
              <li><Link to="swiftappdevelopment">Swift App Developmen</Link> t </li>
              <li><Link to="rordevelopment">Ruby On Rails</Link>  </li>
              <li> <Link to="iosappdevelopmen">IOS App Development</Link> </li>
              <li> <Link to="phpdevel">PHP Development</Link> </li>
              <li><Link to="dotnetdevelopment"> .Net Development</Link> </li>
              <li><Link to="newjersyseocompany"> Seo In NJ</Link> </li>
              <li> <Link to="/professionalseoservices">Professional Seo Services </Link></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2 footer-widget">
            <h6 className="footer-widget__title mb-20" style={{fontSize: 20, color: '#fff!important'}}>QUICK LINKS</h6>
            <ul className="footer-widget__list">
              <li><Link to="/privacypolicy" className="hover-style-link">Privacy Policy </Link></li>
              {/*<li><a href="#" class="hover-style-link">About Us</a></li>*/}
              {/*<li><a href="#" class="hover-style-link">Our Works</a></li>*/}
              {/*<li><a href="#" class="hover-style-link">View Blogs</a></li>*/}
              <li> <Link to="refundandcancellation" className="hover-style-link">Refund &amp; Cancellation</Link></li>
              <li><Link to="termsandcondition">Terms and Condition</Link></li>
              {/*<li><a href="#" class="hover-style-link">Careers</a></li>*/}
              <li><Link to="/partnership">Partnership</Link> </li>
              <li><Link to="disclaimer">Disclaimer</Link></li>
              <li><Link to="contactus">Request Quote </Link></li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 footer-widget">
            <h6 className="footer-widget__title mb-20" style={{fontSize: 20, color: '#fff!important'}}>CONTACT US</h6>
            <ul className="footer-widget__list">
              <li>
                <strong><img src="assets/images/flags/india.png" /></strong>
                <a href="tel: +91 9717998517" className="hover-style-link">
                  &nbsp;+91 971 7998 517</a>
              </li>
              <li>
                <strong><img src="assets/images/flags/usa.png" /></strong>
                <a href="tel:+ 1 8778773644" className="hover-style-link">
                  &nbsp;+ 1 877 877 3644</a>
              </li>
              {/*<li>*/}
              {/*    <strong><i class="fa fa-map-marker-alt footer_fa">&nbsp;&nbsp;</i></strong>*/}
              {/*     H-11, Sector 63, Noida-UP 201301*/}
              {/* </li>*/}
            </ul>
            <h6 className="footer-widget__title mb-20" style={{fontSize: 20, color: '#fff!important', margin: '2% 0%', paddingTop: '2%'}}>ASSOCIATIONS</h6>
            {/*Carousel Wrapper*/}
            <div id="carousel-example-2" className="carousel slide carousel-fade" data-ride="carousel">
              {/*Indicators*/}
              <ol className="carousel-indicators carousel-indicators1" style={{bottom: '-10%', right: '34%'}}>
                <li data-target="#carousel-example-2" data-slide-to={0} className="active" />
                <li data-target="#carousel-example-2" data-slide-to={1} />
                <li data-target="#carousel-example-2" data-slide-to={3} />
                <li data-target="#carousel-example-2" data-slide-to={4} />
                <li data-target="#carousel-example-2" data-slide-to={5} />
              </ol>
              {/*/.Indicators*/}
              {/*Slides*/}
              <div className="carousel-inner" role="listbox" style={{width: '65%'}}>
                {/*Item*/}
                <div className="carousel-item active">
                  <div className="view">
                    <img className="d-block w-100" src="assets/images/blog/1.png" alt="First slide" />
                    <div className="mask rgba-black-light" />
                  </div>
                </div>
                {/*Item*/}
                <div className="carousel-item">
                  <div className="view">
                    <img className="d-block w-100" src="assets/images/blog/2.png" alt="Second slide" />
                    <div className="mask rgba-black-strong" />
                  </div>
                </div>
                {/*Item*/}
                <div className="carousel-item">
                  <div className="view">
                    <img className="d-block w-100" src="assets/images/blog/3.png" alt="Third slide" />
                    <div className="mask rgba-black-slight" />
                  </div>
                </div>
                {/*Item*/}
                <div className="carousel-item">
                  <div className="view">
                    <img className="d-block w-100" src="assets/images/blog/4.png" alt="Third slide" />
                    <div className="mask rgba-black-slight" />
                  </div>
                </div>
                {/*Item*/}
                <div className="carousel-item">
                  <div className="view">
                    <img className="d-block w-100" src="assets/images/blog/5.png" alt="Third slide" />
                    <div className="mask rgba-black-slight" />
                  </div>
                </div>
              </div>
              {/*/.Slides*/}
              {/*Controls*/}
              <a className="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev" style={{left: '-10%'}}>
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next" style={{right: '25%'}}>
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
              {/*/.Controls*/}
            </div>
            {/*/.Carousel Wrapper*/}
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright-area section-space--pb_30" style={{paddingBottom: 7, borderTop: '1px solid #80808052'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-left">
            <span className="copyright-text">© 2020 Quantum IT Innovation.</span>
            <span className="footer-right">All Rights Reserved.</span>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="list ht-social-networks solid-rounded-icon">
              {/*<li class="item">*/}
              {/*    <a href="https://twitter.com/quantumitpro" target="_blank" aria-label="Twitter" class="social-link hint--bounce hint--top hint--primary">*/}
              {/*        <i class="fab fa-twitter link-icon"></i>*/}
              {/*    </a>*/}
              {/*</li>*/}
              <li className="item">
                <a href="https://www.facebook.com/Quantum-It-Innovation-101412315466283" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                  <i className="fab fa-facebook-f link-icon" />
                </a>
              </li>
              <li className="item">
                <a href="https://www.instagram.com/quantumitpro/" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                  <i className="fab fa-instagram link-icon" />
                </a>
              </li>
              <li className="item">
                <a href="https://www.linkedin.com/company/quantumit-innovation" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                  <i className="fab fa-linkedin link-icon" />
                </a>
              </li>
              <li className="item">
                <a href="https://www.behance.net/quantumit" target="_blank" aria-label="behance" className="social-link hint--bounce hint--top hint--primary">
                  <i className="fab fa-behance link-icon" />
                </a>
              </li>
              {/*<li class="item">*/}
              {/*    <a href="#" target="_blank" aria-label="whatsapp" class="social-link hint--bounce hint--top hint--primary">*/}
              {/*        <i class="fab fa-whatsapp link-icon"></i>*/}
              {/*    </a>*/}
              {/*</li>*/}
              {/*<li class="item">*/}
              {/*    <a href="#" target="_blank" aria-label="skype" class="social-link hint--bounce hint--top hint--primary">*/}
              {/*        <i class="fab fa-skype link-icon"></i>*/}
              {/*    </a>*/}
              {/*</li>*/}
              <li className="item">
                <a href="https://www.yelp.com/biz/quantum-it-innovation-westfield" target="_blank" aria-label="yelp" className="social-link hint--bounce hint--top hint--primary">
                  <i className="fab fa-yelp link-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*====================  End of footer area  ====================*/}
</div>


    )
    

}