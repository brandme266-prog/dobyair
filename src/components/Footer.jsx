import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Wind, Phone, MessageCircle, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          {/* Col 1: Brand Info */}
          <div className="footer-col col-brand">
            <div className="footer-logo">
              <Flame size={24} color="#ffb703" />
              <Wind size={22} color="#00d2ff" style={{ marginRight: -6 }} />
              <span className="logo-text">فرن <span className="highlight">&</span> سبليت بدبي</span>
            </div>
            <p className="footer-about">
              الشركة الأولى المتخصصة في تنظيف وتلميع أفران الغاز وإزالـة الدهون، وغسيل المكيفات السبليت بالضغط العالي وتعبئة الفريون بكافة أحياء مدينة دبي.
            </p>
            <div className="footer-contacts">
              <a href="tel:0550001122" className="contact-link">
                <Phone size={16} color="var(--primary)" />
                <span>0550001122</span>
              </a>
              <a href="https://wa.me/966550001122" target="_blank" rel="noreferrer" className="contact-link">
                <MessageCircle size={16} color="#25d366" />
                <span>تواصل عبر الواتساب</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Links */}
          <div className="footer-col">
            <h4 className="footer-title">خدماتنا بدبي</h4>
            <ul className="footer-links">
              <li><Link to="/services">تنظيف وتلميع أفران الغاز 5 شعلات</Link></li>
              <li><Link to="/services">غسيل مكيفات سبليت بالضغط العالي</Link></li>
              <li><Link to="/services">تسليك الفونيات وتعديل النار الزرقاء</Link></li>
              <li><Link to="/services">تعبئة فريون أمريكي أصلي للمكيفات</Link></li>
              <li><Link to="/services">صيانة أفران المطابخ والمطاعم</Link></li>
            </ul>
          </div>

          {/* Col 3: Riyadh Districts Covered (SEO Keywords) */}
          <div className="footer-col">
            <h4 className="footer-title">أحياء دبي التي نغطيها</h4>
            <ul className="footer-links keywords-grid">
              <li><MapPin size={12} /> شركة تنظيف بالصحافة والملقا</li>
              <li><MapPin size={12} /> غسيل مكيفات بالنرجس والياسمين</li>
              <li><MapPin size={12} /> صيانة افران غاز بالروضة والحمراء</li>
              <li><MapPin size={12} /> تنظيف افران بالعارض وحطين</li>
              <li><MapPin size={12} /> غسيل مكيفات بالمونسية واشبيلية</li>
            </ul>
          </div>

          {/* Col 4: Quick Action */}
          <div className="footer-col col-action">
            <h4 className="footer-title">احصل على خصم 30%</h4>
            <p className="discount-text">احجز الآن واستفد من العرض الفوري لجميع خدمات تنظيف الأفران والمكيفات بدبي.</p>
            <button className="btn btn-primary w-full" onClick={onOpenBooking}>
              حجز موعد الآن
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} شركة تنظيف افران الغاز والمكيفات بدبي. جميع الحقوق محفوظة.</p>
          <div className="footer-bottom-badge">
            <ShieldCheck size={16} color="var(--primary)" />
            <span>خدمة معتمدة 100% بدبي</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #04070e;
          border-top: 1px solid var(--border);
          padding-top: 4rem;
          padding-bottom: 2rem;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-light);
        }

        .logo-text .highlight { color: var(--primary); }

        .footer-about {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-light);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 600;
        }

        .footer-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 1.25rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 36px;
          height: 2px;
          background: var(--primary);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a, .footer-links li {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .discount-text {
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.6;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          font-size: 0.85rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
        }

        @media (max-width: 992px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
