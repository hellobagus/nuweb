import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      <Hero 
        title="Hubungi Kami"
        subtitle="Kami siap menjawab pertanyaan dan mendengarkan masukan Anda"
        backgroundImage="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <SectionTitle 
                  title="Informasi Kontak"
                  centered={false}
                />
                
                <div className="space-y-6 mt-8">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <MapPin className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Kantor Pusat</h3>
                      <p className="text-gray-600">
                        Jl. Raya Darmo No. 123, Surabaya, Jawa Timur 60241, Indonesia
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Phone className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Telepon</h3>
                      <p className="text-gray-600">
                        +62 812 3456 7890
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Mail className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">
                        info@numuslimah.org
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Clock className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Jam Operasional</h3>
                      <p className="text-gray-600">
                        Senin - Jumat: 08.00 - 16.00 WIB<br />
                        Sabtu: 08.00 - 12.00 WIB<br />
                        Minggu & Hari Libur: Tutup
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                {/* Map */}
                <div className="mt-10">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">Lokasi Kami</h3>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.654123867159!2d112.73292731479!3d-7.290764394738548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb96b044c3b5%3A0x14e8757e26a72a87!2sJl.%20Darmo%2C%20Surabaya%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1635345453123!5m2!1sid!2sid" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy"
                      title="NU Muslimah Location"
                      className="w-full"
                    ></iframe>
                  </div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-green-700 hover:text-green-800 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Buka di Google Maps</span>
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <SectionTitle 
                  title="Kirim Pesan"
                  subtitle="Isi formulir di bawah ini untuk mengirim pesan kepada kami"
                  centered={false}
                />
                
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;