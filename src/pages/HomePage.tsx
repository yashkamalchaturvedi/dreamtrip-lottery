import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Gift, 
  Users, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Play, 
  Calendar,
  TrendingUp,
  Award
} from 'lucide-react';
import LiveStats from '../components/LiveStats';

interface HomePageProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAuthClick }) => {
  const stats = [
    { label: 'Total Winners', value: '2,547', icon: Award },
    { label: 'Coupons Sold', value: '125,000+', icon: Gift },
    { label: 'Active Users', value: '50,000+', icon: Users },
    { label: 'Prize Value', value: '$2.5M+', icon: TrendingUp },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Fully Licensed',
      description: 'Licensed by Dubai Tourism Authority & FEMA compliant'
    },
    {
      icon: Gift,
      title: 'Amazing Prizes',
      description: 'Luxury Dubai trips worth $5,000 each'
    },
    {
      icon: Users,
      title: 'Referral Rewards',
      description: 'Earn up to $50 per referral with milestone bonuses'
    },
    {
      icon: Clock,
      title: 'Monthly Draws',
      description: 'Live draws every month with transparent results'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      text: 'I never thought I would win! The trip to Dubai was absolutely amazing. Everything was perfectly organized.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      text: 'The platform is so transparent and trustworthy. I have already referred 20 friends!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Anita Gupta',
      location: 'Bangalore, India',
      text: 'Amazing experience! The Burj Khalifa view from our hotel was breathtaking.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Win Your
                <span className="text-yellow-500"> Dream Trip </span>
                to Dubai
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Experience luxury like never before. Win a 7-day all-inclusive Dubai vacation 
                worth $5,000. Licensed, transparent, and fully regulated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onAuthClick('register')}
                  className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Now
                </button>
                <Link
                  to="/prizes"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 text-center"
                >
                  View Prizes
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Dubai Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>FEMA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>SSL Secured</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dubai Skyline"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold">
                Next Draw: Jan 31, 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <LiveStats />

      {/* Features Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Why Choose DreamTrip?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to transparency, security, and giving you the best chance to win amazing prizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="w-12 h-12 text-yellow-500 mb-6" />
                <h3 className="text-xl font-semibold text-navy-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to your dream vacation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold mb-4">Sign Up & Verify</h3>
              <p className="text-gray-600">Create your account and complete KYC verification to ensure security and compliance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold mb-4">Buy Coupons</h3>
              <p className="text-gray-600">Purchase coupons for $100 each using secure payment methods. Each coupon is your ticket to win!</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold mb-4">Watch & Win</h3>
              <p className="text-gray-600">Join our live monthly draws and see if you're the lucky winner of a luxury Dubai vacation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Draw Countdown */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Next Live Draw</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">08</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">45</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
              <div className="text-2xl font-bold">23</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <Link
            to="/purchase"
            className="bg-white text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Gift className="w-5 h-5" />
            <span>Buy Coupons Now</span>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What Our Winners Say</h2>
            <p className="text-xl text-gray-600">Real stories from real winners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-500 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Win Your Dream Trip?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of participants and get your chance to win a luxury Dubai vacation worth $5,000.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onAuthClick('register')}
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors"
            >
              Start Your Journey
            </button>
            <Link
              to="/live-draw"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-navy-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Live Draw</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;