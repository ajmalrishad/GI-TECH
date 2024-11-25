import { useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons CSS
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs'; // Install react-purecounter for PureCounter
import stat from "../../assets/interaction.png";

const StatsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    new PureCounter();
  }, []);

  const styles = {
    section: {
      padding: '60px 0',
      backgroundColor: '#f4f4f4',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    colImg: {
      flex: '1 1 45%',
      marginRight: '2rem',
    },
    colText: {
      flex: '1 1 45%',
      textAlign: 'left',
      minWidth: '300px',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    paragraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '2rem',
      color: '#555',
    },
    statsItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
    },
    icon: {
      fontSize: '44px',
      color: 'var(--accent-color)',
      lineHeight: '0',
      marginRight: '15px',
    },
    purecounter: {
      color: 'var(--heading-color)',
      fontSize: '40px',
      display: 'block',
      fontWeight: '700',
      lineHeight: '40px',
    },
    statsText: {
      color: 'color-mix(in srgb, var(--default-color), transparent 40%)',
      padding: '15px 0 0 0',
      margin: '0',
      fontFamily: 'var(--heading-font)',
      fontSize: '14px',
    },
  };

  return (
    <section id="stats" style={styles.section}>
      <div className="container" style={styles.container} data-aos="fade-up" data-aos-delay="100">
        <div style={styles.row}>
          <div className="col-lg-5" style={styles.colImg}>
            <img src={stat} alt="" className="img-fluid" />
          </div>

          <div className="col-lg-6" style={styles.colText}>
            <h3 style={styles.heading}>Voluptatem dignissimos provident quasi</h3>
            <p style={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>

            <div style={styles.row}>
              <div className="col-lg-6">
                <div className="stats-item" style={styles.statsItem}>
                  <i className="bi bi-emoji-smile" style={styles.icon}></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter" style={styles.purecounter}></span>
                    <p style={styles.statsText}><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item" style={styles.statsItem}>
                  <i className="bi bi-journal-richtext" style={styles.icon}></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter" style={styles.purecounter}></span>
                    <p style={styles.statsText}><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item" style={styles.statsItem}>
                  <i className="bi bi-headset" style={styles.icon}></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter" style={styles.purecounter}></span>
                    <p style={styles.statsText}><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="stats-item" style={styles.statsItem}>
                  <i className="bi bi-people" style={styles.icon}></i>
                  <div>
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter" style={styles.purecounter}></span>
                    <p style={styles.statsText}><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
