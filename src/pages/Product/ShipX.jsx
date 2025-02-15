import React from "react";
import Hero from "../../components/Products/ShipX/Hero";
import Footer from "../../components/Footer";
import ShipInternationallly from "../../components/Products/ShipX/ShipInternationallly";
import OneWorld from "../../components/Products/ShipX/OneWorld";
import OurClient from "../../components/Products/ShipX/OurClient";
import LocalGlobal from "../../components/Products/ShipX/LocalGlobal";
import CalculateNow from "../../components/Products/ShipX/CalculateNow";
import GlobalSuccess from "../../components/Products/ShipX/GlobalSuccess";
import Leverage from "../../components/Products/ShipX/Leverage";
import Export from "../../components/Products/ShipX/Export";
import ShippingCalculator from "../../components/Products/ShipX/ShippingCalcualtor";
import GlobalShipping from "../../components/Products/ShipX/GlobalShipping";
import InternationalShipping from "../../components/Products/ShipX/InternationalShipping";

function ShipX() {
  return (
    <div>
      <Hero />
      <ShipInternationallly />
      <OneWorld />
      <OurClient />
      <InternationalShipping/>
      <GlobalShipping/>
      <CalculateNow />
      <LocalGlobal />
      <ShippingCalculator/>
      <Export/>
      <Leverage/>
      <GlobalSuccess/>
      <Footer />
    </div>
  );
}

export default ShipX;
