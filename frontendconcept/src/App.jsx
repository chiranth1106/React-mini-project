import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import HTML from './components/HTML'
import CSS from './components/CSS'
import JS from './components/JS'
import REACT from './components/REACT'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/html' element={<HTML/>}/>
        <Route path='/css' element={<CSS/>}/>
        <Route path='/js' element={<JS/>}/>
        <Route path='/react' element={<REACT/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
