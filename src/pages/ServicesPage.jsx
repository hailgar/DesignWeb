import FAQSection from "./sections/FAQSection";
import PageHeader from "./sections/PageHeader";
import PricingSection from "./sections/PricingSection";
import ProcessSection from "./sections/ProcessSection";
import ServicesSection from "./sections/ServicesSection";

export default function ServicesPage({
  siteConfig,
  pageHeaderData,
  servicesSectionData,
  processSectionData,
  pricingSectionData,
  faqSectionData,
}) {
  return (
    <>
      <PageHeader data={pageHeaderData} />
      <ServicesSection data={servicesSectionData} />
      <ProcessSection data={processSectionData} />
      <PricingSection data={pricingSectionData} />
      <FAQSection data={faqSectionData} site={siteConfig} />
    </>
  );
}
