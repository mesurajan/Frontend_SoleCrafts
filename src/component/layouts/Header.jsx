import React from "react";
import LiquidEther from '../ui/LiquidEther';
import { ShoppingCart, Search, User } from "lucide-react";
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <div className="container"> 
    <header className="w-full h-full  relative ">
            <div className="absolute inset-0 z-0">
              <LiquidEther
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                mouseForce={20}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                color0="#5227FF"
                color1="#FF9FFC"
                color2="#B19EEF"
              />
            </div>
      <div className="container mx-auto flex items-center justify-between px-8 md:px-12 py-2 mt-0 pt-4">
        
        {/* Left: Language + Logo */}
        <div className="flex items-center gap-6">
          <select className="text-sm outline-none bg-transparent">
            <option>EN</option>
            <option>NP</option>
          </select>
        </div>

     {/* Right: Profile / Cart / Search */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <User size={18} />
            <span>My profile</span>
          </div>

          <div className="relative cursor-pointer">
            <ShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          <span className="text-gray-500">$0.00</span>

          <Search size={18} className="cursor-pointer" />
        </div>
      </div>

    <div className="flex items-center justify-between h-16 px-8 md:px-12  py-2 relative cursor-auto">
      {/* Left: Logo */}
      <div>
        <h1 className="text-lg font-semibold tracking-wide">SHOE-STORE</h1>
      </div>

      {/* Right: Nav */}
      <nav className="hidden md:flex items-center gap-20 mr-8 text-sm font-medium">
      <NavLink  to="/"
        className={({ isActive }) =>
          isActive
            ? "text-primary border-b-3 border-primary font-semibold"
            : "hover:text-primary transition pb-2"
        }
      >
        HOME
      </NavLink>

      <NavLink to="/sneakers"
        className={({ isActive }) =>
          isActive 
                    ? "text-primary border-b-3 border-primary font-semibold"
                    : "hover:text-primary transition pb-2"
        }
      >
        SNEAKERS
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive 
                    ? "text-primary border-b-3 border-primary font-semibold"
                    : "hover:text-primary transition pb-2"
        }
      >
        ABOUT
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive 
                    ? "text-primary border-b-3 border-primary font-semibold"
                    : "hover:text-primary transition pb-2"
        }
      >
        CONTACT
      </NavLink>
          </nav>
        </div>

</header>
</div>

  );
}

export default Header;
