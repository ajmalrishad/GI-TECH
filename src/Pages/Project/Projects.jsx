import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import project1Img1 from "../../assets/project1.png";
import project1Img2 from "../../assets/project2.png";
import project2Img1 from "../../assets/project3.png";
import project2Img2 from "../../assets/project1.png";
// Add more project images as needed

const projects = [
  {
    title: "Project One",
    description:
      "A cutting-edge solution for modern challenges, involving the latest in technology and innovation.",
    images: [project1Img1, project1Img2],
    details:
      "Project One includes advanced AI integrations, a seamless user experience, and impactful results.",
  },
  {
    title: "Project Two",
    description:
      "A transformative project that redefines industry standards with state-of-the-art technologies.",
    images: [project2Img1, project2Img2],
    details:
      "Project Two faced complex challenges but achieved a remarkable impact on the industry.",
  },
  {
    title: "Motor Control Centers",
    description:
      "High-performance motor control centers designed for industrial automation and safety.",
    images: [project2Img1, project1Img1],
    details:
      "These centers offer robust control over electric motors, ensuring efficiency and reliability in operations.",
  },
  {
    title: "HVAC Panels",
    description:
      "Innovative HVAC panels providing energy-efficient climate control solutions.",
    images: [project1Img2, project2Img2],
    details:
      "Our HVAC panels are designed with sustainability in mind, optimizing energy use in various environments.",
  },
  {
    title: "Sewage Treatment Plants",
    description:
      "Advanced sewage treatment plants engineered for environmental sustainability.",
    images: [project2Img1, project1Img2],
    details:
      "These plants are crucial for maintaining clean water resources and promoting eco-friendly practices.",
  },
  // Add more projects as needed
];

const sectionTitleStyles = {
  paddingBottom: "60px",
  position: "relative",
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

const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white via-gray-100 to-white">
      <div
        className="container mx-auto mt-6px"
        style={{
          maxWidth: "1200px", // Adjust based on your design
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "15px",
        }}
      >
        <div
          className="section-title"
          style={sectionTitleStyles}
          data-aos="fade-up"
        >
          <div className="flex">
            <h2 style={h2Styles}>Projects</h2>
            <span className="h2AfterStyles" style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Check our Projects</p>
        </div>
        {/* <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Our Projects</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project transform transition-transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="border rounded-lg shadow-lg overflow-hidden">
                <Carousel showThumbs={false} showStatus={false}>
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={image}
                        alt={`Project ${index + 1} - Image ${imgIndex + 1}`}
                        className="object-cover w-full h-48"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-gray-600">{project.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
