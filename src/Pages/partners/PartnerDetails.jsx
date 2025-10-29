
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import partner1 from "../../assets/partner1.png"; // Import partner images
import partner2 from "../../assets/partner2.png";
// Add other imports...

const partners = [
  { src: partner1, alt: "KEB", description: "KEB is the truested manufacturer of industrial automation products of control, drives,motors,brakes,and cluthes for many industrial applications" },
  { src: partner2, alt: "INTORQ U.S .INC", description: "INTORQ U.S .INC is the truested manufacturer of industrial automation products of control, drives,motors,brakes,and cluthes for many industrial applications" },
  { src: partner1, alt: "AuCom", description: "AuCom is the truested manufacturer of industrial automation products of control, drives,motors,brakes,and cluthes for many industrial applications" },
  { src: partner2, alt: "INVERTEK", description: "INVERTEK is the truested manufacturer of industrial automation products of control, drives,motors,brakes,and cluthes for many industrial applications" },
  // Add other partners...
];

const sectionTitleStyles = {
  paddingBottom: '60px',
  position: 'relative',
  marginLeft: '7rem',
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


const PartnerDetails = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 p-10" style={{ marginTop: '8rem' }}>
      <div className="container mx-auto">
        {/* Section title block added (same as Portfolio) */}
        <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
          <div className='flex'>
            <h2 style={h2Styles}>Partners</h2>
            <span className="h2AfterStyles" style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Our Trusted Partners</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="partner-card p-5 bg-white rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={partner.src} alt={partner.alt} className="w-full h-40 object-contain mb-4" />
              <h2 className="text-2xl font-semibold mb-2">{partner.alt}</h2>
              <p className="text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
