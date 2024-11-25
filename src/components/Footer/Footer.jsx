// import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import FooterBg from "../../assets/footer.jpeg";

const UsefulLinks = [
  { title: "Home", link: "/#" },
  { title: "About us", link: "/#about" },
  { title: "Services", link: "/#services" },
  { title: "Terms of service", link: "/#terms" },
  { title: "Privacy policy", link: "/#privacy" },
];

const OurServices = [
  { title: "Web Design", link: "/#web-design" },
  { title: "Web Development", link: "/#web-development" },
  { title: "Product Management", link: "/#product-management" },
  { title: "Marketing", link: "/#marketing" },
  { title: "Graphic Design", link: "/#graphic-design" },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <footer style={bgImage} className="text-white relative">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container mx-auto py-12 grid lg:grid-cols-4 gap-8">
          {/* Company details */}
          <div className="footer-about">
            <a href="#" className="logo flex items-center mb-6">
              <span className="text-3xl font-bold tracking-widest">GI Tech</span>
            </a>
            <p className="mb-4">Crafted, Cozy Vibes, Unforgettable Moments – Your Perfect Destination</p>
            <div className="footer-contact mb-6">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong> +1 5589 55488 55</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
            <div className="social-links flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary"><FaTwitter /></a>
              <a href="#" className="text-gray-300 hover:text-primary"><FaFacebook /></a>
              <a href="#" className="text-gray-300 hover:text-primary"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-primary"><FaLinkedin /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-3">
              {UsefulLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <i className="bi bi-chevron-right mr-2"></i>
                  <a href={link.link} className="text-gray-300 hover:text-primary">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-links">
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {OurServices.map((link, index) => (
                <li key={index} className="flex items-center">
                  <i className="bi bi-chevron-right mr-2"></i>
                  <a href={link.link} className="text-gray-300 hover:text-primary">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="text-xl font-semibold mb-4">Our Newsletter</h4>
            <p className="mb-4">Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" className="space-y-3">
              <div className="newsletter-form flex items-center">
                <input type="email" name="email" placeholder="Your Email" className="p-3 flex-1 border border-gray-300 rounded-l-lg bg-white text-black" />
                <input type="submit" value="Subscribe" className="p-3 bg-primary text-black rounded-r-lg cursor-pointer hover:bg-opacity-80" />
              </div>
              <div className="loading hidden">Loading</div>
              <div className="error-message hidden">There was an error.</div>
              <div className="sent-message hidden">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-black/60 py-6">
        <div className="container mx-auto text-center text-gray-300">
          <p>© <strong>GI Tech</strong> All Rights Reserved</p>
          <div className="credits mt-2">
            Designed by <a href="https://bootstrapmade.com/" className="text-primary">GI TECH</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
