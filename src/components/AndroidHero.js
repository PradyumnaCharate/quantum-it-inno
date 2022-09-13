
    import { Link } from "react-router-dom"



    

export const AndroidHero = ({image,title,description,style=true,button=true }) => {
    return(
     
<div >
        {/*============ Resolutions Hero Start ============*/}
        
        <div id="video-carousel-example2" className="carousel slide carousel-fade resolutions-hero-bg" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
    
     <div className="carousel-item active">
              <div className="view view1" >
              <div className="title_image" role="listbox" style={{backgroundImage: `url(${image})` } } >
 
 
  <div className="carousel-caption text-left">
    <div className="animated fadeInDown">
      <h1 className="title_h1 ">{title}</h1>
      <div id="line" />
      {
        style?(<div className="row">
        <div className="col-lg-7 col-md-7">
          <p className="text-white title_p">
            <span>{description}</span>
          </p>
          <div className="button_cont">
            <div className="eft-1" />
            {
              button?(<><Link to="/contactus" className="f-btn">Hire Developers</Link>
              <Link to="/contactus" className="s-btn">Discuss Your Project</Link></>):(<>
              
            <Link to="/contactus" className="s-btn">Get a Quote</Link></>
                
              )

            }
       
          </div>
        </div>
      </div>):(< >
        
          <p className="text-white title_p">
            <span>{description}</span>
          </p>
          <div className="button_cont">
            <div className="eft-1" />
            {
              button?(<><Link to="/contactus" className="f-btn">Hire Developers</Link>
              <Link to="/contactus" className="s-btn">Discuss Your Project</Link></>):(<>
              
            <Link to="/contactus" className="s-btn">Get a Quote</Link></>
                
              )

            }
          </div>
        </>
     )
      }
      
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
