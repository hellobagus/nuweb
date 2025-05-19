import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    ktpNumber: '',
    phoneNumber: '',
    kkNumber: '',
    address: '',
    city: '',
    postalCode: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Basic validation for each step
    if (step === 1 && (!formData.fullName || !formData.ktpNumber || !formData.phoneNumber)) {
      alert('Harap isi semua kolom di langkah ini.');
      return;
    }
    if (step === 2 && (!formData.kkNumber || !formData.address || !formData.city || !formData.postalCode)) {
      alert('Harap isi semua kolom di langkah ini.');
      return;
    }
    if (
      step === 3 &&
      (!formData.email || !formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword)
    ) {
      alert('Harap isi semua kolom dan pastikan kata sandi cocok.');
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual API call
    console.log('Registration Data:', formData);
    alert('Pendaftaran berhasil dikirim!');
    setFormData({
      fullName: '',
      ktpNumber: '',
      phoneNumber: '',
      kkNumber: '',
      address: '',
      city: '',
      postalCode: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setStep(1);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Daftar Akun</h2>
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-700 text-white' : 'bg-gray-300 text-gray-600'}`}>
                1
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-700 text-white' : 'bg-gray-300 text-gray-600'}`}>
                2
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-700 text-white' : 'bg-gray-300 text-gray-600'}`}>
                3
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="fullName">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="ktpNumber">
                    Nomor KTP
                  </label>
                  <input
                    type="text"
                    id="ktpNumber"
                    name="ktpNumber"
                    value={formData.ktpNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="kkNumber">
                    Nomor Kartu Keluarga
                  </label>
                  <input
                    type="text"
                    id="kkNumber"
                    name="kkNumber"
                    value={formData.kkNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="address">
                    Alamat
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    rows={3}
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="city">
                    Kota
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="postalCode">
                    Kode Pos
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="password">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                    Konfirmasi Kata Sandi
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
              </div>
            )}
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Kembali
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
                >
                  Lanjut
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
                >
                  Daftar
                </button>
              )}
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Sudah punya akun?{' '}
            <Link to="/login" className="text-green-700 hover:underline">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;