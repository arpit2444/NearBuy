import { Route, Routes } from "react-router-dom";
import Checkout from "../../Pages/Checkout/Checkout";
import { Home } from "../../Pages/Home/Home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="" element={}></Route> */}
      {/* <Route path="" element={}></Route> */}
      {/* <Route path="" element={}></Route> */}
      {/* <Route path="" element={}></Route> */}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};
