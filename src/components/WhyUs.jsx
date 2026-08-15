import React from 'react';
import { ShieldCheck, Clock, Award, Sparkles, ThumbsUp, Users, HeartHandshake, Headphones } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      icon: Clock,
      title: 'وصول سريع لكافة أحياء دبي',
      desc: 'فنيون منتشرون بجميع مناطق دبي (الشمال، الشرق، الغرب، والجنوب) للوصول إليك خلال 45 دقيقة فقط.'
    },
    {
      icon: ShieldCheck,
      title: 'مواد تنظيف إيطالية وألمانية آمنة',
      desc: 'نستخدم منظفات مخصصة لفك الدهون المستعصية خالية من الروائح النفاثة وآمنة تماماً على أغطية الاستانلس والصحة.'
    },
    {
      icon: Award,
      title: 'ضمان كتابي على السلامة والتبريد',
      desc: 'نقدم ضماناً حقيقياً على سلامة الفونيات، عدم تقطير المياه من المكيف، وجودة تعبئة الفريون.'
    },
    {
      icon: ThumbsUp,
      title: 'حماية وتغليف الأثاث بالكامل',
      desc: 'نستخدم أغطية وأكياس الغسيل الحافظة لضمان بقاء جدرانك وأرضياتك نظيفة 100% بدون قطرة ماء واحدة.'
    },
    {
      icon: Users,
      title: 'عمالة متخصصة ومدربة',
      desc: 'كادر فني محترف وذو خبرة واسعة في التعامل مع أحدث ماركات الأفرُان والمكيفات السبليت والمركزي.'
    },
    {
      icon: Headphones,
      title: 'خدمة عملاء ومتابعة 24/7',
      desc: 'فريق دعم متواجد على مدار الساعة للرد على استفساراتكم ومتابعة انطباعكم بعد انتهاء الخدمة.'
    }
  ];

  return (
    <section id="why-us" className="section-padding why-us-section">
      <div className="container">
        <div className="text-center-head">
          <div className="section-tag">
            <Sparkles size={16} />
            <span>معايير الجودة والاحترافية</span>
          </div>
          <h2 className="section-title">
            لماذا تختارنا لخدمة <span className="title-gradient">منزلك في دبي؟</span>
          </h2>
          <p className="section-subtitle">
            نجمع بين الخبرة الطويلة، الأدوات الفائقة، والالتزام الصارم بالوقت لنقدم لك تجربة خدمة استثنائية.
          </p>
        </div>

        <div className="advantages-grid">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div key={index} className="adv-card glass-card">
                <div className="adv-icon-box">
                  <Icon size={26} color="var(--primary)" />
                </div>
                <h3 className="adv-title">{adv.title}</h3>
                <p className="adv-desc">{adv.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .adv-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .adv-card:hover {
          transform: translateY(-5px);
        }

        .adv-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: rgba(0, 210, 255, 0.12);
          border: 1px solid rgba(0, 210, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .adv-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          color: var(--text-light);
        }

        .adv-desc {
          font-size: 0.925rem;
          color: var(--text-muted);
          line-height: 1.75;
        }
      `}</style>
    </section>
  );
}
