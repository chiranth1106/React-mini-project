import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const REACT = () => {
    const reactConcept =
        [
  // Core Basics
  "JSX (JavaScript XML)",
  "Components (Function, Class)",
  "Props",
  "State",
  "Events Handling",
  "Conditional Rendering",
  "Lists and Keys",

  // Component Lifecycle
  "Component Lifecycle Methods (class components)",
  "useEffect Hook",
  "Mounting, Updating, Unmounting",

  // Hooks
  "useState",
  "useEffect",
  "useContext",
  "useRef",
  "useReducer",
  "useMemo",
  "useCallback",
  "Custom Hooks",

  // Styling
  "Inline Styling",
  "CSS Modules",
  "Styled Components",
  "Tailwind CSS Integration",

  // Routing
  "React Router (BrowserRouter, Routes, Route, Link, useParams, useNavigate)",

  // Forms
  "Controlled Components",
  "Uncontrolled Components",
  "Form Validation",
  "React Hook Form",

  // Context & State Management
  "React Context API",
  "useContext",
  "Redux (store, actions, reducers)",
  "Redux Toolkit",
  "Zustand / Recoil (alternative state management)",

  // Performance Optimization
  "React.memo",
  "useMemo",
  "useCallback",
  "Code Splitting",
  "Lazy Loading (React.lazy, Suspense)",

  // Error Handling
  "Error Boundaries",
  "try...catch in async functions",

  // Testing
  "Jest",
  "React Testing Library",
  "Unit Testing Components",
  "Mocking APIs",

  // Deployment
  "Create React App (CRA)",
  "Vite",
  "Build and Deploy (Netlify, Vercel, GitHub Pages)",

  // Advanced Topics
  "Refs and useRef",
  "Forward Refs",
  "Portals",
  "Higher Order Components (HOC)",
  "Render Props",
  "Fragments",
  "Strict Mode",
  "Concurrent Mode",
  "Server-Side Rendering (Next.js)",
  "Static Site Generation (Next.js)",
  "Hydration",
  "React Server Components"
]

const [state, setState] = useState(reactConcept);
const[search, setSearch] = useState("");

  function handleSearch(e) {
    let input = e.target.value;
    setSearch(input);
    let filterRec = reactConcept.filter((i) => {return i.toLowerCase().includes(input.toLowerCase())});
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
                <Link to='/js' className="links">JS</Link>
                {/* <Link to='/react' className="links">REACT</Link> */}
            </div>
            <div className="login-container">
                <Link to='/login' className="login-link"><button className="login-btn">Get Started</button></Link>
            </div>
        </nav>
        <h1>Welcome to <i>React</i>.</h1>

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

export default REACT;