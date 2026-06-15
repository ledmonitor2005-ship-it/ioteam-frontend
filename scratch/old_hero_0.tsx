import { motion } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';
// Đã đổi tên file ảnh import thành sankey-bg.jpg theo đúng yêu cầu
import heroBg from '../../imports/sankey-bg.jpg';
import emsDashboard from '../../imports/ems-dashboard.png';

export function Hero() {
  const badges = [
    { icon: CheckCircle2, text: 'ISO 50001' },
    { icon: CheckCircle2, text: 'Kiểm toán năng lượng' },
    { icon: CheckCircle2, text: 'Giám sát Real-time' },
    { icon: CheckCircle2, text: 'Nền tảng IoT' },
    { icon: CheckCircle2, text: 'Công trình xanh' },
    { icon: CheckCircle2, text: 'Sẵn sàng ESG' },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16 min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Lớp phủ (Overlay) màu tối giúp chữ Trắng nổi bật hoàn toàn trên nền biểu đồ Sankey */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Dot grid trang trí */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Đã sửa Grid cứng thành Flex-col (di động) và Grid 2 cột (máy tính) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* CỘT TRÁI - NỘI DUNG */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Tiêu đề đổi sang màu Trắng/Xanh ngọc để nổi bật trên nền tối */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-tight mb-4 tracking-tight">
              Chuyển đổi số năng lượng cho doanh nghiệp công nghiệp
            </h1>

            <p className="text-base md:text-xl text-green-100/90 leading-relaxed mb-8 max-w-xl">
              Giám sát – Phân tích – Tối ưu tiêu thụ năng lượng theo thời gian thực bằng nền tảng phần mềm EMS chuyên sâu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold px-8 py-3.5 hover:from-green-600 hover:to-emerald-600 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2 text-lg">
                <Play size={20} />
                Xem demo hệ thống
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-green-400 text-green-400 rounded-xl font-bold px-8 py-3.5 hover:bg-green-400 hover:text-slate-900 transition-all text-lg flex justify-center">
                Đăng ký tư vấn
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.06 }}
                  className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-lg backdrop-blur-md px-3 py-2.5"
                >
                  <badge.icon className="text-green-400 flex-shrink-0" size={18} />
                  <span className="text-white text-xs md:text-sm font-semibold">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CỘT PHẢI - ẢNH DASHBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2 w-full"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-green-400/30">
              <img
                src={emsDashboard}
                alt="EMS Dashboard"
                className="w-full h-auto object-cover"
              />
              
              {/* Ẩn bớt Floating Card trên Mobile để đỡ rối */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:block absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-green-200 rounded-xl shadow-xl p-3 md:p-4"
              >
                <div className="text-green-600 font-bold text-xs mb-1">Tổng tiêu thụ hôm nay</div>
                <div className="font-extrabold text-green-800 text-xl md:text-2xl">273.7 kWh</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:block absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-xl shadow-xl p-3 md:p-4"
              >
                <div className="text-emerald-600 font-bold text-xs mb-1">Chi phí ước tính</div>
                <div className="font-extrabold text-emerald-700 text-xl md:text-2xl">596 Nghìn</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}