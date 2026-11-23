import logo from "../../assets/logos/gitech-logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xs transition-opacity duration-300">
      <div className="relative flex flex-col items-center">
        {/* Subtle spinning ring */}
        <div className="w-16 h-16 rounded-full border-3 border-slate-100 border-t-primary animate-spin"></div>
        {/* Subtle center logo icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="text-xs font-black text-primary tracking-wider">GI</span>
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
