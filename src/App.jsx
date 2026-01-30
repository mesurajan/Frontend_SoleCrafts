import React from 'react'
import { Toaster } from "react-hot-toast";
import { Route,Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Sneakers from './pages/Sneakers'
import Contact from './pages/Contact'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'

function App() {


  return (
  <>
  <Toaster position="top-center" />
  <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="sneakers" element={<Sneakers/>}/>
    </Route>


      {/* routes for Auth */}
    <Route path="login" element={<LoginPage/>}/>
    <Route path="signup" element={<SignupPage/>}/>
  </Routes>

  </>
  )
}

export default App