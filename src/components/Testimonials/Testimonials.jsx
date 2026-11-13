import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonialList = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Plant Operations Head, Process Manufacturing",
    feedback:
      "GiTech engineered our multi-line VFD retrofit with Invertek drives. Commissioning was flawless, and we achieved a 22% drop in energy consumption across our pumping circuits.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Miller",
    role: "Facility Technical Director, Commercial BMS",
    feedback:
      "Their BMS integration team delivered turnkey HVAC and access automation for our 14-story commercial tower. The ongoing technical support has been responsive and proactive.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ahmed Al-Mansoor",
    role: "Chief Engineer, Water & Wastewater Utility",
    feedback:
      "We rely on GiTech for Aucom soft starters and SCADA telemetry across our remote pumping stations. Equipment stress has drastically decreased and pump life has doubled.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kavita Patel",
    role: "Lead Automation Engineer, Packaging Systems",
    feedback:
      "From KEB motion drives to Vogel lubrication systems, GiTech provides genuine parts with deep application engineering know-how. Highly recommended partner.",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs uppercase tracking-widest font-bold text-primary mb-2">
            Proven Customer Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto my-3 rounded-full"></div>
          <p className="text-sm sm:text-base text-slate-600">
            Hear from industry leaders and plant engineers who trust GiTech for
            reliable automation, motor control, and technical support.
          </p>
        </div>

        {/* Carousel */}
        <div className="pb-8">
          <Slider {...settings}>
            {testimonialList.map((item) => (
              <div key={item.id} className="p-3">
                <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between h-full min-h-[260px]">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <FaQuoteLeft className="text-primary/30 text-2xl" />
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <FaStar key={i} size={14} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed italic">
                      "{item.feedback}"
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
