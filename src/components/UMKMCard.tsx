import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { UMKMItem } from '../types';

interface UMKMCardProps {
  umkm: UMKMItem;
  index?: number;
}

const UMKMCard = ({ umkm, index = 0 }: UMKMCardProps) => {
  const { id, name, category, description, image, location, contact } = umkm;
  
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/umkm/${id}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      <div className="p-5 flex-1 flex flex-col">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full mb-3">
          {category}
        </span>
        
        <Link to={`/umkm/${id}`}>
          <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-700 transition-colors">
            {name}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {description}
        </p>
        
        <div className="flex flex-col space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin size={16} className="mr-2 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center">
            <Phone size={16} className="mr-2 flex-shrink-0" />
            <span>{contact}</span>
          </div>
        </div>
        
        <Link 
          to={`/umkm/${id}`}
          className="mt-4 text-green-700 font-medium hover:text-green-800 transition-colors"
        >
          Lihat Detail →
        </Link>
      </div>
    </motion.div>
  );
};

export default UMKMCard;