import ContactUs from "../../components/contact/ContactUs";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Page Header */}
      <div className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-blue-400 mb-2">
            Connect With GiTech
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Technical Inquiries
          </h1>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Need pricing, a solution consultation, or urgent field support?
            Our certified engineering team is here to assist.
          </p>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default Contact;
