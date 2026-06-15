import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingDown, MapPin, Gauge, Calendar, LayoutGrid } from 'lucide-react';

// === IMPORT ẢNH DỰ ÁN ===
import ImgProject1 from './1.jpg';
import ImgProject2 from './2.jpg';
import ImgProject3 from './3.jpg';
import ImgProject4 from './4.jpg';

// === IMPORT ẢNH LOGO ĐỐI TÁC ===
import LogoBachKhoa from './logo-bachkhoa.png';
import LogoWWF from './999.jpg';
import LogoViglacera from './logo-viglacera.png';
import LogoNasilkmex from './logo-nasilkmex.png';
import LogoSepon from './sepon.png';
import LogoFPT from './fpt.png';
import LogoVinatek from './vinatek.png';
import LogoTuPhuong from './tuphuong.png';
import LogoPhuTho from './phutho.png';
import LogoAIP from './aip.png';
import LogoEVN from './evn.png';

const projectsData = [
  {
    id: 1,
    image: ImgProject1,
    title: 'Viglacera Thăng Long',
    category: 'Vật liệu xây dựng',
    location: 'Phường Phúc Yên, Phú Thọ',
    size: '25,000 m²',
    year: '2024',
    improvement: 'Giám sát, phát hiện lãng phí và cảnh báo kịp thời phát ngược công suất phản kháng.',
    stats: { savings: '1.3 Tỷ', savingsSub: 'VNĐ/năm điện năng tiết kiệm (3%)', labor: '112 Tr/năm', laborSub: 'Tiết giảm nhân công báo cáo' },
    bullets: [
      'Giúp nhà máy tiết kiệm trung bình khoảng 3% (1.3 tỷ VNĐ/năm) chi phí điện năng thông qua giám sát và tối ưu hóa vận hành.',
      'Kịp thời phát hiện bất thường và cảnh báo phát ngược công suất phản kháng, tránh hóa đơn phạt từ điện lực.',
      'Tự động thu thập dữ liệu thời gian thực, đơn giản hóa công tác quản lý và rút ngắn thời gian lập báo cáo kiểm toán.',
      'Đánh giá suất tiêu hao năng lượng theo từng công đoạn sản xuất, cung cấp dữ liệu phục vụ lập kế hoạch.'
    ]
  },
  {
    id: 2,
    image: ImgProject3,
    title: 'Dệt Phú Thọ',
    category: 'Sản xuất sợi & dệt may',
    location: 'KCN Thụy Vân, Phú Thọ',
    size: '18,000 m²',
    year: '2024',
    improvement: 'Phát hiện cơ hội tối ưu hóa hệ thống làm mát thông qua hệ thống giám sát năng lượng.',
    stats: { savings: '1.8 Tỷ', savingsSub: 'VNĐ/năm điện làm mát tiết kiệm (30%)', labor: '120 Tr/năm', laborSub: 'Tiết giảm nhân công báo cáo' },
    bullets: [
      'Xác định được các cơ hội tối ưu hóa hệ thống làm mát, giúp giảm khoảng 30% điện năng tiêu thụ (gần 1.8 tỷ VNĐ/năm).',
      'Số hóa dữ liệu sản xuất và năng lượng, tạo nguồn dữ liệu tập trung phục vụ công tác quản lý, phân tích và báo cáo.',
      'Theo dõi suất tiêu hao năng lượng theo từng công đoạn sản xuất, hỗ trợ đánh giá hiệu quả sử dụng nguyên liệu.'
    ]
  },
  {
    id: 3,
    image: ImgProject2,
    title: 'Bao bì bạt nhựa Tú Phương',
    category: 'Sản xuất bao bì bạt nhựa',
    location: 'Xã Gia Lâm, Hà Nội',
    size: '12,000 m²',
    year: '2025',
    improvement: 'Phát hiện tình trạng vận hành dư tải của hệ thống làm mát và triển khai cải tiến kỹ thuật.',
    stats: { savings: '865 Triệu', savingsSub: 'VNĐ/năm điện năng tiết kiệm (40%)', labor: '150 Tr/năm', laborSub: 'Tiết giảm nhân công báo cáo' },
    bullets: [
      'Phát hiện tình trạng vận hành dư tải của hệ thống làm mát, triển khai cải tiến kỹ thuật giúp giảm khoảng 40% điện tiêu thụ (865 triệu VNĐ/năm).',
      'Theo dõi hiệu quả sử dụng năng lượng theo từng công đoạn sản xuất, hỗ trợ tối ưu vận hành và giảm chi phí sản xuất.',
      'Đánh giá mối liên hệ giữa chất lượng nguyên liệu đầu vào, năng lượng tiêu thụ và hiệu suất sản xuất để cải tiến quy trình.'
    ]
  },
  {
    id: 4,
    image: ImgProject4,
    title: 'Dệt lụa Nam Định',
    category: 'Sản xuất tơ lụa & sợi dệt',
    location: 'Phường Thành Nam, Ninh Bình',
    size: '20,000 m²',
    year: '2025',
    improvement: 'Xác định tình trạng quá tải hệ thống khí nén và phát hiện thiết bị hoạt động lãng phí.',
    stats: { savings: '265 Triệu', savingsSub: 'VNĐ/năm tổng chi phí tiết kiệm', labor: '85 Tr/năm', laborSub: 'Tiết giảm nhân công báo cáo' },
    bullets: [
      'Xác định tình trạng quá tải của hệ thống khí nén và triển khai cải tiến, giúp giảm khoảng 45% điện năng tiêu thụ (240 triệu VNĐ/năm).',
      'Phát hiện các thiết bị hoặc phụ tải hoạt động không cần thiết, góp phần giảm lãng phí khoảng 0.5% điện năng mỗi năm (25 triệu VNĐ/năm).',
      'Theo dõi hiệu quả sử dụng năng lượng theo từng công đoạn sản xuất, hỗ trợ tối ưu vận hành và giảm chi phí sản xuất.'
    ]
  }
];

