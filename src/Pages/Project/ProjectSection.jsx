// src/pages/Projects/Projects.jsx


// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
import Projects from "./Projects";
import Gallery from "./Gallery";
import Subnavbar from "../../components/Navbar/Subnavbar";

const ProjectSection = () => {
  return (
    <div >
      <Subnavbar/>
      {/* <Navbar style={{ backgroundColor: 'lightgray' }} /> */}
      <main>
        <Projects/>
        <Gallery />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default ProjectSection;
