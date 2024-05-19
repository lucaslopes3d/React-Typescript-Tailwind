import {BrowserRouter, Routes, Route} from "react-router-dom";
import WriteNowPage from "../pages/WriteNowPage";
import DashboardPage from "../pages/DashboardPage";

export default function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/escrever-agora" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  );
}