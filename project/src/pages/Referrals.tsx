import React, { useState } from 'react';
import { 
  Users, 
  Copy, 
  Share2, 
  Gift, 
  TrendingUp, 
  Award, 
  Star, 
  CheckCircle,
  Trophy,
  Target,
  Zap,
  Crown
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Referrals: React.FC = () => {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access referrals</h2>
          <Link to="/" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const referralLink = `https://dreamtrip.com/ref/${user.referralCode}`;
  
  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { icon: Users, label: "Total Referrals", value: "24", color: "text-blue-500" },
    { icon: Gift, label: "Active Coupons", value: "18", color: "text-green-500" },
    { icon: TrendingUp, label: "This Month", value: "8", color: "text-purple-500" },
    { icon: Award, label: "Total Earned", value: "$1,200", color: "text-yellow-500" }
  ];

  const milestones = [
    { 
      target: 10, 
      current: 24, 
      reward: "$50", 
      title: "First Milestone", 
      completed: true,
      icon: Star
    },
    { 
      target: 25, 
      current: 24, 
      reward: "$150", 
      title: "Rising Star", 
      completed: false,
      icon: Trophy
    },
    { 
      target: 50, 
      current: 24, 
      reward: "$400", 
      title: "Super Referrer", 
      completed: false,
      icon: Crown
    },
    { 
      target: 100, 
      current: 24, 
      reward: "$1000", 
      title: "Referral Champion", 
      completed: false,
      icon: Zap
    }
  ];

  const recentReferrals = [
    {
      name: "Amit Sharma",
      email: "amit@example.com",
      date: "2025-01-15",
      status: "Active",
      coupons: 3,
      earnings: "$150"
    },
    {
      name: "Priya Patel", 
      email: "priya@example.com",
      date: "2025-01-12",
      status: "Active",
      coupons: 5,
      earnings: "$250"
    },
    {
      name: "Rajesh Kumar",
      email: "rajesh@example.com", 
      date: "2025-01-10",
      status: "Pending",
      coupons: 1,
      earnings: "$0"
    },
    {
      name: "Neha Gupta",
      email: "neha@example.com",
      date: "2025-01-08", 
      status: "Active",
      coupons: 2,
      earnings: "$100"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Vikash Singh", referrals: 156, earnings: "$7,800", badge: "Champion" },
    { rank: 2, name: "Aisha Khan", referrals: 134, earnings: "$6,700", badge: "Pro" },
    { rank: 3, name: "Rohit Sharma", referrals: 98, earnings: "$4,900", badge: "Expert" },
    { rank: 4, name: "You", referrals: 24, earnings: "$1,200", badge: "Rising" },
    { rank: 5, name: "Sneha Reddy", referrals: 19, earnings: "$950", badge: "Active" }
  ];

  const shareOptions = [
    { name: "WhatsApp", color: "bg-green-500", link: `https://wa.me/?text=Join me on DreamTrip and win a luxury Dubai vacation! Use my code: ${user.referralCode} - ${referralLink}` },
    { name: "Facebook", color: "bg-blue-600", link: `https://facebook.com/sharer.php?u=${referralLink}` },
    { name: "Twitter", color: "bg-blue-400", link: `https://twitter.com/intent/tweet?text=Win a Dubai vacation with DreamTrip!&url=${referralLink}` },
    { name: "Instagram", color: "bg-gradient-to-r from-purple-500 to-pink-500", link: referralLink },
    { name: "Telegram", color: "bg-blue-500", link: `https://t.me/share/url?url=${referralLink}&text=Win a Dubai vacation!` },
    { name: "Email", color: "bg-gray-600", link: `mailto:?subject=Win a Dubai Vacation!&body=Join me on DreamTrip: ${referralLink}` }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Referral Program</h1>
          <p className="text-xl text-gray-600">Earn up to $50 per referral and unlock amazing bonuses</p>
        </div>

        {/* Referral Link Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Your Referral Code</h2>
            <div className="text-4xl font-bold text-yellow-300 mb-4">{user.referralCode}</div>
            <p className="text-blue-100">Share your code and earn $50 for each person who buys coupons</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-transparent border-0 text-white placeholder-blue-200 focus:outline-none"
              />
              <button
                onClick={handleCopy}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {shareOptions.map((option) => (
              <a
                key={option.name}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${option.color} text-white px-4 py-2 rounded-lg text-center hover:opacity-90 transition-opacity text-sm font-medium`}
              >
                {option.name}
              </a>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`w-12 h-12 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* How It Works */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Referrals Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="font-semibold mb-2">Share Your Code</h3>
                  <p className="text-gray-600 text-sm">Share your unique referral code with friends and family</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="font-semibold mb-2">They Sign Up</h3>
                  <p className="text-gray-600 text-sm">Your referral creates an account using your code</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="font-semibold mb-2">You Earn Money</h3>
                  <p className="text-gray-600 text-sm">Get $50 when they purchase their first coupon</p>
                </div>
              </div>
            </div>

            {/* Milestone Progress */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Milestone Rewards</h2>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`border-2 rounded-lg p-6 ${
                    milestone.completed ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          milestone.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                        }`}>
                          <milestone.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{milestone.title}</h3>
                          <p className="text-gray-600">Refer {milestone.target} people</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-500">{milestone.reward}</div>
                        {milestone.completed && (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto mt-1" />
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          milestone.completed ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${Math.min((milestone.current / milestone.target) * 100, 100)}%` }}
                      ></div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {milestone.current} / {milestone.target} referrals
                      {!milestone.completed && (
                        <span className="ml-2">({milestone.target - milestone.current} more to go!)</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Referrals */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Recent Referrals</h2>
                <span className="text-sm text-gray-500">{recentReferrals.length} total</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coupons</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentReferrals.map((referral, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{referral.name}</div>
                            <div className="text-sm text-gray-500">{referral.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {referral.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            referral.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {referral.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {referral.coupons}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                          {referral.earnings}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Leaderboard */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                Leaderboard
              </h3>
              <div className="space-y-3">
                {leaderboard.map((entry, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                    entry.name === 'You' ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-orange-500 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {entry.rank}
                      </div>
                      <div>
                        <div className={`font-medium ${entry.name === 'You' ? 'text-yellow-700' : 'text-gray-900'}`}>
                          {entry.name}
                        </div>
                        <div className="text-xs text-gray-500">{entry.badge}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{entry.referrals}</div>
                      <div className="text-xs text-gray-500">{entry.earnings}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white">
              <h3 className="font-bold mb-3">💡 Pro Tips</h3>
              <ul className="space-y-2 text-sm">
                <li>• Share on social media for maximum reach</li>
                <li>• Explain the Dubai prize to attract interest</li>
                <li>• Use personal stories and experiences</li>
                <li>• Follow up with interested friends</li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Download Referral Kit
                </button>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                  Create Social Post
                </button>
                <Link 
                  to="/support"
                  className="block w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors text-center"
                >
                  Get Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;