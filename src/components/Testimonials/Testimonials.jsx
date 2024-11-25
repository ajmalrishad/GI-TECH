// import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Dilshad",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sabir ali",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dipankar kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Satya Narayan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sectionTitleStyles = {
    paddingBottom: "60px",
    position: "relative",
  };

  const h2Styles = {
    fontSize: "14px",
    fontWeight: 500,
    padding: 0,
    lineHeight: "1px",
    margin: 0,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "color-mix(in srgb, var(--default-color), transparent 50%)",
    position: "relative",
  };

  const h2AfterStyles = {
    content: '""',
    width: "160px",
    height: "3px",
    display: "inline-block",
    background: "#006",
    margin: "4px 10px",
  };

  const pStyles = {
    color: "var(--heading-color)",
    margin: 0,
    fontSize: "36px",
    fontWeight: 700,
    textTransform: "uppercase",
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        <div
          className="section-title"
          style={sectionTitleStyles}
          data-aos="fade-up"
        >
          <div className="flex">
            <h2 style={h2Styles}>Testimonials</h2>
            <span className="h2AfterStyles" style={h2AfterStyles}></span>
          </div>
          <p style={pStyles}>Check our Testimonials</p>
        </div>
        {/* header section */}
        {/* <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
            <p style={{ fontSize: "1.0rem", color: "#777" }}>Check our Testimonials</p>
          </h1>
          
        </div> */}

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <>
                <div className="my-6">
                  <div
                    key={data.id}
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                  >
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    {/* content section */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <h1 className="text-xl font-bold text-black/80  font-cursive2">
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
