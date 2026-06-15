import { motion } from 'framer-motion';
import { PROVEN_IMPACT_DATA } from '../../constants/proven-impact';
import { CountUpStat } from '../shared/CountUpStat';
import { MessageCircle, CalendarDays } from 'lucide-react';

// Helper to wrap keywords in whitespace-nowrap
export const wrapKeywords = (text: string): React.ReactNode[] => {
 const keywords = [
 'Net Zero', 'ISO 50001', 'năng lượng', 'doanh nghiệp', 'điện lực', 'realtime', 'EnMS',
 'sản xuất', 'chi phí', 'cao điểm', 'hóa đơn', 'rào cản', 'phát thải', 'xuất khẩu',
 'gián đoạn', 'lãng phí', 'Cos phi',
 ];
 let parts: React.ReactNode[] = [text];

 keywords.forEach((keyword) => {
 parts = parts.flatMap((part) => {
 if (typeof part === 'string') {
 const regex = new RegExp(`(${keyword})`, 'gi');
 const pieces = part.split(regex);
 return pieces.map((piece, i) =>
 piece.toLowerCase() === keyword.toLowerCase() ? (
 <span key={`${keyword}-${i}`} className="whitespace-nowrap">
 {piece}
 </span>
 ) : (
 piece
 )
 );
 }
 return part;
 });
 });

 return parts;
};

// SVG Pictograms removed per user request — cards display without icons

