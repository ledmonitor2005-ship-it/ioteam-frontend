import React, { useState, useId, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function ZoomableImage({ src, alt, className, style }: { src: string, alt: string, className?: string, style?: React.CSSProperties }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const layoutId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* ẢNH THUMBNAIL LÚC BÌNH THƯỜNG */}
      <motion.img
        layoutId={layoutId}
        src={src}
        alt={alt}
        className={`cursor-zoom-in ${className || ''}`}
        style={style}
        onClick={() => setIsZoomed(true)}
      />

      {/* ẢNH FULLSCREEN */}
      {mounted && createPortal(
        <AnimatePresence>
          {isZoomed && (
            <div 
              className="fixed inset-0 z-[99999] flex items-center justify-center cursor-zoom-out"
              onClick={() => setIsZoomed(false)} // Bấm vào bất kỳ đâu trên nền đen cũng thoát được
            >
              {/* Lớp nền đen */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/95 "
              />
              
              {/* Ảnh Phóng To */}
              <motion.img
                layoutId={layoutId}
                src={src}
                alt={alt}
                // Đã bỏ w-full h-full để khung ảnh tự ôm sát nội dung thực tế
                className="relative z-[100000] max-w-[95vw] max-h-[95vh] object-contain cursor-default shadow-2xl rounded-xl"
                onClick={(e) => e.stopPropagation()} // Click vào đúng tấm ảnh thì không bị thoát
              />

              {/* Nút X: Được kéo xuống cuối cùng và cho z-index cao nhất để luôn nổi lên trên */}
              <button
                onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-all z-[999999]"
              >
                <X size={32} />
              </button>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}