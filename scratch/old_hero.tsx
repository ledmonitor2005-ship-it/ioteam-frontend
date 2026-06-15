import { motion } from 'motion/react';
import { Play, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export function Hero() {
  const badges = [
    { icon: CheckCircle2, text: 'ISO 50001' },
    { icon: CheckCircle2, text: 'ESG Ready' },
    { icon: CheckCircle2, text: 'Real-time Monitoring' },
    { icon: CheckCircle2, text: 'IoT Platform' },
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Chuyển đổi số năng lượng cho doanh nghiệp công nghiệp
            </h1>
            <p className="text-xl text-green-800/70 mb-8 leading-relaxed">
              Giám sát – Phân tích – Tối ưu tiêu thụ năng lượng theo thời gian thực bằng nền tảng EMS & AI
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg shadow-green-400/30 hover:shadow-green-500/40 flex items-center gap-2">
                <Play size={20} />
                Xem demo hệ thống
              </button>
              <button className="bg-white/80 text-green-700 px-8 py-3 rounded-lg hover:bg-white transition-all border border-green-300 hover:border-green-500 shadow-sm font-medium">
                Đăng ký tư vấn
              </button>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 bg-white/70 border border-green-200 px-4 py-2 rounded-lg backdrop-blur-sm shadow-sm"
                >
                  <badge.icon className="text-green-600" size={18} />
                  <span className="text-sm text-green-800 font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-green-200 shadow-2xl shadow-green-300/25">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Energy Monitoring Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-green-200 rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="text-xs text-green-600 font-semibold">Năng lượng realtime</div>
                <div className="text-lg font-bold text-green-700">1,234 kWh</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-emerald-200 rounded-lg px-4 py-2 shadow-lg"
              >
                <div className="text-xs text-emerald-600 font-semibold">Tiết kiệm</div>
                <div className="text-lg font-bold text-emerald-600">↓ 15.2%</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
