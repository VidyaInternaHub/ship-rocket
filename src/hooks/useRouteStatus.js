import { useLocation } from "react-router-dom";

const useRouteStatus = () => {
  const location = useLocation();

  const isQuick = location.pathname === "/quick";
  const isDomesticShipping = location.pathname === "/domestic-shipping";
  const isCargoShipping = location.pathname === "/cargo-shipping";
  const isFulfillment = location.pathname === "/fulfillment";
  const shipX = location.pathname === "/shipx";
  const cargoX = location.pathname === "/cargox";

  return {
    isQuick,
    isDomesticShipping,
    isCargoShipping,
    isFulfillment,
    cargoX,
    shipX,
  };
};
export default useRouteStatus;
