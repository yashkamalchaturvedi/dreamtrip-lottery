import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Wallet, 
  Gift, 
  Users, 
  History, 
  Award, 
  CreditCard, 
  Shield,
  TrendingUp,
  Calendar,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your dashboard</h2>
          <Link to="/" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const stats = [
    { label: 'Active Coupons', value: '12', icon: Gift, color: 'bg-blue-500' },
    { label: 'Total Spent', value: '$1,200', icon: CreditCard, color: 'bg-green-500' },
    { label: 'Referrals', value: '8', icon: Users, color: 'bg-purple-500' },
    { label: 'Earnings', value: '$400', icon: TrendingUp, color: 'bg-yellow-500' },
  ];

  const recentCoupons = [
    { id: 'DT2025001', date: '2025-01-15', status: 'Active', draw: 'January 2025' },
    { id: 'DT2025002', date: '2025-01-14', status: 'Active', draw: 'January 2025' },
    { id: 'DT2024123', date: '2024-12-20', status: 'Drawn', draw: 'December 2024', result: 'Not Won' },
  ];

  const referralHistory = [
    { name: 'John Doe', email: 'john@example.com', date: '2025-01-10', status: 'Verified', earnings: '$50' },
    { name: 'Jane Smith', email: 'jane@example.com', date: '2025-01-08', status: 'Pending', earnings: '$0' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
                <p className="text-gray-600">Manage your coupons and track your winnings</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-3 py-1 rounded-full text-sm ${user.isKycVerified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {user.isKycVerified ? 'KYC Verified' : 'KYC Pending'}
              </div>
              <Link
                to="/purchase"
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Buy Coupons
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'overview', name: 'Overview', icon: User },
                { id: 'coupons', name: 'My Coupons', icon: Gift },
                { id: 'referrals', name: 'Referrals', icon: Users },
                { id: 'wallet', name: 'Wallet', icon: Wallet },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-yellow-500 text-yellow-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Quick Actions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Link
                        to="/purchase"
                        className="block w-full bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600"
                      >
                        Buy New Coupons
                      </Link>
                      <Link
                        to="/referrals"
                        className="block w-full bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600"
                      >
                        Share Referral Link
                      </Link>
                      <Link
                        to="/live-draw"
                        className="block w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600"
                      >
                        Watch Live Draw
                      </Link>
                    </div>
                  </div>

                  {/* Upcoming Draw */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Next Draw</h3>
                    <div className="flex items-center space-x-3 mb-4">
                      <Calendar className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium">January 31, 2025</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Prize: Luxury Dubai Trip worth $5,000
                    </p>
                    <div className="text-2xl font-bold text-yellow-600">12 days left</div>
                  </div>
                </div>

                {/* KYC Status */}
                {!user.isKycVerified && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800">Complete KYC Verification</h4>
                        <p className="text-sm text-yellow-700 mt-1">
                          Please complete your KYC verification to purchase coupons and participate in draws.
                        </p>
                        <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded text-sm hover:bg-yellow-600">
                          Complete KYC
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'coupons' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">My Coupons</h3>
                  <Link
                    to="/purchase"
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-yellow-600"
                  >
                    Buy More
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Coupon ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Purchase Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Draw
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Result
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentCoupons.map((coupon) => (
                        <tr key={coupon.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {coupon.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {coupon.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {coupon.draw}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              coupon.status === 'Active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {coupon.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {coupon.result || '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'referrals' && (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Your Referral Code</h3>
                  <div className="bg-white/20 rounded-lg p-4 mb-4">
                    <code className="text-lg font-mono">{user.referralCode}</code>
                  </div>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">
                    Copy Link
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <div className="text-sm text-gray-600">Total Referrals</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">$400</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">12</div>
                    <div className="text-sm text-gray-600">To Next Milestone</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Recent Referrals</h4>
                  <div className="space-y-3">
                    {referralHistory.map((referral, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{referral.name}</div>
                          <div className="text-sm text-gray-600">{referral.email}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">{referral.earnings}</div>
                          <div className={`text-sm ${referral.status === 'Verified' ? 'text-green-600' : 'text-yellow-600'}`}>
                            {referral.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'wallet' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white">
                    <h3 className="text-lg font-semibold mb-2">Wallet Balance</h3>
                    <div className="text-3xl font-bold">${user.wallet.balance}</div>
                    <div className="text-sm opacity-75">Available for withdrawal</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                        Withdraw Funds
                      </button>
                      <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                        Add Payment Method
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Transaction History</h4>
                  <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                    No transactions yet
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;