import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, FilterX, FileText } from 'lucide-react';
import Hero from '../components/Hero';
import ReportCard from '../components/ReportCard';
import { reportsData } from '../data/reports';
import { ReportItem } from '../types';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const ReportsPage = () => {
  const [filteredReports, setFilteredReports] = useState<ReportItem[]>(reportsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  
  // Get unique categories and years
  const categories = ['Semua', ...new Set(reportsData.map(report => report.category))];
  
  const years = ['Semua', ...new Set(reportsData.map(report => 
    new Date(report.date).getFullYear().toString()
  ))].sort((a, b) => (b === 'Semua' ? -1 : a === 'Semua' ? 1 : parseInt(b) - parseInt(a)));
  
  // Handle filtering
  useEffect(() => {
    let result = [...reportsData];
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(report => 
        report.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        report.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'Semua') {
      result = result.filter(report => report.category === selectedCategory);
    }
    
    // Filter by year
    if (selectedYear && selectedYear !== 'Semua') {
      result = result.filter(report => 
        new Date(report.date).getFullYear().toString() === selectedYear
      );
    }
    
    // Sort by date (newest first)
    result = result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setFilteredReports(result);
  }, [searchTerm, selectedCategory, selectedYear]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedYear('');
  };
  
  // Group reports by month and year
  const groupedReports: Record<string, ReportItem[]> = {};
  
  filteredReports.forEach(report => {
    const date = new Date(report.date);
    const monthYear = format(date, 'MMMM yyyy', { locale: id });
    
    if (!groupedReports[monthYear]) {
      groupedReports[monthYear] = [];
    }
    
    groupedReports[monthYear].push(report);
  });
  
  return (
    <div>
      <Hero 
        title="Laporan Bulanan"
        subtitle="Transparansi kegiatan dan keuangan NU Muslimah"
        backgroundImage="https://images.pexels.com/photos/586079/pexels-photo-586079.jpeg"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input 
                  type="text"
                  className="w-full px-4 py-3 pl-12 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Cari laporan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                
                {(searchTerm || selectedCategory !== '' || selectedYear !== '') && (
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
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="flex-none">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kategori:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category === 'Semua' ? '' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-none">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tahun:
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {years.map(year => (
                    <option key={year} value={year === 'Semua' ? '' : year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {Object.keys(groupedReports).length > 0 ? (
            <div className="space-y-12">
              {Object.entries(groupedReports).map(([monthYear, reports], groupIndex) => (
                <div key={monthYear}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <FileText size={24} className="mr-2 text-green-700" />
                    {monthYear}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {reports.map((report, index) => (
                      <ReportCard 
                        key={report.id} 
                        report={report} 
                        index={groupIndex * 10 + index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada Laporan</h3>
              <p className="text-gray-500">
                Tidak ada laporan yang sesuai dengan pencarian Anda. Silakan coba kata kunci, kategori, atau tahun lain.
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

export default ReportsPage;