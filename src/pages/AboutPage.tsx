import { motion } from 'framer-motion';
import { Users, Award, Calendar, BookOpen, Heart, ShoppingBag } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };
  
  return (
    <div>
      <Hero 
        title="Tentang NU Muslimah"
        subtitle="Mengenal lebih dekat organisasi NU Muslimah dan visi misi kami"
        backgroundImage="https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg"
      />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Sejarah Singkat"
              subtitle="Perjalanan NU Muslimah sejak didirikan hingga saat ini"
            />
            
            <motion.div 
              className="prose prose-lg mx-auto mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p>
                NU Muslimah merupakan badan otonom perempuan dari organisasi Nahdlatul Ulama (NU) yang didirikan pada tanggal 26 Rabiul Awal 1421 H bertepatan dengan 29 Juni 2000. Organisasi ini dibentuk sebagai wadah bagi kaum perempuan NU untuk mengembangkan potensi dan meningkatkan peran perempuan dalam berbagai bidang kehidupan.
              </p>
              
              <p>
                Sejak berdirinya hingga saat ini, NU Muslimah telah mengalami perkembangan yang pesat. Organisasi ini telah memiliki kepengurusan di tingkat pusat, wilayah (provinsi), cabang (kabupaten/kota), hingga ranting (desa/kelurahan), dengan jumlah anggota mencapai jutaan perempuan di seluruh Indonesia.
              </p>
              
              <p>
                Dalam perjalanannya, NU Muslimah telah melaksanakan berbagai program dan kegiatan yang berfokus pada peningkatan kualitas perempuan dalam bidang keagamaan, pendidikan, sosial, ekonomi, dan kesehatan. NU Muslimah juga aktif dalam advokasi isu-isu yang berkaitan dengan perempuan dan anak, serta dalam upaya pemberdayaan ekonomi perempuan melalui pengembangan UMKM dan koperasi.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Vision Mission Section */}
      <section className="py-16 bg-gray-50 pattern-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Visi & Misi"
              subtitle="Tujuan dan langkah NU Muslimah"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md"
                {...fadeIn}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <BookOpen size={24} className="mr-2 text-green-700" />
                  Visi
                </h3>
                
                <p className="text-gray-600">
                  Terwujudnya perempuan Indonesia yang bertakwa kepada Allah SWT, berilmu, berakhlak mulia, cakap, bertanggung jawab, dan berguna bagi agama, nusa, dan bangsa.
                </p>
              </motion.div>
              
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md"
                {...fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Award size={24} className="mr-2 text-green-700" />
                  Misi
                </h3>
                
                <ul className="text-gray-600 space-y-2 list-disc list-inside">
                  <li>Menanamkan dan mengembangkan nilai-nilai Islam Ahlussunnah wal Jamaah di kalangan perempuan</li>
                  <li>Meningkatkan kualitas pendidikan dan keterampilan perempuan</li>
                  <li>Meningkatkan kesadaran perempuan tentang hak dan kewajibannya menurut ajaran Islam</li>
                  <li>Meningkatkan peran perempuan dalam pembangunan berbasis keluarga</li>
                  <li>Mengembangkan ekonomi perempuan melalui berbagai kegiatan usaha</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Program Unggulan"
            subtitle="Program-program yang menjadi fokus NU Muslimah"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              {...fadeIn}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dakwah & Pengajian</h3>
              
              <p className="text-gray-600 mb-4">
                Program dakwah dan pengajian rutin untuk meningkatkan pemahaman dan pengamalan ajaran Islam di kalangan perempuan.
              </p>
              
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Pengajian Rutin Mingguan</li>
                <li>Kajian Kitab Kuning</li>
                <li>Tahsin dan Tahfidz Al-Quran</li>
                <li>Peringatan Hari Besar Islam</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sosial & Kesehatan</h3>
              
              <p className="text-gray-600 mb-4">
                Program sosial dan kesehatan untuk memberikan pelayanan dan bantuan kepada masyarakat yang membutuhkan.
              </p>
              
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Bakti Sosial</li>
                <li>Pemeriksaan Kesehatan Gratis</li>
                <li>Donor Darah</li>
                <li>Bantuan Bencana Alam</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Ekonomi & Pemberdayaan</h3>
              
              <p className="text-gray-600 mb-4">
                Program ekonomi dan pemberdayaan untuk meningkatkan kesejahteraan perempuan dan keluarga.
              </p>
              
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Pelatihan Kewirausahaan</li>
                <li>Pengembangan UMKM</li>
                <li>Pendirian dan Pengelolaan Koperasi</li>
                <li>Pembinaan Ekonomi Kreatif</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Calendar size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Pendidikan & Pelatihan</h3>
              
              <p className="text-gray-600 mb-4">
                Program pendidikan dan pelatihan untuk meningkatkan kapasitas dan keterampilan perempuan.
              </p>
              
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Beasiswa Pendidikan</li>
                <li>Pelatihan Kepemimpinan</li>
                <li>Pendampingan Pendidikan Anak</li>
                <li>Kursus Bahasa dan Komputer</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Keluarga & Parenting</h3>
              
              <p className="text-gray-600 mb-4">
                Program keluarga dan parenting untuk mewujudkan keluarga sakinah, mawaddah, warahmah.
              </p>
              
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Seminar Parenting Islami</li>
                <li>Konseling Keluarga</li>
                <li>Pelatihan Pra-Nikah</li>
                <li>Pembinaan Keluarga Sakinah</li>
              </ul>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              {...fadeIn}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advokasi & Perlindungan</h3>
              
              <p className="text-gray-600 mb-4">
                Program advokasi dan perlindungan untuk memperjuangkan hak-hak perempuan dan anak.
              </p>
              
              <ul className="text-gray-600 space-y-1 list-disc list-inside">
                <li>Pendampingan Hukum</li>
                <li>Sosialisasi UU Perlindungan Anak</li>
                <li>Kampanye Anti-Kekerasan</li>
                <li>Advokasi Kebijakan Publik</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Organizational Structure Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Struktur Organisasi"
            subtitle="Kepengurusan NU Muslimah periode 2020-2025"
            light={true}
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                {...fadeIn}
              >
                <h3 className="text-xl font-bold mb-4">Pengurus Harian</h3>
                
                <ul className="space-y-4">
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Ketua Umum</span>
                    <span>Hj. Siti Masruroh, S.Ag</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Wakil Ketua I</span>
                    <span>Hj. Nur Hasanah, M.Pd</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Wakil Ketua II</span>
                    <span>Hj. Fatimah Zuhro, S.E</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Sekretaris Umum</span>
                    <span>Hj. Aminah Zahro, S.Pd</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Bendahara Umum</span>
                    <span>Hj. Siti Aisyah, M.M</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                {...fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Bidang-bidang</h3>
                
                <ul className="space-y-4">
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Bidang Dakwah</span>
                    <span>Ustadzah Hj. Khoiriyah, Lc</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Bidang Pendidikan</span>
                    <span>Dr. Hj. Luthfiyah, M.Pd</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Bidang Sosial</span>
                    <span>Hj. Nur Laila, S.Sos</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Bidang Ekonomi</span>
                    <span>Ir. Hj. Siti Aminah, M.M</span>
                  </li>
                  <li className="flex justify-between items-start">
                    <span className="font-medium">Bidang Kesehatan</span>
                    <span>dr. Hj. Fauziah, Sp.OG</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Prestasi & Pencapaian"
            subtitle="Beberapa prestasi dan pencapaian NU Muslimah"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-green-200 transform md:translate-x-0 translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                <motion.div 
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                  {...fadeIn}
                >
                  <div className="flex-1 order-2 md:order-1 md:pr-8 md:text-right">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Pemberdayaan 1000 UMKM</h3>
                    <p className="text-gray-600">
                      Berhasil memberdayakan lebih dari 1000 UMKM yang dikelola oleh para muslimah di seluruh Indonesia.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white z-10 mb-4 md:mb-0 order-1 md:order-2">
                    2022
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-8"></div>
                </motion.div>
                
                <motion.div 
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex-1 order-2 md:order-1 md:pr-8"></div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white z-10 mb-4 md:mb-0 order-1 md:order-2">
                    2021
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-8 md:text-left">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Penghargaan Pemberdayaan Perempuan</h3>
                    <p className="text-gray-600">
                      Menerima penghargaan dari Kementerian Pemberdayaan Perempuan dan Perlindungan Anak atas kontribusi dalam pemberdayaan perempuan.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex-1 order-2 md:order-1 md:pr-8 md:text-right">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Program Beasiswa Pendidikan</h3>
                    <p className="text-gray-600">
                      Memberikan beasiswa pendidikan kepada 500 anak yatim dan dhuafa dari tingkat SD hingga Perguruan Tinggi.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white z-10 mb-4 md:mb-0 order-1 md:order-2">
                    2020
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-8"></div>
                </motion.div>
                
                <motion.div 
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="flex-1 order-2 md:order-1 md:pr-8"></div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white z-10 mb-4 md:mb-0 order-1 md:order-2">
                    2015
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-8 md:text-left">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Pendirian 50 Koperasi Syariah</h3>
                    <p className="text-gray-600">
                      Mendirikan 50 koperasi syariah di berbagai daerah untuk mendukung kemandirian ekonomi masyarakat.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative flex flex-col md:flex-row items-center md:justify-between"
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="flex-1 order-2 md:order-1 md:pr-8 md:text-right">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Pendirian NU Muslimah</h3>
                    <p className="text-gray-600">
                      Berdirinya NU Muslimah sebagai badan otonom perempuan dari organisasi Nahdlatul Ulama.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white z-10 mb-4 md:mb-0 order-1 md:order-2">
                    2000
                  </div>
                  
                  <div className="flex-1 order-3 md:pl-8"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;