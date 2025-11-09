import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import logoImage from '/assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Humble Plumbing and Gasfitting" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">
                  Humble Plumbing & Gasfitting
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional Plumbing & Gas Services
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Humble Plumbing & Gasfitting Ltd is a certified plumbing, gas, and drainage company based in Auckland, New Zealand. Established in 2023, we're a 100% NZ-owned business delivering reliable, high-quality services with expert craftsmanship and honest approach.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/humble_plumbing?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://www.tiktok.com/@humble.plumbing.g" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                {/* TikTok Icon - Custom SVG since lucide-react doesn't have TikTok */}
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a 
                href="tel:+64210420062" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-primary-400" />
                <span>021 042 0062</span>
              </a>
              <a 
                href="mailto:info.humbleplumbingltd@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-primary-400" />
                <span>info.humbleplumbingltd@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary-400 mt-1" />
                <div>
                  <p>Auckland, New Zealand</p>
                  <p className="text-sm">Serving Greater Auckland Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-primary-400" />
                <div>
                  <p className="font-medium">Mon - Fri</p>
                  <p className="text-sm">7:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="ml-7">
                <p className="font-medium">Saturday</p>
                <p className="text-sm">8:00 AM - 4:00 PM</p>
              </div>
              <div className="ml-7">
                <p className="font-medium">Sunday</p>
                <p className="text-sm">Emergency Only</p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Humble Plumbing & Gasfitting. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;