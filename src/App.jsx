import React from 'react'
import { Route,Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Sneakers from './pages/Sneakers'
function App() {


  return (
  <>
  <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="sneakers" element={<Sneakers/>}/>

    

    </Route>
  </Routes>

  </>
  )
}

export default App