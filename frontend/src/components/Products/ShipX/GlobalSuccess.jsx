import Button from "../../ui/Button";
import imgUrl from "../../../assets/images/shipx/map-globe-1.svg";

function GlobalSuccess() {
  return (
    <div
      className="relative h-64 flex items-center justify-between py-2 px-8 shadow-2xl rounded-2xl mx-4 mb-6"
      style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-blue-95 opacity-50"></div>
      <div className="space-y-5 text-white">
        {" "}
        <h1 className="text-3xl z-10">
          Ready to become the next big global sucess story?
        </h1>
        <p>
          Begin expanding your footprint all over the world without any heavy
          documentation.
        </p>
      </div>
      <Button className="bg-white z-10">Sign up for free</Button>
    </div>
  );
}

export default GlobalSuccess;
