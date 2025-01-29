import React, { useState, useEffect } from "react";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessStroy from "../components/SuccessStroy";
import Hero from "../components/Hero";
import StickySection from "../components/StickySection";
import FixedHeader from "../components/FixedHeader";

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
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
