import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Gift, DollarSign, Activity } from 'lucide-react';

const LiveStats: React.FC = () => {
  const [stats, setStats] = useState({
    totalCoupons: 125847,
    activeUsers: 52341,
    totalWinners: 2547,
    prizesAwarded: 12735000,
    currentDrawParticipants: 15234
  });

  const [isLive, setIsLive] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalCoupons: prev.totalCoupons + Math.floor(Math.random() * 5),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        currentDrawParticipants: prev.currentDrawParticipants + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statsData = [
    {
      label: 'Total Coupons Sold',
      value: stats.totalCoupons.toLocaleString(),
      icon: Gift,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Active Users',
      value: stats.activeUsers.toLocaleString(),
      icon: Users,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Total Winners',
      value: stats.totalWinners.toLocaleString(),
      icon: TrendingUp,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Prizes Awarded',
      value: `$${(stats.prizesAwarded / 1000000).toFixed(1)}M`,
      icon: DollarSign,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'Current Draw Participants',
      value: stats.currentDrawParticipants.toLocaleString(),
      icon: Activity,
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <h2 className="text-3xl font-bold text-gray-900">Live Statistics</h2>
          </div>
          <p className="text-gray-600">Real-time platform metrics updated every few seconds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-lg p-6 text-center hover:scale-105 transition-transform duration-200`}>
              <div className={`w-12 h-12 ${stat.color} mx-auto mb-4 ${stat.bgColor.replace('50', '100')} rounded-full flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <Activity className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;