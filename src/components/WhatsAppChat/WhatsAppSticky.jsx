import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WHATSAPP_PHONE = "971559241038";
const DEFAULT_MESSAGE = "Hello GI Tech team, I would like to inquire about your VFD and automation solutions.";

const WhatsAppSticky = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsClosed(true);
  };

  // Always show fixed until user clicks close. If closed, show when hovering over WhatsApp button.
  const showBubble = !isClosed || isButtonHovered;

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-end select-none pointer-events-auto"
    >
      {/* "Let's Chat" Bubble: Always fixed until closed; re-reveals on WhatsApp hover if closed */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mr-3 flex items-center shrink-0 relative"
          >
            <div className="bg-slate-900/95 hover:bg-slate-900 text-white text-xs sm:text-sm font-semibold pl-3.5 pr-2.5 py-2 rounded-2xl shadow-2xl border border-slate-700/80 backdrop-blur-md whitespace-nowrap flex items-center gap-3 transition-all hover:border-emerald-500/50">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 cursor-pointer text-white hover:text-emerald-300 transition-colors"
              >
                {/* Live pulsing beacon */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div className="flex flex-col text-left leading-snug">
                  <span className="text-xs sm:text-sm font-semibold text-white">Let's Chat</span>
                  <span className="text-[10px] text-emerald-400 font-medium">
                    Online • Quick Reply
                  </span>
                </div>
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="p-1 -mr-0.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer shrink-0"
                aria-label="Close chat bubble"
                title="Close"
              >
                <FaTimes size={11} />
              </button>
            </div>

            {/* Pointer arrow pointing to the WhatsApp button */}
            <div className="w-2 h-2 bg-slate-900 rotate-45 -ml-1 border-r border-t border-slate-700/80 hidden sm:block"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GI Tech on WhatsApp"
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-emerald-950/25 hover:shadow-emerald-500/40 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Outer ambient wave pulse */}
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
