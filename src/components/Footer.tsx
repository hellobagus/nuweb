import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Muslimat NU</h3>
            <p className="mb-4">
              Muslimat NU Muslimah adalah organisasi perempuan yang bergerak dalam bidang keagamaan, sosial, dan pemberdayaan perempuan.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-amber-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-300 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-amber-300 transition-colors">Beranda</Link></li>
              <li><Link to="/berita" className="hover:text-amber-300 transition-colors">Berita</Link></li>
              <li><Link to="/umkm" className="hover:text-amber-300 transition-colors">UMKM</Link></li>
              <li><Link to="/koperasi" className="hover:text-amber-300 transition-colors">Koperasi</Link></li>
              <li><Link to="/konsultasi" className="hover:text-amber-300 transition-colors">Konsultasi</Link></li>
              <li><Link to="/about" className="hover:text-amber-300 transition-colors">Tentang Kami</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Program</h3>
            <ul className="space-y-2">
              <li><Link to="/live-streaming" className="hover:text-amber-300 transition-colors">Live Streaming</Link></li>
              <li><Link to="/laporan-bulanan" className="hover:text-amber-300 transition-colors">Laporan Bulanan</Link></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Kegiatan Sosial</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Pendidikan</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Kajian Rutin</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Raya Darmo No. 123, Surabaya, Jawa Timur 60241, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@numuslimah.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-6 text-center">
          <p>&copy; {currentYear} Muslimat NU. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;