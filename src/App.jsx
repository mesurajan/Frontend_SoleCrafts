import React from 'react'
import { Toaster } from "react-hot-toast";
import { Route,Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import Products from './pages/Products';
import ProductDetails from "./component/product/ProductDetails";
import Orders from './pages/Orders';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import ProtectedRoute from './hoc/ProtectedRoutes';

function App() {


  return (
  <>
  <Toaster position="top-center" />
  <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path="product" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="wishlist" element={<ProtectedRoute><WishList/></ProtectedRoute>}/>
      <Route path="cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
    </Route>


      {/* routes for Auth */}
    <Route path="login" element={<LoginPage/>}/>
    <Route path="signup" element={<SignupPage/>}/>
  </Routes>

  </>
  )
}

export default App