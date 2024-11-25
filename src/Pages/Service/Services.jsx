import Subnavbar from "../../components/Navbar/Subnavbar";


const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Full stack web development services using the latest technologies.',
      image: '/images/web-development.jpg',
      demo: 'Web development demo link or content',
    },
    {
      title: 'Graphic Design',
      description: 'Creative graphic design solutions for your business.',
      image: '/images/graphic-design.jpg',
      demo: 'Graphic design demo link or content',
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your site ranking with our SEO services.',
      image: '/images/seo-optimization.jpg',
      demo: 'SEO demo link or content',
    },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '40px',
      padding: '40px',
      backgroundColor: '#f0f2f5',
      marginTop:"4rem",
    },
    card: {
      position: 'relative',
      width: '100%',
      maxWidth: '1000px',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease-in-out',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    image: {
      width: '50%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '15px 0 0 15px',
    },
    content: {
      padding: '40px',
      backgroundColor: '#fff',
      borderRadius: '0 15px 15px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '15px',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#333',
    },
    description: {
      fontSize: '1.1rem',
      color: '#666',
      lineHeight: '1.5',
    },
    button: {
      alignSelf: 'flex-start',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '50%',
      width: '50%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: '0 15px 15px 0',
    },
  };

  return (
    <>
    <Subnavbar/>
    <div style={styles.container}>
      {services.map((service, index) => (
        <div
          key={index}
          style={{ ...styles.card }}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={service.image} alt={service.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.title}>{service.title}</h3>
              <p style={styles.description}>{service.description}</p>
              <button
                style={styles.button}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                onClick={() => alert(service.demo)}
              >
                See Demo
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Services;
