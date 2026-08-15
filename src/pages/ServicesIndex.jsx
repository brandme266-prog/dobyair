import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import SEO from '../components/SEO';

export default function ServicesIndex() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="خدمات تنظيف وصيانة المكيفات والأفران بدبي"
        description="استعرض جميع خدماتنا المتخصصة في تنظيف وغسيل مكيفات السبليت وصيانة أفران الغاز بجميع أحياء دبي."
        url="/services"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-900">خدماتنا <span className="text-primary">الاحترافية</span></h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">نقدم لك مجموعة متكاملة من خدمات الصيانة والتنظيف بأعلى معايير الجودة والضمان.</p>
      </div>
      
      <Services onOpenBooking={onOpenBooking} />
      <BeforeAfter />
    </div>
  );
}
