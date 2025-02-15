import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fulfilllment from "./pages/Product/Fulfilllment.jsx";
import Home from "./pages/Home.jsx";
import DomesMain from "./pages/Product/DomesMain.jsx";
import QuickPage from "./pages/Product/QuickPage.jsx";
import CargoShipping from "./pages/Product/CargoShipping.jsx";
import ShipX from "./pages/Product/ShipX.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/domestic-shipping", element: <DomesMain /> },
  { path: "/fulfillment", element: <Fulfilllment /> },
  { path: "/quick", element: <QuickPage /> },
  { path: "/cargo-shipping", element: <CargoShipping /> },
  { path: "/shipx", element: <ShipX/> },
  { path: "/cargox", element: <>Cargox</> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
