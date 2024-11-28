import React from 'react';
import { Leaf, Heart, Globe, Users, Shield } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About FOOZ</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At FOOZ, we're driven by a vision to inspire healthier living through sustainable
            farming practices and community empowerment. Our story begins in the rolling hills
            of Wayanad, Kerala, where our founders combined their farming background with
            extensive ecommerce leadership experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p className="text-gray-600">
              We source directly from local farmers to ensure the integrity of our products.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              We strive for excellence in every product, maintaining the highest standards.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600">
              We empower local farmers and artisans through sustainable partnerships.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To establish ourselves as a global leader in authentic, naturally grown products
            while promoting sustainable farming and community development.
          </p>
        </div>
      </div>
    </section>
  );
}