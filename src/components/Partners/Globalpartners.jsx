import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner1.png";
import partner4 from "../../assets/partner2.png";
import partner5 from "../../assets/partner1.png";
import partner6 from "../../assets/partner2.png";
import partner7 from "../../assets/partner1.png";
import partner8 from "../../assets/partner2.png";
import partner9 from "../../assets/partner1.png";
import partner10 from "../../assets/partner2.png";
import partner11 from "../../assets/partner1.png";
import partner12 from "../../assets/partner2.png";

const GlobalPartners = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(Array(12).fill(false));

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

  const partners = [
    { src: partner1, alt: "Partner 1" },
    { src: partner2, alt: "Partner 2" },
    { src: partner3, alt: "Partner 3" },
    { src: partner4, alt: "Partner 4" },
    { src: partner5, alt: "Partner 5" },
    { src: partner6, alt: "Partner 6" },
    { src: partner7, alt: "Partner 1" },
    { src: partner8, alt: "Partner 2" },
    { src: partner9, alt: "Partner 3" },
    { src: partner10, alt: "Partner 4" },
    { src: partner11, alt: "Partner 5" },
    { src: partner12, alt: "Partner 6" },
  ];

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="partners" className="py-10 bg-white-200">
      <div className="container mx-auto text-center">
        <div className="relative">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner px-4"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleLeave(index)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
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
          <Link
            to="/partner"
            className="inline-block flex items-center justify-center gap-2 text-grey font-bold cursor-pointer hover:text-blue-800 transition duration-300"
            onClick={() => {
              navigate("/partner");
              setTimeout(() => {
                window.scrollTo({
                  top: document.getElementById("partner-section").offsetTop,
                  behavior: "smooth",
                });
              }, 300);
            }}
          >
            See All <FaArrowRight size={24} />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPartners;
