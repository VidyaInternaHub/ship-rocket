// DomesMain.jsx

import React from "react";
import Nav1 from "../../components/Products/DomesticPage/Nav1";
import { Nav2 } from "../../components/Products/DomesticPage/Nav2";
import { Hero } from "../../components/Products/DomesticPage/Hero";
import { Shipping_Map } from "../../components/Products/DomesticPage/Shipping_Map";
import { Technology } from "../../components/Products/DomesticPage/Technology";
import { TopOffer } from "../../components/Products/DomesticPage/TopOffer";
import { CheckDemo } from "../../components/Products/DomesticPage/CheckDemo";
import { ShipRocEcommerce } from "../../components/Products/DomesticPage/ShipRocEcommerce";
import { Shipsecurity } from "../../components/Products/DomesticPage/Shipsecurity";
import Footer from "../../components/Footer";
import { MultiplePickLoca } from "../../components/Products/DomesticPage/MultiplePickLoca";
import { BrandTracking } from "../../components/Products/DomesticPage/BrandTracking";
import { CentralizeDashBorad } from "../../components/Products/DomesticPage/CentralizeDashBorad";
import { CodRemittance } from "../../components/Products/DomesticPage/CodRemittance";
import { EasyReturn } from "../../components/Products/DomesticPage/EasyReturn";
import { InternationalShipping } from "../../components/Products/DomesticPage/InternationationalShiping";
import { ShippingGrowth } from "../../components/Products/DomesticPage/ShippingGrowth";
import { AppPocket } from "../../components/Products/DomesticPage/AppPocket";
import { CustomerSaying } from "../../components/Products/DomesticPage/CustomerSaying";
import { TrustedBy } from "../../components/Products/DomesticPage/TrustedBy";
import { HowWorks } from "../../components/Products/DomesticPage/HowWorks";
import { ExploreBlog } from "../../components/Products/DomesticPage/ExploreBlog";
import { AlwaysStay } from "../../components/Products/DomesticPage/AlwaysStay";
import Header from "../../components/Header";

function DomesMain() {
  return (
    <div className=" mx-0 sm:mx-4 ">
      {/* top section/ offer */}
      <TopOffer />
      {/* Main Content */}
<div className="relative max-w-full overflow-hidden">
  {/* Unique Wave Background */}
  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#f5f7fa] via-[#e6e9f0] to-[#f8e2cf] -z-10">
    <svg
      className="absolute bottom-0 left-0 w-full h-[120px] md:h-[150px] lg:h-[200px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#e8d4b0"
        fillOpacity="1"
        d="M0,224L48,208C96,192,192,160,288,149.3C384,139,480,149,576,165.3C672,181,768,203,864,186.7C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L0,320Z"
      ></path>
    </svg>
  </div>

  {/* Main Content (Not Skewed) */}
  <div className="relative z-10 mx-0 sm:mx-4 pb-8">
    {/* <Nav1 /> */}
    <Header />
    <Nav2 />
    <Hero />
  </div>
</div>




      {/* Sections */}
      <Shipping_Map />
      <Technology />
      <CheckDemo />
      <ShipRocEcommerce />
      <Shipsecurity />
      <MultiplePickLoca />
      <BrandTracking />
      <CentralizeDashBorad />
      <CodRemittance />
      <EasyReturn />
      <InternationalShipping />
      <ShippingGrowth />
      <AppPocket />
      <CustomerSaying />
      <TrustedBy />
      <HowWorks />
      <ExploreBlog />
      <AlwaysStay />
      
      <Footer />
    </div>
  );
}

export default DomesMain;  // Default export