export function ProvenImpactSection() {
 const data = PROVEN_IMPACT_DATA;

 // Stagger animation container
 const gridContainerVariants = {
 hidden: {},
 visible: {
 transition: {
 staggerChildren: 0.08,
 },
 },
 };

 const columnVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
 };

 const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
 e.preventDefault();
 if (typeof window !== 'undefined') {
 const smoothScroll = (window as any).smoothScrollTo;
 if (typeof smoothScroll === 'function') {
 smoothScroll(targetId);
 } else {
 const el = document.getElementById(targetId);
 if (el) {
 el.scrollIntoView({ behavior: 'smooth' });
 }
 }
 window.history.pushState(null, '', `#${targetId}`);
 }
 };

 const renderManifestoText = () => {
 return (
 <>
 EnMS không chỉ là <span className="whitespace-nowrap">phần mềm</span>{' '}
 <span className="whitespace-nowrap">theo dõi năng lượng</span>
 <br />
 Đây là <span className="whitespace-nowrap">giải pháp</span>{' '}
 <span className="text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap">kiểm soát rủi ro</span>{' '}
 và{' '}
 <span className="text-emerald-600 dark:text-emerald-400 font-semibold whitespace-nowrap">tối ưu chi phí</span>
 </>
 );
 };

 return (
 <section
 aria-labelledby="proven-impact-heading"
 className="relative w-full bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300 pt-12 pb-12"
 >

 {/* ================================================================
 BLOCK A: HEADER (Left Aligned - Space Grotesk H2 & Be Vietnam Pro Subline)
 ================================================================ */}
 <div className="max-w-7xl mx-auto px-6 mb-10">
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.5 }}
 className="text-left w-full flex flex-col items-start"
 >
 <h2
 id="proven-impact-heading"
 className="font-display text-title text-[#0d2818] dark:text-[#edf5f1] tracking-tight text-balance text-left"
 style={{ marginTop: '0px', marginBottom: '12px', transition: 'color 0.3s' }}
 >
 Từ <span className="whitespace-nowrap">Dữ Liệu</span> Vận Hành Đến{' '}
 <span className="text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
 Giá Trị Bền Vững
 </span>{' '}
 Được Tạo Ra
 </h2>
 <p
 className="text-slate-600 dark:text-slate-400 text-left text-sapo text-balance"
 >
 {wrapKeywords(data.header.sub)}
 </p>
 </motion.div>
 </div>

  {/* ================================================================
  BLOCK B: METRIC SLAB (Contained Slab - Double-Bezel Architecture)
  ================================================================ */}
  <div className="max-w-7xl mx-auto px-6 mb-10">
    <div className="border-2 border-emerald-500 rounded-2xl bg-white dark:bg-slate-900 max-w-[840px] mx-auto shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative overflow-hidden p-8 sm:p-10 flex flex-col items-center text-center">
        {/* Metrics Grid */}
        <div className="relative z-10 grid grid-cols-2 max-w-4xl mx-auto w-full pb-4">
          {data.metrics.map((metric, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 sm:px-8 lg:px-12
              ${i === 1 ? 'border-l border-emerald-600/20 dark:border-emerald-500/20' : ''}`}
            >
              <div className="font-mono text-data-xxl tabular-nums text-emerald-700 dark:text-emerald-400">
                {metric.prefix && (
                  <span className="font-mono text-data-unit tabular-nums text-emerald-600 dark:text-emerald-400 mr-0.5 uppercase">
                    {metric.prefix}
                  </span>
                )}
                <CountUpStat value={metric.value} decimals={metric.decimals} />
                {metric.suffix && (
                  <span className="font-mono text-data-unit tabular-nums text-emerald-600 dark:text-emerald-400 ml-0.5 uppercase">
                    {metric.suffix}
                  </span>
                )}
              </div>
              {/* Metric Label */}
              <span className="mt-3 text-slate-600 dark:text-slate-400 text-body-sm leading-relaxed whitespace-normal sm:whitespace-nowrap">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Attribution bottom right */}
        <div className="absolute bottom-3 right-5 z-10 text-caption text-slate-500 dark:text-slate-400 select-none normal-case font-normal">
          * {data.metricsMicrocopy}
        </div>
      </div>
    </div>
  </div>

  {/* ================================================================
  BLOCK C: LỢI ÍCH (Bento-Grid Architecture)
  ================================================================ */}
  <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">

    {/* C1. Manifesto Line (Emerson pattern) */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-left mt-12 mb-8"
    >
      <p className="text-sapo text-slate-700 dark:text-slate-300 max-w-4xl">
        {renderManifestoText()}
      </p>
    </motion.div>

    {/* C2. Asymmetric Bento Feature Grid */}
    <motion.div
      variants={gridContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6"
    >
      {/* Card 1: Commercial (lg:col-span-2) */}
      <motion.div
        variants={columnVariants}
        className="group transition-all duration-300 rounded-xl p-5 flex flex-col justify-between bg-white dark:bg-slate-900 border-2 border-solid border-green-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 lg:col-span-2"
      >
        <div>
          <span className="text-xl font-bold font-display text-emerald-700 dark:text-emerald-500 block mb-2">
            {data.pillars[0].eyebrow}
          </span>
          <h3 className="text-base font-medium text-slate-900 dark:text-white mb-3 leading-snug">
            {data.pillars[0].h3}
          </h3>
          <p className="text-body text-slate-700 dark:text-slate-300 leading-relaxed text-left">
            {wrapKeywords(data.pillars[0].body)}
          </p>
        </div>
      </motion.div>

      {/* Card 2: Financial (lg:col-span-1) */}
      <motion.div
        variants={columnVariants}
        className="group transition-all duration-300 rounded-xl p-5 flex flex-col justify-between bg-white dark:bg-slate-900 border-2 border-solid border-green-400 shadow-sm hover:shadow-md hover:-translate-y-0.5"
      >
        <div>
          <span className="text-xl font-bold font-display text-emerald-700 dark:text-emerald-500 block mb-2">
            {data.pillars[1].eyebrow}
          </span>
          <h3 className="text-base font-medium text-slate-900 dark:text-white mb-3 leading-snug">
            {data.pillars[1].h3}
          </h3>
          <p className="text-body text-slate-700 dark:text-slate-300 leading-relaxed text-left">
            {wrapKeywords(data.pillars[1].body)}
          </p>
        </div>
      </motion.div>

      {/* Card 3: Operational (lg:col-span-3 - horizontal featured layout) */}
      <motion.div
        variants={columnVariants}
        className="group transition-all duration-300 rounded-xl p-5 flex flex-col lg:flex-row justify-between items-stretch gap-6 bg-white dark:bg-slate-900 border-2 border-solid border-green-400 shadow-sm hover:shadow-md hover:-translate-y-0.5 lg:col-span-3"
      >
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <span className="text-xl font-bold font-display text-emerald-700 dark:text-emerald-500 block mb-2">
              {data.pillars[2].eyebrow}
            </span>
            <h3 className="text-base font-medium text-slate-900 dark:text-white mb-3 leading-snug">
              {data.pillars[2].h3}
            </h3>
            <p className="text-body text-slate-700 dark:text-slate-300 leading-relaxed text-left">
              {wrapKeywords(data.pillars[2].body)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>


 {/* ================================================================
 BLOCK D: INDUSTRY PILLS (Chint pattern)
 ================================================================ */}
 <div className="mt-10 flex flex-wrap items-center gap-y-3 gap-x-4 border-t border-slate-200/60 dark:border-slate-800/40 pt-8">
 {/* Label */}
 <div
 className="text-body font-semibold text-slate-700 dark:text-[#edf5f1] flex items-center gap-1.5 shrink-0"
 >
 <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 <polyline points="20 6 9 17 4 12"></polyline>
 </svg>
 <span>Đã kiểm chứng trong các ngành:</span>
 </div>

 {/* Pills */}
 <div className="flex flex-wrap gap-2">
 {data.proofStrip.industries.map((ind, i) => (
 <a
 key={i}
 href="#projects"
 onClick={(e) => handleSmoothScroll(e, 'projects')}
 className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-full px-3.5 py-1.5 text-body hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
 >
 {ind}
 </a>
 ))}
 </div>
 </div>

 {/* ================================================================
 BLOCK E: BRIDGE LINE (WEG pattern)
 ================================================================ */}
 <div className="mt-10 border-t border-slate-200/60 dark:border-slate-800/40 pt-8">
 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
 <p
 className="text-slate-700 dark:text-slate-400 text-body font-normal max-w-2xl text-left"
 >
 Mỗi cam kết phía trên đều được chứng minh bằng dự án thực tế.{' '}
 <a
 href="#projects"
 onClick={(e) => {
 e.preventDefault();
 const el = document.getElementById('projects');
 if (el) {
 el.scrollIntoView({ behavior: 'smooth' });
 }
 window.history.pushState(null, '', '#projects');
 }}
 className="text-emerald-700 dark:text-emerald-400 underline underline-offset-2 decoration-emerald-500/50 hover:decoration-emerald-500 font-medium transition-colors whitespace-nowrap"
 >
 Xem chi tiết ngay bên dưới
 </a>.
 </p>
  <div className="flex flex-wrap items-center gap-4 shrink-0">
  {/* Solid green contact button synced with Hero */}
  <button
  onClick={() => {
  if (typeof window !== 'undefined') {
  const smoothScroll = (window as any).smoothScrollTo;
  if (typeof smoothScroll === 'function') {
  smoothScroll('contact');
  } else {
  const el = document.getElementById('contact');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  window.history.pushState(null, '', '#contact');
  }
  }}
  className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] text-white font-button py-3 px-8 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
  style={{ cursor: 'pointer' }}
  >
  <CalendarDays size={20} />
  Liên Hệ Với Chúng Tôi
  </button>
  </div>
 </div>
 </div>
 </div>

 </section>
 );
}
