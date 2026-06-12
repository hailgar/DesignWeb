import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GraphicDesignLanding from "./pages/GraphicDesignLanding";
import "./App.css";

const legacyHashRoutes = {
  "#/": "/",
  "#/tentang": "/tentang",
  "#/layanan": "/layanan",
  "#/portfolio": "/portfolio",
  "#/kontak": "/kontak",
  "#about": "/tentang",
  "#tentang": "/tentang",
  "#services": "/layanan",
  "#pricing": "/layanan",
  "#process": "/layanan",
  "#faq": "/layanan",
  "#portfolio": "/portfolio",
  "#brief": "/kontak",
};

export default function App() {
  const location = useLocation();

  if (legacyHashRoutes[location.hash]) {
    return <Navigate to={legacyHashRoutes[location.hash]} replace />;
  }

  return (
    <Routes>
      <Route path="/" element={<GraphicDesignLanding activePage="home" />} />
      <Route path="/tentang" element={<GraphicDesignLanding activePage="tentang" />} />
      <Route path="/layanan" element={<GraphicDesignLanding activePage="layanan" />} />
      <Route path="/portfolio" element={<GraphicDesignLanding activePage="portfolio" />} />
      <Route path="/kontak" element={<GraphicDesignLanding activePage="kontak" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
