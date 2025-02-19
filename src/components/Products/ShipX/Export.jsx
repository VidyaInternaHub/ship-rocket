import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import img1 from "../../../assets/images/shipx/yt-home.jpg";
import img2 from "../../../assets/images/shipx/srx-youtube-testimonial-650029af6059a.webp";
import playbutton from "../../../assets/images/shipx/play-button-1.svg";
import { Link } from "react-router-dom";

const youtubes = [img1, img2];

function Export() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? youtubes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === youtubes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col gap-8 p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-blue-950 text-2xl md:text-5xl font-bold my-4 leading-tight text-left">
          How our clients are <br />
          <span className="bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent font-bold">
            simplifying their exports
          </span>
        </h1>
        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 my-4">
          <button
            className="p-2 bg-gray-200 rounded-full"
            onClick={handlePrevious}
          >
            <BsChevronLeft />
          </button>
          <button className="p-2 bg-gray-200 rounded-full" onClick={handleNext}>
            <BsChevronRight />
          </button>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="flex gap-8 overflow-hidden">
        {youtubes.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div
            key={index}
            className="relative max-w-sm bg-white w-full h-80 border border-zinc-200 rounded-2xl mb-6 overflow-hidden"
          >
            {/* YouTube Link */}
            <Link
              to="/https://www.youtube.com/watch?v=YOUR_VIDEO_ID" // Change this to the actual video link
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              {/* Main Image */}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={image}
                alt="Client Experience"
              />

              {/* Play Button - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-24 h-24" src={playbutton} alt="Play Button" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Export;
