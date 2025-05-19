import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-3 relative inline-block
          ${light ? 'text-white' : 'text-gray-800'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <span className={`absolute -bottom-2 left-0 right-0 h-1 
          ${centered ? 'w-24 left-1/2 -translate-x-1/2' : 'w-20'} 
          ${light ? 'bg-amber-400' : 'bg-green-700'}`}></span>
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`mt-4 text-base md:text-lg ${light ? 'text-gray-200' : 'text-gray-600'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;