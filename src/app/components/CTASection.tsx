import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';
import ControlRoomImg from './thicong.png';

export function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    loadInfo: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: '', company: '', email: '', phone: '', loadInfo: '' });
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-50 dark:bg-slate-900 py-12 md:py-14 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-5xl" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Office info & Background Context */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div
              className="float-card-depth spatial-layer-1 group relative rounded-2xl overflow-hidden flex-1 min-h-[300px]"
            >
              {/* Background / Deep Layer */}
              <motion.img
                src={ControlRoomImg}
                alt="IoTeamVN phòng điều khiển trung tâm"
                className="spatial-layer-0 absolute inset-0 w-full h-full object-cover object-left"
                style={{
                  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: 'scale(1.05)'
                }}
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </div>

          {/* Right Column: B2B Contact Form */}
          <div className="lg:col-span-6">
            <div
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 flex flex-col justify-center shadow-sm"
              style={{ height: '100%' }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 size={56} className="text-emerald-600 dark:text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-subsection text-slate-900 dark:text-white mb-2">
                      Đã gửi yêu cầu khảo sát kỹ thuật!
                    </h3>
                    <p className="text-body text-slate-650 dark:text-slate-400 max-w-[420px] mx-auto mb-6 leading-relaxed">
                      Đội ngũ chuyên gia kỹ thuật năng lượng của IoTeamVN sẽ liên hệ lại qua điện thoại hoặc email trong vòng 2 giờ làm việc để xác nhận thông tin chi tiết.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-lg text-body-sm transition-all duration-200 cursor-pointer"
                    >
                      Gửi yêu cầu mới
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      {/* Title */}
                      <h3 className="font-display text-title text-slate-900 dark:text-white mb-1">
                        Yêu Cầu Khảo Sát Kỹ Thuật
                      </h3>
                      {/* Subtitle */}
                      <p className="text-sapo text-slate-600 dark:text-slate-400 leading-relaxed">
                        Vui lòng gửi thông tin cơ bản của nhà máy dưới đây. Chúng tôi sẽ phản hồi sớm nhất.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-label text-slate-700 dark:text-slate-350 block mb-1.5">Họ và tên *</label>
                        <input
                          type="text"
                          required
                          placeholder="Nguyễn Văn A"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2 text-body text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:border-slate-400 dark:focus:border-slate-600 focus:bg-white dark:focus:bg-slate-950/90 transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600"
                        />
                      </div>
                      <div>
                        <label className="text-label text-slate-700 dark:text-slate-350 block mb-1.5">Số điện thoại liên hệ *</label>
                        <input
                          type="tel"
                          required
                          placeholder="09xx xxx xxx"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2 text-body text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:border-slate-400 dark:focus:border-slate-600 focus:bg-white dark:focus:bg-slate-950/90 transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-label text-slate-700 dark:text-slate-350 block mb-1.5">Tên doanh nghiệp / Nhà máy</label>
                        <input
                          type="text"
                          placeholder="Công ty cổ phần sản xuất..."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2 text-body text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:border-slate-400 dark:focus:border-slate-600 focus:bg-white dark:focus:bg-slate-950/90 transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600"
                        />
                      </div>
                      <div>
                        <label className="text-label text-slate-700 dark:text-slate-350 block mb-1.5">Email liên hệ</label>
                        <input
                          type="email"
                          placeholder="a.nguyen@doanhnghiep.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-body text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:border-slate-400 dark:focus:border-slate-600 focus:bg-white dark:focus:bg-slate-950/90 transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-label text-slate-700 dark:text-slate-350 block mb-1.5">Thông số phụ tải & Yêu cầu kỹ thuật (không bắt buộc)</label>
                      <textarea
                        rows={3}
                        placeholder="Ví dụ: Cần giám sát cụm máy nén khí, điện năng tiêu thụ khoảng 150,000 kWh/tháng..."
                        value={formData.loadInfo}
                        onChange={(e) => setFormData({ ...formData, loadInfo: e.target.value })}
                        className="w-full px-3.5 py-2 text-body text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-lg outline-none focus:border-slate-400 dark:focus:border-slate-600 focus:bg-white dark:focus:bg-slate-950/90 transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-600 min-h-[90px] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-button hover:scale-105 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-[0_4px_14px_rgba(5,150,105,0.3)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.45)] outline-none border-none rounded-lg mt-2 font-medium"
                    >
                      <Send size={14} className="shrink-0" />
                      Gửi yêu cầu khảo sát kỹ thuật
                    </button>

                    {/* NDA Compliance Caption */}
                    <div className="flex items-start gap-2 text-caption text-slate-400 dark:text-slate-500 mt-2 select-none">
                      <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                      <span>IoTeamVN cam kết bảo mật tuyệt đối mọi dữ liệu khảo sát phụ tải sản xuất theo thỏa thuận NDA.</span>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
