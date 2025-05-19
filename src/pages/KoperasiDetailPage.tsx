import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Calendar, Users, ArrowLeft, CheckCircle } from 'lucide-react';
import { getKoperasiById } from '../data/koperasi';
import NotFoundPage from './NotFoundPage';

const KoperasiDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const koperasi = id ? getKoperasiById(id) : undefined;
  
  if (!koperasi) {
    return <NotFoundPage />;
  }
  
  return (
    <div className="bg-white pb-16">
      {/* Hero Image */}
      <div 
        className="h-[40vh] md:h-[50vh] relative flex items-end"
        style={{
          backgroundImage: `url(${koperasi.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-3xl">
            <Link 
              to="/koperasi" 
              className="inline-flex items-center text-white bg-green-700/80 px-4 py-2 rounded-full mb-4 hover:bg-green-700 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Kembali ke Koperasi
            </Link>
            
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {koperasi.name}
            </motion.h1>
            
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                {koperasi.type}
              </span>
              
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>Berdiri sejak {koperasi.established}</span>
              </div>
              
              <div className="flex items-center">
                <Users size={16} className="mr-1" />
                <span>{koperasi.memberCount} Anggota</span>
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
            dangerouslySetInnerHTML={{ __html: koperasi.content || `<p>${koperasi.description}</p>` }}
          />
          
          {/* Services */}
          {koperasi.services && koperasi.services.length > 0 && (
            <div className="mb-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Layanan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {koperasi.services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mr-3 mt-1">
                      <CheckCircle size={20} className="text-green-700" />
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Achievements */}
          {koperasi.achievements && koperasi.achievements.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Prestasi</h3>
              
              <div className="space-y-4">
                {koperasi.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-amber-50 border-l-4 border-amber-400 p-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <p className="text-gray-800">{achievement}</p>
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
                  <p className="text-gray-600">{koperasi.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 text-green-700 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Telepon / WhatsApp</h4>
                  <p className="text-gray-600">{koperasi.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoperasiDetailPage;