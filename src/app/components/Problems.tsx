import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, TrendingDown, Settings2, MessageCircle, Gavel, CalendarDays } from 'lucide-react';
import { FloatingCard } from './FloatingCard';

const painPoints = [
 {
 id: 1,
 title: 'Thiết bị vận hành liên tục - hiệu suất thực tế chưa bao giờ được đo',
 subtitle: '',
 desc: 'Mù mờ dữ liệu vận hành khiến sự cố không được phát hiện sớm, trong khi máy chạy không tải âm thầm tích lũy lãng phí năng lượng mà không để lại dấu hiệu nào..',
 color: 'var(--primary)',
 },
 {
 id: 2,
 title: 'Phụ tải vận hành ngoài lịch biểu giờ thấp điểm - chi phí điện tăng cao, không có cảnh báo',
 subtitle: '',
 desc: 'Thiết bị công suất lớn chạy sai khung giờ đẩy chi phí điện tăng gần gấp đôi; hệ số công suất thấp hoặc phát ngược công suất phản kháng kích hoạt phạt EVN mà không có cảnh báo trước.',
 color: 'var(--destructive)',
 },
 {
 id: 3,
 title: 'Phát thải carbon có kiểm chứng - điều kiện tối thiểu của thị trường xuất khẩu',
 subtitle: '',
 desc: 'Đối tác quốc tế và CBAM (Cơ chế điều chỉnh biên giới carbon của EU) yêu cầu báo cáo CO₂ có kiểm chứng. ISO 50001, LEED, EDGE không còn là lợi thế — đây là điều kiện tiên quyết để duy trì đơn hàng xuất khẩu.',
 color: '#059669',
 },
 {
 id: 4,
 title: 'Dữ liệu năng lượng phân tán trong ghi chép thủ công là rủi ro quản trị',
 subtitle: '',
 desc: 'Thu thập qua Excel tích lũy sai số và thiếu hoàn toàn công cụ khoa học: không có EnB (đường cơ sở năng lượng để so sánh), SEC (suất tiêu hao kWh/sản phẩm) hay CuSUM (đồ thị tích lũy sai lệch phát hiện xu hướng lãng phí) — rủi ro quản trị và kiểm toán.',
 color: '#0d9488',
 },
 {
 id: 5,
 title: 'Tuân thủ pháp lý là điều kiện tiên quyết để phát triển sản xuất',
 subtitle: '',
 desc: 'Từ 01/01/2026, Luật 77/2025/QH15 bắt buộc các cơ sở năng lượng trọng điểm báo cáo hàng năm, lập kế hoạch 5 năm và xây dựng hệ thống quản lý năng lượng; Nghị định 06/2022/NĐ-CP và Quyết định 13/2024/QĐ-TTg yêu cầu 2.166 doanh nghiệp kiểm kê khí nhà kính 2 năm/lần kèm kế hoạch giảm phát thải hàng năm — vi phạm bị xử phạt hành chính.',
 color: '#b45309',
 }
];



export function Problems() {
 const [activeTab, setActiveTab] = useState(0);
 const activeChallenge = painPoints[activeTab];

 return (
 <>
 {/* SECTION 1: ÁP LỰC NĂNG LƯỢNG CỦA DOANH NGHIỆP */}
 <section
 id="challenges"
 style={{
 backgroundColor: 'var(--bg-white)',
 padding: '68px 0 51px 0',

 position: 'relative',
 overflow: 'hidden',
 transition: 'background-color 0.3s, border-color 0.3s'
 }}
 >
 {/* Ambient background mesh light */}
 <div style={{
 position: 'absolute',
 width: '400px',
 height: '400px',
 borderRadius: '50%',
 top: '30%',
 left: '20%',
 background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)',
 zIndex: 0,
 pointerEvents: 'none',
 display: 'none' }} />

 <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 1 }}>

  <div style={{ textAlign: 'center', marginBottom: '40px' }}>
    {/* Title */}
    <h2 className="font-display text-title text-balance text-slate-900 dark:text-white" style={{ marginTop: '0px', marginBottom: '12px', transition: 'color 0.3s' }}>
      Áp Lực Về Năng Lượng Của Doanh Nghiệp
    </h2>
    {/* Subtitle */}
    <p className="whitespace-normal text-sapo text-slate-600 dark:text-slate-400 text-balance" style={{ transition: 'color 0.3s', display: 'block', overflow: 'visible', lineHeight: 1.6, marginBottom: '8px' }}>
      Những điểm nghẽn và tổn thất vô hình làm suy giảm khả năng cạnh tranh và đẩy chi phí vận hành của nhà máy lên cao.
    </p>
    {/* Chú thích (đã xóa) */}
  </div>

 {/* ── 2-column layout: left = tabs, right = detail + CTAs ── */}
 <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.4fr] gap-6 items-stretch" style={{ maxWidth: '960px', margin: '0 auto' }}>

 {/* LEFT: tab buttons — large faded red numbers, no icons */}
 <div className="flex flex-col gap-[6px]">
 {painPoints.map((item, idx) => {
 const isActive = activeTab === idx;
 return (
 <button
 key={item.id}
 onClick={() => setActiveTab(idx)}
 className={`relative overflow-hidden w-full flex items-center justify-center gap-3 rounded-xl px-4 py-4 cursor-pointer text-center outline-none md:flex-1 transition-all duration-300 ease-out transform active:scale-[0.98]
 ${isActive
 ? 'bg-[#059669] border border-emerald-500 shadow-[0_12px_28px_rgba(5,150,105,0.25)] -translate-y-1 scale-[1.02] z-10'
 : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-emerald-500/40 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]'
 }`}
 >
 {/* Title */}
 <div style={{ flex: 1, minWidth: 0 }}>
 <h4
 className="m-0 text-sapo text-slate-900 tracking-tight text-left"
 style={{ color: isActive ? '#ffffff' : 'var(--foreground)' }}
 >
 {item.title}
 </h4>
 </div>
 </button>
 );
 })}
 </div>

 {/* RIGHT: detail card (lighter bg) + 2 CTA buttons */}
 <div className="flex flex-col gap-[6px] h-full">
 <AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex-1 transition-all duration-300 border-2 border-emerald-500 rounded-2xl bg-transparent p-6 flex flex-col h-full"
  >
    <div className="flex flex-col h-full flex-1">
      <div className="flex flex-col h-full flex-1">
        <div className="mb-3">
        </div>
        <h3 className="text-subsection text-slate-900 dark:text-white mb-3 leading-snug">
          {activeChallenge.title}
        </h3>
        <p className="text-body text-slate-700 dark:text-slate-300 flex-1 leading-relaxed">
          {activeChallenge.desc}
        </p>
      </div>
    </div>
  </motion.div>
 </AnimatePresence>



  {/* Buttons CTA */}
  <div className="flex flex-col gap-3 mt-4">
    <button
      className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] text-white font-button py-3 px-8 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center gap-2 w-full"
      style={{ cursor: 'pointer' }}
    >
      Xem Giải Pháp
    </button>
    <button
      onClick={() => {
        (window as any).smoothScrollTo?.('contact');
      }}
      className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] text-white font-button py-3 px-8 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center gap-2 w-full"
      style={{ cursor: 'pointer' }}
    >
      <CalendarDays size={20} />
      Liên Hệ Với Chúng Tôi
    </button>
  </div>
 </div>

 </div> </div>
 </section>


 </>
 );
}
