import { motion } from "framer-motion";
import backgroundImage from "../../assets/website/coffee-texture.jpg"; // Replace with your image path
import Footer from "../../components/Footer/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Install react-icons package if not already installed
import Subnavbar from "../../components/Navbar/Subnavbar";

const Contact = () => {
  return (
    <>
      <Subnavbar />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
        }}
      >
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            color: "#fff",
            textAlign: "center",
            padding: "50px 20px",
            maxWidth: "800px",
            marginTop: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              marginBottom: "1rem",
              textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
            }}
          >
            Get in Touch
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.7",
              marginBottom: "2.5rem",
              color: "black",
            }}
          >
            We’re here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            maxWidth: "800px",
            margin: "0 auto",
            gap: "20px",
          }}
        >
          {/* Phone Tile */}
          <div
            style={{
              flex: "1 1 30%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            <FaPhone style={{ fontSize: "1.8rem", marginRight: "15px", color: "#ff6363" }} />
            <span style={{ color: "#333", fontSize: "1.2rem", fontWeight: "600" }}>+1 234 567 890</span>
          </div>

          {/* Email Tile */}
          <div
            style={{
              flex: "1 1 30%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            <FaEnvelope style={{ fontSize: "1.8rem", marginRight: "15px", color: "#ff6363" }} />
            <span style={{ color: "#333", fontSize: "1.2rem", fontWeight: "600" }}>your.email@example.com</span>
          </div>

          {/* Location Tile */}
          <div
            style={{
              flex: "1 1 30%",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
            }}
          >
            <FaMapMarkerAlt style={{ fontSize: "1.8rem", marginRight: "15px", color: "#ff6363" }} />
            <span style={{ color: "#333", fontSize: "1.2rem", fontWeight: "600" }}>Your Location</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            width: "100%",
            maxWidth: "600px",
            padding: "40px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "20px",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(10px)",
            marginTop: "40px",
          }}
        >
          <form>
            <div style={{ marginBottom: "25px" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "#444",
                  fontSize: "1.1rem",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#ff6363")}
                required
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "#444",
                  fontSize: "1.1rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#ff6363")}
                required
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "#444",
                  fontSize: "1.1rem",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "1rem",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border-color 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#ff6363")}
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: "100%",
                padding: "15px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#ff6363",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                boxShadow: "0 5px 20px rgba(255, 99, 99, 0.4)",
                transition: "background-color 0.3s ease",
              }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          style={{ width: "100%", marginTop: "40px" }}
        >
          <iframe
            style={{
              border: 0,
              width: "100%",
              height: "400px",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Contact;
