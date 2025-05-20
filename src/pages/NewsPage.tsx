import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import NewsCard from '../components/NewsCard';
import { newsData } from '../data/news';
import { NewsItem } from '../types';

const NewsPage = () => {
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Get unique categories
  const categories = ['Semua', ...new Set(newsData.map(news => news.category))];
  
  // Handle search and filtering
  useEffect(() => {
    let result = newsData;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(news => 
        news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'Semua') {
      result = result.filter(news => news.category === selectedCategory);
    }
    
    // Sort by date (newest first)
    result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setFilteredNews(result);
  }, [searchTerm, selectedCategory]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };
  
  return (
    <div>
      <Hero 
        title="Berita & Artikel"
        subtitle="Informasi terkini seputar kegiatan dan program Muslimat NU"
        backgroundImage="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input 
                  type="text"
                  className="w-full px-4 py-3 pl-12 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Cari berita atau artikel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
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
          
          {filteredNews.length > 0 ? (
            <>
              {/* Featured News (first item) */}
              <div className="mb-12">
                <NewsCard news={filteredNews[0]} featured={true} />
              </div>
              
              {/* Rest of News */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.slice(1).map((news, index) => (
                  <NewsCard key={news.id} news={news} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada Berita</h3>
              <p className="text-gray-500">
                Tidak ada berita yang sesuai dengan pencarian Anda. Silakan coba kata kunci atau kategori lain.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;