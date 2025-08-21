import React from 'react';
import { MapPin, Calendar, Plane, Star, Gift, CheckCircle, Clock, Users } from 'lucide-react';

const Prizes: React.FC = () => {
  const currentPrize = {
    title: "Luxury Dubai Experience",
    value: "$5,000",
    duration: "7 Days, 6 Nights",
    image: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    highlights: [
      "5-star hotel accommodation in Dubai Marina",
      "Round-trip business class flights",
      "Desert safari with camel riding",
      "Burj Khalifa observation deck visit",
      "Dubai Mall shopping experience",
      "Luxury yacht cruise",
      "Fine dining at world-class restaurants",
      "Private city tour with guide"
    ]
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival & Marina Welcome",
      activities: ["Airport pickup in luxury car", "Check-in to 5-star marina hotel", "Welcome dinner at Atlantis"]
    },
    {
      day: 2,
      title: "Modern Dubai Exploration",
      activities: ["Burj Khalifa visit", "Dubai Mall shopping", "Dubai Fountain show", "High-end restaurant dinner"]
    },
    {
      day: 3,
      title: "Traditional & Adventure",
      activities: ["Desert safari expedition", "Camel riding experience", "Traditional Bedouin camp dinner", "Belly dance show"]
    },
    {
      day: 4,
      title: "Luxury & Relaxation",
      activities: ["Spa treatment at hotel", "Private yacht cruise", "Sunset cocktails", "Fine dining experience"]
    },
    {
      day: 5,
      title: "Culture & Heritage",
      activities: ["Dubai Museum visit", "Gold & spice souks", "Traditional dhow cruise", "Local cuisine tasting"]
    },
    {
      day: 6,
      title: "Adventure & Entertainment",
      activities: ["Theme park visit", "Water sports activities", "Shopping at luxury malls", "Farewell dinner"]
    },
    {
      day: 7,
      title: "Departure",
      activities: ["Hotel checkout", "Last-minute shopping", "Airport transfer", "Business class flight home"]
    }
  ];

  const inclusions = [
    { icon: Plane, title: "Round-trip Business Class Flights", description: "From major Indian cities to Dubai" },
    { icon: MapPin, title: "5-Star Accommodation", description: "6 nights at luxury Dubai Marina hotel" },
    { icon: Gift, title: "All Meals Included", description: "Breakfast, lunch, dinner at premium restaurants" },
    { icon: Star, title: "Premium Experiences", description: "Desert safari, yacht cruise, city tours" },
  ];

  const pastWinners = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      month: "December 2024",
      testimonial: "The trip was absolutely incredible! Every detail was perfectly planned.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India", 
      month: "November 2024",
      testimonial: "I never thought I would actually win. Dubai was a dream come true!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Anita Patel",
      location: "Bangalore, India",
      month: "October 2024", 
      testimonial: "The Burj Khalifa view from our suite was breathtaking. Highly recommended!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const stats = [
    { value: "2,547", label: "Total Winners" },
    { value: "$12.7M+", label: "Prizes Awarded" },
    { value: "98%", label: "Winner Satisfaction" },
    { value: "50+", label: "Cities Covered" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Win Your Dream
                <span className="text-yellow-500"> Dubai Experience</span>
              </h1>
              <div className="text-3xl font-bold text-yellow-500 mb-4">${currentPrize.value} Value</div>
              <p className="text-xl mb-8 text-gray-300">
                7 days and 6 nights of pure luxury in Dubai. Experience the city like never before with our all-inclusive prize package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/purchase"
                  className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors text-center"
                >
                  Get Your Coupons
                </a>
                <a
                  href="/live-draw"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-navy-900 transition-colors text-center"
                >
                  Watch Live Draw
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={currentPrize.image}
                alt="Dubai Skyline"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white p-4 rounded-lg">
                <div className="text-sm font-medium">Next Draw</div>
                <div className="text-lg font-bold">Jan 31, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Everything you need for the perfect Dubai experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {inclusions.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <item.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Complete Experience Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-yellow-600">✈️ Travel & Accommodation</h4>
                <ul className="space-y-2 text-gray-700">
                  {currentPrize.highlights.slice(0, 4).map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-yellow-600">🎯 Experiences & Activities</h4>
                <ul className="space-y-2 text-gray-700">
                  {currentPrize.highlights.slice(4).map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">7-Day Itinerary</h2>
            <p className="text-xl text-gray-600">Your day-by-day Dubai adventure</p>
          </div>

          <div className="space-y-8">
            {itinerary.map((day) => (
              <div key={day.day} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {day.day}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-navy-900 mb-3">{day.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {day.activities.map((activity, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winner Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Recent Winners</h2>
            <p className="text-xl text-gray-600">Hear from our lucky winners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastWinners.map((winner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-navy-900 text-lg">{winner.name}</div>
                    <div className="text-gray-600">{winner.location}</div>
                    <div className="text-sm text-yellow-600 font-medium">{winner.month} Winner</div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">"{winner.testimonial}"</p>
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do I claim my prize if I win?",
                a: "Winners are contacted within 24 hours via phone and email. You'll have 30 days to confirm your win and provide necessary documentation. We handle all travel arrangements."
              },
              {
                q: "Are flights included from all Indian cities?",
                a: "Yes, we provide business class flights from major Indian cities including Delhi, Mumbai, Bangalore, Chennai, Kolkata, and Hyderabad. Connections are arranged for other cities."
              },
              {
                q: "What if I can't travel on the scheduled dates?",
                a: "Winners have flexibility to choose travel dates within 6 months of winning, subject to availability. We work with you to find suitable dates."
              },
              {
                q: "Is the trip transferable?",
                a: "The trip is non-transferable and must be used by the winner. However, you can bring a companion (spouse/family member) at no extra cost."
              },
              {
                q: "What documents do I need for Dubai travel?",
                a: "You'll need a valid passport (minimum 6 months validity) and we'll help arrange your Dubai visa. All costs are covered by the prize package."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Win Your Dream Trip?</h2>
          <p className="text-xl mb-8">
            Don't miss your chance to experience luxury Dubai. Get your coupons now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/purchase"
              className="bg-white text-yellow-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Buy Coupons Now
            </a>
            <a
              href="/live-draw"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-yellow-500 transition-colors"
            >
              Watch Next Draw
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prizes;