import srxHome from "../../../assets/images/shipx/srxhome-64bab6498d630.webp";
function Leverage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-4 mb-8">
      <img className="w-full h-full" src={srxHome} alt="srx home" />
      <div className="space-y-4 text-zinc-400">
        <h1 className="text-blue-950 text-2xl md:text-5xl font-bold my-4 leading-tight text-left">
          Leverage{" "}
          <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent font-bold">
            11+ years
          </span>{" "}
          of experience in logistics
        </h1>
        <p>
          ShiprocketX is a product of Shiprocket, a trusted eCommerce growth
          platform that more than 2.5 lakh Indian sellers count on.
        </p>
        <p>
          With the expertise of handling over 2.2 lakh shipments every day, we
          create a perfect combination of technology and services for your
          business to achieve growth like never before.
        </p>
      </div>
    </div>
  );
}

export default Leverage;
