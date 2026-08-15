import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import SEO from '../../components/SEO';
import { Calendar, User, ArrowRight, Share2, MessageCircle } from 'lucide-react';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="min-h-screen bg-slate-50 font-sans pb-24">
      <SEO 
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "image": [
            `https://dubai-ac-cleaning.example.com${post.image}`
          ],
          "datePublished": post.date,
          "author": [{
              "@type": "Person",
              "name": post.author || "فريق كورسَتي",
              "url": "https://dubai-ac-cleaning.example.com/about"
            }]
        }}
      />
      
      {/* Article Hero */}
      <div className="relative h-[60vh] min-h-[400px] w-full mt-16">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              <ArrowRight size={16} /> العودة للمدونة
            </Link>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <User size={16} className="text-blue-400" />
                <span>{post.author || "فريق كورسَتي"}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                <Calendar size={16} className="text-blue-400" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 max-w-4xl -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
          
          <div className="prose prose-lg md:prose-xl prose-slate prose-headings:text-slate-800 prose-a:text-blue-600 hover:prose-a:text-blue-700 max-w-none prose-img:rounded-2xl" dir="rtl">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Share & Actions */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-slate-600 font-semibold">
              <span>مشاركة المقال:</span>
              <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 shadow-sm border border-slate-200">
                <Share2 size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Call to action at the bottom of the article */}
        <div className="mt-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 p-10 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-400/30">
              <MessageCircle size={32} className="text-blue-300" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج لخدمة احترافية في دبي؟</h3>
            <p className="text-slate-300 mb-8 text-lg md:text-xl max-w-2xl mx-auto">
              فريقنا جاهز لخدمتك في أي وقت لتنظيف وصيانة مكيفاتك وأفرانك بأعلى المعايير.
            </p>
            <a 
              href="https://wa.me/966550001122" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              <MessageCircle size={24} />
              تواصل معنا عبر واتساب الآن
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
