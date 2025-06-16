import React from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <nav className="nav-container login-nav-Container-page">
            <div className="nav-element login-nav-element">
                <Link to='/login' className="links-l login-link-page">&#x2190;</Link>
            </div>

            <div className="logo-container login-logo-container">
                <div className="logo login-logo">C<i>L</i>S</div>
            </div>

            <div className='empty-div'></div>
        </nav>

        <div className="main-signup-container">
            <div className="signup-content-container">
                <h4>Sign-Up</h4>
                <input type="text" placeholder='FirstName' className='signup-input'/>
                <input type="text" placeholder='MiddleName' className='signup-input'/>
                <input type="text" placeholder='LastName' className='signup-input'/>
                <input type="text" placeholder='Phone No' className='signup-input'/>
                <input type="text" placeholder='E-mail' className='signup-input'/>
                <button className="signup-btn">Sign Up</button>
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

export default Signup;