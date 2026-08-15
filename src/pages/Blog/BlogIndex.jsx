import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../data/posts';
import SEO from '../../components/SEO';
import { Calendar, ChevronLeft, BookOpen, Search } from 'lucide-react';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <SEO 
        title="مدونة تنظيف المكيفات والأفران | نصائح وحلول"
        description="اقرأ أحدث المقالات والنصائح حول صيانة وتنظيف المكيفات والأفران بدبي للحفاظ على أجهزتك بكفاءة عالية."
        url="/blog"
      />
      
      {/* Hero Section for Blog */}
      <div className="relative bg-slate-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        
        <div className="container relative z-10 mx-auto px-4 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm">
            <BookOpen size={16} />
            <span>المدونة والنصائح</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            نصائح وحلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">لصيانة أجهزتك</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            اكتشف أحدث المقالات، الإرشادات، وأفضل الممارسات للحفاظ على مكيفاتك وأفرانك في أفضل حالة طوال العام.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-6xl -mt-10 relative z-20 pb-24">
        
        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
                  <Calendar size={12} className="text-blue-500" />
                  <span>{post.date}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <h2 className="text-xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                    بواسطة {post.author || 'فريق كورسَتي'}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <ChevronLeft size={18} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
