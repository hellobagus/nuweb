import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Facebook, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getUMKMById } from '../data/umkm';
import NotFoundPage from './NotFoundPage';

const UMKMDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const umkm = id ? getUMKMById(id) : undefined;
  
  if (!umkm) {
    return <NotFoundPage />;
  }
  
  return (
    <div className="bg-white pb-16">
      {/* Hero Image */}
      <div 
        className="h-[40vh] md:h-[50vh] relative flex items-end"
        style={{
          backgroundImage: `url(${umkm.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <Link 
              to="/umkm" 
              className="inline-flex items-center text-white bg-green-700/80 px-4 py-2 rounded-full mb-4 hover:bg-green-700 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke UMKM
            </Link>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {umkm.name}
            </motion.h1>
            
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">
                {umkm.category}
              </span>
              
              <div className="flex items-center">
                <MapPin size={16} className="mr-1" />
                <span>{umkm.location}</span>
              </div>
              
              <div className="flex items-center">
                <Phone size={16} className="mr-1" />
                <span>{umkm.contact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="prose prose-lg max-w-none mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: umkm.content || `<p>${umkm.description}</p>` }}
          />
          
          {/* Gallery */}
          {umkm.gallery && umkm.gallery.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Galeri</h3>
              
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="w-full h-64 sm:h-80"
              >
                {umkm.gallery.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={image} 
                      alt={`${umkm.name} - Gallery ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          
          {/* Products */}
          {umkm.products && umkm.products.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Produk Unggulan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {umkm.products.map((product, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h4>
                      <p className="text-gray-600 mb-3 text-sm">{product.description}</p>
                      <p className="font-medium text-green-700">{product.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Alamat</h4>
                  <p className="text-gray-600">{umkm.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Telepon / WhatsApp</h4>
                  <p className="text-gray-600">{umkm.contact}</p>
                </div>
              </div>
            </div>
            
            {umkm.socialMedia && Object.values(umkm.socialMedia).some(Boolean) && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Media Sosial</h4>
                <div className="flex space-x-4">
                  {umkm.socialMedia.instagram && (
                    <a 
                      href={`https://instagram.com/${umkm.socialMedia.instagram.replace('@', '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-700 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                  )}
                  
                  {umkm.socialMedia.facebook && (
                    <a 
                      href={`https://facebook.com/${umkm.socialMedia.facebook}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-700 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMDetailPage;