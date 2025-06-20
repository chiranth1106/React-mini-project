import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const[visiblity, setVisiblity] = useState(false);

    function displayMenu() {
        setVisiblity(true);
    }

    function exitMenu() {
        setVisiblity(false);
    }

return (
    <div>
        <nav className="nav-container">
            <div className="logo-container">
                <div className="logo">C<i>L</i>S</div>
            </div>

            <div className="nav-element">
                <Link to='/' className="links">Home</Link>
                <Link to='/html' className="links">HTML</Link>
                <Link to='/css' className="links">CSS</Link>
                <Link to='/js' className="links">JS</Link>
                <Link to='/react' className="links">REACT</Link>
            </div>

            <div className="login-container">
                <Link to='/login' className="login-link"><button className="login-btn">Sign up</button></Link>
            </div>

            <button onClick={displayMenu} className="menu-container"><div className="menu"></div> <div className="menu"></div> <div className="menu"></div></button>

            {visiblity && (
                <div className="sidebar-container">
                    <div className="exit"><button onClick={exitMenu} className="exit-btn">X</button></div>
                    <Link to='/' className="si-links">Home</Link>
                    <Link to='/html' className="si-links">HTML</Link>
                    <Link to='/css' className="si-links">CSS</Link>
                    <Link to='/js' className="si-links">JS</Link>
                    <Link to='/react' className="si-links">REACT</Link>
                </div>
            )}
        </nav>

        <div className="message-conatiner">
            <div className="message">
                <h2>Hello user, <i>Welcome.!</i></h2>
                <h3>Explore the concept of <i> Frontend</i>.</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. DolorLorem ipsum dolor, sit amet consectetur </p>
                <hr />
            </div>
            <Link to='/login'><button className="m-login-btn">Get Started</button></Link>
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

export default Home;