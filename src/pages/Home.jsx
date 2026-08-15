import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const { onOpenBooking } = useOutletContext();

  return (
    <>
      <SEO 
        title="تنظيف مكيفات بدبي | غسيل مكيفات سبليت ومركزي"
        description="أفضل خدمة تنظيف مكيفات بدبي. غسيل وصيانة مكيفات سبليت، شباك، ومركزي باحترافية وسرعة. تواصل معنا الآن واحجز موعدك."
        url="/"
      />
      <Hero onOpenBooking={onOpenBooking} />
      
      {/* Quick Navigation Snippets */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">استكشف خدماتنا الشاملة</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/services" className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white">
              عرض جميع الخدمات
            </Link>
            <Link to="/calculator" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100">
              حاسبة الأسعار
            </Link>
            <Link to="/districts" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100">
              مناطق الخدمة بدبي
            </Link>
            <Link to="/blog" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100">
              نصائح ومقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
