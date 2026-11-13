import { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import PureCounter from "@srexi/purecounterjs";
import stat from "../../assets/interaction.png";
import { FaCheckCircle, FaAward, FaUsers, FaProjectDiagram, FaHeadset } from "react-icons/fa";

const StatsSection = () => {
  useEffect(() => {
    new PureCounter();
  }, []);

  return (
    <section id="who-we-are" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual graphic */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-lg"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80">
                <img
                  src={stat}
                  alt="GiTech Automation Technologies"
                  className="w-full h-auto object-contain max-h-[360px] mx-auto"
                />
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <FaAward className="text-primary" /> Founded in 2011
                  </span>
                  <span className="font-medium text-primary">ISO Compliant Standards</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Who We Are Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary">
                About GiTech
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Who We Are
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              GiTech is a total solution provider specializing in automation
              technologies for industrial and commercial environments. With deep
              expertise across multiple verticals, we offer tailored systems that
              drive efficiency, safety, and sustainability.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded in 2011, GiTech delivers end-to-end engineering excellence
              spanning variable frequency drives, soft starters, motion control,
              and centralized lubrication systems. Our certified automation
              engineers work alongside plant operators and facility managers to
              modernize legacy workflows and deploy reliable, energy-conscious
              automation solutions.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>Multi-vertical industrial expertise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>Turnkey engineering & commissioning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>Global brand partnerships & sourcing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <FaCheckCircle className="text-emerald-500 shrink-0" />
                <span>24/7 technical lifecycle support</span>
              </div>
            </div>

            {/* Numerical Stats Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaUsers size={16} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="250"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl font-extrabold text-slate-900"
                  >
                    250
                  </span>
                  <span className="text-primary font-bold text-lg">+</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Happy Clients</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaProjectDiagram size={16} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="520"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl font-extrabold text-slate-900"
                  >
                    520
                  </span>
                  <span className="text-primary font-bold text-lg">+</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Projects Done</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaHeadset size={16} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1400"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl font-extrabold text-slate-900"
                  >
                    1400
                  </span>
                  <span className="text-primary font-bold text-lg">+</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Support Hours</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200/70 shadow-2xs text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-primary mb-1">
                  <FaAward size={16} />
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="15"
                    data-purecounter-duration="1.5"
                    className="purecounter text-2xl font-extrabold text-slate-900"
                  >
                    15
                  </span>
                  <span className="text-primary font-bold text-lg">+</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Years Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
