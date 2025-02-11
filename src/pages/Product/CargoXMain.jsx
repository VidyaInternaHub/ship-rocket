import React from "react";
import Cnav1 from "../../components/Products/CargoX/Cnav1";
import { Cnav2 } from "../../components/Products/CargoX/Cnav2";
import { B2BShipment } from "../../components/Products/CargoX/B2BShipment";
import { UnlockBetter } from "../../components/Products/CargoX/UnlockBetter";
import { Unmatch } from "../../components/Products/CargoX/Unmact";
import { Network } from "../../components/Products/CargoX/Network";
import { ShippingPlan } from "../../components/Products/CargoX/ShippingPlan";

export const CargoXMain = () => {
  return (
    <>
      <div className="mx-4 ">
        {/* nav start  */}
        <Cnav1 />
        <div className="px-4 bg-gradient-to-tr from-white via-[#e6f7eb] to-[#d1ecfd] pb-2">
          <Cnav2 />
          <B2BShipment />
        </div>
        <UnlockBetter />
        <Unmatch/>
        <Network/>
        <ShippingPlan/>

        
      </div>
    </>
  );
};
