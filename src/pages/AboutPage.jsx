import AboutSection from "./sections/AboutSection";
import FinalCTA from "./sections/FinalCTA";
import PageHeader from "./sections/PageHeader";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function AboutPage({ pageHeaderData, aboutSectionData, whyChooseUsData, finalCtaData }) {
  return (
    <>
      <PageHeader data={pageHeaderData} />
      <AboutSection data={aboutSectionData} />
      <WhyChooseUs data={whyChooseUsData} />
      <FinalCTA data={finalCtaData} />
    </>
  );
}
