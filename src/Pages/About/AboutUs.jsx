import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaCogs, FaUsers, FaHistory, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/logos/gitech-logo.png";
import aboutImg from "../../assets/about/about-robotics.jpg";
import projectImg1 from "../../assets/projects/project1.png";
import projectImg2 from "../../assets/projects/project2.png";
import projectImg3 from "../../assets/projects/project3.png";
import officeImg from "../../assets/about/about-gitech-facility.jpg";

const galleryImages = [
  { src: projectImg1, alt: "Industrial Control Panels", tag: "Control Panels" },
  { src: projectImg2, alt: "VFD Drive Systems", tag: "Drive Retrofits" },
  { src: projectImg3, alt: "SCADA Architecture", tag: "SCADA & Telemetry" },
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${officeImg})` }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Company Background
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About GI Tech
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-center text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Total solution provider specializing in automation technologies for
            industrial and commercial environments.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Core Profile Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-200/80 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Founded in 2011 • Engineering Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Precision-Engineered Automation Backed by Global Brands
              </h2>
              <p className="text-justify text-base text-slate-700 leading-relaxed font-normal">
                GI Tech is a total solution provider and premier authorized supplier of Variable Frequency Drives (VFD) in Dubai & UAE,
                high-performance frequency inverters and frequency converters, and turnkey automation solutions.
                With deep expertise across HVAC, pumps, fans, and manufacturing sectors, we deliver precision systems that
                cut energy consumption by up to 50% while maximizing operational reliability. Started in 2011 in the UAE,
                we provide certified engineering backed by world-class brands with local stock and fast GCC dispatch.
              </p>
              <p className="text-justify text-sm text-slate-600 leading-relaxed font-normal">
                From low-voltage variable frequency drives (0.37kW to 355kW), dedicated CE-certified single-phase input &amp; output VFDs,
                and intelligent soft starters to KEB COMBIVERT F5 to F6 conversion engineering and certified 24/7 VFD repairs in Dubai &amp; Sharjah,
                our multidisciplinary team of engineers delivers turnkey accountability for plants across Dubai and the UAE.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Authorized Global Brand Distributor</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Certified Drive & Automation Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>Custom Control Panel Assembly</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <FaCheckCircle className="text-emerald-500 shrink-0" />
                  <span>24/7 Breakdown & Field Service Support</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-sm w-full">
                <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src={aboutImg}
                    alt="GI Tech Industrial Automation Engineering"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg text-[11px] font-bold text-slate-800">
                    SAIF Zone, Sharjah
                  </div>
                </div>
                <div className="p-5 text-center space-y-2">
                  <img loading="lazy" decoding="async"
                    src={logo}
                    alt="GI Tech Logo"
                    className="h-12 sm:h-14 w-auto mx-auto object-contain"
                  />
                  <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                    <p className="font-bold text-slate-900">GI Tech</p>
                    <p className="text-slate-500 text-[11px]">Sharjah Airport International Freezone, UAE</p>
                    <p className="text-primary font-bold">15+ Years Active in Industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed details */}
        <div className="space-y-8">
          <div className="flex justify-center border-b border-slate-200">
            {[
              { id: "overview", label: "Core Values", icon: FaAward },
              { id: "capabilities", label: "Engineering Capabilities", icon: FaCogs },
              { id: "gallery", label: "Installation Highlights", icon: FaHistory },
            ].map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold border-b-2 transition-all cursor-pointer ${activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                >
                  <TabIcon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <h3 className="text-lg font-bold text-slate-900">Precision First</h3>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every control panel and drive sizing adheres to stringent
                  international standards, ensuring reliable operation under high
                  thermal and vibrational industrial loads.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <h3 className="text-lg font-bold text-slate-900">Energy Stewardship</h3>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We specialize in VFD and harmonic mitigation strategies that
                  curb electrical demand charges and substantially lower plant kWh
                  expenditures.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
                <h3 className="text-lg font-bold text-slate-900">Reliable Partnership</h3>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Long-term client relationships anchored in transparent
                  technical consultation, genuine OEM parts, and dependable
                  lifecycle assistance.
                </p>
              </div>
            </div>
          )}

          {activeTab === "capabilities" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-base font-bold text-slate-900">Drive & Motor Control</h4>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sizing, parameterization, and integration of Variable Frequency
                  Drives (Invertek) and soft starters (Aucom) across municipal
                  pumps, cooling towers, and heavy extruders.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-base font-bold text-slate-900">Precision Gearboxes & Drives</h4>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  German-engineered planetary and spiral bevel gearboxes (VOGEL Antriebstechnik)
                  providing low backlash, maximum torque density, and up to 98% efficiency.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-base font-bold text-slate-900">Safety Braking & Motion</h4>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Electromagnetic holding and emergency brakes (Kendrion Intorq)
                  integrated for hoists, passenger elevators, and crane traverse
                  safety systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-base font-bold text-slate-900">Solar Pumping Solutions</h4>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  High-efficiency solar water pumping systems and inverters
                  engineered for sustainable agriculture, irrigation, and off-grid water conservancy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="text-base font-bold text-slate-900">Turnkey Panel Assembly</h4>
                <p className="text-justify text-xs sm:text-sm text-slate-600 leading-relaxed">
                  In-house design, CAD schematics, panel fabrication, wiring,
                  testing, and site commissioning for PLC/SCADA and MCC panels.
                </p>
              </div>
            </div>
          )}

          {activeTab === "gallery" && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {galleryImages.map((img, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs group">
                  <div className="h-48 overflow-hidden bg-slate-100 p-2">
                    <img loading="lazy" decoding="async"
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] font-bold text-primary uppercase">{img.tag}</span>
                    <h4 className="text-sm font-bold text-slate-800 mt-0.5">{img.alt}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
