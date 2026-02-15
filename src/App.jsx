import React from 'react'
import { Toaster } from "react-hot-toast";
import { Route,Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
import Products from './pages/Products';
import ProductDetails from "./pages/ProductDetails";
import Orders from './pages/Orders';
import WishList from './pages/WishList';
import Cart from './pages/Cart';
import ProtectedRoute from './hoc/ProtectedRoutes';
import Profile from './pages/auth/Profile';
import PaymentProcessing from './pages/payment/PaymentProcessing';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminUserDetails from './pages/admin/AdminUserDetails';
import AdminBanner01 from './pages/admin/AdminBanner01';
import AdminAddProduct from './component/Admin/AdminAddProduct';

function App() {


  return (
  <>
  <Toaster position="top-center" />
  <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="orders" element={<Orders/>}/>
      <Route path="product" element={<Products/>}/>
      <Route path="product/:id" element={<ProductDetails />} />

      <Route path="wishlist" element={<ProtectedRoute><WishList/></ProtectedRoute>}/>
      <Route path="cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
      <Route path="profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
      <Route path="paymentprocessing" element={<ProtectedRoute><PaymentProcessing/></ProtectedRoute>}/>

    </Route>


      {/* routes for Auth */}
    <Route path="login" element={<LoginPage/>}/>
    <Route path="signup" element={<SignupPage/>}/>
  </Routes>


{/* Admin routes */}
  <Routes>
        <Route path="/admin" element={<ProtectedRoute><AdminLayout/></ProtectedRoute>}>

      <Route index element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/>
      <Route path="/admin/users" element={<ProtectedRoute><AdminUserDetails/></ProtectedRoute>}/> 
      <Route path="/admin/product" element={<ProtectedRoute><AdminProducts/></ProtectedRoute>}/> 
      <Route path="/admin/banners" element={<ProtectedRoute><AdminBanner01/></ProtectedRoute>}/> 
      <Route path="/admin/addproduct" element={<ProtectedRoute><AdminAddProduct/></ProtectedRoute>}/>
    

    </Route>
  </Routes>

  </>
  )
}

export default App