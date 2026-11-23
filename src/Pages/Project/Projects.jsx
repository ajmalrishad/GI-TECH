import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCheckCircle } from "react-icons/fa";

import project1Img1 from "../../assets/projects/project1.png";
import project1Img2 from "../../assets/projects/project2.png";
import project2Img1 from "../../assets/projects/project3.png";
import project2Img2 from "../../assets/projects/project1.png";

const projectsList = [
  {
    title: "Motor Control Centers (MCC)",
    category: "Industrial Power",
    description:
      "High-performance motor control centers designed for industrial automation and electrical safety.",
    images: [project2Img1, project1Img1],
    details:
      "These centers offer robust control over three-phase electric motors, ensuring efficiency, overload safety, and uptime in critical manufacturing operations.",
  },
  {
    title: "HVAC Climate Control Panels",
    category: "Building Automation",
    description:
      "Innovative HVAC panels providing energy-efficient climate control solutions.",
    images: [project1Img2, project2Img2],
    details:
      "Our HVAC panels are engineered with sustainability in mind, integrating variable speed drives and BMS sensors to optimize building airflow and chiller cycles.",
  },
  {
    title: "Sewage & Effluent Treatment Plants",
    category: "Water & Environmental",
    description:
      "Advanced sewage treatment plants engineered for environmental sustainability.",
    images: [project2Img1, project1Img2],
    details:
      "Integrated SCADA, telemetry, and automated dosing pumps crucial for maintaining compliance and reliable water treatment.",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold text-primary uppercase tracking-widest">
          Case Studies
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
          Featured Engineering Installations
        </h2>
        <div className="w-12 h-1 bg-primary mx-auto my-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="relative overflow-hidden bg-slate-100">
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={4000}
                >
                  {project.images.map((img, i) => (
                    <div key={i} className="h-56">
                      <img loading="lazy" decoding="async"
                        src={img}
                        alt={`${project.title} - ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-slate-500 pt-2 border-t border-slate-100 leading-relaxed">
                  {project.details}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <FaCheckCircle size={12} />
                <span>Installed & Operating</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
