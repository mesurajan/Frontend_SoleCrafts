import React from 'react';
import Background from '../ui/Background';
function Footer() {
  return (
<div className="relative w-full h-full">
  <Background/>
      {/* Footer content above animation */}
      <footer className="relative z-10 text-gray-700 container mx-auto px-8 md:px-12 py-6 md:py-20">
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900">SHOE-STORE</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Follow Us</h3>
            <p className="mt-4 text-sm">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="mt-4 flex gap-4">
              <span className="cursor-pointer text-blue-600">Facebook</span>
              <span className="cursor-pointer text-sky-500">Twitter</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact Us</h3>
            <p className="mt-4 text-sm">
              E-Comm, 4578 <br />
              Marmora Road, <br />
              Glasgow D04 89GR
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Information</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Service</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">My Account</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Our Offers</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>About Us</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shoe Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
