import React, { useState } from "react";

import G14 from "../assets/images/about/g14.png";
import Tel from "../assets/images/about/tel.png";
import Call from "../assets/images/offer/call.png";
import Car from "../assets/images/offer/car.png";
import Location from "../assets/images/about/location.png";
import Warehouse from "../assets/images/about/warehouse.png";
import Whyus from "../assets/images/about/whyus.png";
import { toast } from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirm = window.confirm("Do you want to submit this message?");
    if (!confirm) return;

    toast.success("Message submitted successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className='container text-mainbackground'>
  
    {/* main body */}
      <div className='flex flex-col md:flex-row text-center justify-center mt-4 md:mt-6 mb-10 '>
       <div className='flex justify-center items-start flex-col gap-4 md:w-2/3 md:px-10'>
        <h1 className='text-2xl font-semibold md:font-bold md:text-4xl px-4'>Information About Us</h1>
        <p className='text-justify p-4 md:w-[95%]'>
        At SoleCraft, we believe the right pair of shoes can change how you move, feel, and express yourself. 
        Our goal is to deliver footwear that blends comfort, durability, and modern style for every step of your journey.
        From everyday casual wear to performance-ready sneakers, we design shoes that fit your lifestyle perfectly.
        We focus on quality materials, precise craftsmanship, and trend-driven designs to ensure every pair lasts 
        longer and looks better. At SoleCraft, shoes are not just accessories — they are a statement of confidence and 
        comfort.
        </p>

        <img src={Warehouse } alt='main logo warehouse' 
        className='p-4 md:w-[95%] md:h-[75%] rounded-md transform transition hover:scale-105'/>
       </div>


        {/* Contact Way */}
        <div className="flex justify-start items-center flex-col gap-4">
          <h1 className="text-2xl font-semibold md:font-bold md:text-4xl mb-4 px-4">
            Contact Way
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
            {/* first one */}
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img 
                src={Call} 
                alt="Call" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-gray-700 text-sm text-left">
                <p className="font-medium">Tel: +977 9816413787</p>
                <p className="font-medium">Email: support@solecraftshoe.com</p>
              </div>
            </div>

            {/* second one */}
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img 
                src={Tel} 
                alt="Telephone" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-gray-700 text-sm text-left">
                <p className="font-medium">Support Forums </p>
                <p className="font-medium">24/7 Open For All</p>
              </div>
            </div>

            {/* third one */}
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img 
                src={Location} 
                alt="Location" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-gray-700 text-sm text-left">
                <p className="font-medium">Sainamaina -10 Saljhandi</p>
                <p className="font-medium">Rupandehi, Mahindra highway</p>
              </div>
            </div>

            {/* fourth one */}
            <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <img 
                src={Car} 
                alt="delivery" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-gray-700 text-sm text-left">
                <p className="font-medium">Free standard Delivery</p>
                <p className="font-medium">all over Nepal</p>
              </div>
            </div>
          </div>

          <section className="mt-14 mb-10 flex flex-col items-center text-center gap-6 px-6">
          <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us?</h2>
          <img 
            src={Whyus} 
            alt="Why Choose Us" 
            className="w-full md:w-[95%] lg:w-[95%] object-contain rounded-md shadow-md hover:scale-105 transition"
          />
          
          <p className="max-w-2xl text-justify py-4 ">
           At SoleCraft, we combine innovative design, premium materials, and everyday comfort to create shoes you’ll 
           love wearing. Our footwear is crafted to support your feet while keeping you stylish in every situation.
          We are committed to reliable quality, affordable pricing, and customer-first service. Whether you’re walking,
           running, or heading out in style, SoleCraft ensures every step feels confident, comfortable, and effortless.
          </p>
        </section>

        </div>   
      </div>



      <div className='flex flex-col md:flex-row text-center justify-center  mt-10 mb-10 gap-6 '>
        <div className='md:w-1/2 flex flex-col justify-center items-center gap-6 transition transform hover:scale-105'> 
          <div className=''>
          <p className='font-bold text-2xl md:text-4xl'>Get In Touch</p>
          <p className='text-justify px-6 py-6 md:py-10 md:w-165'>
            We’d love to hear from you! Whether you have a question about sizing, delivery, or product details, 
            our team is always ready to help. Your feedback helps us improve and deliver better footwear experiences. 
            Reach out anytime — we’re here to make your shoe shopping smooth and satisfying.
        </p>
          </div>

          {/* form section */}
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={form.name}
                onChange={handleChange}
                required
                className="w-80 md:w-65 h-10 rounded-sm text-black p-4 border-[1px] border-gray-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={form.email}
                onChange={handleChange}
                required
                className="w-80 md:w-95 h-10 rounded-sm text-black p-4 border-[1px] border-gray-300"
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-80 md:w-165 h-10 rounded-sm text-black p-4 border-[1px] border-gray-300 mt-4"
              />
              <textarea
                name="message"
                placeholder="Type Your Message*"
                value={form.message}
                onChange={handleChange}
                required
                className="w-80 md:w-165 h-32 rounded-sm text-black p-4 border-[1px] border-gray-300 mt-4"
              />
            </div>
            <div className="flex justify-start items-start px-8 md:px-14">
              <button
                type="submit"
                className="bg-primary text-gray-300 w-80 md:w-65 h-10 rounded-sm mt-4 transition-transform hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className='p-4 md:p-0 md:py-14'>
          <img src={G14} alt="Get In Touch"
           className='bg-mainbackground rounded-md transform transition hover:scale-105' />
        </div>
      </div>


    
    </div>
  )
}

export default Contact;
