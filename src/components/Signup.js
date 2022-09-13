import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from 'react-router-dom';

export const Signup = ({setPassword,setEmail,setName}) => {
    return(
        <div className="signup-page-main">
  <div className="signup-main">  	
    <div className="signup-head">
      <h1>Sign Up</h1>
    </div>
    <div className="signup-block">
    <Form onSubmit={()=>{}}>
    <Form.Group controlId="text" className="mb-1">
          <Form.Control
          
          placeholder='Name'
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          </Form.Group>
      <Form.Group controlId="email" className="mb-1">
          <Form.Control
          
          placeholder='Email'
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          </Form.Group>
          <Form.Group controlId="password" className="mb-1">
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
                <label htmlFor="brand1"><span />I agree to the terms</label>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <input type="submit" name="Sign In" defaultValue="Sign up" />														
      </Form>
      <div className="sign-down">
        <h4>Already have an account? <Link to="/login"> Login here.</Link></h4>
        <h5><Link to="/">Go Back to Home</Link></h5>
      </div>
    </div>
  </div>
</div>

    )
    

}