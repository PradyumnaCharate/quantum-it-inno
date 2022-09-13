import { Link } from "react-router-dom"


export const TopHeader = () => {
    return(
       <div className="header" id="home1">
  <div className="container">
    <div className="d-flex align-items-center justify-content-between">
      {/* login */}
      <div className="w3l_login">
        <Link to="#myModal12" data-bs-toggle="modal" data-bs-target="#myModal12"><i className="fas fa-user" /></Link>
      </div>
      {/* logo */}
      <div className="w3l_logo text-center ml-auto">
        <h1><Link to="index.html">Grocery Mart<span>Online Grocery Shopping</span></Link></h1>
      </div>
      {/* search */}
      <div className="header-search position-absolute">
        <div className="search-right mx-lg-2">
          <Link to="#search" className="btn search-btn p-0" title="search">
            <i className="fas fa-search" /></Link>
          {/* search popup */}
          <div id="search" className="pop-overlay">
            <div className="popup">
              <form action="error.html" method="GET" className="search-box">
                <input type="search" placeholder="Enter Keyword..." name="search" required="required" autofocus />
                <button type="submit" className="btn"><span className="fas fa-search" aria-hidden="true" /></button>
              </form>
            </div>
            <a className="close" href="#close">×</a>
          </div>
        </div>
      </div>
      {/* cart */}
      <div className="cart cart box_1">
        <form action="#" method="post" className="last">
          <input type="hidden" name="cmd" defaultValue="_cart" />
          <input type="hidden" name="display" defaultValue={1} />
          <button className="w3view-cart" type="submit" name="submit" value><i className="fas fa-shopping-bag" /></button>
        </form>
      </div>
    </div>
  </div>
</div>


    )
    

}
