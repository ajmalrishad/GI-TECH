import Subnavbar from "../../components/Navbar/Subnavbar";
import Footer from "../../components/Footer/Footer";
import serviceImg1 from "../../assets/air.png";
import serviceImg2 from "../../assets/mobility.png";
import serviceImg3 from "../../assets/manufacturing.png";
import serviceImg4 from "../../assets/building.png";
import serviceImg5 from "../../assets/wastewatertreatment.png";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Harmonic Study and Analysis',
      description: 'Comprehensive evaluation of electrical power quality, identifying harmonic distortions, and implementing custom filters to protect sensitive equipment and reduce energy costs.',
      image: serviceImg1,
    },
    {
      title: 'VFD and Servo Drives Repairing',
      description: 'Component-level repair and diagnostic testing of Variable Frequency Drives (VFDs) and servo systems from leading global brands, restoring them to original factory specifications.',
      image: serviceImg2,
    },
    {
      title: 'Commissioning of Control Panels',
      description: 'On-site installation, field cabling, testing, and startup support for industrial automation control panels, ensuring safe and optimal performance.',
      image: serviceImg3,
    },
    {
      title: 'PLC and Control Panel Troubleshooting',
      description: 'Swift diagnostic services and code troubleshooting for PLC systems, field sensors, and panels to minimize equipment downtime and restore production.',
      image: serviceImg4,
    },
    {
      title: 'Earth Leakage Test / Meggering of Motor',
      description: 'Complete insulation resistance diagnostics and earth leakage testing to identify motor winding degradation and prevent electrical failures.',
      image: serviceImg5,
    },
  ];

  return (
    <>
      <Subnavbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full mb-3 dark:bg-blue-900/30 dark:text-blue-400">
              Technical Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Our Professional After-Sales Services
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
              GiTech provides dedicated engineering support and specialized testing services to keep your automation infrastructure operating at peak performance.
            </p>
          </div>

          {/* Services Stack */}
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-350 border border-gray-100 dark:border-gray-700 overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Wrap */}
                <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl aspect-[16/10]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-52 sm:max-h-64 w-auto object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Wrap */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  <button
                    onClick={() => navigate("/contact")}
                    className="self-start px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 text-sm"
                  >
                    Inquire Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
