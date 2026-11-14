import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PureCounter from "@srexi/purecounterjs";
import aboutImg from "../../assets/company-profile-gitech.jpg";
import { FaCheckCircle, FaAward, FaUsers, FaProjectDiagram, FaHeadset, FaBuilding } from "react-icons/fa";

const StatsSection = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-50 border-y border-slate-100 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Professional Industrial Graphic */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img
                    src={aboutImg}
                    alt="GI. Tech Industrial Automation Engineering"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-800 tracking-wide">
                      GI. Tech FZE • UAE
                    </span>
                  </div>

                  {/* Bottom Float Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                      Certified Automation Facility
                    </p>
                    <p className="text-sm font-semibold text-white/90">
                      Sharjah Airport International Freezone (SAIF Zone)
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 px-1 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <FaAward className="text-primary" /> Established 2011
                  </span>
                  <span className="font-semibold text-primary">ISO Compliant Quality</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About GiTech Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs sm:text-sm uppercase tracking-widest font-bold text-primary">
                Company Profile • UAE & Dubai
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                About GI. Tech
              </h2>
              <div className="w-16 h-1 bg-primary my-3 rounded-full"></div>
            </div>

            <p className="text-base sm:text-xl text-slate-800 leading-relaxed font-normal">
              GI. Tech FZE is a premier industrial automation and <strong>VFD supplier in the UAE</strong>,
              delivering state-of-the-art <strong>variable frequency drives in Dubai</strong>, high-efficiency
              frequency inverters, and turnkey automation solutions for industrial and commercial sectors.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded in 2011, GI. Tech delivers end-to-end engineering excellence across Dubai,
              Sharjah, and the UAE. We specialize in official distribution of Invertek Drives, KEB
              motion inverters, Aucom soft starters, Kendrion brakes, and VOGEL precision gearboxes.
              Our dedicated engineering bench also delivers urgent, certified <strong>VFD repairs in Dubai</strong> to
              restore plant operations and eliminate unscheduled downtime.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 text-base text-slate-800 font-medium">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <span>Multi-vertical industrial expertise</span>
              </div>
              <div className="flex items-start gap-2.5 text-base text-slate-800 font-medium">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <span>Turnkey engineering & commissioning</span>
              </div>
              <div className="flex items-start gap-2.5 text-base text-slate-800 font-medium">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <span>Global brand partnerships & sourcing</span>
              </div>
              <div className="flex items-start gap-2.5 text-base text-slate-800 font-medium">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-1" />
                <span>24/7 technical lifecycle support</span>
              </div>
            </div>

            {/* Numerical Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaUsers size={18} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="250"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl sm:text-3xl font-extrabold text-slate-900"
                  >
                    250
                  </span>
                  <span className="text-primary font-bold text-lg sm:text-xl">+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Happy Clients</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaProjectDiagram size={18} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="520"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl sm:text-3xl font-extrabold text-slate-900"
                  >
                    520
                  </span>
                  <span className="text-primary font-bold text-lg sm:text-xl">+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Projects Done</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaHeadset size={18} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1400"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl sm:text-3xl font-extrabold text-slate-900"
                  >
                    1400
                  </span>
                  <span className="text-primary font-bold text-lg sm:text-xl">+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Support Hours</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaAward size={18} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl sm:text-3xl font-extrabold text-slate-900"
                  >
                    15
                  </span>
                  <span className="text-primary font-bold text-lg sm:text-xl">+</span>
                </div>
                <p className="text-sm text-slate-600 font-medium">Years Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
