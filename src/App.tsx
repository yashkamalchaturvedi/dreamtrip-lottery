import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import CouponPurchase from './pages/CouponPurchase';
import LiveDraw from './pages/LiveDraw';
import Prizes from './pages/Prizes';
import Referrals from './pages/Referrals';
import Compliance from './pages/Compliance';
import Support from './pages/Support';
import AuthModal from './components/AuthModal';
import KYCModal from './components/KYCModal';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isKYCModalOpen, setIsKYCModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header onAuthClick={openAuthModal} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage onAuthClick={openAuthModal} />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/purchase" element={<CouponPurchase />} />
              <Route path="/live-draw" element={<LiveDraw />} />
              <Route path="/prizes" element={<Prizes />} />
              <Route path="/referrals" element={<Referrals />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          <Footer />
          <AuthModal
            isOpen={isAuthModalOpen}
            onClose={() => setIsAuthModalOpen(false)}
            mode={authMode}
          />
          <KYCModal
            isOpen={isKYCModalOpen}
            onClose={() => setIsKYCModalOpen(false)}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;