import React, { useState } from 'react';
import { CreditCard, Smartphone, Wallet, Shield, Gift, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const CouponPurchase: React.FC = () => {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const couponPrice = 100; // USD
  const inrRate = 83; // USD to INR conversion rate
  const total = quantity * couponPrice;
  const totalInr = Math.round(total * inrRate);

  const handlePurchase = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    alert('Purchase successful! Your coupons have been added to your account.');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to purchase coupons</h2>
          <Link to="/" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  if (!user.isKycVerified) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Shield className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">KYC Verification Required</h2>
            <p className="text-gray-600 mb-6">
              Please complete your KYC verification before purchasing coupons. This ensures compliance with regulations and protects your account.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
              Complete KYC Verification
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Purchase Coupons</h1>
          <p className="text-gray-600">Each coupon is your ticket to win a luxury Dubai vacation worth $5,000</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coupon Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quantity Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Select Quantity</h3>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">${total}</div>
                  <div className="text-sm text-gray-600">₹{totalInr.toLocaleString()}</div>
                </div>
              </div>
              
              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-2">
                {[1, 5, 10, 25, 50].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setQuantity(qty)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      quantity === qty
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {qty} {qty === 1 ? 'Coupon' : 'Coupons'}
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
              <div className="space-y-3">
                {[
                  { id: 'card', icon: CreditCard, title: 'Credit/Debit Card', description: 'Visa, Mastercard, RuPay' },
                  { id: 'upi', icon: Smartphone, title: 'UPI', description: 'GPay, PhonePe, Paytm' },
                  { id: 'netbanking', icon: Wallet, title: 'Net Banking', description: 'All major banks supported' },
                  { id: 'wallet', icon: Wallet, title: 'E-Wallets', description: 'Paytm, Mobikwik, FreeCharge' },
                ].map((method) => (
                  <label
                    key={method.id}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === method.id
                        ? 'border-yellow-500 bg-yellow-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <method.icon className={`w-6 h-6 mr-3 ${
                      paymentMethod === method.id ? 'text-yellow-500' : 'text-gray-400'
                    }`} />
                    <div>
                      <div className="font-medium text-gray-900">{method.title}</div>
                      <div className="text-sm text-gray-500">{method.description}</div>
                    </div>
                    {paymentMethod === method.id && (
                      <CheckCircle className="w-5 h-5 text-yellow-500 ml-auto" />
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <div className="font-medium text-blue-800 mb-1">Secure Payment</div>
                  <div className="text-blue-700">
                    All payments are processed through encrypted channels. We never store your payment information.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Coupons ({quantity})</span>
                  <span className="font-medium">${total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-semibold text-lg">Total</span>
                  <div className="text-right">
                    <div className="font-bold text-lg">${total}</div>
                    <div className="text-sm text-gray-600">₹{totalInr.toLocaleString()}</div>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                disabled={isProcessing}
                className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Gift className="w-5 h-5" />
                    <span>Purchase Now</span>
                  </>
                )}
              </button>

              <div className="mt-4 text-xs text-gray-500 text-center">
                By purchasing, you agree to our Terms of Service and acknowledge that lottery participation involves risk.
              </div>
            </div>

            {/* Next Draw Info */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">Next Draw</h3>
              <div className="text-2xl font-bold mb-1">January 31, 2025</div>
              <div className="text-sm opacity-90">Prize: Luxury Dubai Trip worth $5,000</div>
              <div className="mt-3 text-lg font-semibold">12 days remaining</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponPurchase;