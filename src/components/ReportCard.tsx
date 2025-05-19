import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar } from 'lucide-react';
import { ReportItem } from '../types';

interface ReportCardProps {
  report: ReportItem;
  index?: number;
}

const ReportCard = ({ report, index = 0 }: ReportCardProps) => {
  const { title, description, date, fileUrl, fileSize } = report;
  
  const formattedDate = format(new Date(date), 'MMMM yyyy', { locale: id });
  
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-start">
        <div className="p-3 bg-green-100 rounded-lg mr-4">
          <FileText size={24} className="text-green-700" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {title}
          </h3>
          
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {fileSize}
            </span>
            
            <a 
              href={fileUrl}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-md hover:bg-green-800 transition-colors"
              download
            >
              <Download size={16} className="mr-2" />
              Unduh
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReportCard;