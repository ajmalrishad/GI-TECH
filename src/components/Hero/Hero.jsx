// import React from "react";
import { motion } from "framer-motion";
import ScrollPng from "../../assets/scroll.png";
import video from "../../assets/video1.mp4";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  const styles = {
    heroContainer: {
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      color: 'white',
      overflow: 'hidden',
    },
    videoBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      zIndex: -1,
    },
    gradientOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), transparent, rgba(0, 0, 0, 0.7))',
      zIndex: 1,
    },
    textContainer: {
      paddingBottom: '8rem',
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
    },
    heading: {
      marginTop: '100px', // Added margin to the top
      fontSize: '5rem',
      smFontSize: '6rem',
      lgFontSize: '7rem',
      fontWeight: 'bold',
      lineHeight: 'tight',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    subheading: {
      display: 'inline-block',
      fontSize: '5rem',
      color: '#ffcc00',
      animation: 'bounce 2s infinite',
      marginRight: '1rem',
    },
    subtext: {
      fontSize: '2rem',
      smFontSize: '3rem',
      lgFontSize: '4rem',
      fontWeight: 'normal',
      color: '#cccccc',
      marginTop: '1rem',
      animation: 'fadeIn 3s ease-out 1s',
    },
    underline: {
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: '2px',
      backgroundColor: 'white',
      transition: 'width 0.3s ease, left 0.3s ease',
    },
    buttonContainer: {
      opacity: 0,
      animation: 'fadeIn 2s ease-out 1s forwards',
    },
    button: {
      background: 'linear-gradient(to right, #6b46c1, #4299e1)',
      borderColor: 'transparent',
      transform: 'scale(1)',
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontSize: '1.25rem',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
    },
    scrollButton: {
      position: 'fixed',
      right: '4rem',
      bottom: '1rem',
      transform: 'translateY(-50%)',
      marginBottom: '3rem',
    },
  };

  return (
    <div style={styles.heroContainer}>
      <video autoPlay loop muted style={styles.videoBackground}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.gradientOverlay}></div>
      <div style={styles.textContainer}>
        <motion.h1
          style={styles.heading}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <div style={styles.subheading}>
            15
          </div>
          Years of experience<br />
          <motion.span style={styles.subtext}>
            Your trusted partner for advanced technology automation solutions
          </motion.span>
          <span
            style={styles.underline}
            onMouseOver={(e) => {
              e.currentTarget.style.width = '100%';
              e.currentTarget.style.left = '0';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.width = '0';
              e.currentTarget.style.left = '50%';
            }}
          ></span>
        </motion.h1>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Enquire Now
          </button>
        </div>
      </div>
      <motion.img
        variants={textVariants}
        animate="scrollButton"
        src={ScrollPng}
        alt="Scroll down"
        style={styles.scrollButton}
      />
    </div>
  );
};

export default Hero;
