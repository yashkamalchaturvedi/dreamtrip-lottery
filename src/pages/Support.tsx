import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Search, 
  ChevronDown, 
  ChevronUp,
  ExternalLink,
  Send,
  User,
  Globe,
  Shield,
  CreditCard,
  Gift,
  Users,
  HelpCircle
} from 'lucide-react';

const Support: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      color: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "+91 1800-123-4567 (India) / +971-50-123-4567 (Dubai)",
      availability: "Mon-Fri, 9AM-6PM",
      action: "Call Now",
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support", 
      description: "support@dreamtrip.com",
      availability: "Response within 2 hours",
      action: "Send Email",
      color: "bg-purple-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "+971-50-123-4567",
      availability: "24/7 Available",
      action: "Open WhatsApp",
      color: "bg-green-600"
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'account', name: 'Account & KYC', icon: User },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'draws', name: 'Draws & Prizes', icon: Gift },
    { id: 'referrals', name: 'Referrals', icon: Users },
    { id: 'technical', name: 'Technical', icon: Globe },
    { id: 'legal', name: 'Legal & Security', icon: Shield }
  ];

  const faqs = [
    {
      category: 'account',
      question: 'How do I complete KYC verification?',
      answer: 'Upload a clear photo of your Aadhaar card (for Indian residents) or passport, along with a recent selfie. Verification typically takes 24-48 hours. You\'ll receive an email once approved.'
    },
    {
      category: 'payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit/debit cards, UPI payments (GPay, PhonePe, Paytm), net banking from Indian banks, and popular e-wallets. All payments are processed securely through our licensed payment partners.'
    },
    {
      category: 'draws',
      question: 'How are winners selected?',
      answer: 'Winners are selected through a cryptographically secure random number generator during live draws. All draws are monitored by independent auditors and streamed live on multiple platforms for transparency.'
    },
    {
      category: 'draws',
      question: 'When do draws take place?',
      answer: 'Draws are held monthly on the last day of each month at 8 PM UAE time (6:30 PM IST). The exact schedule is published on our website and app 30 days in advance.'
    },
    {
      category: 'referrals',
      question: 'How do referral rewards work?',
      answer: 'You earn $50 for each person who signs up with your referral code and purchases their first coupon. Rewards are credited within 48 hours and can be withdrawn to your bank account or used to buy more coupons.'
    },
    {
      category: 'draws',
      question: 'What happens if I win?',
      answer: 'Winners are contacted within 24 hours via phone and email. You have 30 days to confirm and provide travel documents. We handle all arrangements including flights, accommodation, and activities. The trip must be taken within 6 months.'
    },
    {
      category: 'payments',
      question: 'Are there any hidden fees?',
      answer: 'No, there are no hidden fees. Coupons cost exactly $100 (converted to INR at current rates). Payment processing is free. The only additional cost might be currency conversion charges from your bank.'
    },
    {
      category: 'account',
      question: 'Can I change my registered details?',
      answer: 'Basic details like phone number and address can be updated in your profile. Email changes require verification. Name changes require document verification and may take 3-5 business days to process.'
    },
    {
      category: 'technical',
      question: 'I\'m having trouble logging in',
      answer: 'Try resetting your password using the "Forgot Password" link. Clear your browser cache or try a different browser. For persistent issues, contact our technical support team via live chat.'
    },
    {
      category: 'legal',
      question: 'Is this lottery legal in India?',
      answer: 'Yes, our lottery is fully compliant with Indian regulations. We operate under Dubai Tourism Authority license and comply with FEMA guidelines for cross-border transactions. All documentation is available in our compliance section.'
    },
    {
      category: 'referrals',
      question: 'How do I track my referrals?',
      answer: 'Visit your Referrals page to see all referred users, their status, and your earnings. You can also download detailed reports and see your progress towards milestone bonuses.'
    },
    {
      category: 'technical',
      question: 'Do you have a mobile app?',
      answer: 'Currently we offer a mobile-optimized website that works perfectly on all devices. A dedicated mobile app is in development and will be available soon on both iOS and Android platforms.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within 2 hours.');
    setContactForm({ name: '', email: '', category: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help & Support</h1>
          <p className="text-xl text-gray-600">We're here to help you 24/7. Get instant answers or contact our support team.</p>
        </div>

        {/* Support Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <channel.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
              <div className="text-xs text-green-600 mb-4 font-medium">{channel.availability}</div>
              <button className={`w-full ${channel.color} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium`}>
                {channel.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4 text-gray-700 border-t border-gray-100">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <HelpCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>No FAQs found matching your search.</p>
                  <button 
                    onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                    className="mt-2 text-yellow-500 hover:text-yellow-600"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Contact Form & Live Chat */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    required
                    value={contactForm.category}
                    onChange={(e) => setContactForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select a category</option>
                    <option value="account">Account Issues</option>
                    <option value="payment">Payment Problems</option>
                    <option value="technical">Technical Support</option>
                    <option value="refund">Refund Request</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    placeholder="Describe your issue or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Live Chat Widget */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Live Chat Support</h3>
              <div className="bg-white/10 rounded-lg p-4 mb-4 min-h-[120px]">
                <div className="text-sm mb-2 opacity-90">Support Agent:</div>
                <div className="bg-white/20 rounded-lg p-3 text-sm">
                  Hello! I'm here to help you with any questions about DreamTrip. How can I assist you today?
                </div>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg text-gray-900 focus:outline-none"
                />
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse mr-2"></div>
                <span>3 agents online • Average response: 30 seconds</span>
              </div>
            </div>

            {/* Popular Resources */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Resources</h3>
              <div className="space-y-3">
                {[
                  { title: "Getting Started Guide", link: "#" },
                  { title: "How to Purchase Coupons", link: "#" },
                  { title: "KYC Verification Help", link: "#" },
                  { title: "Prize Information", link: "#" },
                  { title: "Referral Program Guide", link: "#" },
                  { title: "Security & Privacy", link: "#" }
                ].map((resource, index) => (
                  <a
                    key={index}
                    href={resource.link}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm text-gray-700">{resource.title}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Language Support */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Globe className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-blue-800">Multilingual Support</span>
              </div>
              <p className="text-sm text-blue-700">
                We provide support in English, Hindi, and Arabic. Select your preferred language in the chat or mention it in your message.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Support */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-xl font-bold text-red-800">Emergency Support</h3>
          </div>
          <p className="text-red-700 mb-4">
            For urgent issues related to account security, unauthorized transactions, or technical emergencies:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+911800123456"
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Call Emergency Line: +91 1800-123-456
            </a>
            <a
              href="mailto:emergency@dreamtrip.com"
              className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-medium"
            >
              Email: emergency@dreamtrip.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;