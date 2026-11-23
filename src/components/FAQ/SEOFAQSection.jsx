import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Where can I buy Variable Frequency Drives (VFD) and Frequency Inverters in Dubai & UAE?",
    badge: "VFD Supplier Dubai",
    answer:
      "GI Tech is a premier authorized distributor of Variable Frequency Drives (VFDs), frequency inverters, and frequency converters in Dubai and across the UAE. We maintain extensive local stock of Invertek Optidrive (UK) and KEB COMBIVERT (Germany) ranging from 0.37kW up to 355kW, ready for fast dispatch across Dubai, Sharjah, Abu Dhabi, and the wider GCC region.",
  },
  {
    question: "What industrial applications do your VFDs and frequency converters support?",
    badge: "HVAC, Pumps & Fans",
    answer:
      "Our Variable Frequency Drives are engineered for variable-torque and constant-torque motor control across Dubai's most demanding sectors: commercial HVAC systems, chilled water pumps, air handling units (AHUs), ventilation fans, municipal water & wastewater treatment skids, gantry cranes, hoists, and factory conveyor machinery—cutting electrical energy consumption by up to 50%.",
  },
  {
    question: "Are your variable frequency drives rated for high-ambient GCC dust and heat?",
    badge: "IP55 / IP66 GCC Rated",
    answer:
      "Yes. In addition to standard IP20 cabinet-mount units, GI Tech provides rugged IP55 and IP66 outdoor-rated VFDs engineered specifically for harsh Middle East operating environments with ambient temperatures up to 50°C. They feature 3C3/3S2 conformally coated printed circuit boards and integrated EMC/RFI filters to safeguard sensitive electronic equipment.",
  },
  {
    question: "Do you offer emergency 24/7 VFD repairs and drive servicing in Dubai?",
    badge: "24/7 VFD Repairs Dubai",
    answer:
      "Yes. GI Tech operates a dedicated drive engineering workshop providing rapid 24/7 VFD repairs across Dubai, Sharjah, and all UAE emirates. Our certified service engineers perform component-level diagnostics, IGBT module replacement, gate driver testing, DC bus capacitor refurbishing, and full dynamic load testing to minimize unplanned plant downtime.",
  },
  {
    question: "What is the difference between a VFD, frequency inverter, and frequency converter?",
    badge: "Technical Overview",
    answer:
      "In the UAE and Middle Eastern industrial electrical markets, Variable Frequency Drive (VFD), Frequency Inverter, Frequency Converter, AC Drive, and Variable Speed Drive (VSD) are terms used interchangeably. They all refer to solid-state electronic controllers that regulate AC motor speed and torque by adjusting the supplied electrical frequency and voltage.",
  },
  {
    question: "Do you provide KEB COMBIVERT F5 to F6 VFD conversion and migration services in the UAE?",
    badge: "KEB F5 to F6 Conversion",
    answer:
      "Yes. GI Tech provides turnkey conversion and migration services to replace obsolete KEB COMBIVERT F5 inverters with next-generation KEB COMBIVERT F6 drive controllers. Our factory-trained engineers handle complete parameter translation using COMBIVIS 6, mechanical mounting adapter retrofits, encoder interface wiring, and functional safety (SIL3 STO) commissioning with minimal machine downtime across Dubai and the GCC.",
  },
  {
    question: "Do you supply dedicated single-phase input and single-phase output VFDs in the UAE?",
    badge: "1-Phase In / 1-Phase Out VFD",
    answer:
      "Yes. GI Tech supplies dedicated, CE / CEE-certified single-phase input and single-phase output variable frequency drives (Invertek Optidrive E3 Single Phase). Unlike standard drives requiring 3-phase motors, these dedicated units accept 110V–240V 1-phase input and output directly to 1-phase AC motors (Permanent Split Capacitor & Shaded Pole) from 0.37kW up to 1.1kW (0.5HP–1.5HP), delivering precise speed control and energy savings without replacing single-phase motors.",
  },
];

const SEOFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200/80 w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-primary text-xs sm:text-sm font-bold tracking-wide mb-3">
            <FaQuestionCircle size={14} />
            <span>VFD & Frequency Inverter FAQ • Dubai & UAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-center text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential technical insights on sourcing, sizing, applications, and certified repairs for
            Variable Frequency Drives (VFD) and frequency inverters in Dubai and the UAE.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1.5">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-primary bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                      {item.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`p-2 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-primary text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <FaChevronDown size={14} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-slate-100 px-5 sm:px-6 pb-6 pt-3 text-slate-700 text-sm sm:text-base leading-relaxed"
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Technical Engineering Assistance Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Need Drive Sizing or Urgent VFD Repair in Dubai?</h4>
            <p className="text-justify text-xs sm:text-sm text-slate-300">
              Speak directly with our qualified drive specialists for motor matching, harmonic studies, or emergency on-site repair.
            </p>
          </div>
          <a
            href="https://wa.me/971559241038?text=Hello%20GI%20Tech%20team,%20I%20need%20technical%20assistance%20for%20VFD%20in%20Dubai."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-primary hover:bg-primaryHover text-white font-bold text-xs sm:text-sm rounded-xl shrink-0 transition-all shadow-md"
          >
            Chat with Drive Specialist
          </a>
        </div>
      </div>
    </section>
  );
};

export default SEOFAQSection;
