// src/components/Gallery/Gallery.jsx

import { motion } from "framer-motion";
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.png";
import projectImg4 from "../../assets/project1.png";
import projectImg5 from "../../assets/project2.png";
import projectImg6 from "../../assets/project3.png";

const images = [
  { src: projectImg1, alt: "Project 1" },
  { src: projectImg2, alt: "Project 2" },
  { src: projectImg3, alt: "Project 3" },
  { src: projectImg4, alt: "Project 4" },
  { src: projectImg5, alt: "Project 5" },
  { src: projectImg6, alt: "Project 6" },
  { src: projectImg1, alt: "Project 1" },
  { src: projectImg2, alt: "Project 2" },
  { src: projectImg3, alt: "Project 3" },
  { src: projectImg4, alt: "Project 4" },
  { src: projectImg5, alt: "Project 5" },
  { src: projectImg6, alt: "Project 6" },
];

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


const Gallery = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div
        className="container mx-auto "
        style={{
          maxWidth: "1200px", // Adjust based on your design
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "6px",
        }}
      >
         <div
          className="section-title"
          style={sectionTitleStyles}
          data-aos="fade-up"
        >
          <div className="flex">
            <h2 style={h2Styles}>Project Gallery</h2>
            <span className="h2AfterStyles" style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Check our Gallery</p>
        </div>
        {/* <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
          Project Gallery
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{
                  height: `${Math.floor(Math.random() * 300 + 200)}px`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
