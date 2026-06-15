import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Radio, Database, Shield, Zap, BarChart3, Bell, FileText, Leaf, Building2, Globe, Server, MessageCircle, CalendarDays } from 'lucide-react';
import { ZoomableImage } from './ZoomableImage';
import ImgOverview from './2.png';
import ImgHardware from './5.png';
import ImgSoftware from './4.png';

const hwItems = [
 { icon: Cpu, title: 'Thu thập dữ liệu tự động', desc: 'Trích xuất dữ liệu liên tục 24/7, đảm bảo độ chính xác của thông tin.' },
 { icon: Radio, title: 'Giao thức đa dạng', desc: 'Modbus, BACnet,... linh hoạt trong cả kết nối không dây và có dây.' },
 { icon: Database, title: 'Đa dạng khả năng giám sát', desc: 'Giám sát đa dạng nguồn năng lượng: điện, than, dầu, khí, hơi nước...' },
 { icon: Shield, title: 'Giám sát linh hoạt', desc: 'Linh hoạt cấu hình, giám sát nhiều phụ tải trên 1 thiết bị.' },
 { icon: Zap, title: 'Đảm bảo tính liên tục', desc: 'Xử lý và lưu trữ dữ liệu cục bộ ngay tại nguồn, đảm bảo không mất dữ liệu.' },
];

const swItems = [
 { icon: BarChart3, title: 'Bảng điều khiển (Dashboard)', desc: 'Trực quan hoá toàn bộ luồng năng lượng của nhà máy trên một màn hình.' },
 { icon: Bell, title: 'Cảnh báo tức thời', desc: 'Tự động phát hiện rò rỉ, sự cố quá tải và gửi thông báo ngay lập tức.' },
 { icon: FileText, title: 'Báo cáo năng lượng tự động', desc: 'Tự động trích xuất số liệu, giúp doanh nghiệp giảm 60-80% nhân công.' },
 { icon: Leaf, title: 'Quản lý phát thải khí nhà kính', desc: 'Đo lường và theo dõi mục tiêu giảm phát thải khí CO₂ cho nhà máy.' },
 { icon: Building2, title: 'Quản lý chuẩn ISO 50001', desc: 'Hỗ trợ doanh nghiệp chuẩn hoá quy trình kiểm toán năng lượng toàn cầu.' },
 { icon: Globe, title: 'Đáp ứng chuẩn công trình xanh', desc: 'EnMS giúp giám sát, phân tích và tối ưu năng lượng — giảm chi phí, tăng hiệu suất, hướng tới bền vững.' },
];

type TabId = 'overview' | 'hardware' | 'software';

