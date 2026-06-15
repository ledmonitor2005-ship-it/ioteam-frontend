import { motion } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';

// 1. Khôi phục lại ảnh nền gốc của hệ thống
import heroBg from '../../imports/hero-dashboard.jpg';

// 2. Thay thế ảnh minh họa bằng biểu đồ Sankey 
// (LƯU Ý: Đổi 'sankey.jpg' thành đúng tên và đuôi file ảnh Sankey của bạn trong thư mục imports)
import sankeyImg from '../../imports/sankey.jpg'; 

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
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Khôi phục dải gradient sáng bên trái để làm nền cho chữ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(110deg, rgba(236,253,245,0.92) 0%, rgba(209,250,229,0.85) 30%, rgba(187,247,208,0.40) 60%, rgba(0,0,0,0.00) 100%)',
        }}
      />
      
      {/* Dot grid trang trí */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(22,163,74,0.08) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="w-full px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Cấu trúc chia cột tự động gập trên Mobile (Responsive) */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* ════════ CỘT TRÁI - NỘI DUNG ════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Đã tinh chỉnh màu chữ đậm hơn để KHÔNG BỊ CHÌM vào nền sáng */}
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold bg-gradient-to-r from-green-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-[1.2] mb-4 md:mb-5 tracking-tight">
              Chuyển đổi số năng lượng cho doanh nghiệp công nghiệp
            </h1>

            <p className="text-base md:text-xl text-green-900/80 leading-relaxed mb-6 md:mb-8 max-w-xl font-medium">
              Giám sát – Phân tích – Tối ưu tiêu thụ năng lượng theo thời gian thực bằng nền tảng phần mềm EMS chuyên sâu.
            </p>

            {/* Các nút bấm được thiết kế full-width trên mobile và vừa vặn trên PC */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <button className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-xl font-bold px-6 py-3.5 hover:from-green-700 hover:to-emerald-600 transition-all shadow-[0_6px_20px_rgba(22,163,74,0.3)] flex items-center justify-center gap-2 text-base md:text-lg">
                <Play size={20} />
                Xem demo hệ thống
              </button>
              <button className="w-full sm:w-auto bg-white border-2 border-green-500 text-green-700 rounded-xl font-bold px-6 py-3.5 hover:bg-green-50 transition-all shadow-sm text-base md:text-lg flex justify-center">
                Đăng ký tư vấn
              </button>
            </div>

            {/* Lưới huy hiệu (Badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + index * 0.06 }}
                  className="flex items-center gap-2 bg-white/80 border border-green-200 rounded-lg backdrop-blur-sm px-3 py-2.5 shadow-sm"
                >
                  <badge.icon className="text-green-600 flex-shrink-0" size={16} />
                  <span className="text-green-900 text-xs md:text-sm font-semibold">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ════════ CỘT PHẢI - ẢNH SANKEY & FLOATING CARDS ════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2 w-full mt-4 lg:mt-0"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(5,46,22,0.3)] border border-green-300/50 bg-white">
              
              {/* ẢNH SANKEY THAY THẾ CHO DASHBOARD CŨ */}
              <img
                src={sankeyImg}
                alt="Biểu đồ phân tích luồng năng lượng Sankey"
                className="w-full h-auto object-cover block"
              />

              {/* Lớp mờ nhẹ góc dưới để tôn Floating Card */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(5,46,22,0.1) 0%, transparent 40%)',
                }}
              />

              {/* CARD 1: Tổng tiêu thụ (Ẩn trên điện thoại màn nhỏ để không che mất biểu đồ Sankey) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:block absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-green-200 rounded-xl shadow-xl p-3 lg:p-4"
              >
                <div className="text-green-600 font-bold text-xs mb-1">Tổng tiêu thụ hôm nay</div>
                <div className="font-extrabold text-green-800 text-xl lg:text-2xl">273.7 kWh</div>
              </motion.div>

              {/* CARD 2: Chi phí (Ẩn trên điện thoại màn nhỏ) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden md:block absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-xl shadow-xl p-3 lg:p-4"
              >
                <div className="text-emerald-600 font-bold text-xs mb-1">Chi phí ước tính</div>
                <div className="font-extrabold text-emerald-700 text-xl lg:text-2xl">596 Nghìn</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}