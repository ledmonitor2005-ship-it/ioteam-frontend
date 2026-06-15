import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';

export function SpecialOffer() {
  return (
    <section style={{ backgroundColor: 'var(--background)', padding: '68px 0', overflow: 'hidden' }}>
      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-2 border-solid border-emerald-500 rounded-2xl bg-transparent max-w-[1000px] mx-auto transition-all duration-300"
        >
          <div className="p-8 md:p-10 flex flex-col items-center text-center gap-6">
            
            {/* Title */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <h2 className="font-display text-title text-slate-900 dark:text-white mb-0 text-center" style={{ margin: 0 }}>
                Ưu Đãi Đặc Biệt Dành Riêng Cho <span className="whitespace-nowrap">Doanh Nghiệp</span>
              </h2>
            </div>

            {/* Quyền lợi (Body text) */}
            <p className="text-sapo md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-[65ch] mb-0" style={{ margin: 0 }}>
              Đăng ký triển khai giải pháp cho nhà máy ngay trong giai đoạn thí điểm 3 tháng để nhận ngay ưu đãi giảm giá lên đến 10% chi phí triển khai dự án
            </p>

            {/* Subtitle */}
            <div className="text-sapo md:text-lg text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 mt-2">
              <span>
                Chương trình chỉ áp dụng cho các đăng ký trước ngày{' '}
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">30/06/2026</span>
              </span>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                (window as any).smoothScrollTo?.('contact');
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-emerald-950 font-semibold text-button hover:scale-105 active:scale-[0.98] transition-all duration-200 mt-2 shadow-[0_4px_14px_rgba(5,150,105,0.3)] hover:shadow-lg"
              style={{
                backgroundColor: '#34d399', // xanh lá nhạt (emerald-400)
                textDecoration: 'none'
              }}
            >
              Nhận Ưu Đãi Ngay
            </a>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
