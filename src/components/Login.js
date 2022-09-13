import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';

export const Login = ({setPassword,setEmail}) => {
    return(
        <div className="login-page">
  <div className="login-main">  	
    <div className="login-head">
      <h1>Login</h1>
    </div>			
    <div className="login-block">
      <Form onSubmit={()=>{}}>
      <Form.Group controlId="email" className="mb-3">
          <Form.Control
          
          placeholder='Email'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </Form.Group>
          <Form.Group controlId="password" className="mb-3">
          <Form.Control
       
          placeholder='Password'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </Form.Group>
        <div className="forgot-top-grids">
          <div className="forgot-grid">
            <ul>
              <li>
                <input type="checkbox" id="brand1" defaultValue />
                <label htmlFor="brand1"><span />Remember me</label>
              </li>
            </ul>
          </div>
          <div className="forgot">
            <Link to="/reset">Forgot password?</Link>
          </div>
          <div className="clearfix"> </div>
        </div>
        <Button type="submit" id="login" className="btn btn-primary btn-block">Login</Button>	
        <h3>Not a member?<Link to="/signup"> Sign up now</Link></h3>				
        <h2>or login with</h2>
        <div className="login-icons">
          <ul>
            <li><a href="#" className="facebook"><i className="fa fa-facebook" /></a></li>
            <li><a href="#" className="twitter"><i className="fa fa-twitter" /></a></li>
            <li><a href="#" className="google"><i className="fa fa-google-plus" /></a></li>						
          </ul>
        </div>
      </Form>
      <h5><Link to="/" className="text-center">Go Back to Home</Link></h5>
    </div>
  </div>
</div>

    )
    

}