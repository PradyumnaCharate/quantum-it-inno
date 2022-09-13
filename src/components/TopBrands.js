import { Link } from "react-router-dom"

    export const TopBrands = () => {
        return(
         <div className="tabs-wrapper bg_lite_gray section-space--ptb_100" style={{paddingBottom: 0}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
          <h6 className="section-sub-title mb-20">Our Recent Projects</h6>
          <h3 className="section-title">We’ve come a long way in <span className="text-color-primary"> 10 years</span> </h3>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 ht-tab-wrap">
        <div className="text-center  ">
          <ul className="nav justify-content-center ht-tab-menu ht-tab-menu_two" role="tablist">
            <li className="tab__item nav-item">
              <a className="nav-link" id="nav-tab1" data-toggle="tab" href="#tab_list_06" role="tab" aria-selected="true">Web Application</a>
            </li>
            <li className="tab__item nav-item active">
              <a className="nav-link active" id="nav-tab2" data-toggle="tab" href="#tab_list_07" role="tab" aria-selected="false">Mobile App</a>
            </li>
            <li className="tab__item nav-item ">
              <a className="nav-link" id="nav-tab3" data-toggle="tab" href="#tab_list_08" role="tab" aria-selected="false">Digital Marketing</a>
            </li>
          </ul>
        </div>
        <div className="tab-content ht-tab__content">
          <div className="tab-pane fade" id="tab_list_06" role="tabpanel">
            <div className="tab-history-wrap section-space--mt_60">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image port_img_box">
                          <img className="img-fluid fix-height" src="assets/images/portfolio/w1.png" alt="title" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Beco &amp; Associates Global</h5>
                        <div className="text">
                          BECO GLOBAL is a worldwide consultancy, shipping and freight forwarding company focusing on international trade, commodi
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* ht-box-icon End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image port_img_box">
                          <img className="img-fluid" src="assets/images/portfolio/w2.png" alt="title" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Treatment Tours India</h5>
                        <div className="text">
                          Treatment Tours India is a Medical Tourism company that assists the patients coming to India for treatment. The Company 
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* ht-box-icon End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image port_img_box">
                          <img className="img-fluid" src="assets/images/portfolio/w3.png" alt="hjh" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Arome Global</h5>
                        <div className="text">
                          Arome Global is an online shopping site for products like Essential Oil blends, Bath Salts, Sprays, Soaps, and Roll-Ons,
                          <strong>...</strong>
                        </div>
                        {/*<div href="#" class="box-images-arrow">*/}
                        {/*    <span class="button-text">Explore now</span>*/}
                        {/*    <i class="far fa-long-arrow-right"></i>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </Link>
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
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image text-center">
                          <img className="img-phone" src="assets/images/portfolio/m1.png" alt="ujyhgiu" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Good Sam</h5>
                        <div className="text">
                          Download the latest version of the Good Sam Camping app and get essential i
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* ht-box-icon End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image text-center">
                          <img className="img-phone" src="assets/images/portfolio/m2.png" alt="fgdfg" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Mein haus</h5>
                        <div className="text">
                          MeinHaus Application help people to search high quality home maintenance service
                          <strong>...</strong>
                        </div>
                        {/*<div href="#" class="box-images-arrow">*/}
                        {/*    <span class="button-text">Explore now</span>*/}
                        {/*    <i class="far fa-long-arrow-right"></i>*/}
                        {/*</div>*/}
                      </div>
                    </div>
                  </Link>
                  {/* ht-box-icon End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image text-center">
                          <img className="img-phone" src="assets/images/portfolio/m3.png" alt="jmhjhg" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Deliverease</h5>
                        <div className="text">
                          Tell us what, when and where you want to ship. Leave the rest to deliverease
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
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
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image port_img_box">
                          <img className="img-fluid" src="assets/images/portfolio/d1.jpg" alt="rtret" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Cancercare Mena</h5>
                        <div className="text">
                          Cancer Care Specialties Mena bring the best cancer, and critical non-cancer care for all patients in the MENA 
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* ht-box-icon End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image port_img_box">
                          <img className="img-fluid" src="assets/images/portfolio/d2.jpg" alt="fds" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Gastroenterology</h5>
                        <div className="text">
                          This website is of Dr. Affan, he is the gastroenterologist in Abu Dhabi. For the convenience of his 
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {/* ht-box-icon End */}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* ht-box-icon Start */}
                  <Link to="#" className="ht-large-box-images style-04">
                    <div className="large-image-box">
                      <div className="box-image">
                        <div className="default-image port_img_box">
                          <img className="img-fluid" src="assets/images/portfolio/d3.jpg" alt="hgrh" />
                        </div>
                      </div>
                      <div className="content">
                        <h5 className="heading">Female Surgeon</h5>
                        <div className="text">
                          This website is owned by Dr. Humaa darr, she is part of the Al Zahra Cancer Center’s multidisciplinary 
                          <strong>...</strong>
                        </div>
                      </div>
                    </div>
                  </Link>
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

    
    
    
        )
        
    
    }