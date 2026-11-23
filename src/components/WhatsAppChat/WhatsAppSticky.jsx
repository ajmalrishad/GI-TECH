import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WHATSAPP_PHONE = "971559241038";
const DEFAULT_MESSAGE = "Hello GI Tech team, I would like to inquire about your VFD and automation solutions.";

const WhatsAppSticky = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-end select-none pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered((prev) => !prev)}
    >
      {/* Tooltip / Hover Text Effect (Appears on hover or touch) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mr-3 flex items-center shrink-0"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/95 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-md whitespace-nowrap flex items-center gap-2.5 cursor-pointer transition-all hover:border-emerald-500/50"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Let's Talk</span>
            </a>

            {/* Pointer arrow pointing to the WhatsApp button */}
            <div className="w-2 h-2 bg-slate-900 rotate-45 -ml-1 border-r border-t border-slate-700/80 hidden sm:block"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated WhatsApp Icon Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GI Tech on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-emerald-950/25 hover:shadow-emerald-500/40 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Outer ambient wave pulse 1 */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"
          aria-hidden="true"
        ></span>

        {/* Subtle breathing ring */}
        <span
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 to-[#25D366] opacity-30 blur-xs -z-10 animate-pulse pointer-events-none"
          aria-hidden="true"
        ></span>

        {/* Online Status Green Indicator Dot */}
        <span
          className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full shadow-xs z-20"
          aria-hidden="true"
        ></span>

        {/* Crisp WhatsApp Glyph */}
        <FaWhatsapp size={32} className="text-white drop-shadow-xs relative z-10" />
      </motion.a>
    </aside>
  );
};

export default WhatsAppSticky;
