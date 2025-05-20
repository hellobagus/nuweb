import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Users, ShoppingBag, BookOpen } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import UMKMCard from '../components/UMKMCard';
import KoperasiCard from '../components/KoperasiCard';
import { getRecentNews } from '../data/news';
import { umkmData } from '../data/umkm';
import { koperasiData } from '../data/koperasi';
import { getLiveStreams } from '../data/streams';

const HomePage = () => {
  const recentNews = getRecentNews(3);
  const featuredUMKM = umkmData.slice(0, 3);
  const featuredKoperasi = koperasiData.slice(0, 3);
  const liveStreams = getLiveStreams();
  
  return (
    <div>
      <Hero 
        title="Muslimat NU"
        subtitle="Nahdhatul Ulama Muslimah: Memberdayakan Muslimah, Membangun Peradaban"
        backgroundImage="https://images.pexels.com/photos/6143369/pexels-photo-6143369.jpeg"
        height="h-screen"
      />

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tentang Muslimat NU"
            subtitle="Nahdhatul Ulama Muslimah adalah organisasi perempuan yang bergerak dalam bidang keagamaan, sosial, dan pemberdayaan perempuan."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen size={28} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Dakwah & Keagamaan</h3>
              
              <p className="text-gray-600 text-center">
                Mengembangkan pemahaman Islam Ahlussunnah wal Jamaah melalui kajian, pengajian, dan berbagai kegiatan keagamaan.
              </p>
            </motion.div>
            
            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users size={28} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Sosial & Kemanusiaan</h3>
              
              <p className="text-gray-600 text-center">
                Aktif dalam kegiatan sosial dan kemanusiaan, seperti bakti sosial, bantuan bencana, dan santunan untuk dhuafa.
              </p>
            </motion.div>
            
            <motion.div
              className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShoppingBag size={28} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Ekonomi & Pemberdayaan</h3>
              
              <p className="text-gray-600 text-center">
                Memberdayakan ekonomi muslimah melalui pengembangan UMKM, koperasi, dan berbagai pelatihan keterampilan.
              </p>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/about" className="inline-flex items-center px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
              Selengkapnya Tentang Kami
              <ChevronRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* News Section */}
      <section className="py-16 md:py-24 bg-gray-50 pattern-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle 
              title="Berita Terbaru"
              subtitle="Informasi terkini seputar kegiatan dan program Muslimat NU"
              centered={false}
            />
            
            <Link to="/berita" className="hidden md:inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors">
              Semua Berita
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <NewsCard key={news.id} news={news} index={index} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/berita" className="inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors">
              Semua Berita
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Live Streaming Section */}
      {liveStreams.length > 0 && (
        <section className="py-16 md:py-24 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <SectionTitle 
              title="Sedang Live!"
              subtitle="Ikuti kajian Muslimat NU yang sedang berlangsung"
              light={true}
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {liveStreams.map(stream => (
                <motion.div
                  key={stream.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative">
                    <img 
                      src={stream.thumbnail} 
                      alt={stream.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                      <span className="w-2 h-2 bg-white rounded-full block mr-2 animate-pulse"></span>
                      LIVE
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{stream.title}</h3>
                    
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={16} className="mr-1" />
                      <span>{stream.date} | {stream.time}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {stream.description}
                    </p>
                    
                    <Link
                      to={`/live-streaming/${stream.id}`}
                      className="inline-block w-full text-center px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
                    >
                      Tonton Sekarang
                    </Link>
                  </div>
                </motion.div>
              ))}
              
              {liveStreams.length === 1 && (
                <motion.div
                  className="bg-green-700/30 rounded-lg p-8 flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Ikuti Jadwal Kajian Kami</h3>
                  <p className="mb-6">Dapatkan informasi terbaru tentang jadwal kajian dan live streaming Muslimat NU.</p>
                  <Link
                    to="/live-streaming"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-800 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Lihat Jadwal
                    <ChevronRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}
      
      {/* UMKM Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle 
              title="UMKM Binaan"
              subtitle="Usaha Mikro Kecil dan Menengah yang dibina oleh Muslimat NU"
              centered={false}
            />
            
            <Link to="/umkm" className="hidden md:inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors">
              Semua UMKM
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredUMKM.map((umkm, index) => (
              <UMKMCard key={umkm.id} umkm={umkm} index={index} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/umkm" className="inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors">
              Semua UMKM
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Koperasi Section */}
      <section className="py-16 md:py-24 bg-gray-50 pattern-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <SectionTitle 
              title="Koperasi Muslimat NU"
              subtitle="Koperasi yang dikelola oleh Muslimat NU untuk kesejahteraan anggota"
              centered={false}
            />
            
            <Link to="/koperasi" className="hidden md:inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors">
              Semua Koperasi
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredKoperasi.map((koperasi, index) => (
              <KoperasiCard key={koperasi.id} koperasi={koperasi} index={index} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/koperasi" className="inline-flex items-center font-medium text-green-700 hover:text-green-800 transition-colors">
              Semua Koperasi
              <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Consultation CTA Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Butuh Konsultasi?
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ajukan pertanyaan Anda seputar masalah keagamaan, keluarga, pendidikan, ekonomi, dan kesehatan. 
              Tim ahli kami siap membantu dan memberikan solusi.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/konsultasi" 
                className="inline-block px-8 py-3 bg-white text-green-800 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Konsultasi Sekarang
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;