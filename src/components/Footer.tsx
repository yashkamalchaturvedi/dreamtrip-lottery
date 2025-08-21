import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MessageCircle, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Dream</span>
              <span className="text-yellow-500">Trip</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Licensed lottery platform offering dream trips to Dubai. Fully regulated and transparent.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/prizes" className="text-gray-300 hover:text-white">Prizes</Link></li>
              <li><Link to="/live-draw" className="text-gray-300 hover:text-white">Live Draws</Link></li>
              <li><Link to="/referrals" className="text-gray-300 hover:text-white">Referral Program</Link></li>
              <li><Link to="/compliance" className="text-gray-300 hover:text-white">Compliance</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-300">+91 1800-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-gray-300">WhatsApp: +971-50-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-300">support@dreamtrip.com</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/compliance" className="text-gray-300 hover:text-white">Licensing</Link></li>
              <li><Link to="/responsible-gaming" className="text-gray-300 hover:text-white">Responsible Gaming</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 DreamTrip Dubai Lottery. All rights reserved. Licensed by Dubai Tourism Authority.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
              <span className="text-gray-400">🇦🇪 Dubai Licensed</span>
              <span className="text-gray-400">🇮🇳 FEMA Compliant</span>
              <span className="text-gray-400">🛡️ SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;