import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';

export function Contact() {
  const { founders, addresses } = companyInfo;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{founder.name}</h3>
              <p className="text-gray-600 mb-4">{founder.role}</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <span>{founder.phone1}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-600 mr-3" />
                  <span>{founder.phone2}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-600 mr-3" />
                  <span>{founder.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Marketing Office</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                {addresses.marketing.name}<br />
                {addresses.marketing.address}<br />
                {addresses.marketing.city} - {addresses.marketing.pincode}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Manufacturing Unit</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                {addresses.manufacturing.name}<br />
                {addresses.manufacturing.address}<br />
                {addresses.manufacturing.state} - {addresses.manufacturing.pincode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}