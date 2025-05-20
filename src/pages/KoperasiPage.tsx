import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FilterX } from 'lucide-react';
import Hero from '../components/Hero';
import KoperasiCard from '../components/KoperasiCard';
import { koperasiData } from '../data/koperasi';

const KoperasiPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  // State for loan calculator
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [isMember, setIsMember] = useState(true);
  // State for loan application form
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    memberId: '',
    loanAmount: '',
    loanTerm: '',
    purpose: '',
  });
  
  // Get unique types
  const types = ['Semua', ...new Set(koperasiData.map(koperasi => koperasi.type))];
  
  // Filter koperasi based on search and type
  const filteredKoperasi = koperasiData.filter(koperasi => {
    const matchesSearch = searchTerm === '' || 
      koperasi.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      koperasi.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === '' || selectedType === 'Semua' || 
      koperasi.type === selectedType;
    
    return matchesSearch && matchesType;
  });
  
  // Loan calculator logic
  const interestRate = isMember ? 0.08 : 0.12; // 8% for members, 12% for non-members
  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 12;
    const numberOfPayments = loanTerm;
    const monthlyPayment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
  };
  
  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send formData to an API
    console.log('Loan Application Submitted:', formData);
    alert('Pengajuan pinjaman berhasil dikirim!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      memberId: '',
      loanAmount: '',
      loanTerm: '',
      purpose: '',
    });
  };
  
  return (
    <div>
      <Hero 
        title="Koperasi Muslimat NU"
        subtitle="Koperasi yang dikelola oleh Muslimat NU untuk kesejahteraan anggota"
        backgroundImage="https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg"
      />
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Loan Calculator Section */}
          <div className="max-w-4xl mx-auto mb-12 p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kalkulator Pinjaman</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Jumlah Pinjaman (Rp)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="1000000"
                  step="100000"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Jangka Waktu (Bulan)</label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value={6}>6 Bulan</option>
                  <option value={12}>12 Bulan</option>
                  <option value={24}>24 Bulan</option>
                  <option value={36}>36 Bulan</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Status Keanggotaan</label>
                <select
                  value={isMember ? 'member' : 'non-member'}
                  onChange={(e) => setIsMember(e.target.value === 'member')}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="member">Anggota</option>
                  <option value="non-member">Non-Anggota</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Bunga Tahunan</label>
                <p className="px-4 py-2 bg-gray-200 rounded-md">{(interestRate * 100).toFixed(1)}%</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-800">
                Estimasi Pembayaran Bulanan: Rp {calculateMonthlyPayment()}
              </p>
            </div>
          </div>
          
          {/* Loan Application Form */}
          <div className="max-w-4xl mx-auto mb-12 p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Formulir Pengajuan Pinjaman</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                {isMember && (
                  <div>
                    <label className="block text-gray-700 mb-2">ID Anggota</label>
                    <input
                      type="text"
                      name="memberId"
                      value={formData.memberId}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                      required={isMember}
                    />
                  </div>
                )}
                <div>
                  <label className="block text-gray-700 mb-2">Jumlah Pinjaman (Rp)</label>
                  <input
                    type="number"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="1000000"
                    step="100000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Jangka Waktu (Bulan)</label>
                  <select
                    name="loanTerm"
                    value={formData.loanTerm}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Pilih Jangka Waktu</option>
                    <option value="6">6 Bulan</option>
                    <option value="12">12 Bulan</option>
                    <option value="24">24 Bulan</option>
                    <option value="36">36 Bulan</option>
                  </select>
                </div>
                <div className="md:col-span-2">
   <label className="block text-gray-700 mb-2">Cabang/Wilayah Anggota</label>
   <select
     name="loanTerm"
     value={formData.loanTerm}
     onChange={handleFormChange}
     className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
     required
   >
    <option value="">Pilih Cabang / Wilayah</option>
<option value="1">Aceh</option>
<option value="2">Sumatera Utara</option>
<option value="3">Sumatera Barat</option>
<option value="4">Riau</option>
<option value="5">Kepulauan Riau</option>
<option value="6">Jambi</option>
<option value="7">Sumatera Selatan</option>
<option value="8">Bangka Belitung</option>
<option value="9">Bengkulu</option>
<option value="10">Lampung</option>
<option value="11">DKI Jakarta</option>
<option value="12">Jawa Barat</option>
<option value="13">Banten</option>
<option value="14">Jawa Tengah</option>
<option value="15">DI Yogyakarta</option>
<option value="16">Jawa Timur</option>
<option value="17">Bali</option>
<option value="18">Nusa Tenggara Barat</option>
<option value="19">Nusa Tenggara Timur</option>
<option value="20">Kalimantan Barat</option>
<option value="21">Kalimantan Tengah</option>
<option value="22">Kalimantan Selatan</option>
<option value="23">Kalimantan Timur</option>
<option value="24">Kalimantan Utara</option>
<option value="25">Sulawesi Utara</option>
<option value="26">Gorontalo</option>
<option value="27">Sulawesi Tengah</option>
<option value="28">Sulawesi Selatan</option>
<option value="29">Sulawesi Tenggara</option>
<option value="30">Sulawesi Barat</option>
<option value="31">Maluku</option>
<option value="32">Maluku Utara</option>
<option value="33">Papua</option>
<option value="34">Papua Barat</option>
<option value="35">Papua Selatan</option>
<option value="36">Papua Tengah</option>
<option value="37">Papua Pegunungan</option>
<option value="38">Papua Barat Daya</option>
   </select>
 </div>
                <div className="md:col-span-2">
                  <label className="block text-gray-700 mb-2">Tujuan Pinjaman</label>
                  <textarea
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
                >
                  Ajukan Pinjaman
                </button>
              </div>
            </form>
          </div>
          
          {/* Existing Search and Filter Section */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative">
                <input 
                  type="text"
                  className="w-full px-4 py-3 pl-12 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Cari koperasi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                
                {(searchTerm || selectedType !== '') && (
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
              {types.map(type => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedType === type || (type === 'Semua' && selectedType === '')
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  onClick={() => setSelectedType(type === 'Semua' ? '' : type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {filteredKoperasi.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredKoperasi.map((koperasi, index) => (
                <KoperasiCard key={koperasi.id} koperasi={koperasi} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-gray-700 mb-2">Tidak Ada Koperasi</h3>
              <p className="text-gray-500">
                Tidak ada koperasi yang sesuai dengan pencarian Anda. Silakan coba kata kunci atau tipe lain.
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

export default KoperasiPage;