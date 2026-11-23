import { motion } from "framer-motion";
import projectImg1 from "../../assets/projects/project1.png";
import projectImg2 from "../../assets/projects/project2.png";
import projectImg3 from "../../assets/projects/project3.png";

const galleryList = [
  { src: projectImg1, label: "Control Panel Assembly" },
  { src: projectImg2, label: "VFD Drive Bank Setup" },
  { src: projectImg3, label: "SCADA Control Desk" },
  { src: projectImg2, label: "Pumping System Inverters" },
  { src: projectImg1, label: "BMS Automation Rack" },
  { src: projectImg3, label: "Field Sensor Wiring" },
];

const Gallery = () => {
  return (
    <section className="pt-8 border-t border-slate-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">
          On-Site Gallery
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Workshop & Site Gallery
        </h2>
        <div className="w-12 h-1 bg-primary mx-auto my-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryList.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-2xs"
          >
            <div className="h-56 bg-slate-100 overflow-hidden">
              <img loading="lazy" decoding="async"
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">
                {item.label}
              </span>
              <span className="text-[11px] font-medium text-primary">
                GI Tech Engineering
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
