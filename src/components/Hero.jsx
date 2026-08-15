import React from 'react';
import { ShieldCheck, Star, MapPin, Clock, Wind, Snowflake, MessageCircle, ArrowLeft } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none"></div>

      <div className="container hero-grid relative z-10">
        {/* Left Column: Text & Content */}
        <div className="hero-info">
          <div className="trust-pill inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <MapPin size={16} />
            <span>متخصصون في دبي • خصم 30% لطلبات غسيل المكيفات اليوم</span>
          </div>

          <h1 className="hero-main-title text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            انتعش بهواء نقي مع أفضل خدمة <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">غسيل مكيفات</span> في دبي
          </h1>

          <p className="hero-lead text-lg md:text-xl text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
            نضمن لك هواءً بارداً ونقياً خالياً من البكتيريا بفضل أحدث مضخات الضغط العالي والغطاء الواقي. ونقدم أيضاً خدمات تنظيف الأفران باحترافية عالية.
          </p>

          {/* Quick Badges Grid */}
          <div className="hero-features-list flex flex-col gap-4 mb-10">
            <div className="hero-feat-item flex items-center gap-3 text-blue-50 font-medium">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <ShieldCheck size={18} className="text-cyan-400" />
              </div>
              <span>غسيل آمن 100% بالغطاء الواقي بدون قطرة ماء بالخارج</span>
            </div>
            <div className="hero-feat-item flex items-center gap-3 text-blue-50 font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Wind size={18} className="text-blue-400" />
              </div>
              <span>تعقيم الفلاتر وتعبئة الفريون الأمريكي لرفع كفاءة التبريد</span>
            </div>
            <div className="hero-feat-item flex items-center gap-3 text-blue-50 font-medium">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Star size={18} className="text-yellow-400" />
              </div>
              <span>ضمان شامل على الخدمة وتقييم 5 نجوم من عملائنا</span>
            </div>
          </div>

          {/* Action Callouts */}
          <div className="hero-buttons flex flex-wrap items-center gap-4 mb-10">
            <button 
              className="group flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_10px_25px_rgba(0,210,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              onClick={onOpenBooking}
            >
              <span>احجز غسيل مكيفك الآن</span>
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>

            <a 
              href="https://wa.me/966550001122?text=السلام%20عليكم،%20أرغب%20في%20حجز%20خدمة%20غسيل%20مكيفات" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md transition-all duration-300"
            >
              <MessageCircle size={22} className="text-green-400" />
              <span>واتساب سريع</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Image Card */}
        <div className="hero-visual relative">
          <div className="image-frame relative rounded-[2rem] p-4 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            <img 
              src="/images/ac_cleaning.webp" 
              alt="شركة غسيل مكيفات بدبي" 
              className="hero-img w-full h-[500px] object-cover rounded-3xl shadow-inner"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"; }}
            />
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-blue-500 w-24 h-24 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            
            <div className="absolute top-10 -right-8 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Snowflake size={24} className="text-cyan-400" />
              </div>
              <div>
                <strong className="block text-white font-bold">تبريد مثالي</strong>
                <span className="text-cyan-200 text-sm">كفاءة أعلى بـ 40%</span>
              </div>
            </div>

            <div className="absolute bottom-10 -left-8 bg-slate-900/80 backdrop-blur-md border border-blue-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-[float_5s_ease-in-out_infinite_reverse]">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Clock size={24} className="text-blue-400" />
              </div>
              <div>
                <strong className="block text-white font-bold">سرعة التنفيذ</strong>
                <span className="text-blue-200 text-sm">نصلك خلال 45 دقيقة</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 12rem;
          padding-bottom: 6rem;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 8rem;
            padding-bottom: 4rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          
          .hero-info {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-feat-item {
            text-align: right;
          }
        }
      `}</style>
    </section>
  );
}
