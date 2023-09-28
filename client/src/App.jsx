import './App.css'

//! dependencies
import { Routes,Route,useLocation } from 'react-router-dom'
import axios from 'axios'

//? components
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'

//? hooks
import { useState } from 'react'

function App() {

  return (
    <main>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>

        <Route path='/home' element={<Home/>}/>

        <Route path='/detail/:id' element={<Detail/>}/>

      </Routes>
    </main>
  )
}

export default App
