import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Flame, Wind, Calendar, Menu, X, Sun, Moon, MapPin, Clock, Tag } from 'lucide-react';

export default function Navbar({ onOpenBooking, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'الرئيسية' },
    { path: '/services', label: 'خدماتنا بدبي' },
    { path: '/calculator', label: 'حاسبة الأسعار' },
    { path: '/districts', label: 'أحياء دبي' },
    { path: '/blog', label: 'مقالات الـ SEO', badge: 'جديد' },
    { path: '/about', label: 'من نحن' }
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Ultra Compact Top Bar */}
      <div className="top-announcement-bar">
        <div className="container announcement-content">
          <div className="announcement-left">
            <div className="live-discount-tag">
              <Tag size={12} />
              <span>خصم 30%</span>
            </div>
            <span className="ticker-text">
              شركة تنظيف وتلميع أفران غاز ومكيفات بدبي • وصول خلال 45 دقيقة
            </span>
          </div>

          <div className="announcement-right">
            <div className="announcement-info">
              <Clock size={12} />
              <span>خدمة 24/7</span>
            </div>
            <a href="tel:0550001122" className="top-call-link">
              <Phone size={11} />
              <span>0550001122</span>
            </a>
          </div>
        </div>
      </div>

      {/* Compact Header */}
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" onClick={handleNavClick}>
            <div className="logo-icon-box">
              <Flame className="icon-flame" size={18} />
              <Wind className="icon-wind" size={16} />
            </div>
            <div className="brand-text">
              <span className="brand-name">فرن <span className="highlight">&</span> سبليت</span>
              <span className="brand-tagline">تنظيف وصيانة بدبي</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link-btn ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span>{item.label}</span>
                {item.badge && <span className="nav-badge-new">{item.badge}</span>}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="navbar-actions">
            {/* Theme Toggle Button */}
            <button 
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              title={theme === 'light' ? 'التحويل للوضع الداكن' : 'التحويل للوضع الفاتح'}
              aria-label="مفتاح الوضع الليلي والفاتح"
            >
              {theme === 'light' ? <Moon size={16} color="#0284c7" /> : <Sun size={16} color="#ffb703" />}
            </button>

            <a href="tel:0550001122" className="btn btn-outline nav-phone-btn compact-nav-btn">
              <Phone size={14} />
              <span>0550001122</span>
            </a>

            <button className="btn btn-primary compact-nav-btn" onClick={onOpenBooking}>
              <Calendar size={14} />
              <span>حجز موعد فوري</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-nav-btn ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  <span>{item.label}</span>
                  {item.badge && <span className="nav-badge-new">{item.badge}</span>}
                </Link>
              ))}
              
              <div className="mobile-menu-actions">
                <button className="btn btn-outline w-full" onClick={onToggleTheme}>
                  {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                  <span>{theme === 'light' ? 'تفعيل الوضع الداكن' : 'تفعيل الوضع الفاتح'}</span>
                </button>

                <button 
                  className="btn btn-primary w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                >
                  <Calendar size={16} />
                  حجز موعد بدبي
                </button>
                <a 
                  href="https://wa.me/966550001122?text=السلام%20عليكم،%20أرغب%20في%20استفسار%20عن%20تنظيف%20الأفران%20والمكيفات" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn btn-whatsapp w-full"
                >
                  <MessageCircle size={16} />
                  تواصل واتساب مباشر
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <style>{`
        /* Ultra Compact Top Announcement Bar */
        .top-announcement-bar {
          background: linear-gradient(90deg, #0284c7 0%, #0369a1 50%, #d97706 100%);
          color: #ffffff;
          padding: 0.15rem 0;
          font-size: 0.725rem;
          font-weight: 600;
          position: relative;
          z-index: 950;
          line-height: 1.2;
        }

        .announcement-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .announcement-left {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .live-discount-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          background: rgba(255, 255, 255, 0.22);
          padding: 0.05rem 0.4rem;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 800;
        }

        .ticker-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .announcement-right {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .announcement-info {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          opacity: 0.95;
        }

        .top-call-link {
          color: #ffffff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.15);
          padding: 0.05rem 0.5rem;
          border-radius: 999px;
        }

        /* Compact Main Navbar Header */
        .navbar-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 900;
          padding: 0.45rem 0;
          transition: all 0.25s ease;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        [data-theme="dark"] .navbar-header {
          background: rgba(6, 11, 23, 0.9);
        }

        .navbar-scrolled {
          padding: 0.35rem 0;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
        }
        [data-theme="dark"] .navbar-scrolled {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .logo-icon-box {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.12) 0%, rgba(217, 119, 6, 0.12) 100%);
          border: 1px solid var(--border-active);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-flame { color: #d97706; }
        [data-theme="dark"] .icon-flame { color: #ffb703; }
        .icon-wind { color: #0284c7; margin-right: -4px; }
        [data-theme="dark"] .icon-wind { color: #00d2ff; }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.05rem;
          font-weight: 800;
          color: var(--text-light);
          line-height: 1.1;
        }

        .brand-name .highlight {
          color: var(--primary);
        }

        .brand-tagline {
          font-size: 0.675rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: rgba(0, 0, 0, 0.03);
          padding: 0.2rem 0.35rem;
          border-radius: 999px;
          border: 1px solid var(--border);
        }
        [data-theme="dark"] .desktop-nav {
          background: rgba(255, 255, 255, 0.04);
        }

        .nav-link-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-arabic);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          padding: 0.3rem 0.65rem;
          border-radius: 999px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .nav-link-btn:hover {
          color: var(--primary);
        }

        .nav-link-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          box-shadow: 0 2px 8px rgba(2, 132, 199, 0.3);
        }

        .nav-badge-new {
          font-size: 0.6rem;
          background: #ef4444;
          color: #fff;
          padding: 0.08rem 0.35rem;
          border-radius: 999px;
          font-weight: 800;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .compact-nav-btn {
          padding: 0.45rem 0.95rem;
          font-size: 0.8rem;
          border-radius: var(--radius-sm);
        }

        .theme-toggle-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--bg-surface);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--primary);
          transform: scale(1.05);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-light);
          cursor: pointer;
          padding: 0.2rem;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-surface);
          border-bottom: 1px solid var(--border);
          padding: 1.25rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .mobile-nav-btn {
          background: transparent;
          border: none;
          color: var(--text-light);
          font-family: var(--font-arabic);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          text-align: right;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-nav-btn.active {
          color: var(--primary);
        }

        .mobile-menu-actions {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 0.85rem;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .nav-phone-btn, .announcement-right { display: none; }
          .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
}
