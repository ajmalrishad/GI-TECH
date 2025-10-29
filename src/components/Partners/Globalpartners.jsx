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
import partner5 from "../../assets/partner1.png";
import partner6 from "../../assets/partner2.png";
import partner7 from "../../assets/partner3.png";
import partner8 from "../../assets/partner4.png";
import partner9 from "../../assets/partner1.png";
import partner10 from "../../assets/partner2.png";
import partner11 from "../../assets/partner3.png";
import partner12 from "../../assets/partner4.png";

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
  const partners = [
    { src: partner1, alt: "Partner 1" },
    { src: partner2, alt: "Partner 2" },
    { src: partner3, alt: "Partner 3" },
    { src: partner4, alt: "Partner 4" },
    { src: partner5, alt: "Partner 5" },
    { src: partner6, alt: "Partner 6" },
    { src: partner7, alt: "Partner 7" },
    { src: partner8, alt: "Partner 8" },
    { src: partner9, alt: "Partner 9" },
    { src: partner10, alt: "Partner 10" },
    { src: partner11, alt: "Partner 11" },
    { src: partner12, alt: "Partner 12" },
  ];

  const [hovered, setHovered] = useState(Array(partners.length).fill(false));

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
    <section id="partners" className="py-10 bg-white">
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
                className="partner px-4"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="mx-auto h-20 transition duration-300"
                  style={{ filter: hovered[index] ? "none" : "grayscale(100%)" }}
                />
              </div>
            ))}
          </Slider>

          {/* Center "See All" under the slider (same as old) */}
          <div className="flex justify-center mt-20">
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