import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, Wrench, GraduationCap, ClipboardCheck, RefreshCw, MessageCircle, CalendarDays } from 'lucide-react';

const steps = [
  {
    id: 'B1',
    title: 'Khảo sát thực tế',
    icon: Search,
    desc: 'Đánh giá chi tiết hệ thống điện hiện tại, đo đạc trực tiếp các phụ tải chính và xác định vị trí tối ưu để đặt cảm biến đo lường IIoT.',
    details: [
      'Khảo sát thực địa hệ thống tủ điện chính và các xưởng sản xuất.',
      'Lập danh sách các phụ tải sản xuất tiêu thụ lớn (máy nén khí, lò nung, làm lạnh,...).',
      'Định vị các điểm nghẽn và đo đạc thông số chất lượng điện nền.'
    ]
  },
  {
    id: 'B2',
    title: 'Thiết kế phương án',
    icon: PenTool,
    desc: 'Lập bản vẽ kiến trúc kết nối phần cứng IIoT, lựa chọn loại đồng hồ đo đạc phù hợp và dự toán đầu tư chi tiết cho hệ thống EnMS.',
    details: [
      'Thiết kế sơ đồ nguyên lý thiết bị đo, gateway và hệ thống trung tâm.',
      'Lựa chọn cấu hình phần cứng tối ưu chi phí dựa trên số lượng tủ điện.',
      'Lập báo cáo dự toán đầu tư và tính toán thời gian hoàn vốn thực tế.'
    ]
  },
  {
    id: 'B3',
    title: 'Lắp đặt thiết bị',
    icon: Wrench,
    desc: 'Thi công lắp đặt thiết bị và kết nối hạ tầng mạng tới hệ thống trung tâm. Đảm bảo 100% không ảnh hưởng sản xuất.',
    details: [
      'Thi công lắp đặt gọn gàng trong các tủ điện.',
      'Cấu hình ổn định, đảm bảo kết nối tới hệ thống trung tâm.',
      'Kiểm thử truyền nhận dữ liệu.'
    ]
  },
  {
    id: 'B4',
    title: 'Đào tạo vận hành',
    icon: GraduationCap,
    desc: 'Hướng dẫn bộ phận kỹ thuật và ban quản lý sử dụng hệ thống, trích xuất báo cáo nhanh và tập huấn tìm ra điểm bất thường trong hệ thống điện.',
    details: [
      'Đào tạo sử dụng phần mềm EnMS chi tiết.',
      'Tập huấn trích xuất dữ liệu, làm báo cáo và đánh giá vận hành hệ thống.',
      'Bàn giao tài liệu hướng dẫn vận hành chi tiết.'
    ]
  },
  {
    id: 'B5',
    title: 'Sử dụng hệ thống hiệu quả',
    icon: ClipboardCheck,
    desc: 'Phân tích tập dữ liệu thu được từ vận hành hệ thống để xây dựng đường cơ sở năng lượng EnB và xác định các điểm lãng phí năng lượng vô hình.',
    details: [
      'Thiết lập mô hình đường cơ sở năng lượng EnB ban đầu.',
      'Nhận diện các tổn hao chạy không tải và vận hành sai giờ biểu.',
      'Khuyến nghị các giải pháp dịch chuyển phụ tải không tốn chi phí từ đó xác định cơ hội tiết kiệm năng lượng.'
    ]
  },
  {
    id: 'B6',
    title: 'Tối ưu liên tục',
    icon: RefreshCw,
    desc: 'Đồng hành cùng doanh nghiệp vận hành chu trình PDCA chuẩn ISO 50001, liên tục cải tiến hiệu quả sử dụng năng lượng bền vững.',
    details: [
      'Lập báo cáo kiểm toán năng lượng chuẩn quy định của BCT.',
      'Theo dõi chỉ số hiệu quả năng lượng, SEC và CUSUM để phát hiện trôi lệch hiệu suất thiết bị.',
      'Nhận diện điểm nghẽn, cải tiến và tối ưu liên tục.'
    ]
  },
];

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section id="timeline" className="py-12 md:py-14 bg-[var(--bg-light-green)] transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        {/* Header - ĐỒNG BỘ */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="font-display text-title text-balance text-slate-900 dark:text-white" style={{ marginTop: '0px', marginBottom: '14px', transition: 'color 0.3s' }}>
            Quy Trình Triển Khai
          </h2>
          <p className="whitespace-normal text-sapo text-slate-600 dark:text-slate-400 text-balance" style={{ transition: 'color 0.3s', display: 'block', overflow: 'visible', lineHeight: 1.5 }}>
            Quy trình triển khai tinh gọn, đồng hành chặt chẽ và không gián đoạn sản xuất.
          </p>
        </div>

        {/* Stepper Node Progress Container */}
        <div className="overflow-x-auto scrollbar-none pb-4 md:pb-0 md:overflow-x-visible" style={{ position: 'relative', maxWidth: '960px', margin: '0 auto 40px', padding: '0 20px' }}>
          <div style={{ minWidth: '768px', width: '100%', position: 'relative' }}>
            {/* Connector Line Wrapper */}
            <div
              style={{
                position: 'absolute',
                top: '28px', // Căn giữa với bong bóng 56px
                left: '60px', // Căn chính xác giữa các cột 120px
                right: '60px', // Căn chính xác giữa các cột 120px
                height: '2px', // Thin line
                backgroundColor: 'var(--border)',
                zIndex: 1,
                transition: 'background-color 0.3s'
              }}
            >
              {/* Active Connector Progress */}
              <div
                style={{
                  width: `${(activeIndex / (steps.length - 1)) * 100}%`,
                  height: '100%',
                  backgroundColor: 'var(--primary)',
                  transition: 'width 0.3s ease, background-color 0.3s'
                }}
              />
            </div>

            {/* Stepper Nodes */}
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', minWidth: '768px', width: '100%' }}>
              {steps.map((step, i) => {
                const StepIcon = step.icon;
                const isActive = activeIndex === i;
                const isPassed = i <= activeIndex; // highlight all passed steps

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      border: 'none',
                      background: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      padding: 0,
                      outline: 'none',
                      position: 'relative',
                      flexShrink: 0,
                      width: '120px'
                    }}
                    aria-label={`Step ${step.id}: ${step.title}`}
                  >
                    {/* Step Node Bubble */}
                    <div
                      className={`transition-all duration-300 flex items-center justify-center rounded-full
                        ${isActive
                          ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-md'
                          : isPassed
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-2 border-emerald-600/60 dark:border-emerald-500/40'
                            : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-650 border-2 border-slate-200 dark:border-slate-800'
                        }`}
                      style={{
                        width: '56px',
                        height: '56px',
                        boxShadow: isActive ? 'var(--shadow-glow)' : 'none'
                      }}
                    >
                      <StepIcon size={20} />
                    </div>

                    {/* Node label */}
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                      <div className="text-eyebrow uppercase text-emerald-700 dark:text-emerald-500 font-mono">
                        {step.id}
                      </div>
                      <div
                        className="text-label mt-1 transition-colors duration-300"
                        style={{
                          color: isActive ? 'var(--primary)' : 'var(--foreground)',
                          lineHeight: 1.3
                        }}
                      >
                        {step.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Chi tiết bước đang hoạt động */}
        <div style={{ maxWidth: '720px', margin: '32px auto 0', padding: '0 20px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="border-2 border-solid border-emerald-500 bg-transparent rounded-2xl shadow-lg transition-all duration-300"
            >
              <div className="p-6 md:p-8 flex flex-col justify-center text-slate-900 dark:text-white">
                <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-xs font-mono uppercase bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-400/30 px-2 py-0.5 rounded">
                    {activeStep.id}
                  </span>
                  {activeStep.title}
                </h4>
                <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {activeStep.desc}
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  {activeStep.details.map((detail, idx) => (
                    <li key={idx} className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Caption Removed */}
        </div>

        {/* Nút "Liên hệ với chúng tôi" màu xanh lục đồng bộ */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button
            onClick={() => {
              (window as any).smoothScrollTo?.('contact');
            }}
            className="bg-emerald-600 hover:bg-emerald-700 hover:scale-105 active:scale-[0.98] text-white font-button py-3 px-8 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
            style={{ cursor: 'pointer' }}
          >
            <CalendarDays size={20} />
            Liên Hệ Với Chúng Tôi
          </button>
        </div>
      </div>
    </section>
  );
}
