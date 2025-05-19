import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { getNewsById, getRecentNews } from '../data/news';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import NotFoundPage from './NotFoundPage';

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const news = id ? getNewsById(id) : undefined;
  const relatedNews = getRecentNews(3).filter(item => item.id !== id);
  
  if (!news) {
    return <NotFoundPage />;
  }
  
  const formattedDate = format(new Date(news.date), 'd MMMM yyyy', { locale: id });
  
  return (
    <div className="bg-white pb-16">
      {/* Hero Image */}
      <div 
        className="h-[40vh] md:h-[60vh] relative flex items-end"
        style={{
          backgroundImage: `url(${news.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <Link 
              to="/berita" 
              className="inline-flex items-center text-white bg-green-700/80 px-4 py-2 rounded-full mb-4 hover:bg-green-700 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Berita
            </Link>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {news.title}
            </motion.h1>
            
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>{news.author}</span>
              </div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                {news.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
          
          {news.tags && news.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center flex-wrap gap-2">
                <Tag size={16} className="text-gray-500 mr-1" />
                {news.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Related News */}
        {relatedNews.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Berita Terkait</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((item, index) => (
                <Link 
                  key={item.id} 
                  to={`/berita/${item.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-2">
                      {item.category}
                    </span>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{format(new Date(item.date), 'd MMM yyyy', { locale: id })}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetailPage;