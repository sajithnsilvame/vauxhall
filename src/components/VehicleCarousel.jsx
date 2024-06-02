import Slider from "react-slick";
import CrosslandImage from "../assets/VX_Crossland_bbc.png"; // Replace with actual paths
import ComboLifeElectricImage from "../assets/Combo_Life_Electric_576x322.png"; // Replace with actual paths
import VivaroLifeElectricImage from "../assets/Vivaro_Life_Electric_576x322.png"; // Replace with actual paths
import ComboImage from "../assets/combo575x322.png"; // Replace with actual paths
import PropTypes from "prop-types";

const vehicles = [
  { name: "Crossland", image: CrosslandImage },
  { name: "Combo Life Electric", image: ComboLifeElectricImage },
  { name: "Vivaro Life Electric", image: VivaroLifeElectricImage },
  { name: "Combo", image: ComboImage },
];

const VehicleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Discover The Vauxhall Range of Vehicles
        </h2>
        <Slider {...settings} className="mt-6">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="h-40 w-60 object-contain"
                src={vehicle.image}
                alt={vehicle.name}
              />
              <p className="mt-2 text-lg font-medium text-gray-900">
                {vehicle.name}
              </p>
            </div>
          ))}
        </Slider>
        <div className="mt-8 flex justify-center">
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700">
            FIND YOUR LOCAL RETAILER
          </button>
        </div>
      </div>
    </div>
  );
};

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        className="h-6 w-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};
SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const SamplePrevArrow = ({ className, style, onClick }) => {
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <svg
        className="h-6 w-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
  );
};
SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default VehicleCarousel;