const partnersData = [
  { id: 1, name: 'Đại học Bách Khoa', logo: LogoBachKhoa },
  { id: 2, name: 'Viglacera', logo: LogoViglacera },
  { id: 3, name: 'Tổ chức WWF', logo: LogoWWF },
  { id: 4, name: 'Nasilkmex', logo: LogoNasilkmex },
  { id: 5, name: 'Sepon', logo: LogoSepon },
  { id: 6, name: 'FPT', logo: LogoFPT },
  { id: 7, name: 'Vinatek', logo: LogoVinatek },
  { id: 8, name: 'Tú Phương', logo: LogoTuPhuong },
  { id: 9, name: 'Phú Thọ', logo: LogoPhuTho },
  { id: 10, name: 'AIP', logo: LogoAIP },
  { id: 11, name: 'EVN', logo: LogoEVN },
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);

  const current = projectsData[currentIndex];

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        backgroundColor: 'var(--section-bg-alt)',
        padding: '68px 0',
        overflow: 'hidden'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ position: 'relative', zIndex: 1 }}>

        {/* --- HEADER CHÍNH --- */}
        <div className="text-center mb-10">
          <h2 className="font-display text-title text-balance text-slate-900 dark:text-white mb-3" style={{ transition: 'color 0.3s' }}>
            Năng Lực Triển Khai & Đối Tác Đồng Hành
          </h2>
          <p className="text-sapo text-slate-600 dark:text-slate-400 mx-auto mb-2 leading-relaxed whitespace-nowrap" style={{ transition: 'color 0.3s' }}>
            Dự án thực tế mang lại hiệu quả đo lường được và sự tin tưởng từ các đối tác hàng đầu.
          </p>
        </div>

        {/* --- TAB SWITCHER DỰ ÁN --- */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', maxWidth: '1280px', margin: '0 auto 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="text-sapo text-slate-900 dark:text-white font-semibold tracking-tight">Dự án tiêu biểu</span>
            <span className="text-body-sm text-slate-500 font-mono tabular-nums mt-1">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={prevProject} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 cursor-pointer flex items-center justify-center transition-all duration-200">
              <ChevronLeft size={18} />
            </button>
            <button onClick={nextProject} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 cursor-pointer flex items-center justify-center transition-all duration-200">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* --- KHỐI THÔNG TIN DỰ ÁN --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            style={{ maxWidth: '1280px', margin: '0 auto' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

              {/* CỘT TRÁI - ẢNH DỰ ÁN VÀ METADATA */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden w-full aspect-4/3 shadow-sm bg-white dark:bg-slate-900">
                  <img src={current.image} alt={current.title} className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute bottom-3 left-3 bg-emerald-600 px-2 py-0.5 rounded-md shadow-sm">
                    <span className="text-caption text-white whitespace-nowrap">{current.category}</span>
                  </div>
                </div>

                {/* Metagrid: Năm & Quy mô */}
                <div className="grid grid-cols-2 gap-4 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-450 shrink-0">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <div className="text-eyebrow text-slate-500">Năm triển khai</div>
                      <div className="text-body font-semibold text-slate-900 dark:text-white mt-0.5">{current.year}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-455 shrink-0">
                      <LayoutGrid size={16} />
                    </div>
                    <div>
                      <div className="text-eyebrow text-slate-500">Quy mô nhà máy</div>
                      <div className="text-body font-semibold text-slate-900 dark:text-white mt-0.5">{current.size}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CỘT PHẢI - THÔNG TIN CHI TIẾT DỰ ÁN */}
              <div className="lg:col-span-7 border-2 border-solid border-emerald-500 bg-transparent rounded-2xl transition-all duration-300">
                <div className="p-6 md:p-8 flex flex-col justify-between h-full">
                  <div>
                    {/* Location */}
                    <div className="text-body-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-2">
                      <MapPin size={14} className="text-slate-400" />
                      <span>{current.location}</span>
                    </div>

                    {/* Project Name (H3) */}
                    <h3 className="text-subsection text-slate-900 dark:text-white mb-4 leading-snug">{current.title}</h3>

                    {/* Cải tiến ưu việt */}
                    <div className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-xl mb-6">
                      <div className="flex items-center gap-2 mb-1">
                        <Gauge size={14} className="text-emerald-700 dark:text-emerald-400" />
                        <span className="text-eyebrow text-emerald-800 dark:text-emerald-400">Cải tiến ưu việt</span>
                      </div>
                      <p className="text-body text-slate-700 dark:text-slate-300 leading-relaxed">{current.improvement}</p>
                    </div>

                    {/* Stats Grid - Clean tabular layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {[
                        { icon: TrendingDown, label: 'Chi phí tiết kiệm', val: current.stats.savings, sub: current.stats.savingsSub },
                        { icon: Gauge, label: 'Chi phí nhân công vận hành', val: current.stats.labor, sub: current.stats.laborSub }
                      ].map((st, i) => {
                        const StatIcon = st.icon;
                        return (
                          <div key={i} className="bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                              <StatIcon size={14} className="text-slate-450 dark:text-slate-500" />
                              <span className="text-eyebrow text-slate-500">{st.label}</span>
                            </div>
                            <div className="text-data-xl tabular-nums text-emerald-700 dark:text-emerald-400 leading-none">{st.val}</div>
                            <div className="text-caption text-slate-500 dark:text-slate-400 mt-2 leading-tight">{st.sub}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bullet Details */}
                    <ul className="list-disc pl-5 flex flex-col gap-2.5">
                      {current.bullets.map((bullet, i) => (
                        <li key={i} className="text-body text-slate-750 dark:text-slate-300 leading-relaxed">{bullet}</li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ========================================================= */}
        {/* VÙNG ĐỐI TÁC: LOGOS SLIDER */}
        {/* ========================================================= */}
        <div style={{ width: '100%', margin: '51px auto 0', padding: '42px 2vw 0' }}>
          <div className="text-center mb-8">
            <h3 className="text-sapo text-slate-900 dark:text-white font-semibold">
              Khách hàng và đối tác của chúng tôi
            </h3>
          </div>

          {/* Slider (Auto-scroll 2 hàng) */}
          <div className="flex flex-col gap-[20px] pb-6 overflow-hidden">

            {/* Hàng 1: Trái sang Phải */}
            <div className="flex w-full overflow-hidden">
              <motion.div
                animate={{ x: [-3036, 0] }}
                transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                className="flex gap-5 pl-5"
              >
                {[...partnersData, ...partnersData, ...partnersData, ...partnersData].map((partner, i) => (
                  <div
                    key={`row1-${partner.id}-${i}`}
                    title={partner.name}
                    className="flex-shrink-0 w-[207px] h-[103px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex items-center justify-center overflow-hidden shadow-sm"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain transition-all duration-300"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hàng 2: Phải sang Trái */}
            <div className="flex w-full overflow-hidden">
              <motion.div
                animate={{ x: [0, -3036] }}
                transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                className="flex gap-5 pl-5"
              >
                {[...partnersData].reverse().concat([...partnersData].reverse(), [...partnersData].reverse(), [...partnersData].reverse()).map((partner, i) => (
                  <div
                    key={`row2-${partner.id}-${i}`}
                    title={partner.name}
                    className="flex-shrink-0 w-[207px] h-[103px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex items-center justify-center overflow-hidden shadow-sm"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain transition-all duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}