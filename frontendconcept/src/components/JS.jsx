import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const JS = () => {
    const jsConcept = 
        [
  // Basics
  "Variables (var, let, const)",
  "Data Types (string, number, boolean, null, undefined, symbol, bigint)",
  "Operators (arithmetic, comparison, logical, assignment, bitwise)",
  "Conditionals (if, else, switch)",
  "Loops (for, while, do...while, for...of, for...in)",
  "Functions (declaration, expression, arrow functions)",

  // Objects & Arrays
  "Objects (creation, properties, methods)",
  "Arrays (methods like push, pop, map, filter, reduce)",
  "Destructuring (objects & arrays)",
  "Spread and Rest Operators",
  "JSON (parse, stringify)",

  // Scope & Execution
  "Scope (global, function, block)",
  "Hoisting",
  "Closures",
  "Execution Context",
  "Call Stack",
  "Strict Mode",

  // Events & DOM
  "DOM Manipulation (getElementById, querySelector, etc.)",
  "Event Handling (addEventListener, event object)",
  "Event Delegation",
  "Forms and Form Validation",

  // Advanced Concepts
  "Promises",
  "Async/Await",
  "Callbacks",
  "Fetch API / AJAX",
  "ES6+ Features (let/const, arrow functions, template literals, destructuring, modules)",

  // Object-Oriented JS
  "Prototypes and Inheritance",
  "this keyword",
  "Constructor Functions",
  "Classes and Objects",
  "Encapsulation (private/public fields)",

  // Error Handling
  "try...catch",
  "Error Object",
  "Throwing Errors",

  // Modules
  "ES Modules (import/export)",
  "CommonJS (require/module.exports)",

  // Browser & Storage
  "Local Storage / Session Storage",
  "Cookies",
  "Timers (setTimeout, setInterval)",

  // Miscellaneous
  "Currying",
  "Debounce & Throttle",
  "Memoization",
  "Event Loop and Microtasks",
  "Garbage Collection",
  "WeakMap & WeakSet"
];

const [state, setState] = useState(jsConcept);
const[search, setSearch] = useState("");
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
    let filterRec = jsConcept.filter((i) => {return i.toLowerCase().includes(input.toLowerCase())});
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
                <Link to='/css' className="links">CSS</Link>
                {/* <Link to='/js' className="links">JS</Link> */}
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
                    <Link to='/html' className="si-links">HTML</Link>
                    <Link to='/css' className="si-links">CSS</Link>
                    {/* <Link to='/js' className="si-links">JS</Link> */}
                    <Link to='/react' className="si-links">REACT</Link>
                </div>
            )}

        </nav>
        <h1>Welcome to <i>Java-Script</i>.</h1>

        <div className="search">
            <input type="text" placeholder='Search' className='input-search' value={search} onChange={handleSearch}/>
        </div>

        <div className="display-container">
            <div className="display">
                {
                    state.map((e, idx) => {
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

export default JS;