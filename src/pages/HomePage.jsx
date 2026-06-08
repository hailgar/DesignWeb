import { useMemo } from "react";
import BrandStrip from "./sections/BrandStrip";
import FinalCTA from "./sections/FinalCTA";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function HomePage({
  heroData,
  brandStripData,
  servicesSectionData,
  whyChooseUsData,
  portfolioSectionData,
  finalCtaData,
}) {
  const homeServicesData = useMemo(
    () => ({
      ...servicesSectionData,
      title: ["Layanan favorit ", { em: "untuk UMKM." }],
      description: "Empat kebutuhan desain yang paling sering dipakai untuk mulai tampil profesional.",
      services: servicesSectionData.services.slice(0, 4),
    }),
    [servicesSectionData],
  );

  const homePortfolioData = useMemo(
    () => ({
      ...portfolioSectionData,
      title: ["Contoh visual ", { em: "siap jualan." }],
      description: "Beberapa arah desain yang bisa dipakai sebagai referensi awal project kamu.",
      items: portfolioSectionData.items.slice(0, 4),
    }),
    [portfolioSectionData],
  );

  return (
    <>
      <HeroSection data={heroData} />
      <BrandStrip data={brandStripData} />
      <ServicesSection data={homeServicesData} />
      <WhyChooseUs data={whyChooseUsData} />
      <PortfolioSection data={homePortfolioData} />
      <FinalCTA data={finalCtaData} />
    </>
  );
}