export function PlatformSection() {
 const [activeTab, setActiveTab] = useState<TabId>('overview');

 const tabs = [
 { id: 'overview' as TabId, label: '1. Sơ đồ tổng quan', icon: Server },
 { id: 'hardware' as TabId, label: '2. Phần cứng IoT', icon: Cpu },
 { id: 'software' as TabId, label: '3. Phần mềm EnMS', icon: BarChart3 },
 ];

 return (
 <section
 id="platform"
 className="relative overflow-hidden py-12 md:py-14 bg-white dark:bg-slate-900 transition-colors duration-300"
 >
 {/* Ambient neon mesh glow blobs */}
 <div style={{
 position: 'absolute',
 width: '350px',
 height: '350px',
 borderRadius: '50%',
 bottom: '20%',
 left: '-10%',
 background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
 zIndex: 0,
 pointerEvents: 'none',
 display: 'none' }} />
 <div style={{
 position: 'absolute',
 width: '350px',
 height: '350px',
 borderRadius: '50%',
 top: '10%',
 right: '-10%',
 background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
 zIndex: 0,
 pointerEvents: 'none',
 display: 'none' }} />

  <div className="container mx-auto px-4 max-w-7xl" style={{ position: 'relative', zIndex: 1 }}>

    {/* Header */}
    <div className="text-center mb-10">
      <h2 className="font-display text-title text-balance text-slate-900 dark:text-white mb-3" style={{ transition: 'color 0.3s' }}>
        Giải Pháp EnMS Giải Quyết Toàn Diện Áp Lực
      </h2>
      <p className="text-sapo text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-2 leading-relaxed" style={{ transition: 'color 0.3s' }}>
        Từ thiết bị đo lường thực địa đến phân tích dữ liệu — tích hợp đồng bộ giúp doanh nghiệp làm chủ năng lượng.
      </p>
    </div>

    {/* Premium Tab Navigation */}
    <div
      className="flex flex-nowrap overflow-x-auto no-scrollbar bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 p-1.5 rounded-full max-w-fit mx-auto gap-1 mb-8 shadow-inner"
      style={{ transition: 'background-color 0.3s, border-color 0.3s' }}
    >
      {tabs.map((tab) => {
        const TabIcon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-body-sm transition-all duration-300 outline-none whitespace-nowrap font-medium cursor-pointer hover:scale-105 active:scale-[0.98]
              ${isActive 
                ? 'bg-white dark:bg-slate-950 text-emerald-700 dark:text-emerald-400 shadow-sm border border-slate-200/50 dark:border-slate-800' 
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-250 hover:bg-white/40 dark:hover:bg-slate-800/20 border border-transparent'
              }`}
            style={{ outline: 'none' }}
          >
            <TabIcon size={14} className="shrink-0" />
            <span className="whitespace-nowrap">{tab.label}</span>
          </button>
        );
      })}
    </div>

    {/* Tab Content Display — Two separate frames */}
    <div
      style={{
        minHeight: '380px' }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* TEXT FRAME */}
              <div className="lg:col-span-6 border-2 border-emerald-500 rounded-2xl bg-transparent transition-all duration-300">
                <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center gap-4">
                  {/* Block 1: Title + Description */}
                  <div>
                    <h3 className="text-subsection text-slate-900 dark:text-white" style={{ marginBottom: '10px', transition: 'color 0.3s' }}>
                      Kiến trúc tổng quan giải pháp
                    </h3>
                    <p className="text-body text-slate-700 dark:text-slate-300" style={{ lineHeight: 1.5, margin: 0, transition: 'color 0.3s' }}>
                      Giải pháp EnMS của <span className="whitespace-nowrap">IoTeamVN</span> kết nối đồng bộ thiết bị đo thực địa với trạm <span className="whitespace-nowrap">dữ liệu</span> trung tâm DCS (đóng vai trò <span className="whitespace-nowrap">cơ sở dữ liệu</span> toàn hệ thống), tích hợp linh hoạt các đồng hồ sẵn có hoặc thiết bị của bên thứ ba, và hiển thị trực quan qua giao diện <span className="whitespace-nowrap">phần mềm</span> chuyên dụng (online qua Cloud hoặc chạy offline trong <span className="whitespace-nowrap">mạng nội bộ</span>).
                    </p>
                  </div>

                  {/* Block 2: Stats strip 2×2 */}
                  <div className="grid grid-cols-2 gap-3 my-2">
                    <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/40 rounded-xl p-4">
                      <div className="font-mono text-data-md tabular-nums text-emerald-700 dark:text-emerald-450">5–15%</div>
                      <div className="text-caption text-slate-500 mt-1">Tiết kiệm <span className="whitespace-nowrap">chi phí điện năng</span></div>
                    </div>
                    <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/40 rounded-xl p-4">
                      <div className="font-mono text-data-md tabular-nums text-emerald-700 dark:text-emerald-450">~1.9 năm</div>
                      <div className="text-caption text-slate-500 mt-1">Hoàn vốn <span className="whitespace-nowrap">đầu tư</span></div>
                    </div>
                    <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/40 rounded-xl p-4">
                      <div className="font-mono text-data-md tabular-nums text-emerald-700 dark:text-emerald-450">24/7</div>
                      <div className="text-caption text-slate-500 mt-1">Giám sát <span className="whitespace-nowrap">liên tục</span></div>
                    </div>
                    <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100 dark:border-emerald-900/40 rounded-xl p-4">
                      <div className="font-mono text-data-md tabular-nums text-emerald-700 dark:text-emerald-455">ISO 50001</div>
                      <div className="text-caption text-slate-500 mt-1">Sẵn sàng <span className="whitespace-nowrap">hỗ trợ chứng nhận</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMAGE FRAME */}
              <div className="lg:col-span-6 border-2 border-emerald-500 rounded-2xl bg-transparent transition-all duration-300">
                <div className="p-2 bg-transparent flex items-center justify-center rounded-2xl w-full">
                  <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ZoomableImage
                      src={ImgOverview}
                      alt="Sơ đồ kiến trúc tổng quan hệ thống EnMS IoTeamVN"
                      style={{ width: '100%', height: 'auto', maxHeight: '400px', display: 'block', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'hardware' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* TEXT FRAME */}
              <div className="lg:col-span-6 border-2 border-emerald-500 rounded-2xl bg-transparent transition-all duration-300">
                <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center gap-3">
                  <h3 className="text-subsection text-slate-900 dark:text-white" style={{ marginBottom: '12px', transition: 'color 0.3s' }}>
                    Phần cứng IoT
                  </h3>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0' }} className="divide-y divide-slate-100 dark:divide-slate-800">
                    {hwItems.map((item, i) => (
                      <li key={i} className="py-4 first:pt-0 last:pb-0" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', flexShrink: 0, marginTop: '3px', transition: 'color 0.3s' }}>
                          <item.icon size={16} />
                        </div>
                        <span className="text-body text-slate-700 dark:text-slate-300" style={{ transition: 'color 0.3s', lineHeight: 1.6 }}>
                          <strong>{item.title}</strong>: {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IMAGE FRAME */}
              <div className="lg:col-span-6 border-2 border-emerald-500 rounded-2xl bg-transparent transition-all duration-300">
                <div className="p-4 bg-transparent flex flex-col justify-between rounded-2xl w-full">
                  {/* Hardware photo */}
                  <div className="flex-1 flex items-center justify-center" style={{ padding: '6px' }}>
                    <div style={{ width: '100%', position: 'relative' }}>
                      <ZoomableImage
                        src={ImgHardware}
                        alt="Gateway IIoT kết nối công tơ điện 3 pha"
                        style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '8px' }}
                      />
                    </div>
                  </div>

                  {/* Protocol strip */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <div className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-350 border border-slate-200 dark:border-slate-800 text-caption rounded-lg py-2 px-3 text-center font-mono">
                      RS-485 / Modbus
                    </div>
                    <div className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-350 border border-slate-200 dark:border-slate-800 text-caption rounded-lg py-2 px-3 text-center font-mono">
                      TCP-IP / BACnet
                    </div>
                    <div className="flex-1 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-355 border border-slate-200 dark:border-slate-800 text-caption rounded-lg py-2 px-3 text-center font-mono">
                      LoRa / WiFi
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'software' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* TEXT FRAME */}
              <div className="lg:col-span-6 border-2 border-emerald-500 rounded-2xl bg-transparent transition-all duration-300">
                <div className="p-5 md:p-6 lg:p-8 flex flex-col justify-center gap-3">
                  <h3 className="text-subsection text-slate-900 dark:text-white" style={{ marginBottom: '12px', transition: 'color 0.3s' }}>
                    Phần mềm EnMS
                  </h3>
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0' }} className="divide-y divide-slate-100 dark:divide-slate-800">
                    {swItems.map((item, i) => (
                      <li key={i} className="py-4 first:pt-0 last:pb-0" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', flexShrink: 0, marginTop: '3px', transition: 'color 0.3s' }}>
                          <item.icon size={16} />
                        </div>
                        <span className="text-body text-slate-700 dark:text-slate-300" style={{ transition: 'color 0.3s', lineHeight: 1.6 }}>
                          <strong>{item.title}</strong>: {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IMAGE FRAME */}
              <div className="lg:col-span-6 border-2 border-emerald-500 rounded-2xl bg-transparent transition-all duration-300">
                <div className="p-2 bg-transparent flex items-center justify-center rounded-2xl w-full">
                  <div style={{ width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ZoomableImage
                      src={ImgSoftware}
                      alt="Bảng điều khiển phần mềm quản lý năng lượng EnMS"
                      style={{ width: '100%', height: 'auto', maxHeight: '400px', display: 'block', objectFit: 'contain', position: 'relative', zIndex: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>

  {/* Nút "Liên hệ với chúng tôi" đồng bộ */}
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }}>
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
