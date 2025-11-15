import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";

const sectionTitleStyles = {
  paddingBottom: "60px",
  position: "relative",
  marginLeft: 0,
};

const h2Styles = {
  fontSize: "14px",
  fontWeight: 500,
  padding: 0,
  lineHeight: "1px",
  margin: 0,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  color: "color-mix(in srgb, var(--default-color), transparent 50%)",
  position: "relative",
};

const h2AfterStyles = {
  content: '""',
  width: "160px",
  height: "3px",
  display: "inline-block",
  background: "#006",
  margin: "4px 10px",
};

const pStyles = {
  color: "var(--heading-color)",
  margin: 0,
  fontSize: "36px",
  fontWeight: 700,
  textTransform: "uppercase",
};

const GlobalPartners = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(Array(12).fill(false));

  const partners = [
    { src: partner1, alt: "Partner 1" },
    { src: partner2, alt: "Partner 2" },
    { src: partner3, alt: "Partner 3" },
    { src: partner4, alt: "Partner 4" },
    { src: partner1, alt: "Partner 5" },
    { src: partner2, alt: "Partner 6" },
    { src: partner3, alt: "Partner 7" },
    { src: partner4, alt: "Partner 8" },
    { src: partner1, alt: "Partner 9" },
    { src: partner2, alt: "Partner 10" },
    { src: partner3, alt: "Partner 11" },
    { src: partner4, alt: "Partner 12" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleHover = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = true;
    setHovered(newHovered);
  };

  const handleLeave = (index) => {
    const newHovered = [...hovered];
    newHovered[index] = false;
    setHovered(newHovered);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
          <div className="flex items-center justify-start">
            <h2 style={h2Styles}>Partners</h2>
            <span style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Our Trusted Partners</p>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner px-4 flex justify-center items-center"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="w-full h-32 flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="w-32 h-32 object-contain transition-all duration-300"
                    style={{ 
                      filter: hovered[index] ? "grayscale(0%)" : "grayscale(100%)",
                      transform: hovered[index] ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center mt-8">
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 text-grey font-bold cursor-pointer hover:text-blue-800 transition duration-300"
              onClick={() => {
                navigate("/partner");
                setTimeout(() => {
                  const el = document.getElementById("partner-section");
                  if (el) {
                    window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
                  }
                }, 300);
              }}
            >
              See All <FaArrowRight size={20} />
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        ></motion.div>
      </div>
    </section>
  );
};

export default GlobalPartners;