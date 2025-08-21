import React, { useState, useEffect } from 'react';
import { Play, Users, Clock, Award, Eye, Share2 } from 'lucide-react';

const LiveDraw: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(1247);
  const [timeRemaining, setTimeRemaining] = useState({ days: 12, hours: 8, minutes: 45, seconds: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pastDraws = [
    {
      date: 'December 2024',
      winner: 'Rajesh Kumar',
      location: 'Mumbai, India',
      prize: 'Dubai Luxury Trip',
      couponId: 'DT2024456'
    },
    {
      date: 'November 2024',
      winner: 'Priya Sharma',
      location: 'Delhi, India',
      prize: 'Dubai Luxury Trip',
      couponId: 'DT2024389'
    },
    {
      date: 'October 2024',
      winner: 'Amit Patel',
      location: 'Ahmedabad, India',
      prize: 'Dubai Luxury Trip',
      couponId: 'DT2024234'
    }
  ];

  const currentStats = {
    totalCoupons: 15234,
    participants: 8567,
    prizeValue: 5000,
    drawDate: 'January 31, 2025'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Live Draw Center</h1>
          <p className="text-xl text-gray-600">Watch transparent, live lottery draws every month</p>
        </div>

        {/* Live Stream Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative bg-black aspect-video">
                {isLive ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-white text-center">
                      <Play className="w-20 h-20 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">Live Draw in Progress</h3>
                      <p className="text-gray-300">Drawing will begin shortly...</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-white text-center">
                      <Clock className="w-20 h-20 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">Next Draw Countdown</h3>
                      <div className="flex justify-center space-x-4 text-lg">
                        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                          <div className="text-2xl font-bold">{timeRemaining.days}</div>
                          <div className="text-sm">Days</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                          <div className="text-2xl font-bold">{timeRemaining.hours}</div>
                          <div className="text-sm">Hours</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                          <div className="text-2xl font-bold">{timeRemaining.minutes}</div>
                          <div className="text-sm">Min</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 min-w-[60px]">
                          <div className="text-2xl font-bold">{timeRemaining.seconds}</div>
                          <div className="text-sm">Sec</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Live Indicator */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  {isLive ? (
                    <>
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">LIVE</span>
                    </>
                  ) : (
                    <>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-white font-medium">SCHEDULED</span>
                    </>
                  )}
                </div>

                {/* Viewer Count */}
                <div className="absolute top-4 right-4 bg-black/50 rounded-lg px-3 py-1 flex items-center space-x-2 text-white">
                  <Eye className="w-4 h-4" />
                  <span>{viewerCount.toLocaleString()} viewers</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">January 2025 Draw</h3>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
                <p className="text-gray-600 mb-4">
                  Join us for the monthly live draw where we'll select the winner of a luxury Dubai vacation worth $5,000.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    Watch on YouTube
                  </a>
                  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Watch on Facebook
                  </a>
                  <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Watch on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Draw Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Current Draw Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Coupons</span>
                  <span className="font-semibold">{currentStats.totalCoupons.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Participants</span>
                  <span className="font-semibold">{currentStats.participants.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prize Value</span>
                  <span className="font-semibold">${currentStats.prizeValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Draw Date</span>
                  <span className="font-semibold">{currentStats.drawDate}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">This Month's Prize</h3>
              <div className="text-2xl font-bold mb-2">Dubai Luxury Trip</div>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• 7 days, 6 nights accommodation</li>
                <li>• 5-star hotel in Dubai Marina</li>
                <li>• Round-trip flights included</li>
                <li>• Desert safari & city tour</li>
                <li>• Burj Khalifa & Dubai Mall visits</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Transparency Guarantee</h4>
              <p className="text-sm text-blue-700">
                All draws are conducted live with independent oversight. Complete winner lists and audit reports are published after each draw.
              </p>
            </div>
          </div>
        </div>

        {/* Past Winners */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Recent Winners</h2>
            <Award className="w-8 h-8 text-yellow-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastDraws.map((draw, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{draw.date}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{draw.winner}</h3>
                <div className="text-sm text-gray-600 mb-3">{draw.location}</div>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  {draw.prize}
                </div>
                <div className="text-xs text-gray-500">Winning Coupon: {draw.couponId}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              View All Winners →
            </button>
          </div>
        </div>

        {/* Audit & Transparency */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Audit Reports</h3>
            <p className="text-gray-600 mb-4">
              Download detailed audit reports for each draw, including participant lists and verification documents.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Download Reports
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Independent Oversight</h3>
            <p className="text-gray-600 mb-4">
              Our draws are supervised by certified auditors and comply with Dubai Tourism Authority regulations.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              View Certifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDraw;