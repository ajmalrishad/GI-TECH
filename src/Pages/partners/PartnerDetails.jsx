
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

const PartnerDetails = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen margin-top-6rem text-gray-800 p-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold  mb-10"style={{ marginTop: '3rem' }}>Our Partners</h1>
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
        {/* <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-800 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default PartnerDetails;
