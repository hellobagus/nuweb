import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
}

const Hero = ({ title, subtitle, backgroundImage, height = "h-[60vh]" }: HeroProps) => {
  return (
    <div 
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Hero;