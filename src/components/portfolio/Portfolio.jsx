import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.png";
import projectImg4 from "../../assets/project3.png";

const portfolioItems = [
  {
    imgSrc: projectImg1,
    title: "App 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-app",
  },
  {
    imgSrc: projectImg3,
    title: "App 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-app",
  },
  {
    imgSrc: projectImg4,
    title: "App 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-app",
  },
 
 
  {
    imgSrc: projectImg2,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-product",
  },
  {
    imgSrc: projectImg2,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-product",
  },
  {
    imgSrc: projectImg2,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-product",
  },
  {
    imgSrc: projectImg2,
    title: "Product 1",
    description: "Lorem ipsum, dolor sit",
    filter: "filter-product",
  },

  // Add more items as needed
];

const filterButtons = [
  { name: "All", filter: "*" },
  { name: "App", filter: "filter-app" },
  { name: "Card", filter: "filter-product" },
  { name: "Web", filter: "filter-branding" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

   const sectionTitleStyles = {
    paddingBottom: '60px',
    position: 'relative',
    marginLeft:'7rem',
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

  const filteredItems = filter === "*" ? portfolioItems : portfolioItems.filter(item => item.filter === filter);

  return (
    <section style={{ padding: "60px 0", backgroundColor: "#0000" }}>
      {/* <div style={{ textAlign: "center", marginBottom: "40px" }} data-aos="fade-up">

        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>Portfolio</h2>
        <p style={{ fontSize: "1.2rem", color: "#777" }}>Check our Portfolio</p>
      </div> */}
      <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
            <div className='flex'><h2 style={h2Styles}>Portfolio</h2><span className="h2AfterStyles" style={h2AfterStyles} ></span></div>
            <p style={pStyles}>Check our Portfolio</p>
          </div>

      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        {filterButtons.map(button => (
          <motion.button
            key={button.name}
            onClick={() => setFilter(button.filter)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              margin: "0 10px",
              padding: "12px 25px",
              border: "none",
              backgroundColor: filter === button.filter ? "#007bff" : "#e0e0e0",
              color: filter === button.filter ? "#fff" : "#000",
              cursor: "pointer",
              borderRadius: "25px",
              fontSize: "16px",
              transition: "all 0.3s ease",
            }}
            data-aos="zoom-in"
          >
            {button.name}
          </motion.button>
        ))}
      </div>

      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px",marginLeft:"6rem" ,marginRight:"6rem"}}>
        {filteredItems.map((item, index) => (
          <motion.div
            key={index}
            className="grid-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            data-aos="fade-up"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              background: "#fff",
            }}
          >
            <motion.img
              src={item.imgSrc}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div
              className="color-overlay"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 123, 255, 0.8)",
                transform: "scaleX(0) scaleY(0)",
                transformOrigin: "bottom right",
                transition: "transform 0.3s ease",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                padding: "20px",
                textAlign: "center",
                opacity: "0",
                transition: "opacity 0.3s",
                zIndex: "2",
              }}
              className="portfolio-info"
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.previousSibling.style.transform = "scaleX(1) scaleY(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0";
                e.currentTarget.previousSibling.style.transform = "scaleX(0) scaleY(0)";
              }}
            >
              <h4 style={{ margin: "0 0 10px 0", fontSize: "1.5rem" }}>{item.title}</h4>
              <p style={{ margin: "0", fontSize: "1rem" }}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
