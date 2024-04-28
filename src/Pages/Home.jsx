import { useEffect, useState } from "react";

const Home = () => {
  const array = [
    {
      name: "John Doe",
      designation: "Landscape Painting",
      review:
        "Absolutely thrilled with the landscape paintings! They truly capture the essence of nature and bring a sense of tranquility to my home.",
      keyWord: "Child",
    },
    {
      name: "Jane Doe",
      designation: "Portrait Drawing",
      review:
        "I'm amazed by the attention to detail in the portrait drawings. Each sketch feels incredibly lifelike and captures the personality of the subject.",
      keyWord: "Gentlewoman",
    },
    {
      name: "Shiyam Sarker",
      designation: "Watercolour Painting",
      review:
        "The watercolor paintings exceeded my expectations! The colors are so vibrant, and each piece adds a beautiful touch to my living space.",
      keyWord: "Gentleman",
    },
    {
      name: "Bob Smith",
      designation: "Oil Painting",
      review:
        "The oil paintings are simply stunning! The level of skill and artistry is evident in every stroke. I'm proud to display them in my home.",
      keyWord: "Child",
    },
    {
      name: "Eva Williams",
      designation: "Charcoal Sketching",
      review:
        "Impressed by the charcoal sketches! They capture the essence of their subjects with such depth and emotion. Truly remarkable work.",
      keyWord: "Individual",
    },
    {
      name: "Chris Brown",
      designation: "Cartoon Drawing",
      review:
        "The cartoon drawings are fantastic! They're so fun and lively, bringing smiles to everyone who sees them. Highly recommend!",
      keyWord: "Boy",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 2 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 2 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const datas = [
    {
      title: "What are some common themes in landscape painting?",
      color: "green",
      description:
        "Common themes include mountainscapes, forests, seascapes, urban landscapes, and rural scenes.",
    },
    {
      title: "How do I choose the right canvas size for a landscape painting?",
      color: "sky",
      description:
        "Consider the scale of your subject and the desired impact. Larger canvases can convey grandeur, while smaller ones may emphasize intimacy.",
    },
    {
      title: "What materials do I need for pencil sketch portraits?",
      color: "purple",
      description:
        "You'll need a range of graphite pencils, erasers, blending tools, and quality paper suitable for sketching.",
    },
    {
      title: "Can I commission a custom portrait drawing?",
      color: "amber",
      description:
        "Yes, many artists offer commission services where they create personalized portrait drawings based on your specifications.",
    },
    {
      title: "How do I clean oil painting brushes?",
      color: "red",
      description:
        "Use odorless mineral spirits or specialized brush cleaners to dissolve paint residue, followed by gentle washing with soap and water.",
    },
  ];
  return (
    <>
      <section>
        <div className="text-center mx-auto my-10 space-y-3 w-11/12 lg:w-2/3">
          <h1 className="text-3xl font-bold">What Our Client Say</h1>
          <p>
            Discover what our clients love about our painting and drawing
            platform. Read testimonials showcasing how we've empowered artists
            to unleash their creativity and master their craft.
          </p>
        </div>
        <div className=" h-full flex flex-row items-center overflow-hidden gap-5 lg:gap-10">
          <div className="relative overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-between z-20 px-5">
              {/* arrow left */}
              <button
                onClick={prevSlider}
                className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="w-4 h-4 md:w-6 md:h-6 icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                >
                  {" "}
                  <g strokeWidth="0"></g>{" "}
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>{" "}
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="black"
                      d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                    ></path>
                  </g>
                </svg>
              </button>
              {/* arrow right */}
              <button
                onClick={nextSlider}
                className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="w-4 h-4 md:w-6 md:h-6 icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  transform="rotate(180)"
                >
                  {" "}
                  <g strokeWidth="0"></g>{" "}
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>{" "}
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="black"
                      d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            {/* slider container */}
            <div
              className="ease-linear duration-300 flex"
              style={{
                transform: `translateX(-${
                  currentSlider * (isSmallScreen ? 100 : 50)
                }%)`,
              }}
            >
              {/* sliders */}
              {array.map((each, idx) => (
                <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                  <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">{each?.review}</p>
                    <a className="inline-flex items-center">
                      <img
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
                        alt="carousel navigate ui"
                      />
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium">
                          {each.name}
                        </span>
                        <span className="text-sm">{each?.designation}</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center mx-auto my-10 space-y-3 w-11/12 lg:w-2/3">
          <h1 className="text-3xl font-bold">Explore Common Questions</h1>
          <p>Explore answers to common queries about painting and drawing techniques, materials, and more. Get expert insights and guidance to enhance your artistic journey</p>
        </div>
        <div className="space-y-4 p-2 md:p-6">
          {datas?.map((data, idx) => (
            <div key={idx}>
              {/* header / Title */}
              <div
                onClick={() => handleToggle(idx)}
                className={`px-4 md:px-8 py-6 ${
                  idx === 0
                    ? "bg-green-50 border-green-500"
                    : idx === 1
                    ? "bg-sky-50 border-sky-500"
                    : idx === 2
                    ? "bg-purple-50 border-purple-500"
                    : idx === 3
                    ? "bg-amber-50 border-amber-500"
                    : idx === 4
                    ? "bg-red-50 border-red-500"
                    : "bg-orange-50 border-orange-500"
                } border-l-[3px] cursor-pointer`}
              >
                <div className="flex items-center">
                  <span>
                    <svg
                      className={`mr-4 ${
                        idx === 0
                          ? "fill-green-900"
                          : idx === 1
                          ? "fill-sky-900"
                          : idx === 2
                          ? "fill-purple-900"
                          : idx === 3
                          ? "fill-amber-900"
                          : idx === 4
                          ? "fill-red-900"
                          : "fill-orange-900"
                      } shrink-0`}
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                      <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                          isOpen === idx && "!rotate-180"
                        }`}
                      />
                    </svg>
                  </span>
                  <h4
                    className={`${
                      idx === 0
                        ? "text-green-900"
                        : idx === 1
                        ? "text-sky-900"
                        : idx === 2
                        ? "text-purple-900"
                        : idx === 3
                        ? "text-amber-900"
                        : idx === 4
                        ? "text-red-900"
                        : "text-orange-900"
                    } text-xl`}
                  >
                    {data.title}
                  </h4>
                </div>
              </div>
              {/* body / content  */}
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${
                      idx === 0
                        ? "text-green-900 bg-green-50 border-green-500"
                        : idx === 1
                        ? "text-sky-900 bg-sky-50 border-sky-500"
                        : idx === 2
                        ? "text-purple-900 bg-purple-50 border-purple-500"
                        : idx === 3
                        ? "text-amber-900 bg-amber-50 border-amber-500"
                        : idx === 4
                        ? "text-red-900 bg-red-50 border-red-500"
                        : "text-orange-900 bg-orange-50 border-orange-500"
                    } `}
                  >
                    {data?.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
