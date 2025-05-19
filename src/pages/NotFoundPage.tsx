import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 pattern-background">
      <div className="container px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-green-700 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-8">
              Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
              >
                <Home size={20} className="mr-2" />
                Kembali ke Beranda
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Kembali
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;