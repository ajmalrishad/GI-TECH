import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your product images
import invertek1 from "../../assets/Products/invertek1.png";
import aucom1 from "../../assets/Products/aucom1.png";
import kendrion1 from "../../assets/Products/kendrion1.png";
import keb1 from "../../assets/Products/keb1.png";

const sectionTitleStyles = {
  paddingBottom: "60px",
  position: "relative",
  marginLeft: '1rem',
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

const ProductSection = () => {
  const [cart, setCart] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    {
      id: 1,
      title: "Invertek Drive",
      brand: "INVERTEK",
      price: 999.99,
      image: invertek1,
      description: "High-performance variable frequency drive"
    },
    {
      id: 2,
      title: "AuCom Controller",
      brand: "AuCom",
      price: 1299.99,
      image: aucom1,
      description: "Advanced motor control system"
    },
    {
      id: 3,
      title: "INTORQ Brake",
      brand: "INTORQ U.S. INC",
      price: 799.99,
      image: kendrion1,
      description: "Industrial electromagnetic brake system"
    },
    {
      id: 4,
      title: "KEB Drive",
      brand: "KEB",
      price: 1499.99,
      image: keb1,
      description: "Premium frequency inverter"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
          <div className="flex items-center justify-start">
            <h2 style={h2Styles}>Our Products</h2>
            <span style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Featured Industrial Solutions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ minHeight: '300px' }}
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              <div 
                className="relative overflow-hidden" 
                style={{ height: '300px' }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredId === product.id ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 text-lg mb-2">Brand: {product.brand}</p>
                <p className="text-gray-700 mb-3">{product.description}</p>
                <p className="text-blue-600 font-bold text-xl mb-4">
                  ${product.price.toFixed(2)}
                </p>
                
                <div className="flex justify-between items-center mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </motion.button>
                  
                  <Link 
                    to={`/products/${product.brand}`}
                    className="text-blue-500 hover:text-blue-700 text-lg font-semibold transition-colors duration-300 hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/all-products"
            className="inline-flex items-center gap-3 text-xl font-bold text-blue-600 hover:text-blue-800 transition duration-300"
          >
            See All Products <FaArrowRight size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;