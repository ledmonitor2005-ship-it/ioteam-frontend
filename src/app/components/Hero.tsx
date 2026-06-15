import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { CalendarDays } from 'lucide-react';
import heroVideo from './2.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white text-center leading-tight mb-8 drop-shadow-lg uppercase flex flex-col items-center w-full"
        >
          <span className="block w-full text-center">GIÁM SÁT VÀ TỐI ƯU SỬ DỤNG NĂNG LƯỢNG</span>
          <span className="block w-full text-center mt-2">CHO DOANH NGHIỆP</span>
        </motion.h1>

        {/* Subtitle Block - Removed background layer and added drop shadow to text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center max-w-3xl mb-10"
        >
          <p className="text-white text-lg md:text-xl font-sapo leading-relaxed drop-shadow-lg">
            <span className="text-emerald-400 font-bold">Chuyển đổi số</span> năng lượng với IoT công nghiệp: <span className="text-emerald-400 font-bold">giám sát thời gian thực</span> từng thiết bị, <span className="text-emerald-400 font-bold">giảm chi phí</span> điện năng, <span className="text-emerald-400 font-bold">tự động kiểm toán</span> năng lượng 24/7 và đưa doanh nghiệp đạt chuẩn <span className="text-emerald-400 font-bold">ISO 50001</span> - <span className="text-emerald-400 font-bold">ESG ready</span> trên lộ trình <span className="text-emerald-400 font-bold">Net Zero.</span>
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <button className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] text-white font-button py-3 px-8 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center">
            Xem Demo Giải Pháp
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] text-white font-button py-3 px-8 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center gap-2">
            <CalendarDays size={20} />
            Liên Hệ Với Chúng Tôi
          </button>
        </motion.div>

        {/* Hashtags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-3 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {['Giải pháp EnMS', 'Quản lý năng lượng', 'Giám sát tiêu thụ', 'ISO 50001', 'ESG ready'].map((tag, i) => (
              <span key={i} className="text-emerald-400 font-mono text-sm tracking-wider border border-emerald-400/30 px-3 py-1 rounded-full bg-emerald-900/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['IoT công nghiệp', 'IIoT', 'Công trình xanh', 'Kiểm toán năng lượng'].map((tag, i) => (
              <span key={i + 5} className="text-emerald-400 font-mono text-sm tracking-wider border border-emerald-400/30 px-3 py-1 rounded-full bg-emerald-900/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
