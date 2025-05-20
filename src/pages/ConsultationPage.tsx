import { motion } from 'framer-motion';
import { Check, Users, Clock, MessageSquare, BookOpen, Heart } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ConsultationForm from '../components/ConsultationForm';

const ConsultationPage = () => {
  return (
    <div>
      <Hero 
        title="Konsultasi"
        subtitle="Ajukan pertanyaan Anda kepada tim ahli kami"
        backgroundImage="https://images.pexels.com/photos/7462478/pexels-photo-7462478.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Layanan Konsultasi"
            subtitle="Muslimat NU menyediakan layanan konsultasi dalam berbagai bidang untuk membantu muslimah menghadapi berbagai permasalahan"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <motion.div
              className="bg-green-50 border border-green-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-green-700" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Konsultasi Keagamaan</h3>
              
              <p className="text-gray-600 mb-4">
                Konsultasi seputar masalah-masalah keagamaan, seperti ibadah, muamalah, dan masalah fiqih wanita.
              </p>
              
              <div className="border-t border-green-100 pt-4">
                <h4 className="font-medium text-gray-800 mb-2">Topik Bahasan:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-green-700" />
                    <span className="text-gray-600">Thaharah (Bersuci)</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-green-700" />
                    <span className="text-gray-600">Haid, Nifas, dan Istihadhah</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-green-700" />
                    <span className="text-gray-600">Shalat dan Puasa</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-green-700" />
                    <span className="text-gray-600">Masalah Keluarga</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-amber-50 border border-amber-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-amber-700" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Konsultasi Keluarga</h3>
              
              <p className="text-gray-600 mb-4">
                Konsultasi seputar masalah-masalah keluarga, seperti hubungan suami-istri, pendidikan anak, dan harmonisasi keluarga.
              </p>
              
              <div className="border-t border-amber-100 pt-4">
                <h4 className="font-medium text-gray-800 mb-2">Topik Bahasan:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-amber-700" />
                    <span className="text-gray-600">Persiapan Pernikahan</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-amber-700" />
                    <span className="text-gray-600">Komunikasi Suami Istri</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-amber-700" />
                    <span className="text-gray-600">Pendidikan Anak</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-amber-700" />
                    <span className="text-gray-600">Masalah Rumah Tangga</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-blue-50 border border-blue-100 rounded-lg p-6 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-blue-700" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-2">Konsultasi Kesehatan</h3>
              
              <p className="text-gray-600 mb-4">
                Konsultasi seputar masalah-masalah kesehatan perempuan dan keluarga dengan para ahli kesehatan.
              </p>
              
              <div className="border-t border-blue-100 pt-4">
                <h4 className="font-medium text-gray-800 mb-2">Topik Bahasan:</h4>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-blue-700" />
                    <span className="text-gray-600">Kesehatan Reproduksi</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-blue-700" />
                    <span className="text-gray-600">Kehamilan dan Persalinan</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-blue-700" />
                    <span className="text-gray-600">Gizi Ibu dan Anak</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="mt-0.5 mr-2 text-blue-700" />
                    <span className="text-gray-600">Penyakit Umum</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 pattern-background">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bagaimana Cara Kerjanya"
            subtitle="Proses pengajuan konsultasi kepada Muslimat NU"
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Isi Formulir</h3>
                <p className="text-gray-600">
                  Isi formulir konsultasi dengan lengkap, termasuk identitas diri dan pertanyaan yang ingin diajukan.
                </p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Verifikasi</h3>
                <p className="text-gray-600">
                  Tim kami akan memverifikasi pertanyaan dan mengirimkan ke ahli yang sesuai dengan topik konsultasi.
                </p>
              </motion.div>
              
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Jawaban</h3>
                <p className="text-gray-600">
                  Jawaban akan dikirimkan melalui email atau WhatsApp dalam waktu 1-2 hari kerja.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tim Konsultan"
            subtitle="Para ahli yang siap membantu menjawab pertanyaan Anda"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg" 
                  alt="Ustadzah Hj. Siti Aminah"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-1">Ustadzah Hj. Siti Aminah</h3>
              <p className="text-green-700 mb-3">Konsultan Fiqih Wanita</p>
              <p className="text-gray-600 text-sm">
                Lulusan Universitas Al-Azhar, Kairo dengan spesialisasi Fiqih Wanita
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg" 
                  alt="Dr. Hj. Fauziah"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-1">Dr. Hj. Fauziah</h3>
              <p className="text-green-700 mb-3">Konsultan Kesehatan</p>
              <p className="text-gray-600 text-sm">
                Dokter spesialis Obstetri dan Ginekologi dengan pengalaman 15 tahun
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/5905593/pexels-photo-5905593.jpeg" 
                  alt="Ustadzah Hj. Luthfiyah"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-1">Ustadzah Hj. Luthfiyah</h3>
              <p className="text-green-700 mb-3">Konsultan Keluarga</p>
              <p className="text-gray-600 text-sm">
                Konselor keluarga dengan spesialisasi pendidikan anak dan remaja
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg" 
                  alt="Ir. Hj. Siti Aminah"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 mb-1">Ir. Hj. Siti Aminah</h3>
              <p className="text-green-700 mb-3">Konsultan Ekonomi</p>
              <p className="text-gray-600 text-sm">
                Praktisi ekonomi syariah dengan pengalaman dalam pengembangan UMKM
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Consultation Form */}
      <section className="py-16 bg-gray-50 pattern-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle 
              title="Formulir Konsultasi"
              subtitle="Ajukan pertanyaan Anda dengan mengisi formulir di bawah ini"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="md:col-span-2">
                <ConsultationForm />
              </div>
              
              <div>
                <motion.div
                  className="bg-white rounded-lg shadow-md p-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <Clock size={20} className="mr-2 text-green-700" />
                    Waktu Respons
                  </h3>
                  
                  <p className="text-gray-600">
                    Pertanyaan Anda akan dijawab dalam waktu 1-2 hari kerja, tergantung pada kompleksitas pertanyaan dan ketersediaan konsultan.
                  </p>
                </motion.div>
                
                <motion.div
                  className="bg-white rounded-lg shadow-md p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                    <MessageSquare size={20} className="mr-2 text-green-700" />
                    Konsultasi Tatap Muka
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    Untuk konsultasi yang memerlukan tatap muka langsung, silakan hubungi nomor berikut untuk membuat janji:
                  </p>
                  
                  <p className="text-green-700 font-medium">
                    +62 812 3456 7890
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;