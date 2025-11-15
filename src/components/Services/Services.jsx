import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service1 from "../../assets/manufacturing.png";
import service2 from "../../assets/building.png";
import service3 from "../../assets/wastewatertreatment.png";
import service4 from "../../assets/air.png";
import service5 from "../../assets/wholesale.png";
import service6 from "../../assets/mobility.png";

const ServicesData = [
  {
    id: 1,
    img: service1,
    name: "Manufacturing & Process Automation",
    description:
      "Design, supply and commissioning of PLC/SCADA systems, drives, motor controls and sensors — optimizing production, reducing downtime and improving process consistency.",
    aosDelay: "100",
    link: "#",
  },
  {
    id: 2,
    img: service2,
    name: "Building Management Systems",
    description:
      "Integrated BMS for HVAC, lighting, access and energy monitoring — centralised control and automation to improve comfort, safety and operational efficiency.",
    aosDelay: "200",
    link: "#",
  },
  {
    id: 3,
    img: service3,
    name: "Water & Wastewater Treatment",
    description:
      "SCADA, instrumentation and control solutions for water and wastewater plants, pumping stations and effluent treatment — ensuring compliance, reliability and lower operating costs.",
    aosDelay: "300",
    link: "#",
  },
  {
    id: 4,
    img: service4,
    name: "HVAC & Energy Optimization",
    description:
      "Energy-efficient HVAC controls, variable speed drives and monitoring systems to reduce consumption, balance loads and improve building performance.",
    aosDelay: "400",
    link: "#",
  },
  {
    id: 5,
    img: service5,
    name: "Material Handling & Logistics",
    description:
      "Automation for conveyors, sortation, lifts and warehouse systems — control panels, drives and integrations that increase throughput and reliability.",
    aosDelay: "500",
    link: "#",
  },
  {
    id: 6,
    img: service6,
    name: "Renewable Energy & Infrastructure",
    description:
      "Inverters, power electronics, control systems and asset monitoring for solar, wind and hybrid projects — supporting grid integration and long‑term performance.",
    aosDelay: "600",
    link: "#",
  },
];


const sectionTitleStyles = {
  paddingBottom: '60px',
  position: 'relative',
  marginLeft: 0,
};

const h2Styles = {
  fontSize: '14px',
  fontWeight: 500,
  padding: 0,
  lineHeight: '1px',
  margin: 0,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: 'color-mix(in srgb, var(--default-color), transparent 50%)',
  position: 'relative',
};

const h2AfterStyles = {
  content: '""',
  width: '160px',
  height: '3px',
  display: 'inline-block',
  background: '#006',
  margin: '4px 10px',
};

const pStyles = {
  color: 'var(--heading-color)',
  margin: 0,
  fontSize: '36px',
  fontWeight: 700,
  textTransform: 'uppercase',
};

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 300,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <span id="services"></span>
      <div className="py-10" data-aos="fade-up">
        <div className="container mx-auto px-4">
          {/* Heading section - same style as GlobalPartners */}
          <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
            <div className="flex items-center justify-start">
              <h2 style={h2Styles}>Industries We Serve</h2>
              <span style={h2AfterStyles}></span>
            </div>
            <p style={pStyles}>Our Trusted Industries</p>
          </div>


          {/* Services Card section - larger, smoother, clean design */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10 place-items-center mt-12"
            data-aos="fade-up"
          >
            {ServicesData.map((service) => (
              <a
                key={service.id}
                href={service.link}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="group w-full max-w-[520px] rounded-2xl bg-white text-gray-900 border border-gray-100 relative shadow-sm hover:shadow-2xl transition-transform transform hover:-translate-y-3 duration-350 overflow-hidden"
                aria-label={service.name}
                style={{ minHeight: 480 }}
              >
                <div className="h-[240px] flex items-center justify-center bg-transparent">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[220px] max-h-[200px] object-contain block mx-auto transition-transform duration-500 ease-out"
                    style={{
                      transform: 'translateY(0) scale(1)',
                      willChange: 'transform',
                    }}
                  />
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .group { transition: box-shadow .28s ease, transform .35s cubic-bezier(.2,.9,.2,1); }
        .group img { transition: transform .45s cubic-bezier(.2,.9,.2,1), filter .28s ease; }
        .group:hover img { transform: translateY(-16px) scale(1.1) !important; filter: none !important; }
        .group:hover { box-shadow: 0 18px 50px rgba(15,23,42,0.08); }
      `}</style>
    </>
  );
};

export default Services;
