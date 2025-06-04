import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <nav className="nav-container login-nav-Container-page">
        <div className="nav-element login-nav-element">
            <Link to='/' className="links login-link-page">&#x2190;</Link>
        </div>

        <div className="logo-container login-logo-container">
            <div className="logo login-logo">C<i>L</i>S</div>
        </div>

        <div className='empty-div'></div>
      </nav>

      <div className="login-container-box">
        <div className="login-content-box">
          <div className="login-element-box">
            <h4>login</h4>
            <input type="text" className='login-input' placeholder='Username'/>
            <br />
            <input type='password' className='login-input' placeholder='Password'/>
            <br />
            <button id='login-btn'>Login</button>
            <p><a href="#">Forgot password or username.?</a></p>
            <br />
            <br />
            <p className='new-user-message'>New User.?</p>
            <br />
            <button className="sign-up">Sign up</button>
          </div>
        </div>
      </div>

      <footer>
            <div className="footer-container">
                <div className="f-message">
                    <p>&copy; {new Date().getFullYear()} CHIRANTH. All rights reserved.</p>
                    <p>Made with love <span className="heart">&#9829; </span>By <i>CHIRANTH</i></p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Login;