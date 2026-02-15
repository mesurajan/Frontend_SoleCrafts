import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import HamBurger from "../ui/HamBurger";
import { useState } from "react";
import { User, LogOut, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";




function Header() {
const cartCount = useSelector((state) => state.cart.count);
const WishListCount = useSelector((state) => state.wishList.count);

const [open, setOpen] = useState(false);
const navigate = useNavigate();
const isLoggedIn = !!localStorage.getItem("token");

const handleLogout = () => {
  localStorage.removeItem("token");
  setOpen(false);
  navigate("/login");
};




  return (
    <div className="container bg-background">

      <header className="text-sm fixed top-0 left-0 right-0 z-50 mb-40 bg-background container">

      {/* TOP BAR */}
      <div className="container flex flex-col gap-2 px-4 sm:px-1 md:px-10  py-2 text-white md:flex-row md:justify-between md:items-center pt-6">

        {/* Contact info */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1 md:gap-2 cursor-pointer sm:px-6">
                <CiMail className="cursor-pointer text-l md:text-2xl"/>
                <a href="mailto:hetkofurniture@gmail.com">
                  <p>support@solecrafts.com</p>
                </a>
              </div>
              <div className="flex items-center gap-1">
                <MdOutlinePhoneInTalk className="cursor-pointer" />
                <a href="tel:+1234567890"> +977 9816413787</a>
              </div>
            </div>


        {/* Right actions */}
        <div className="flex items-center gap-12 md:gap-10 text-text">

          {/* Language selector */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium">
              English
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute right-0 mt-2 w-32 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition z-50">
              <button className="w-full px-4 py-2 text-left hover:bg-primary rounded-md">
                English
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-primary rounded-md">
                नेपाली
              </button>
            </div>
          </div>

          {/* Wishlist */}
          <Link to="/wishlist"
            className="flex items-center gap-1 md:gap-2"
          >
            <span className="hidden md:inline">Wishlist</span>

            {/* Icon Wrapper */}
            <span className="relative inline-flex items-center justify-center">
              <FaRegHeart className="text-l md:text-l" />

              {WishListCount > 0 && (
                <span
                  className="
                    absolute  -top-1 -right-1 md:-top-2 md:-right-2 h-3 w-3 md:h-4 md:w-4 text-[8px] md:text-x flex items-center  
                    justify-center  rounded-full  bg-red-500  text-white  font-semibold "
                >
                  {WishListCount}
                </span>
              )}
            </span>
          </Link>


      {/* Cart */}
          <Link
            to="/cart"
            className="flex items-center gap-1 md:gap-2"
          >
            <span className="hidden md:inline">Cart</span>

            {/* Icon Wrapper */}
            <span className="relative inline-flex items-center justify-center">
              <BsCart className="text-l md:text-l" />

              {cartCount > 0 && (
                <span
                  className=" absolute  -top-1 -right-1 md:-top-2 md:-right-2 h-3 w-3 md:h-4 md:w-4 text-[8px] 
                  md:text-x flex items-center  justify-center  rounded-full  bg-red-500  text-white  font-semibold ">
                  {cartCount}
                </span>
              )}
            </span>
          </Link>
          
          {/* Profile section */}

            <div className="relative">
              {/* Trigger always visible */}
              <div
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <User size={18} />
                <span>My Account</span>
              </div>

              {/* Dropdown */}
              {open && (
                <div className="absolute right-0 mt-2 w-40 bg-background border rounded-lg shadow-lg z-50">
                  {/* Profile */}
                  <button
                    onClick={() => {
                      setOpen(false);
                      if (isLoggedIn) {
                        navigate("/profile");
                      } else {
                        navigate("/login");
                      }
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-primary rounded-t-lg"
                  >
                    Profile
                  </button>

                  {/* Auth action */}
                  {isLoggedIn ? (
                    <button
                      onClick={() => {
                        localStorage.removeItem("token");
                        setOpen(false);
                        navigate("/login");
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-primary rounded-b-lg text-red-500"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setOpen(false);
                        navigate("/login");
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-primary rounded-b-lg"
                    >
                      Login
                    </button>
                  )}
                </div>
              )}
            </div>


        </div>
      </div>

    {/* NAV BAR */}
    <div className="container mx-auto flex items-center justify-between px-3 sm:px-3 md:px-12 h-14">

          {/* Logo */}
          <h1 className="text-lg font-semibold tracking-wide text-text">
            SOLE-CRAFTS
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-16 text-sm font-medium text-text">
            {["/", "/product", "/contact", "/orders"].map((path, i) => {
              const labels = ["HOME", "SHOP", "CONTACT", "ORDERS"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "border-b-2 border-text font-semibold"
                      : "hover:border-b-2 hover:border-text pb-1"
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden px-4">
            <HamBurger />
          </div>
        </div>
    </header>
    </div>
  );
}

export default Header;
