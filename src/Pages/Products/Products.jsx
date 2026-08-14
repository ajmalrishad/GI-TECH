import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaShoppingCart, FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your product images
import invertek1 from "../../assets/Products/invertek1.png";
import aucom1 from "../../assets/Products/aucom1.png";
import kendrion1 from "../../assets/Products/kendrion1.png";
import keb1 from "../../assets/Products/keb1.png";
import vogel1 from "../../assets/Products/vogel1.png";

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
  const [hoveredId, setHoveredId] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Invertek Drives (VFDs)",
      brand: "Invertek Drives",
      price: 999.99,
      image: invertek1,
      description: "Variable Frequency Drives designed for precision motor control and energy savings. Ideal for HVAC, pumps, and conveyors.",
      features: [
        "Compact design with IP enclosures",
        "Intuitive setup and diagnostics",
        "Wide voltage range & flexibility"
      ]
    },
    {
      id: 2,
      title: "Aucom Soft Starters",
      brand: "Aucom",
      price: 1299.99,
      image: aucom1,
      description: "Smart motor control solutions that reduce mechanical stress and extend equipment life. Perfect for demanding environments.",
      features: [
        "Advanced protection & monitoring",
        "Smooth acceleration / deceleration",
        "Integration with PLC and SCADA"
      ]
    },
    {
      id: 3,
      title: "Kendrion Intorq Brakes",
      brand: "Kendrion Intorq",
      price: 799.99,
      image: kendrion1,
      description: "Reliable braking and clutch systems for safety-critical applications. Trusted in elevators, cranes, and wind energy.",
      features: [
        "Spring-applied electromagnetic brakes",
        "Holding and dynamic braking systems",
        "Custom configurations for OEMs"
      ]
    },
    {
      id: 4,
      title: "KEB Motion Control",
      brand: "KEB Automation",
      price: 1499.99,
      image: keb1,
      description: "German-engineered automation systems for complex motion control, robotics, and industrial communication.",
      features: [
        "Servo drives and motors",
        "PLCs and HMIs",
        "Industrial Ethernet fieldbus modules"
      ]
    },
    {
      id: 5,
      title: "Vogel Lubrication Systems",
      brand: "Vogel Lubrication",
      price: 899.99,
      image: vogel1,
      description: "Automated lubrication systems that improve uptime, reduce wear, and lower maintenance costs.",
      features: [
        "Automotive assembly integration",
        "Packaging machinery lubrication",
        "Heavy-duty industrial configurations"
      ]
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleAddToCart = (product) => {
    try {
      // Get existing cart from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // Check if product already exists in cart
      const existingProduct = existingCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Increase quantity if product exists
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        // Add new product to cart with all required fields
        existingCart.push({
          id: product.id,
          title: product.title,
          brand: product.brand,
          price: product.price,
          image: product.image,
          description: product.description,
          quantity: 1
        });
      }
      
      // Save updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(existingCart));
      console.log('Product added to cart:', existingCart);
      
      // Show toast notification
      setToast(product.title);
      setTimeout(() => setToast(null), 2500);
      
      // Redirect to cart page after a better delay
      setTimeout(() => {
        navigate('/cart');
      }, 800);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Toast Notification */}
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-2 z-50"
          >
            <FaShoppingCart size={18} />
            <span className="font-semibold">{toast} added to cart!</span>
          </motion.div>
        )}

        <div className="section-title" style={sectionTitleStyles} data-aos="fade-up">
          <div className="flex items-center justify-start">
            <h2 style={h2Styles}>Our Products</h2>
            <span style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Featured Industrial Solutions</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              {/* Image Section */}
              <div 
                className="relative overflow-hidden bg-gray-100" 
                style={{ height: '240px' }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-scale-down p-4 transition-transform duration-500"
                  style={{
                    transform: hoveredId === product.id ? 'scale(1.08)' : 'scale(1)',
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Brand */}
                <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">{product.brand}</p>
                
                {/* Title */}
                <h3 className="text-sm font-bold mb-2 text-gray-800 leading-tight min-h-[40px] line-clamp-2">
                  {product.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="text-gray-500 text-[11px] space-y-1 mb-4 flex-grow">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className="text-blue-500 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Price */}
                <div className="mb-4">
                  <p className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Buttons - Horizontal Layout */}
                <div className="flex gap-2 mt-auto">
                  <Link 
                    to={`/products/${product.brand}`}
                    className="flex-1 bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-3 rounded-md text-[11px] font-bold hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-1"
                  >
                    <FaEye size={12} />
                    View
                  </Link>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-green-500 text-white py-2 px-3 rounded-md text-[11px] font-bold hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <FaShoppingCart size={12} />
                    Cart
                  </motion.button>
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