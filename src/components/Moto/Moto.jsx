
import Slider from 'react-slick';
import Img from "../../assets/cta-bg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Moto = () => {
  const styles = {
    callToAction: {
      padding: '80px 0',
      position: 'relative',
      clipPath: 'inset(0)',
      overflow: 'hidden',
    },
    image: {
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      zIndex: 1,
    },
    overlay: {
      content: '""',
      background: 'color-mix(in srgb, var(--background-color), transparent 50%)',
      position: 'absolute',
      inset: 0,
      zIndex: 2,
    },
    container: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 700,
      color: 'white',
    },
    paragraph: {
      color: 'white',
    },
    ctaButton: {
      fontFamily: 'var(--heading-font)',
      fontWeight: 500,
      fontSize: '16px',
      letterSpacing: '1px',
      display: 'inline-block',
      padding: '12px 40px',
      borderRadius: '5px',
      transition: '0.5s',
      margin: '10px',
      border: '2px solid var(--contrast-color)',
      color: '#0060D8',
      textDecoration: 'none',
    },
    ctaButtonHover: {
      background: 'var(--accent-color)',
      color: 'var(--background-color)',
      border: '2px solid var(--accent-color)',
    },
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="call-to-action" style={styles.callToAction} className="section dark-background">
      <img src={Img} alt="" style={styles.image} />
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <Slider {...sliderSettings}>
          <div>
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-10">
                <div>
                  <h3 style={styles.heading}>Our Mission</h3>
                  <p style={styles.paragraph}>
                    To empower industries through cutting-edge solutions in Power Transmission, Automation, and Robotics, driving efficiency, sustainability, and innovation. We are committed to delivering reliable, intelligent, and sustainable technologies that enhance productivity, reduce environmental impact, and create lasting value for our stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row justify-content-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="col-xl-10">
                <div>
                  <h3 style={styles.heading}>Our Vision</h3>
                  <p style={styles.paragraph}>
                    To be the leading provider of innovative automation and robotics solutions that drive industry transformation, sustainability, and excellence. We envision a future where intelligent technologies seamlessly integrate with human ingenuity to create a more efficient and sustainable world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Moto;





 {/* <a 
                href="#" 
                style={styles.ctaButton}
                onMouseEnter={(e) => e.target.style = styles.ctaButtonHover}
                onMouseLeave={(e) => e.target.style = styles.ctaButton}
              >
                Call To Action
              </a> */}