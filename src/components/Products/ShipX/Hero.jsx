import Header from "../../Header";
import Button from "../../ui/Button";
import heroVid from "./../../../assets/images/products/SRX_Banner.webm";
import ShipXNav from "./ShipXNav";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      <Header />
      <ShipXNav />
      {/* Background Video */}
      <video
        className="w-full h-full object-cover -mt-28"
        src={heroVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute top-28 left-0 w-full h-full flex flex-col space-y-8 text-black px-4 md:px-16 text-left">
        <h1 className="text-2xl  text-blue-950 md:text-6xl font-bold max-w-3xl leading-16">
          Grow your business <br />
          <span className="bg-gradient-to-r from-blue-300 to bg-green-200 bg-clip-text text-transparent font-medium ">
            beyond borders
          </span>
        </h1>
        <p className="text-zinc-500 text-basic w-1/2">
          Make international shipping easier with our end-to-end cross-border
          solutions and expand your footprint across the globe.
        </p>
        <button className="w-fit px-6 py-3 rounded-lg hover:border shadow-2xl hover:shadow-blue-500 bg-sky-500 text-white hover:bg-white hover:text-sky-500">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Hero;
