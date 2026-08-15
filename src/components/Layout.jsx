import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BookingModal from './BookingModal';
import { Phone, MessageCircle } from 'lucide-react';

export default function Layout() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // Automatic Light Mode
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="app-main-wrapper">
      <Navbar 
        onOpenBooking={handleOpenBooking} 
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main>
        {/* Render child routes here and pass down booking handler */}
        <Outlet context={{ onOpenBooking: handleOpenBooking }} />
      </main>

      <Footer onOpenBooking={handleOpenBooking} />

      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      <div className="floating-actions">
        <a 
          href="https://wa.me/966550001122?text=السلام%20عليكم،%20أرغب%20في%20استفسار%20عن%20تنظيف%20الأفران%20والمكيفات%20بدبي" 
          target="_blank" 
          rel="noreferrer"
          className="float-btn float-whatsapp"
          title="تواصل عبر الواتساب المباشر"
        >
          <MessageCircle size={26} />
          <span className="pulse-ring"></span>
        </a>

        <a 
          href="tel:0550001122" 
          className="float-btn float-call"
          title="اتصال هاتفي مباشر 0550001122"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
}
