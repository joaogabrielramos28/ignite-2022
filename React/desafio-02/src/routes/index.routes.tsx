import { Route, BrowserRouter, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Checkout } from "../pages/Checkout";
import { Home } from "../pages/Home";
import { OrderConfirm } from "../pages/OrderConfirm";
export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<OrderConfirm />} />
          <Route path="/checkout" element={<OrderConfirm />} />
          <Route path="/order-confirm" element={<OrderConfirm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
