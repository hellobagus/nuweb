import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import { Calendar, Clock, User, Play, Video } from 'lucide-react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import { StreamItem } from '../types';
import { getLiveStreams, getUpcomingStreams, getPastStreams, getStreamById } from '../data/streams';

const LiveStreamingPage = () => {
  const liveStreams = getLiveStreams();
  const upcomingStreams = getUpcomingStreams();
  const pastStreams = getPastStreams(6);
  
  const [currentStream, setCurrentStream] = useState<StreamItem | null>(
    liveStreams.length > 0 ? liveStreams[0] : null
  );
  
  return (
    <div>
      <Hero 
        title="Live Streaming Dakwah NU"
        subtitle="Ikuti kajian dan dakwah Muslimat NU secara langsung"
        backgroundImage="https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg"
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Video Player */}
          {currentStream ? (
            <div className="mb-12">
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden mb-6">
                <ReactPlayer
                  url={currentStream.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                  playing={currentStream.isLive}
                  style={{ aspectRatio: '16 / 9' }}
                  className="w-full h-full"
                />
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {currentStream.title}
                  </h2>
                  
                  {currentStream.isLive && (
                    <span className="inline-flex items-center bg-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      <span className="w-2 h-2 bg-white rounded-full block mr-2 animate-pulse"></span>
                      LIVE
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{currentStream.date}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{currentStream.time}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{currentStream.presenter}</span>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  {currentStream.description}
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto mb-12 bg-gray-100 rounded-lg p-8 text-center">
              <Video size={48} className="mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Tidak Ada Siaran Langsung
              </h2>
              <p className="text-gray-600">
                Saat ini tidak ada siaran langsung yang sedang berlangsung. Silakan cek jadwal upcoming untuk informasi siaran selanjutnya.
              </p>
            </div>
          )}
          
          {/* Live Streams */}
          {liveStreams.length > 0 && (
            <div className="mb-16">
              <SectionTitle 
                title="Sedang Live!"
                subtitle="Kajian dan dakwah yang sedang berlangsung"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {liveStreams.map((stream, index) => (
                  <motion.div
                    key={stream.id}
                    className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                      currentStream?.id === stream.id ? 'ring-2 ring-green-700' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setCurrentStream(stream)}
                  >
                    <div className="relative">
                      <img 
                        src={stream.thumbnail} 
                        alt={stream.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                        <span className="w-2 h-2 bg-white rounded-full block mr-2 animate-pulse"></span>
                        LIVE
                      </div>
                      
                      {currentStream?.id !== stream.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play size={28} className="text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                        {stream.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <User size={14} className="mr-1" />
                        <span className="line-clamp-1">{stream.presenter}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {stream.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Upcoming Streams */}
          {upcomingStreams.length > 0 && (
            <div className="mb-16">
              <SectionTitle 
                title="Akan Datang"
                subtitle="Jadwal kajian dan dakwah mendatang"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {upcomingStreams.map((stream, index) => (
                  <motion.div
                    key={stream.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <img 
                        src={stream.thumbnail} 
                        alt={stream.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Akan Datang
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {stream.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{stream.date}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{stream.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <User size={14} className="mr-1" />
                        <span className="line-clamp-1">{stream.presenter}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {stream.description}
                      </p>
                      
                      <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm font-medium">
                        Ingatkan Saya
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
          
          {/* Past Streams */}
          {pastStreams.length > 0 && (
            <div>
              <SectionTitle 
                title="Arsip Streaming"
                subtitle="Tonton kembali kajian dan dakwah yang telah berlalu"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {pastStreams.map((stream, index) => (
                  <motion.div
                    key={stream.id}
                    className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer ${
                      currentStream?.id === stream.id ? 'ring-2 ring-green-700' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setCurrentStream(stream)}
                  >
                    <div className="relative">
                      <img 
                        src={stream.thumbnail} 
                        alt={stream.title}
                        className="w-full h-48 object-cover"
                      />
                      
                      {currentStream?.id !== stream.id && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play size={28} className="text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                        {stream.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 mb-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{stream.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <User size={14} className="mr-1" />
                        <span className="line-clamp-1">{stream.presenter}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors font-medium">
                  Lihat Lebih Banyak
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LiveStreamingPage;