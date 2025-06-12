import React, { useState } from 'react'
import { Link } from 'react-router-dom';



const HTML = () => {

const htmlConcepts = [
  "HTML Basics",
  "Doctype Declaration",
  "HTML Tags and Elements",
  "HTML Attributes",
  "Head and Body",
  "Metadata (meta, title, link)",
  "Headings (h1–h6)",
  "Paragraphs and Text Formatting",
  "Lists (ul, ol, li)",
  "Links (a tag)",
  "Images (img tag)",
  "Tables (table, tr, td, th)",
  "Forms (form, input, textarea, select, button)",
  "Form Attributes and Validation",
  "Semantic Elements (header, footer, section, article, nav, aside, main)",
  "Block vs Inline Elements",
  "HTML Entities",
  "Iframes",
  "Audio and Video Elements",
  "Canvas and SVG",
  "HTML Comments",
  "Global Attributes (id, class, style, title, etc.)",
  "Data Attributes (data-*)",
  "HTML5 APIs (Geolocation, Drag and Drop, Web Storage)",
  "Accessibility (aria- attributes, alt text, roles)",
  "Responsive Design (viewport meta tag)",
  "Deprecated Tags and Best Practices"
];

let [state, setState] = useState(htmlConcepts);
const [search, setSearch] = useState("");
const[visiblity, setVisiblity] = useState(false);

    function displayMenu() {
        setVisiblity(true);
    }

    function exitMenu() {
        setVisiblity(false);
    }

function handleSearch(e) {
    let input = e.target.value;
    setSearch(input);
    let filterRec = htmlConcepts.filter((i) => {return i.toLowerCase().includes(input.toLowerCase())});
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
                {/* <Link to='/html' className="links">HTML</Link> */}
                <Link to='/css' className="links">CSS</Link>
                <Link to='/js' className="links">JS</Link>
                <Link to='/react' className="links">REACT</Link>
            </div>
            <div className="login-container">
                <Link to='/login' className="login-link"><button className="login-btn">Get Started</button></Link>
            </div>

            <div onClick={displayMenu} className="menu-container"><div className="menu"></div> <div className="menu"></div> <div className="menu"></div></div>

            {visiblity && (
                <div className="sidebar-container">
                    <div className="exit"><button onClick={exitMenu} className="exit-btn">X</button></div>
                    <Link to='/' className="si-links">Home</Link>
                    {/* <Link to='/html' className="si-links">HTML</Link> */}
                    <Link to='/css' className="si-links">CSS</Link>
                    <Link to='/js' className="si-links">JS</Link>
                    <Link to='/react' className="si-links">REACT</Link>
                </div>
            )}

        </nav>
        <h1>Welcome to <i>HTML</i>.</h1>

        <div className="search">
            <input type="text" placeholder='Search' className='input-search' value={search} onChange={handleSearch}/>
        </div>

        <div className="display-container">
            <div className="display">
                {
                    state
                        .map((e, idx) => (
                            <li key={idx} className='concept'>
                                {e}
                            </li>
                        ))
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
  );

}

export default HTML;