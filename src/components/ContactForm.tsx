import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Check, Loader2, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
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
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >      
      {isSubmitted ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-md flex items-start">
          <Check size={20} className="mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-medium">Pesan Terkirim!</p>
            <p className="mt-1">Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
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
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subjek*
            </label>
            <input
              id="subject"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Masukkan subjek pesan"
              {...register('subject', { required: 'Subjek wajib diisi' })}
            />
            {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pesan*
            </label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tuliskan pesan Anda di sini"
              {...register('message', { 
                required: 'Pesan wajib diisi',
                minLength: {
                  value: 20,
                  message: 'Pesan terlalu singkat (minimal 20 karakter)'
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
                Kirim Pesan
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;