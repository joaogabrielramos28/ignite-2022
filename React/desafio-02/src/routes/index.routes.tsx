import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
