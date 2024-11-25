import Subnavbar from "../../components/Navbar/Subnavbar";


const AutomationServices = () => {
  const services = [
    {
      title: 'Industrial Automation Panels',
      description: 'We design and install industrial automation panels that control and monitor machinery, making manufacturing processes more efficient and reliable.',
      image: '/images/industrial-automation-panels.jpg',
    },
    {
      title: 'SCADA (Supervisory Control and Data Acquisition)',
      description: 'SCADA systems allow you to control and monitor industrial processes from a central location, providing real-time data and automated control.',
      image: '/images/scada.jpg',
    },
    {
      title: 'PLC Programming',
      description: 'Our PLC programming services ensure that your machines run smoothly, automating complex tasks with precision and safety.',
      image: '/images/plc-programming.jpg',
    },
    {
      title: 'Telemetry and Remote Monitoring',
      description: 'Keep track of your systems remotely with our telemetry solutions, providing real-time data and alerts wherever you are.',
      image: '/images/telemetry.jpg',
    },
    {
      title: 'IoT (Internet of Things)',
      description: 'We connect your devices to the Internet of Things, enabling smart operations, data collection, and remote control from anywhere.',
      image: '/images/iot.jpg',
    },
    {
      title: 'Home Automation',
      description: 'Our home automation solutions make your life easier by allowing you to control lighting, security, and appliances from your smartphone.',
      image: '/images/home-automation.jpg',
    },
  ];

  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      padding: '40px',
      backgroundColor: '#f9f9f9',
      marginTop:'4rem'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      transition: 'transform 0.3s ease-in-out',
    },
    cardHover: {
      transform: 'translateY(-10px)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    content: {
      padding: '20px',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.75rem',
      marginBottom: '15px',
      color: '#333',
    },
    description: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
    },
  };

  return (
    <>
    <Subnavbar/>
    <div style={styles.container}>
      {services.map((service, index) => (
        <div
          key={index}
          style={styles.card}
          onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
        >
          <img src={service.image} alt={service.title} style={styles.image} />
          <div style={styles.content}>
            <h3 style={styles.title}>{service.title}</h3>
            <p style={styles.description}>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default AutomationServices;
