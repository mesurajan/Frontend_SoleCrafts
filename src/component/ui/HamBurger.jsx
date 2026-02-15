import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function HamBurger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button (Mobile only) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-white"
        aria-label="Open menu"
      >
        <Menu size={26} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col p-4 space-y-4 text-base">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-400">
            HOME
          </Link>

          <Link to="/product" onClick={() => setOpen(false)} className="hover:text-pink-400">
            SHOP
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-pink-400">
            CONTACT
          </Link>

          <Link to="/orders" onClick={() => setOpen(false)} className="hover:text-pink-400">
            ORDERS
          </Link>
        </nav>
      </div>
    </>
  );
}

export default HamBurger;
