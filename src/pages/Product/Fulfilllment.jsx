import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DeliveryEfficiency from "../../components/Products/Fulfilment/DeliveryEfficiency";
import FastDelivery from "../../components/Products/Fulfilment/FastDelivery";
import StepProgress from "../../components/Products/Fulfilment/StepProgress";
import Hero from "../../components/Products/Fulfilment/Hero";
import OurCustomers from "../../components/Products/Fulfilment/OurCustomers";
import OurOffering from "../../components/Products/Fulfilment/OurOffering";
import TechDriven from "../../components/Products/Fulfilment/TechDriven";
import Trusted from "../../components/Products/Fulfilment/Trusted";
import OurExpert from "../../components/Products/Fulfilment/OurExpert";

function Fulfilllment() {
  return (
    <div>
      <Header />
      <Hero/>
      <OurOffering/>
      <TechDriven/>
      <DeliveryEfficiency/>
      <FastDelivery/>
      <OurCustomers />
      <Trusted/>
      <StepProgress/>
      <OurExpert/>
      <Footer />
    </div>
  );
}

export default Fulfilllment;
