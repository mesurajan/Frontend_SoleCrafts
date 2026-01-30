import React from "react";
import shoeImg from "../../assets/images/shoe02.jpg";
import { Truck, RefreshCcw, Headphones } from "lucide-react";

function Section03() {
  return (
    <section className="container mx-auto px-4 md:px-0 py-6 md:py-20">
      {/* Hero Banner */}
      <div className="relative overflow-hidden  bg-linear-to-r from-[#4F46E5] to-[#4338CA] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 py-12 md:px-16">
          
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Newbalance Running <br /> Sneakers
            </h1>
            <p className="text-white/80 max-w-md">
            Shoes that transform your body language and attitude.
            Experience unmatched comfort, modern design, and performance 
            that moves with you—every single step.

            </p>

            <button className="mt-4 inline-block border-b border-white pb-1 text-sm font-semibold hover:opacity-80 transition">
              SHOP NOW
            </button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <img
              src={shoeImg}
              alt="Running Shoe"
              className="w-[280px] md:w-[380px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <Truck className="text-primary w-8 h-8" />
          <h4 className="font-semibold">FREE SHIPPING</h4>
          <p className="text-sm text-gray-500">On all orders</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <RefreshCcw className="text-primary w-8 h-8" />
          <h4 className="font-semibold">100% REFUND</h4>
          <p className="text-sm text-gray-500">Easy return policy</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Headphones className="text-primary w-8 h-8" />
          <h4 className="font-semibold">SUPPORT 24/7</h4>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>
      </div>
    </section>
  );
}

export default Section03;
