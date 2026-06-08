import ContactBriefSection from "./sections/ContactBriefSection";
import FAQSection from "./sections/FAQSection";
import PageHeader from "./sections/PageHeader";

export default function ContactPage({ siteConfig, pageHeaderData, contactSectionData, faqSectionData }) {
  return (
    <>
      <PageHeader data={pageHeaderData} />
      <ContactBriefSection data={contactSectionData} />
      <FAQSection data={faqSectionData} site={siteConfig} />
    </>
  );
}
