import React, { useState, useEffect } from "react";
import shoe01 from '../../assets/images/shoe.jpg';
import shoe02 from '../../assets/images/shoe02.jpg';
import shoe03 from '../../assets/images/shoe03.jpg';

const slides = [
  {
    id: 1,
    image: shoe01,
    title: "Sneakers",
    discount: "20% OFF",
  },
  {
    id: 2,
    image: shoe02,
    title: "Running Shoes",
    discount: "30% OFF",
  },
  {
    id: 3,
    image: shoe03,
    title: "Boots",
    discount: "15% OFF",
  },
];

function Section01() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="container  mx-auto">

    <div className="relative w-full overflow-hidden  shadow-lg">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="w-full shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 sm:h-80 md:h-95 lg:h-120 xl:h-130 object-cover "
            />

            {/* Discount Overlay */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <h3 className="font-semibold text-lg">{slide.title}</h3>
              <span className="text-sm">{slide.discount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-6 h-2 rounded-xl ${
              idx === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>


      
    </div>
  );
}

export default Section01;
