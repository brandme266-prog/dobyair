import React from 'react';
import { Star, MapPin, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'أبو فهد التميمي',
      location: 'حي الملقا - دبي',
      service: 'تنظيف فرن غاز 5 شعلات + 3 مكيفات',
      text: 'ما شاء الله تبارك الله، الفرن كان فيه دهون سوداء صعبة جداً ورجّعوه كانه جديد طلع من الكرتون! والمكيفات صار برودتها ممتازة وبدون أي اتساخ بالصالون. ننصح بالتعامل معهم بشدة.',
      rating: 5,
      date: 'منذ يومين'
    },
    {
      name: 'أم عبد العزيز',
      location: 'حي النرجس - دبي',
      service: 'تنظيف وغسيل 4 مكيفات سبليت',
      text: 'فريق عمل محترم وجاد. استخدموا أكياس وقاية للمكيفات وما نقطت نقطة ماية على الأرضية. الفريون ضُبط وصار التكييف ممتاز. شكراً لكم.',
      rating: 5,
      date: 'منذ 5 أيام'
    },
    {
      name: 'م. خالد الشمري',
      location: 'حي الياسمين - دبي',
      service: 'تنظيف وتلميع فرن إستانلس بالكامل',
      text: 'سريعين جداً في الحضور، الفني وصل خلال 40 دقيقة وحل مشكلة انسداد الفونيات ونظف الشواية. التعامل راقي والسعر جداً مناسب مع الخصم.',
      rating: 5,
      date: 'منذ أسبوع'
    }
  ];

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Quote size={16} />
            <span>ثقة عملاؤنا بدبي</span>
          </div>
          <h2 className="section-title">
            ماذا يقول <span className="title-gradient">عملاؤنا في أحياء دبي؟</span>
          </h2>
          <p className="section-subtitle">
            آراء وانطباعات حقيقية من عملائنا الكرام بعد تجربة خدمة تنظيف وصيانة الأفران والمكيفات.
          </p>
        </div>

        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card glass-card">
              <div className="review-header">
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffb703" color="#ffb703" />
                  ))}
                </div>
                <span className="rev-date">{rev.date}</span>
              </div>

              <p className="rev-text">"{rev.text}"</p>

              <div className="rev-footer">
                <div className="user-info">
                  <strong>{rev.name}</strong>
                  <span className="user-loc">
                    <MapPin size={12} />
                    {rev.location}
                  </span>
                </div>

                <div className="verified-badge">
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>خدمة مؤكدة</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: rgba(6, 11, 23, 0.6);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .review-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .review-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .stars-row {
          display: flex;
          gap: 0.25rem;
        }

        .rev-date {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .rev-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 1.75rem;
          font-style: italic;
        }

        .rev-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .user-info strong {
          display: block;
          font-size: 1rem;
          color: var(--text-light);
        }

        .user-loc {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.775rem;
          color: var(--primary);
          margin-top: 0.2rem;
        }

        .verified-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
