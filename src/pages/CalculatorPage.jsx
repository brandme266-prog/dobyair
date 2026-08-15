import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CostCalculator from '../components/CostCalculator';
import SEO from '../components/SEO';

export default function CalculatorPage() {
  const { onOpenBooking } = useOutletContext();

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <SEO 
        title="حاسبة أسعار تنظيف المكيفات والأفران بدبي"
        description="احسب التكلفة التقديرية لخدمات غسيل المكيفات وصيانة الأفران في دبي قبل حجز الموعد."
        url="/calculator"
      />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-slate-900">حاسبة <span className="text-primary">الأسعار</span></h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">احصل على تقدير فوري وشفاف لتكلفة الخدمة المطلوبة بناءً على العدد ونوع الجهاز.</p>
      </div>

      <CostCalculator onOpenBooking={onOpenBooking} />
    </div>
  );
}
