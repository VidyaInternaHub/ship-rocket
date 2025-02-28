import srxImg3 from "../../../assets/images/shipx/srx-images-3.webp";

function ShipInternationallly() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-28 p-4">
      <div className="lg:w-1/3">
        <span className="text-sky-500 text-lg">
          eCommerce exports simplified
        </span>
        <h1 className="text-blue-950 text-2xl md:text-5xl font-bold my-4 leading-14">
          The easiest platform to ship {" "}
          <span className="bg-gradient-to-r from-blue-300 to bg-green-200 bg-clip-text text-transparent font-bold">
            internationally
          </span>
        </h1>
        <p className="text-zinc-700 my-2">
          Want to discover a whole new world of growth opportunities?
          ShiprocketX is here to help.
        </p>
        <p className="text-zinc-700 my-2">
          Our international shipping platform makes it simpler to serve your
          international customers and make it big in the global arena.
        </p>
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <img
          className="w-full max-w-md h-auto"
          src={srxImg3}
          alt="srx image 3"
        />
      </div>
    </div>
  );
}

export default ShipInternationallly;
