// src/components/PartnershipSection.js
import Image from "../assets/Tesco_Partnership_07_16x9.jpg";

const PartnershipSection = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8 border-t-4 border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2">
          <img
            className="w-[95%] h-auto object-cover"
            src={Image}
            alt="Charging Station"
          />
        </div>
        <div className="w-full mt-6 lg:mt-0 text-center lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Energising a Better Britain
          </h2>
          <p className="mt-4 text-gray-600">
            We ve partnered with leading street charging operators to ensure
            motorists without driveways are not left behind in the transition to
            electric. We’re accelerating residential on-street charging across
            the country.
          </p>
          <p className="mt-4 text-gray-600">
            Vauxhall is also partnering with supermarket giant Tesco to provide
            new Vauxhall electric vehicle customers with one year’s free
            charging credit at stores across the UK.
          </p>
          <p className="mt-4 text-gray-600">Find out more below</p>
          <div className="mt-6 flex flex-col space-y-4 items-center">
            <a
              href="#"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 text-center"
            >
              ELECTRIC STREETS OF BRITAIN
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 text-center"
            >
              TESCO PARTNERSHIP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipSection;
