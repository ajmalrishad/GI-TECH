import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax"; // Import ParallaxProvider
import projectImg1 from "../../assets/project1.png";
import projectImg2 from "../../assets/project2.png";
import projectImg3 from "../../assets/project3.png";
import projectImg4 from "../../assets/project1.png";
import projectImg5 from "../../assets/project2.png";
import projectImg6 from "../../assets/project3.png";
import background1 from "../../assets/office3.jpg";
import logo from "../../assets/gitechlogo1.jpg";
import Subnavbar from "../../components/Navbar/Subnavbar";
import Footer from "../../components/Footer/Footer";

const tabs = ["profiles", "gallery", "news"];

const AboutUs = () => {
  const [currentTab, setCurrentTab] = useState("profiles");
  const [autoChange, setAutoChange] = useState(true); // State to control auto-change

  useEffect(() => {
    let interval;
    if (autoChange) {
      interval = setInterval(() => {
        setCurrentTab((prevTab) => {
          const currentIndex = tabs.indexOf(prevTab);
          const nextIndex = (currentIndex + 1) % tabs.length;
          return tabs[nextIndex];
        });
      }, 5000); // Change every 5 seconds
    }

    return () => clearInterval(interval); // Clear interval on unmount or when autoChange is false
  }, [autoChange]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    setAutoChange(false); // Stop auto-changing tabs when one is clicked
  };

  const companyProfiles = [
    {
      name: "Company One",
      description: "Description of Company One.",
      image: logo,
    },
    {
      name: "Company Two",
      description: "Description of Company Two.",
      image: logo,
    },
  ];

  const galleryImages = [
    { src: projectImg1, alt: "Project 1" },
    { src: projectImg2, alt: "Project 2" },
    { src: projectImg3, alt: "Project 3" },
    { src: projectImg4, alt: "Project 4" },
    { src: projectImg5, alt: "Project 5" },
    { src: projectImg6, alt: "Project 6" },
  ];

  const newsArticles = [
    {
      title: "Latest News Title One",
      date: "July 5, 2024",
      content: "Content of the latest news article one.",
    },
    {
      title: "Latest News Title Two",
      date: "July 3, 2024",
      content: "Content of the latest news article two.",
    },
  ];

  const buttonStyles = (active) => ({
    padding: "1rem 2rem",
    margin: "0 1rem",
    backgroundColor: active ? "#000" : "#fff",
    color: active ? "#fff" : "blue",
    fontWeight: "bold",
    borderRadius: "50px",
    cursor: "pointer",
    border: "2px solid #ff6",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  });

  return (
    <ParallaxProvider>
      <Subnavbar />
      <div
        style={{
          backgroundImage: `url(${background1})`,
          backgroundSize: "cover",
          color: "#333",
          padding: "5rem 0",
          position: "relative",
          overflow: "hidden",
          marginTop: "6rem",
        }}
      >
        <motion.section
          id="about"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              marginTop: "2rem",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="section-title"
              style={{ paddingBottom: "60px", position: "relative" }}
              data-aos="fade-up"
            >
              <div className="flex">
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: 0,
                    lineHeight: "1px",
                    margin: 0,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "color-mix(in srgb, var(--default-color), transparent 50%)",
                    position: "relative",
                  }}
                >
                  About Us
                </h2>
                <span
                  style={{
                    content: '""',
                    width: "160px",
                    height: "3px",
                    display: "inline-block",
                    background: "#006",
                    margin: "4px 10px",
                  }}
                ></span>
              </div>
              <p
                style={{
                  color: "var(--heading-color)",
                  margin: 0,
                  fontSize: "36px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Check our About
              </p>
            </div>
          </motion.h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <button
              onClick={() => handleTabClick("profiles")}
              style={buttonStyles(currentTab === "profiles")}
            >
              Profiles
            </button>
            <button
              onClick={() => handleTabClick("gallery")}
              style={buttonStyles(currentTab === "gallery")}
            >
              Gallery
            </button>
            <button
              onClick={() => handleTabClick("news")}
              style={buttonStyles(currentTab === "news")}
            >
              News
            </button>
          </div>

          {currentTab === "profiles" && (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "2rem",
      padding: "2rem",
    }}
  >
    {companyProfiles.map((profile, index) => (
      <motion.div
        key={index}
        style={{
          padding: "1rem",
          backgroundColor: "#fff",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        whileHover={{
          transform: "translateY(-5px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
        }}
      >
        <img
          src={profile.image}
          alt={profile.name}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "1rem",
          }}
        />
        <h3
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
            color: "#333",
          }}
        >
          {profile.name}
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6",
            color: "#777",
            marginBottom: "1rem",
          }}
        >
          {profile.description}
        </p>
        <button
          style={{
            padding: "0.5rem 1.5rem",
            backgroundColor: "#006",
            color: "#fff",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#004080")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#006")}
        >
          Learn More
        </button>
      </motion.div>
    ))}
  </div>
)}


          {currentTab === "gallery" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px",
                    transition: "transform 0.3s ease",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "10px",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {currentTab === "news" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {newsArticles.map((article, index) => (
                <motion.div
                  key={index}
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{ fontSize: "0.9rem", color: "#999", marginBottom: "1rem" }}
                  >
                    {article.date}
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#666" }}>
                    {article.content}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>
      </div>
      <Footer />
    </ParallaxProvider>
  );
};

export default AboutUs;
