import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formRef.current,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setError(false);
        setForm({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setError(true);
        setSuccess(false);
      });
  };

  const styles = {
    section: {
    //   background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
      background: '#0000',
      color: '#333',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden'
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '2.5rem',
      margin: '0',
      color: '#333'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#666'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      flexWrap: 'wrap'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
      cursor: 'pointer'
    },
    icon: {
      color: 'var(--contrast-color)',
      background: 'var(--accent-color)',
      fontSize: '20px',
      width: '44px',
      height: '44px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '4px',
      transition: 'all 0.3s ease-in-out',
      marginRight: '15px'
    },
    infoText: {
      margin: '0'
    },
    infoTitle: {
      padding: '0',
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '5px'
    },
    infoDescription: {
      padding: '0',
      marginBottom: '0',
      fontSize: '14px'
    },
    form: {
      flex: '1 1 45%',
      padding: '2rem',
      backgroundColor: '#fff',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      minWidth: '300px'
    },
    input: {
        fontSize: '14px',
        padding: '10px 15px',
        boxShadow: 'none',
        borderRadius: '0',
        color: 'var(--default-color)',
        backgroundColor: 'rgba(var(--background-color), 0.5)',
        border: '1px solid var(--border-color)', // Example using CSS variable for border color
        marginBottom: '1rem'
      },
    inputFocus: {
      borderColor: 'var(--accent-color)'
    },
    placeholder: {
      color: 'rgba(var(--default-color), 0.7)'
    },
    button: {
      color: 'var(--contrast-color)',
      background: 'var(--accent-color)',
      border: '0',
      padding: '10px 30px',
      transition: '0.4s',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    },
    buttonHover: {
      background: 'rgba(var(--accent-color), 0.2)'
    },
    errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginTop: '1rem'
    },
    successMessage: {
      color: 'green',
      textAlign: 'center',
      marginTop: '1rem'
    }
  };
  const sectionTitleStyles = {
    paddingBottom: '60px',
    position: 'relative',
    marginLeft:'7rem',
    marginTop:'3rem'
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

  return (
    <>
    <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
            <div className='flex'><h2 style={h2Styles}> Contact</h2><span className="h2AfterStyles" style={h2AfterStyles} ></span></div>
            <p style={pStyles}> Contact Us</p>
          </div>

    <motion.section
      id="contact"
      style={styles.section}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
         
      <div style={styles.container}>
     
        <motion.div
          style={{
            flex: '1 1 45%',
            marginRight: '2rem',
            textAlign: 'left',
            minWidth: '300px',
            marginBottom: '2rem'
          }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* <motion.h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#333'
            }}
          >
            Contact Us
          </motion.h2> */}
          <motion.p
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: '#555'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Have questions or want to work with us? Fill out the form below and we will get back to you as soon as possible.
          </motion.p>
          <motion.div
            style={styles.infoItem}
            onClick={() => setShowMap(!showMap)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <FaMapMarkerAlt style={styles.icon} />
            <div style={styles.infoText}>
              <h3 style={styles.infoTitle}>Our Address</h3>
              <p style={styles.infoDescription}>A108 Adam Street, New York, NY 535022</p>
            </div>
          </motion.div>
          <motion.div
            style={styles.infoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <FaPhoneAlt style={styles.icon} />
            <div style={styles.infoText}>
              <h3 style={styles.infoTitle}>Call Us</h3>
              <p style={styles.infoDescription}>+1 5589 55488 55</p>
            </div>
          </motion.div>
          <motion.div
            style={styles.infoItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <FaEnvelope style={styles.icon} />
            <div style={styles.infoText}>
              <h3 style={styles.infoTitle}>Email Us</h3>
              <p style={styles.infoDescription}>info@example.com</p>
            </div>
          </motion.div>
        </motion.div>
        {showMap ? (
          <div
            style={{
              flex: '1 1 45%',
              padding: '2rem',
              backgroundColor: '#fff',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              minWidth: '300px'
            }}
          >
            <iframe
              style={{ border: 0, width: '100%', height: '400px', borderRadius: '10px' }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            style={styles.form}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              style={styles.input}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              style={styles.input}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={styles.button}
            >
              Send Message <FaArrowRight />
            </motion.button>
            {error && <p style={styles.errorMessage}>Something went wrong. Please try again later.</p>}
            {success && <p style={styles.successMessage}>Your message was sent successfully!</p>}
          </motion.form>
        )}
      </div>
    </motion.section>
    </>
  );
};

export default ContactUs;
