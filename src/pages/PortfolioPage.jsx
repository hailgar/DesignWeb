import FinalCTA from "./sections/FinalCTA";
import PageHeader from "./sections/PageHeader";
import PortfolioSection from "./sections/PortfolioSection";
import TestimonialsSection from "./sections/TestimonialsSection";

export default function PortfolioPage({
  pageHeaderData,
  portfolioSectionData,
  testimonialsSectionData,
  finalCtaData,
}) {
  return (
    <>
      <PageHeader data={pageHeaderData} />
      <PortfolioSection data={portfolioSectionData} />
      <TestimonialsSection data={testimonialsSectionData} />
      <FinalCTA data={finalCtaData} />
    </>
  );
}
