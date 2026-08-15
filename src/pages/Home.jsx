import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import BeforeAfter from '../components/BeforeAfter';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import BlogSection from '../components/BlogSection';

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
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/calculator" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100">
              حاسبة الأسعار الشاملة
            </Link>
            <Link to="/districts" className="btn btn-outline border-slate-300 text-slate-700 hover:bg-slate-100">
              مناطق الخدمة بدبي
            </Link>
          </div>
        </div>
      </section>

      <Services onOpenBooking={onOpenBooking} />
      <WhyUs />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <BlogSection />
    </>
  );
}
