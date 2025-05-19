import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check, Loader2, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const ConsultationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };
  
  const topicOptions = [
    'Keagamaan',
    'Keluarga',
    'Pendidikan',
    'Ekonomi',
    'Kesehatan',
    'Lainnya'
  ];
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pertanyaan</h3>
      
      {isSubmitted ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-start">
          <Check size={20} className="mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Konsultasi Terkirim!</p>
            <p className="mt-1">Terima kasih atas pertanyaan Anda. Tim kami akan segera meninjau dan menghubungi Anda dalam 1-2 hari kerja.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap*
            </label>
            <input
              id="name"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Masukkan nama lengkap Anda"
              {...register('name', { required: 'Nama wajib diisi' })}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email*
              </label>
              <input
                id="email"
                type="email"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="email@example.com"
                {...register('email', { 
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email tidak valid'
                  }
                })}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Nomor Telepon*
              </label>
              <input
                id="phone"
                type="tel"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="08123456789"
                {...register('phone', { 
                  required: 'Nomor telepon wajib diisi',
                  pattern: {
                    value: /^[0-9+\-\s()]*$/,
                    message: 'Nomor telepon tidak valid'
                  }
                })}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
              Topik Konsultasi*
            </label>
            <select
              id="topic"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.topic ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('topic', { required: 'Topik wajib dipilih' })}
            >
              <option value="">Pilih topik konsultasi</option>
              {topicOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.topic && <p className="mt-1 text-sm text-red-600">{errors.topic.message}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pertanyaan*
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tuliskan pertanyaan atau pesan Anda di sini"
              {...register('message', { 
                required: 'Pertanyaan wajib diisi',
                minLength: {
                  value: 20,
                  message: 'Pertanyaan terlalu singkat (minimal 20 karakter)'
                }
              })}
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex justify-center items-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin mr-2" />
                Mengirim...
              </>
            ) : (
              <>
                <Send size={20} className="mr-2" />
                Kirim Pertanyaan
              </>
            )}
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi kami.
            Data Anda akan digunakan hanya untuk keperluan konsultasi.
          </p>
        </form>
      )}
    </motion.div>
  );
};

export default ConsultationForm;