import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaMap,
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Invertek Drives (VFDs)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "Invertek Drives (VFDs)",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Have an automation project, need replacement drives, or looking for a
            custom solution? Reach out to our technical team for immediate support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Engineering & Sales Office
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect with our certified automation engineers to explore tailored
                drives, braking systems, and turnkey panel architectures.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl shrink-0 mt-0.5">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Location
                    </h4>
                    <p className="text-sm font-semibold text-slate-800">
                      GiTech Industrial Automation Hub
                    </p>
                    <p className="text-xs text-slate-500">
                      Industrial Area 1, Tech Park Avenue
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl shrink-0 mt-0.5">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Direct Support Line
                    </h4>
                    <p className="text-sm font-semibold text-slate-800">
                      +91 98765 43210 / +1 (800) 555-0199
                    </p>
                    <p className="text-xs text-slate-500">24/7 Breakdown Hotline Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl shrink-0 mt-0.5">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Inquiries
                    </h4>
                    <p className="text-sm font-semibold text-slate-800">
                      sales@gitechautomation.com
                    </p>
                    <p className="text-xs text-slate-500">
                      support@gitechautomation.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-blue-50 text-primary rounded-xl shrink-0 mt-0.5">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Working Hours
                    </h4>
                    <p className="text-sm font-semibold text-slate-800">
                      Mon – Sat: 8:30 AM – 6:30 PM
                    </p>
                    <p className="text-xs text-slate-500">Emergency support round the clock</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowMap(!showMap)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-primary bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                >
                  <FaMap size={13} />
                  <span>{showMap ? "Hide Map View" : "View Interactive Map"}</span>
                </button>
              </div>
            </div>

            {/* Embedded Map Toggle */}
            {showMap && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <iframe
                  title="GiTech Location"
                  className="w-full h-56 border-0"
                  src="https://maps.google.com/maps?q=Technopark&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                ></iframe>
              </motion.div>
            )}
          </div>

          {/* Right: Modern Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/80 shadow-2xs">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Request a Quote / Project Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill in the details below and an automation specialist will get
                back to you within 24 hours with product datasheets and pricing.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-3">
                  <FaCheckCircle className="text-emerald-500 text-4xl mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">
                    Thank You for Contacting GiTech!
                  </h4>
                  <p className="text-sm text-emerald-700">
                    Your inquiry has been received. Our application engineering team
                    will review your requirements and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
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
                        placeholder="e.g. John Doe"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
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
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
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
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all"
                      >
                        <option value="Invertek Drives (VFDs)">Invertek Drives (VFDs)</option>
                        <option value="Aucom Soft Starters">Aucom Soft Starters</option>
                        <option value="KEB Automation Systems">KEB Automation Systems</option>
                        <option value="Kendrion Intorq Brakes & Clutches">Kendrion Intorq Brakes & Clutches</option>
                        <option value="Vogel Lubrication Systems">Vogel Lubrication Systems</option>
                        <option value="Turnkey BMS / Industrial Automation Panels">Turnkey BMS / Industrial Automation Panels</option>
                        <option value="VFD Repair & Commissioning Services">VFD Repair & Commissioning Services</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Project Requirements / Message *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share motor power (kW/HP), voltage, application details, or project scope..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary hover:bg-primaryHover text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all duration-200"
                  >
                    <FaPaperPlane size={13} />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
