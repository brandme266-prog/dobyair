import React from 'react';
import { Flame, Wind, Sparkles, CheckCircle2, ShieldAlert, ArrowLeft, Wrench, RefreshCw, Zap, Snowflake } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>خدماتنا المتخصصة بمدينة دبي</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            نقدم أفضل خيارات <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">التنظيف والصيانة الاحترافية</span>
          </h2>
          <p className="text-slate-600 max-w-2xl text-lg">
            نعتمد أحدث التقنيات وأفضل الأيدي العاملة المدربة لتنظيف وصيانة المكيفات وأفران الغاز بأعلى معايير الجودة والسلامة في دبي.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Card 1: AC Cleaning (Primary) */}
          <div className="flex flex-col overflow-hidden bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-blue-100 hover:shadow-[0_20px_60px_rgba(0,210,255,0.15)] hover:-translate-y-2 transition-all duration-300 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/images/ac_cleaning.webp" 
                alt="تنظيف وغسيل مكيفات بدبي" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"; }}
              />
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-blue-600 font-bold text-sm shadow-sm">
                <Snowflake size={16} />
                <span>الخدمة الأكثر طلباً</span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Wind size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">غسيل مكيفات سبليت ومركزي</h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                غسيل وتنظيف شامل للمكيفات بالغطاء المائي المخصص لمنع اتساخ الجدران والأثاث، تنظيف الفلاتر والمبخر الداخلي والمروحة، وتعبئة الفريون الأمريكي الأصلي.
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>تنظيف كامل بالغطاء الواقي بدون قطرة ماء على الأثاث</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>إزالة الأتربة والبكتيريا المسببة للحساسية والروائح</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>قياس وضبط نسبة الفريون لرفع كفاءة التبريد</span>
                </li>
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">تبدأ الأسعار من</span>
                  <span className="text-2xl font-extrabold text-blue-600">90 د.إ</span>
                </div>
                <button 
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  onClick={onOpenBooking}
                >
                  <span>طلب تنظيف مكيف</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Gas Oven Cleaning */}
          <div className="flex flex-col overflow-hidden bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-yellow-100 hover:shadow-[0_20px_60px_rgba(255,183,3,0.15)] hover:-translate-y-2 transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/images/gas_oven.webp" 
                alt="تنظيف افران غاز بدبي" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"; }}
              />
            </div>

            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <Flame size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">تلميع وصيانة أفران الغاز</h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                خدمة متكاملة تشمل فك وتكسير الشحوم المحروقة والدهون المتراكمة على هيئة زيوت، تلميع الإستانلس، وتسليك وتغيير الفونيات.
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span>إزالة الدهون والزيوت المستعصية بمواد كيميائية آمنة</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span>تسليك فونيات الفرن وضبط مفاتيح الاشتعال الذاتي</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                  <CheckCircle2 size={18} className="text-yellow-500 mt-0.5 shrink-0" />
                  <span>فحص وأمان تسريب الغاز قبل مغادرة الفني</span>
                </li>
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                <div>
                  <span className="block text-xs text-slate-500 font-medium mb-1">تبدأ الأسعار من</span>
                  <span className="text-2xl font-extrabold text-yellow-600">150 د.إ</span>
                </div>
                <button 
                  className="flex items-center gap-2 bg-white border-2 border-yellow-500 text-yellow-600 px-6 py-2.5 rounded-full font-bold hover:bg-yellow-50 transition-colors duration-300"
                  onClick={onOpenBooking}
                >
                  <span>طلب تنظيف فرن</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Maintenance & Commercial */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center border border-blue-800">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="flex-1 relative z-10 text-center md:text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold mb-6">
              <Wrench size={16} />
              <span>خدمات العقود والمطاعم</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">صيانة التكييف المركزي والمطابخ التجارية</h3>
            <p className="text-blue-100/80 mb-8 max-w-xl text-lg">
              نوفر خيارات العقود الشهرية والسنوية لصيانة وتنظيف التكييف المركزي للشركات والفنادق، بالإضافة لتنظيف أفران المطاعم الكبيرة وهود المطابخ بمدينة دبي بأسعار منافسة.
            </p>
            <button 
              className="inline-flex items-center gap-2 bg-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(255,183,3,0.3)]"
              onClick={onOpenBooking}
            >
              <Zap size={20} />
              <span>طلب عرض سعر للمطاعم والشركات</span>
            </button>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto relative z-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center">
              <RefreshCw size={32} className="text-yellow-400 mb-3" />
              <strong className="text-white text-lg block mb-1">صيانة دورية</strong>
              <span className="text-blue-200 text-sm">عقود تنظيف مجدولة</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center">
              <ShieldAlert size={32} className="text-cyan-400 mb-3" />
              <strong className="text-white text-lg block mb-1">فحص الأمان</strong>
              <span className="text-blue-200 text-sm">اختبار أنظمة الغاز والتبريد</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
