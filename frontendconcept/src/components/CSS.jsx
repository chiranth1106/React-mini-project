import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CSS = () => {
    const cssConcept = 
    [
  "CSS Syntax",
  "Selectors (basic, class, id, universal, attribute, pseudo)",
  "Colors (names, HEX, RGB, HSL, opacity)",
  "Units (px, em, rem, %, vw, vh)",
  "Box Model (margin, border, padding, content)",
  "Display Property (block, inline, inline-block, none)",
  "Positioning (static, relative, absolute, fixed, sticky)",
  "Flexbox",
  "Grid Layout",
  "Float and Clear",
  "Z-index",
  "Typography (font-family, font-size, font-weight, line-height, letter-spacing)",
  "Text Properties (text-align, text-decoration, text-transform)",
  "Backgrounds (color, image, position, repeat, size)",
  "Borders (style, width, color, radius)",
  "Margins and Padding",
  "Overflow (hidden, scroll, auto)",
  "Visibility and Opacity",
  "Transitions",
  "Animations (keyframes)",
  "Transforms (translate, scale, rotate, skew)",
  "Media Queries",
  "Responsive Design",
  "Custom Properties (CSS Variables)",
  "Inheritance and Specificity",
  "Cascade and !important",
  "Pseudo-classes (:hover, :focus, :nth-child)",
  "Pseudo-elements (::before, ::after)",
  "Combinators (descendant, child, sibling)",
  "Shorthand Properties",
  "Vendor Prefixes",
  "CSS Functions (calc(), var(), clamp())"];

  const[state, setState] = useState(cssConcept);
  const[search, setSearch] = useState("");

  function handleSearch(e) {
    let input = e.target.value;
    setSearch(input);
    let filterRec = cssConcept.filter((i) => {return i.toLowerCase().includes(input.toLowerCase())});
    setState(filterRec);

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
                {/* <Link to='/css' className="links">CSS</Link> */}
                <Link to='/js' className="links">JS</Link>
                <Link to='/react' className="links">REACT</Link>
            </div>
            <div className="login-container">
                <Link to='/login' className="login-link"><button className="login-btn">Get Started</button></Link>
            </div>

            <div className="menu-container"><div className="menu"></div> <div className="menu"></div> <div className="menu"></div></div>

        </nav>
        <h1>Welcome to <i>CSS</i>.</h1>

        <div className="search">
            <input type="text" placeholder='Search' className='input-search' value={search} onChange={handleSearch}/>
        </div>

        <div className="display-container">
            <div className="display">
                {
                    state.map((e,idx) => {
                        return(
                            <li key={idx} className='concept'>
                                {e}
                            </li>
                        )
                    })
                }
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

export default CSS;