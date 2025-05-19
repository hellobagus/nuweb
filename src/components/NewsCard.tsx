import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';
import { id as idLocale } from 'date-fns/locale'; // Fixed import
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
  index?: number;
  featured?: boolean;
}

const NewsCard = ({ news, index = 0, featured = false }: NewsCardProps) => {
  const { id, title, excerpt, category, date, author, image } = news;
  
  const formattedDate = format(new Date(date), 'd MMMM yyyy', { locale: idLocale }); // Use correct locale object
  
  return (
    <motion.div
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow
      ${featured ? 'flex flex-col md:flex-row' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={`/berita/${id}`} 
        className={`block ${featured ? 'md:w-1/2' : 'w-full'}`}
      >
        <img 
          src={image} 
          alt={title}
          className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      <div className={`p-5 ${featured ? 'md:w-1/2' : ''}`}>
        <Link to={`/berita/${id}`}>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-3">
            {category}
          </span>
          
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-700 transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;