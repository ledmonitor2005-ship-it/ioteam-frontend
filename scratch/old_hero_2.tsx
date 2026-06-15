import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Thêm AnimatePresence cho hiệu ứng Zoom
import { Play, CheckCircle2, X } from 'lucide-react';

import heroBg from '../../imports/hero-dashboard.jpg';
import sankeyImg from '../../imports/sankey.jpg';

export function Hero() {
  const [isZoomed, setIsZoomed] = useState(false); // State quản lý trạng thái Zoom ảnh

  const badges = [
    { icon: CheckCircle2, text: 'ISO 50001' },
    { icon: CheckCircle2, text: 'Kiểm toán năng lượng' },
    { icon: CheckCircle2, text: 'Giám sát Real-time' },
    { icon: CheckCircle2, text: 'Nền tảng IoT' },
    { icon: CheckCircle2, text: 'Công trình xanh' },
    { icon: CheckCircle2, text: 'Sẵn sàng ESG' },
  ];

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Nền sáng mờ bên trái */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(110deg, rgba(236,253,245,0.95) 0%, rgba(209,250,229,0.88) 35%, rgba(187,247,208,0.40) 65%, rgba(0,0,0,0.00) 100%)',
          }}
        />
        
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(22,163,74,0.08) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />

        <div className="w-full px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* ════════ CỘT TRÁI - NỘI DUNG ════════ */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center order-2 lg:order-1"
            >
              {/* ② HEADING: Dùng dải màu cực đậm + text-shadow + non-breaking space (&nbsp;) */}
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold bg-gradient-to-r from-green-950 via-emerald-900 to-teal-950 bg-clip-text text-transparent leading-[1.25] mb-5 tracking-tight drop-shadow-sm">
                Chuyển đổi số năng lượng cho doanh&nbsp;nghiệp công&nbsp;nghiệp
              </h1>

              {/* ③ PARAGRAPH: Biến 3 chức năng thành Chips, Text đậm màu và giãn dòng */}
              <div className="mb-8 max-w-[32rem]">
                <div className="flex flex-wrap gap-2.5 mb-3">
                  <span className="px-3.5 py-1.5 bg-green-600/10 text-green-800 font-bold text-sm rounded-full border border-green-600/20 shadow-sm">
                    Giám sát
                  </span>
                  <span className="px-3.5 py-1.5 bg-emerald-600/10 text-emerald-800 font-bold text-sm rounded-full border border-emerald-600/20 shadow-sm">
                    Phân tích
                  </span>
                  <span className="px-3.5 py-1.5 bg-teal-600/10 text-teal-800 font-bold text-sm rounded-full border border-teal-600/20 shadow-sm">
                    Tối ưu
                  </span>
                </div>
                <p className="text-[1.05rem] md:text-[1.15rem] text-[#1f3a2a] leading-[1.75] font-medium">
                  tiêu thụ năng lượng theo thời gian thực bằng nền tảng phần mềm EMS chuyên sâu.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10">
                <button className="w-full sm:w-auto bg-gradient-to-r from-green-700 to-emerald-600 text-white rounded-xl font-bold px-6 py-3.5 hover:from-green-800 hover:to-emerald-700 transition-all shadow-[0_6px_20px_rgba(22,163,74,0.25)] flex items-center justify-center gap-2 text-base md:text-lg">
                  <Play size={20} />
                  Xem demo hệ thống
                </button>
                <button className="w-full sm:w-auto bg-white border-2 border-green-600 text-green-800 rounded-xl font-bold px-6 py-3.5 hover:bg-green-50 transition-all shadow-sm text-base md:text-lg flex justify-center">
                  Đăng ký tư vấn
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                {badges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.06 }}
                    className="flex items-center gap-2 bg-white/80 border border-green-200/80 rounded-lg backdrop-blur-sm px-3 py-2.5 shadow-sm"
                  >
                    <badge.icon className="text-green-700 flex-shrink-0" size={16} />
                    <span className="text-[#1f3a2a] text-xs md:text-sm font-semibold">
                      {badge.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ════════ CỘT PHẢI - ẢNH SANKEY (① Parallax + Click to zoom) ════════ */}
            <div className="relative order-1 lg:order-2 w-full mt-4 lg:mt-0 flex justify-center">
              {/* Đã xóa 2 Floating Cards */}
              
              <motion.div
                layoutId="hero-sankey-image" // LayoutId gắn kết ảnh nhỏ và ảnh to
                onClick={() => setIsZoomed(true)}
                className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(5,46,22,0.3)] border-[1.5px] border-green-400/40 bg-white cursor-zoom-in"
                // Hiệu ứng "Thở" tinh tế 6 giây
                animate={{ y: [0, -8, 0], scale: [1, 1.015, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src={sankeyImg}
                  alt="Biểu đồ phân tích luồng năng lượng Sankey"
                  className="w-full h-auto object-cover block"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ LIGHTBOX TOÀN MÀN HÌNH (Hiển thị khi click vào ảnh) ════════ */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out"
          >
            <button 
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 backdrop-blur-sm transition-all z-10"
            >
              <X size={28} />
            </button>
            
            <motion.img
              layoutId="hero-sankey-image" // Gắn chung LayoutId để nó bay mượt mà ra giữa
              src={sankeyImg}
              alt="Sankey Diagram Fullscreen"
              className="w-full max-w-6xl max-h-[90vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}