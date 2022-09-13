import React from 'react'

function ProjectCounter() {
  return (
    <div>
  <div className="fun-fact-wrapper bg-theme-default section-space--ptb_60">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 wow move-up">
          <div className="fun-fact--three text-center mt-30">
            <div className="fun-fact__count counter" style={{display: 'inline', color: '#fff'}}>400</div><i className="fa fa-plus" style={{fontSize: '1.5em', color: '#d2a98e'}} />
            <h6 className="fun-fact__text" style={{color: 'white'}}>Clients World Wide</h6>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 wow move-up">
          <div className="fun-fact--three text-center mt-30">
            <div className="fun-fact__count counter" style={{display: 'inline', color: '#fff'}}>1000</div><i className="fa fa-plus" style={{fontSize: '1.5em', color: '#d2a98e'}} />
            <h6 className="fun-fact__text" style={{color: 'white'}}>Finished Projects</h6>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 wow move-up">
          <div className="fun-fact--three text-center mt-30">
            <div className="fun-fact__count counter" style={{display: 'inline', color: '#fff'}}>150</div><i className="fa fa-plus" style={{fontSize: '1.5em', color: '#d2a98e'}} />
            <h6 className="fun-fact__text" style={{color: 'white'}}>Web Solutions Delivered</h6>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 wow move-up">
          <div className="fun-fact--three text-center mt-30">
            <div className="fun-fact__count counter" style={{display: 'inline', color: '#fff'}}>50</div><i className="fa fa-plus" style={{fontSize: '1.5em', color: '#d2a98e'}} />
            <h6 className="fun-fact__text" style={{color: 'white'}}>Mobile Solutions</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProjectCounter