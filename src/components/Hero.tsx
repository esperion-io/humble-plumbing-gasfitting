import React, { useState } from 'react';
import { Phone, CheckCircle, Star, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basin form submission will be handled by the form action
    console.log('Form submitted:', formData);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 gradient-bg"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20plumber%20working%20on%20pipes%20in%20modern%20home%20with%20tools%20and%20equipment%2C%20clean%20professional%20setting%2C%20high%20quality%20photography&image_size=landscape_16_9')`
        }}
      ></div>

      <div className="relative z-10 container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="text-white">


            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Plumbing
              <span className="text-accent-400 block">& Gas Services</span>
            </h1>

            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">Expert plumbing and gas fitting solutions for your home and business. Licensed, insured, and dedicated to delivering exceptional service and quality workmanship.</p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-400 flex-shrink-0" />
                <span className="text-lg">Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-400 flex-shrink-0" />
                <span className="text-lg">Quality Workmanship</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-400 flex-shrink-0" />
                <span className="text-lg">Fixed Price Promise</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-400 flex-shrink-0" />
                <span className="text-lg">Same Day Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="tel:+64210420062" 
                className="flex items-center justify-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now: 021 042 0062</span>
              </a>
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600"
              >
                Get Free Quote
              </button>
            </div>


          </div>

          {/* Right Column - Quote Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8" id="quote-form">
            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 2 hours
              </p>
            </div>

            <form 
  onSubmit={handleSubmit}
  action="https://usebasin.com/f/14760ae46558"
  method="POST"
  className="space-y-6"
  encType="multipart/form-data"
  id="form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="021 042 0062"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  placeholder="info.humbleplumbingltd@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="general-repair">General Repair</option>
                  <option value="residential-plumbing">Residential Plumbing</option>
                  <option value="commercial-plumbing">Commercial Plumbing</option>
                  <option value="gas-fitting">Gas Fitting</option>
                  <option value="hot-water-systems">Hot Water Systems</option>
                  <option value="drain-cleaning">Drain Cleaning</option>
                  <option value="leak-detection">Leak Detection</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Please describe your plumbing needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg py-4"
              >
                Get My Free Quote
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. 
                We'll never share your information with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
