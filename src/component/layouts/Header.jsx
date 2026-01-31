import React from "react";
import { User } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-background text-text">

      {/* TOP BAR */}
      <div className="container mx-auto flex items-center justify-between px-8 md:px-12 py-3 text-sm">

        {/* Contact info */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:support@solecraftshoe.com"
            className="flex items-center gap-2"
          >
            <CiMail />
            <span>support@solecraftshoe.com</span>
          </a>

          <a href="tel:+9779816413787" className="flex items-center gap-2">
            <MdOutlinePhoneInTalk />
            <span>+977 9816413787</span>
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-6">

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
          <Link to="/wishlist" className="relative flex items-center gap-1">
            <span className="hidden md:inline">Wishlist</span>
            <FaRegHeart />
            <span className="absolute -top-2 -right-2 h-4 w-4 text-xs flex items-center justify-center text-white bg-red-500 rounded-full">
              2
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative h-10 w-10 flex items-center justify-center">
            <BsCart />
            <span className="absolute top-1 right-1 h-4 w-4 text-xs flex items-center justify-center text-white bg-red-500 rounded-full">
              3
            </span>
          </Link>

          {/* Profile */}
          <div className="flex items-center gap-1 cursor-pointer">
            <User size={18} />
            <span>My Profile</span>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <div className="container mx-auto flex items-center justify-between px-8 md:px-12 h-14">

        <h1 className="text-lg font-semibold tracking-wide">
          SOLE-CRAFTS
        </h1>

        <nav className="hidden md:flex items-center gap-16 text-sm font-medium">
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
      </div>

    </header>
  );
}

export default Header;
