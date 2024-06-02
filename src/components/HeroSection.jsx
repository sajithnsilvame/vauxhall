import heroImg from '../assets/hero-image.jpg'

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-5">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={heroImg}
          alt="Vauxhall Electric Car"
        />
      </div>
    </div>
  );
};

export default HeroSection;
