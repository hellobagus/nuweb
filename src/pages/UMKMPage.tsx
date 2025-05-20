import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FilterX } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import UMKMCard from '../components/UMKMCard';
import { umkmData } from '../data/umkm';

const UMKMPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Get unique categories
  const categories = ['Semua', ...new Set(umkmData.map(umkm => umkm.category))];
  
  // Filter UMKM based on search and category
  const filteredUMKM = umkmData.filter(umkm => {
    const matchesSearch = searchTerm === '' || 
      umkm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      umkm.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Semua' || 
      umkm.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };
  
  return (
    <div>
      <Hero 
        title="UMKM Binaan"
        subtitle="Usaha Mikro Kecil dan Menengah yang dibina oleh Muslimat NU"
        backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input 
                  type="text"
                  className="w-full px-4 py-3 pl-12 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Cari UMKM..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                
                {(searchTerm || selectedCategory !== '') && (
                  <button 
                    type="button" 
                    onClick={clearFilters}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear filters"
                  >
                    <FilterX size={20} />
                  </button>
                )}
              </div>
            </form>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category || (category === 'Semua' && selectedCategory === '')
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  onClick={() => setSelectedCategory(category === 'Semua' ? '' : category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredUMKM.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUMKM.map((umkm, index) => (
                <UMKMCard key={umkm.id} umkm={umkm} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada UMKM</h3>
              <p className="text-gray-500">
                Tidak ada UMKM yang sesuai dengan pencarian Anda. Silakan coba kata kunci atau kategori lain.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 inline-flex items-center px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
              >
                <FilterX size={18} className="mr-2" />
                Hapus Filter
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UMKMPage;