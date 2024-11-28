import React from 'react';

export function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-orange-600">FOOZ</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your gateway to the heart of authentic food. We're passionate about delivering
              the finest, naturally grown products from the lush hills of Wayanad, Kerala,
              to every corner of the world.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
              Explore Products
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800"
              alt="FOOZ Products"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}