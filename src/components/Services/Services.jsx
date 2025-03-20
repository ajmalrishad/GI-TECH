import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Img2 from "../../assets/circuit.png";
import service1 from "../../assets/sales.png";
import service2 from "../../assets/light.png";
import service3 from "../../assets/energy.png";
import service4 from "../../assets/projects.png";
import service5 from "../../assets/sheet.png";
import service6 from "../../assets/mobility.png";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
// import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpeg";
import bg5 from "../../assets/bg5.jpg";

const ServicesData = [
  {
    id: 1,
    img: service1,
    name: "Industrial Stock Sales",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
    link: "#",
  },
  {
    id: 2,
    img: service2,
    name: "Lighting Solutions",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "200",
    link: "#",
  },
  {
    id: 3,
    img: service3,
    name: "Energy Management",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
    link: "#",
  },
  {
    id: 4,
    img: service4,
    name: "Automation Projects",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "400",
    link: "#",
  },
  {
    id: 5,
    img: service5,
    name: "Sheet Metal Manufacturing",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
    link: "#",
  },
  {
    id: 6,
    img: service6,
    name: "Mobility",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "600",
    link: "#",
  },
];



const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  const sectionTitleStyles = {
    paddingBottom: '60px',
    position: 'relative',
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

  const cardBackgroundStyles = (id) => {
    let backgroundImage;
    switch (id) {
      case 1:
        backgroundImage = `url(${bg1})`;
        break;
      case 2:
        backgroundImage = `url(${bg2})`;
        break;
        case 3:
        backgroundImage = `url(${bg4})`;
        break;
        case 4:
        backgroundImage = `url(${bg4})`;
        break;
        case 5:
        backgroundImage = `url(${bg5})`;
        break;
        case 6:
          backgroundImage = `url(${bg1})`;
          break;
      default:
        backgroundImage = 'none';
    }
    return {
      backgroundImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10 from-blue-200 to-tblue-400" data-aos="fade-up">
        <div className="container mx-auto">
          {/* Heading section */}
          <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
            <div className='flex'><h2 style={h2Styles}>Services</h2><span className="h2AfterStyles" style={h2AfterStyles} ></span></div>
            <p style={pStyles}>Check our Services</p>
          </div>

          {/* Services Card section */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-14 md:gap-5 place-items-center"
            data-aos="fade-up"
          >
            {ServicesData.map((service) => (
              <a
                key={service.id}
                href={service.link}
                data-aos="flip-left"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-gradient-to-r hover:from-lightblue-500 hover:to-lightblue-700 hover:text-gray relative shadow-xl duration-300 group max-w-[350px] pb-14 transform hover:scale-105 transition-transform"
                aria-label={service.name}
                style={cardBackgroundStyles(service.id)}
              >
                <div className="h-[180px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[250px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={service.aosDelay}
                  />
                </div>
                <div className="p-4 text-center" data-aos="slide-up" data-aos-delay={service.aosDelay}>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-200 group-hover:text-blue-700 duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
