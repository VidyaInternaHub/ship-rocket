import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessStroy from "../components/home/SuccessStroy";
import Hero from "../components/home/Hero";
import StickySection from "../components/home/StickySection";
import FixedHeader from "../components/FixedHeader";
import Innovations from "../components/home/Innovations";
import Experience from "../components/home/Experience";
import DigitalPlateform from "../components/home/DigitalPlatform";
import Developers from "../components/home/Developers";
import Headlines from "../components/home/Headlines";
import Blogs from "../components/home/Blogs";
import OurServices from "../components/home/OurServices";

function Home() {
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowFixedHeader(true);
    } else {
      setShowFixedHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      {showFixedHeader && <FixedHeader />}
      <Hero />
      <SuccessStroy />
      <StickySection />
      <Innovations/>
      <Experience/>
      <DigitalPlateform/>
      <Developers/>
      <OurServices/>
      <Headlines/>
      <Blogs/>
      <Footer />
    </div>
  );
}

export default Home;
