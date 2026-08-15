import React, { useState } from 'react';
import { Calculator, Flame, Wind, Plus, Minus, Check, Tag, MessageCircle, ArrowLeft, RefreshCcw } from 'lucide-react';

export default function CostCalculator({ onOpenBooking }) {
  const [ovenQty, setOvenQty] = useState(1);
  const [ovenType, setOvenType] = useState('standard'); // standard (150), large (180), restaurant (250)
  
  const [acQty, setAcQty] = useState(2);
  const [acType, setAcType] = useState('split'); // split (90), window (80), cabinet (120)
  
  const [freonAddon, setFreonAddon] = useState(false); // +100 SAR per AC
  const [deepPolishing, setDeepPolishing] = useState(true); // +30 SAR

  // Pricing Logic
  const ovenRates = { standard: 150, large: 180, restaurant: 250 };
  const acRates = { split: 90, window: 80, cabinet: 120 };

  const baseOvenTotal = (ovenRates[ovenType] || 150) * ovenQty;
  const baseAcTotal = (acRates[acType] || 90) * acQty;
  const addonTotal = (freonAddon ? 100 * acQty : 0) + (deepPolishing ? 30 : 0);

  const subtotal = baseOvenTotal + baseAcTotal + addonTotal;
  const discountRate = 0.30; // 30% discount
  const discountAmount = Math.round(subtotal * discountRate);
  const finalTotal = subtotal - discountAmount;

  const handleWhatsAppOrder = () => {
    const message = `مرحباً، أرغب في حجز خدمة بناءً على تفاصيل حاسبة التكلفة بدبي:
- أفران الغاز: عدد ${ovenQty} (${ovenType === 'standard' ? 'فرن 4-5 شعلات' : ovenType === 'large' ? 'فرن كبير 6 شعلات' : 'فرن مطعم/تجاري'})
- المكيفات: عدد ${acQty} (${acType === 'split' ? 'سبليت' : acType === 'window' ? 'شباك' : 'دولابي'})
- التزويد بالفريون: ${freonAddon ? 'نعم' : 'لا'}
- السعر التقديري النهائي بعد الخصم (30%): ${finalTotal} ريال سعودي`;
    window.open(`https://wa.me/966550001122?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="section-padding calculator-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Calculator size={16} />
            <span>حاسبة الأسعار الشفافة بدبي</span>
          </div>
          <h2 className="section-title">
            احسب <span className="title-gradient">تكلفة التنسيق والتنظيف</span> بنفسك فوراً
          </h2>
          <p className="section-subtitle">
            حدد خياراتك واحصل على سعر تقديري شفاف شامل الخصم والوصول لأي حي بدبي دون مصاريف خفية.
          </p>
        </div>

        <div className="calculator-box glass-card">
          <div className="calculator-grid">
            {/* Left Controls */}
            <div className="calc-controls">
              {/* Oven Section */}
              <div className="calc-group">
                <div className="group-title">
                  <Flame color="#ffb703" size={20} />
                  <span>1. تحديد أفران الغاز</span>
                </div>

                <div className="type-selector">
                  <button 
                    className={`type-btn ${ovenType === 'standard' ? 'active' : ''}`}
                    onClick={() => setOvenType('standard')}
                  >
                    فرن 4 - 5 شعلات
                  </button>
                  <button 
                    className={`type-btn ${ovenType === 'large' ? 'active' : ''}`}
                    onClick={() => setOvenType('large')}
                  >
                    فرن 6 شعلات كبيـر
                  </button>
                  <button 
                    className={`type-btn ${ovenType === 'restaurant' ? 'active' : ''}`}
                    onClick={() => setOvenType('restaurant')}
                  >
                    فرن مطعم / تجاري
                  </button>
                </div>

                <div className="qty-picker">
                  <span>عدد الأفران:</span>
                  <div className="counter-controls">
                    <button className="cnt-btn" onClick={() => setOvenQty(Math.max(0, ovenQty - 1))}>
                      <Minus size={16} />
                    </button>
                    <span className="cnt-val">{ovenQty}</span>
                    <button className="cnt-btn" onClick={() => setOvenQty(ovenQty + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* AC Section */}
              <div className="calc-group">
                <div className="group-title">
                  <Wind color="#00d2ff" size={20} />
                  <span>2. تحديد المكيفات</span>
                </div>

                <div className="type-selector">
                  <button 
                    className={`type-btn ${acType === 'split' ? 'active' : ''}`}
                    onClick={() => setAcType('split')}
                  >
                    مكيف سبليت
                  </button>
                  <button 
                    className={`type-btn ${acType === 'window' ? 'active' : ''}`}
                    onClick={() => setAcType('window')}
                  >
                    مكيف شباك
                  </button>
                  <button 
                    className={`type-btn ${acType === 'cabinet' ? 'active' : ''}`}
                    onClick={() => setAcType('cabinet')}
                  >
                    مكيف دولابي / مركزي
                  </button>
                </div>

                <div className="qty-picker">
                  <span>عدد المكيفات:</span>
                  <div className="counter-controls">
                    <button className="cnt-btn" onClick={() => setAcQty(Math.max(0, acQty - 1))}>
                      <Minus size={16} />
                    </button>
                    <span className="cnt-val">{acQty}</span>
                    <button className="cnt-btn" onClick={() => setAcQty(acQty + 1)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Addons */}
              <div className="calc-group">
                <div className="group-title">
                  <Tag color="#10b981" size={20} />
                  <span>3. إضافات الصيانة الاختيارية</span>
                </div>

                <div className="checkbox-list">
                  <label className="custom-checkbox">
                    <input 
                      type="checkbox" 
                      checked={freonAddon} 
                      onChange={(e) => setFreonAddon(e.target.checked)} 
                    />
                    <span className="checkmark"></span>
                    <span>فحص وتعبئة الفريون الأمريكي للمكيفات (+100 ر.س لكل مكيف)</span>
                  </label>

                  <label className="custom-checkbox">
                    <input 
                      type="checkbox" 
                      checked={deepPolishing} 
                      onChange={(e) => setDeepPolishing(e.target.checked)} 
                    />
                    <span className="checkmark"></span>
                    <span>تلميع الاستانلس وتغيير الفونيات بالمواد الإيطالية (+30 ر.س)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Summary */}
            <div className="calc-summary">
              <div className="summary-card">
                <div className="discount-badge">
                  <Tag size={16} />
                  <span>خصم اليوم 30% مطبّق</span>
                </div>

                <h3 className="summary-header">ملخص السعر التقديري</h3>

                <div className="summary-breakdown">
                  <div className="summary-line">
                    <span>تنظيف الأفران ({ovenQty}):</span>
                    <span>{baseOvenTotal} ر.س</span>
                  </div>
                  <div className="summary-line">
                    <span>غسيل المكيفات ({acQty}):</span>
                    <span>{baseAcTotal} ر.س</span>
                  </div>
                  {addonTotal > 0 && (
                    <div className="summary-line">
                      <span>إضافات الصيانة:</span>
                      <span>{addonTotal} ر.س</span>
                    </div>
                  )}
                  <div className="summary-line text-muted-line">
                    <span>المجموع قبل الخصم:</span>
                    <span className="strike">{subtotal} ر.س</span>
                  </div>
                  <div className="summary-line text-accent-line">
                    <span>مقدار الخصم (30%):</span>
                    <span>- {discountAmount} ر.س</span>
                  </div>
                </div>

                <div className="final-price-box">
                  <span className="final-label">التكلفة النهائية التقديرية</span>
                  <div className="final-val">
                    <span>{finalTotal}</span>
                    <small>ريال سعودي</small>
                  </div>
                  <span className="vat-note">* شاملة ضريبة القيمة المضافة ومصاريف الانتقال للحي</span>
                </div>

                <div className="summary-actions">
                  <button className="btn btn-whatsapp w-full" onClick={handleWhatsAppOrder}>
                    <MessageCircle size={18} />
                    إرسال التكلفة وحجز عبر واتساب
                  </button>
                  <button className="btn btn-outline w-full" onClick={onOpenBooking}>
                    حجز موعد هاتفي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calculator-box {
          padding: 2.5rem;
          background: var(--bg-card);
        }

        .calculator-grid {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 3rem;
        }

        .calc-group {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }

        .calc-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .group-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .type-selector {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
        }

        .type-btn {
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          color: var(--text-muted);
          font-family: var(--font-arabic);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .type-btn:hover {
          border-color: var(--primary);
          color: var(--text-light);
        }

        .type-btn.active {
          background: rgba(0, 210, 255, 0.15);
          border-color: var(--primary);
          color: var(--primary);
        }

        .qty-picker {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--bg-surface);
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          font-weight: 600;
        }

        .counter-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cnt-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cnt-btn:hover {
          background: var(--primary);
          color: #060b17;
        }

        .cnt-val {
          font-size: 1.1rem;
          font-weight: 800;
          min-width: 24px;
          text-align: center;
        }

        .checkbox-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .custom-checkbox {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-light);
          cursor: pointer;
        }

        /* Summary Card */
        .summary-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-active);
          border-radius: var(--radius-lg);
          padding: 2rem;
          position: sticky;
          top: 6rem;
        }

        .discount-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(37, 211, 102, 0.15);
          border: 1px solid rgba(37, 211, 102, 0.3);
          border-radius: 999px;
          color: #25d366;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .summary-header {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .summary-breakdown {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 1.25rem;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .strike {
          text-decoration: line-through;
          color: var(--text-dim);
        }

        .text-accent-line {
          color: var(--accent);
          font-weight: 700;
        }

        .final-price-box {
          text-align: center;
          background: rgba(0, 210, 255, 0.08);
          border: 1px solid rgba(0, 210, 255, 0.2);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .final-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          display: block;
        }

        .final-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          line-height: 1.1;
        }

        .final-val small {
          font-size: 0.9rem;
          font-weight: 600;
          margin-right: 0.3rem;
          color: var(--text-light);
        }

        .vat-note {
          font-size: 0.7rem;
          color: var(--text-dim);
          display: block;
          margin-top: 0.5rem;
        }

        .summary-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (max-width: 992px) {
          .calculator-grid {
            grid-template-columns: 1fr;
          }
          .summary-card { position: static; }
        }
      `}</style>
    </section>
  );
}
