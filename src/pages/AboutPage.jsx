import React from 'react';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import SEO from '../components/SEO';

export default function AboutPage() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <SEO 
        title="من نحن | شركة تنظيف الأفران والمكيفات بدبي"
        description="تعرف على قصتنا ولماذا يثق بنا أكثر من 5000 عميل في مدينة دبي لتقديم خدمات الغسيل والتنظيف الاحترافي."
        url="/about"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-900">عن <span className="text-primary">شركتنا</span></h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">نحن أكثر من مجرد شركة تنظيف، نحن شركاؤك في الحفاظ على صحة وسلامة أجهزتك المنزلية.</p>
      </div>

      <WhyUs />
      <Testimonials />
      <FAQ />
    </div>
  );
}
