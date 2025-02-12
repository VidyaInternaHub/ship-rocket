import { useLocation } from "react-router-dom";

const useRouteStatus = () => {
  const location = useLocation();

  const isQuick = location.pathname === "/quick";
  const isDemosticShopping = location.pathname === "/domestic-shipping";
  const isFulfillment = location.pathname === "/fulfillment";

  return { isQuick, isDemosticShopping, isFulfillment };
};
export default useRouteStatus;
