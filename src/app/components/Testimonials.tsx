"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Check } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The vehicle explorer made buying my car so much easier! The report was comprehensive, and the customer service was outstanding. I highly recommend them to anyone in the market for a used car.",
    author: "Sarah J.",
    location: "Vancouver, BC",
    stars: 5,
  },
  {
    id: 2,
    text: "I was skeptical at first, but this service exceeded my expectations. The detailed history report saved me from making a costly mistake. Their team was responsive and helpful throughout the process.",
    author: "Michael T.",
    location: "Toronto, ON",
    stars: 5,
  },
  {
    id: 3,
    text: "As a first-time car buyer, I was overwhelmed with the process. The support team guided me through each step and helped me find a reliable vehicle within my budget. Forever grateful!",
    author: "Priya K.",
    location: "Calgary, AB",
    stars: 4,
  },
];

const AnimatedTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="w-full bg-black text-white py-12">
      {/* Header Image */}
      <div className="flex justify-center mb-20">
        <img
          src="https://img.freepik.com/free-photo/batmobile-concept-car-with-neon-lights_23-2151649891.jpg?t=st=1746641328~exp=1746644928~hmac=ce479cf4e8dfe5a2f5a3be5b69c29f6884c7af2b217b5b7a24b0475d0bc84c91&w=1380"
          alt="Car Service"
          className="object-cover -mt-12"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row">
        {/* Left side - Testimonial */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 relative">
          <div className="flex mb-4">
            {[...Array(currentTestimonial.stars)].map((_, i) => (
              <Star key={i} fill="#FFD700" color="#FFD700" size={24} />
            ))}
          </div>

          <div className="relative">
            <div
              className="testimonial-text text-xl mb-6 transition-opacity duration-500 opacity-100"
              key={currentTestimonial.id}
            >
              "{currentTestimonial.text}"
            </div>

            <div className="text-lg font-bold">{currentTestimonial.author}</div>
            <div className="text-gray-400">{currentTestimonial.location}</div>

            <div className="absolute right-0 bottom-0 text-6xl opacity-50 font-serif">
              "
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-4 flex">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 mr-2 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right side - Support Info */}
        <div className="md:w-1/2 md:pl-12 md:border-l border-gray-700">
          <h2 className="text-4xl font-bold mb-6">Top Notch Support</h2>

          <p className="text-lg mb-8">
            Our dedicated support team is here to assist you every step of the
            way. We strive to provide fast, friendly, and efficient service to
            ensure your satisfaction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Check className="text-green-500 mr-2" size={20} />
              <span>4.95 Rating</span>
            </div>

            <div className="flex items-center">
              <Check className="text-green-500 mr-2" size={20} />
              <span>Easy access</span>
            </div>

            <div className="flex items-center">
              <Check className="text-green-500 mr-2" size={20} />
              <span>Fast respond</span>
            </div>

            <div className="flex items-center">
              <Check className="text-green-500 mr-2" size={20} />
              <span>Reasonable price</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTestimonials;
