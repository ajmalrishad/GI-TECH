import Projects from "./Projects";
import Gallery from "./Gallery";

const ProjectSection = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Engineering Provenance
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Completed Projects
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto my-4 rounded-full"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Delivering robust Motor Control Centers, intelligent HVAC control
            panels, and municipal wastewater treatment automation systems.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Projects />
        <Gallery />
      </main>
    </div>
  );
};

export default ProjectSection;
