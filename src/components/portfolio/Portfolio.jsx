import { useState } from "react";
import { motion } from "framer-motion";
import projectImg1 from "../../assets/projects/project1.png";
import projectImg2 from "../../assets/projects/project2.png";
import projectImg3 from "../../assets/projects/project3.png";

const portfolioItems = [
  {
    id: 1,
    imgSrc: projectImg1,
    title: "Multi-Motor Control Center (MCC)",
    category: "panels",
    categoryLabel: "Control Panels",
    description: "Custom floor-standing MCC panel for heavy manufacturing with soft starters and drive bays.",
  },
  {
    id: 2,
    imgSrc: projectImg2,
    title: "Pumping Station VFD Retrofit",
    category: "drives",
    categoryLabel: "VFD & Drives",
    description: "Invertek IP66 variable frequency drive installation for high-pressure municipal booster pumps.",
  },
  {
    id: 3,
    imgSrc: projectImg3,
    title: "Wastewater Treatment SCADA",
    category: "scada",
    categoryLabel: "BMS & SCADA",
    description: "Telemetry and central SCADA supervisory monitoring for automated effluent aeration basins.",
  },
  {
    id: 4,
    imgSrc: projectImg1,
    title: "Automated Packaging Conveyor System",
    category: "panels",
    categoryLabel: "Control Panels",
    description: "Integrated PLC and servo motion controller for high-throughput end-of-line packaging lines.",
  },
  {
    id: 5,
    imgSrc: projectImg2,
    title: "Commercial Building BMS Optimization",
    category: "scada",
    categoryLabel: "BMS & SCADA",
    description: "Smart chiller plant automation and VAV airflow controls reducing overall facility kWh by 24%.",
  },
  {
    id: 6,
    imgSrc: projectImg3,
    title: "Emergency Hoist Brake Automation",
    category: "drives",
    categoryLabel: "VFD & Drives",
    description: "Kendrion Intorq spring-applied electromagnetic brakes for safety-critical industrial cranes.",
  },
];

const filters = [
  { name: "All Projects", key: "all" },
  { name: "Control Panels", key: "panels" },
  { name: "VFD & Drives", key: "drives" },
  { name: "BMS & SCADA", key: "scada" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="projects-section" className="py-20 bg-slate-50 border-t border-slate-200/80 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-widest font-bold text-primary mb-2">
            Engineering Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Work & Installations
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-center text-base sm:text-lg text-slate-600">
            A glimpse into custom panels, drive retrofits, and smart building
            systems engineered and commissioned by GI Tech.
          </p>

          {/* Filter Buttons */}
          <div className="flex items-center gap-2.5 mt-8 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all cursor-pointer shrink-0 whitespace-nowrap ${activeFilter === f.key
                  ? "bg-primary text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-slate-100 h-56 flex items-center justify-center p-4">
                <span className="absolute top-3 left-3 z-10 text-xs font-bold text-slate-700 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md border border-slate-200 shadow-2xs">
                  {item.categoryLabel}
                </span>

                <img loading="lazy" decoding="async"
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-3 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-justify text-sm sm:text-base text-slate-600 mt-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
