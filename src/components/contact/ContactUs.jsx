import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
  FaFax,
  FaBuilding,
  FaShieldAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "971559241038";
const GOOGLE_MAPS_SEARCH_URL = "https://www.google.com/search?q=GI.Tech+FZE&kgmid=/g/11c0vkv3r4";

const ContactUs = ({ isPage = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Invertek Drives (VFDs)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare clear structured lead message for WhatsApp
    const whatsappMessage = `*GI Tech Automation - New Technical Inquiry*\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n👤 *Client Name:* ${formData.name.trim()}\n🏢 *Corporate Email:* ${formData.email.trim()}\n📞 *Phone Number:* ${formData.phone.trim()}\n⚙️ *Product / Application:* ${formData.interest}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📝 *Project Scope & Requirements:*\n${formData.message.trim()}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n_Submitted via GI Tech Official Web Portal_`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    setLastWhatsAppUrl(url);
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(url, "_blank");
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "Invertek Drives (VFDs)",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className={`bg-white border-t border-slate-100 w-full overflow-hidden ${
        isPage ? "py-12 sm:py-16" : "py-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (rendered on homepage; streamlined if on /contact page) */}
        {!isPage && (
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-xs sm:text-sm uppercase tracking-widest font-bold text-primary mb-2">
              Let's Collaborate
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
            <p className="text-base sm:text-lg text-slate-600">
              Have an automation project, need replacement drives, or looking for a
              custom solution? Connect directly with our certified technical engineers in
              Sharjah, UAE.
            </p>
          </div>
        )}

        {/* Two Balanced, Symmetrically Aligned Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Left Card: Official Office & Direct Channels (Equal Height on Desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full space-y-6">
              {/* Header block aligned with right card */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Head Office • SAIF Zone
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Sharjah, UAE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  GI Tech
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mt-1.5 min-h-[44px]">
                  Certified automation engineering, drive retrofit, and control panel integration desk in Sharjah Airport International Freezone.
                </p>
              </div>

              {/* Contact Channels Info */}
              <div className="space-y-3.5 flex-grow">
                {/* Registered Address */}
                <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl shrink-0 mt-0.5">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Registered Address
                    </h4>
                    <p className="text-sm font-bold text-slate-900 leading-snug mt-0.5">
                      GI Tech, Q4-158
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Sharjah International Airport Freezone, Sharjah, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* 2x2 Contact Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Phone */}
                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0">
                      <FaPhoneAlt size={13} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Phone No
                      </span>
                      <a
                        href="tel:+97165573364"
                        className="text-xs font-bold text-slate-800 hover:text-primary transition-colors truncate block"
                      >
                        +971 6 5573364
                      </a>
                    </div>
                  </div>

                  {/* Fax */}
                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0">
                      <FaFax size={13} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Fax
                      </span>
                      <span className="text-xs font-bold text-slate-800 block">
                        +971 6 5573365
                      </span>
                    </div>
                  </div>

                  {/* Mobile / WhatsApp */}
                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                      <FaWhatsapp size={14} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                        WhatsApp Hotline
                      </span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-600 hover:underline block"
                      >
                        +971 55 9241038
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-primary rounded-lg shrink-0">
                      <FaEnvelope size={13} />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        Corporate Email
                      </span>
                      <a
                        href="mailto:projects@gitek.ae"
                        className="text-xs font-bold text-slate-800 hover:text-primary transition-colors truncate block"
                      >
                        projects@gitek.ae
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-primary shrink-0" size={14} />
                    <span className="text-slate-700 font-medium">Mon – Sat: 8:30 AM – 6:30 PM (GST)</span>
                  </div>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] shrink-0">
                    24/7 Field Support
                  </span>
                </div>
              </div>

              {/* Bottom Actions of Left Card */}
              <div className="pt-3 border-t border-slate-100 mt-auto">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hello GI Tech, I would like to inquire about your automation and drive products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <FaWhatsapp size={18} />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Card: Technical Inquiry / Lead Form (Equal Height on Desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col justify-between h-full">
              {/* Header block aligned with left card */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    <FaWhatsapp size={13} />
                    Direct WhatsApp Dispatch
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Instant Technical Review
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Request a Project Quote
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mt-1.5 min-h-[44px]">
                  Submit your technical specifications below. Your requirements will be directly formatted and forwarded to our senior engineering desk via WhatsApp for rapid review.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50/80 rounded-2xl border border-emerald-200 space-y-4 my-auto">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <FaCheckCircle size={36} />
                  </div>
                  <h4 className="text-xl font-extrabold text-emerald-950">
                    Inquiry Ready & WhatsApp Dispatched!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}! Your technical requirements have been
                    prepared for our WhatsApp engineering hotline.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {lastWhatsAppUrl && (
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all"
                      >
                        <FaWhatsapp size={17} />
                        <span>Re-open WhatsApp Chat</span>
                      </a>
                    )}
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Eng. Ahmed Al Mansoori"
                          className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="engineer@company.com"
                          className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Phone / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all font-medium"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                          Product / Solution of Interest
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all font-medium"
                        >
                          <option value="Invertek Drives (VFDs)">Invertek Drives (VFDs)</option>
                          <option value="KEB Automation Systems">KEB Automation Systems</option>
                          <option value="Aucom Soft Starters">Aucom Soft Starters</option>
                          <option value="Kendrion Intorq Brakes & Clutches">Kendrion Intorq Brakes & Clutches</option>
                          <option value="VOGEL Precision Gearboxes & Drive Systems">VOGEL Precision Gearboxes & Drive Systems</option>
                          <option value="Solar Pumping Solutions">Solar Pumping Solutions</option>
                          <option value="FAN (Ventilation equipment & blowers)">FAN (Ventilation equipment & blowers)</option>
                          <option value="Industrial Pumps & Water Flow Systems">Industrial Pumps & Water Flow Systems</option>
                          <option value="Conveying & Warehouse AS/RS Systems">Conveying & Warehouse AS/RS Systems</option>
                          <option value="Turnkey BMS / Industrial Automation Panels">Turnkey BMS / Industrial Automation Panels</option>
                          <option value="VFD Repair & Commissioning Services">VFD Repair & Commissioning Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Project Requirements & Technical Scope *
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please specify motor power (kW/HP), supply voltage, application type, brand preference, or control panel requirements..."
                        className="w-full h-28 p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-base sm:text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none font-medium"
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <FaWhatsapp size={19} />
                      <span>Send Inquiry via WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                      <FaShieldAlt className="text-emerald-500" size={11} />
                      <span>Instant connection with GI Tech senior engineers • No email delay</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Permanent Interactive Map with Direct Navigation Controls */}
        <div className="mt-10 sm:mt-12 rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-2 sm:p-3">
          <div className="p-3 sm:p-4 bg-slate-50 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 mb-2">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
              <div className="p-2 bg-blue-100 text-primary rounded-xl shrink-0">
                <FaMapMarkerAlt size={16} />
              </div>
              <div>
                <span>GI Tech Facility Location • SAIF Zone, Sharjah, UAE</span>
                <p className="text-[11px] font-normal text-slate-500">
                  Building Q4-158, Sharjah Airport International Freezone
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primaryHover text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <FaExternalLinkAlt size={12} />
                <span>Open in Google Maps / Directions</span>
              </a>
            </div>
          </div>

          <iframe
            title="GI Tech SAIF Zone Sharjah Location"
            className="w-full h-80 sm:h-[420px] rounded-2xl border-0"
            src="https://maps.google.com/maps?q=GI.Tech+FZE,+Sharjah+Airport+International+Free+Zone&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            decoding="async"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
