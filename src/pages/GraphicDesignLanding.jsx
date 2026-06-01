import { useEffect, useMemo, useState } from "react";
import { graphicDesignLandingData } from "../data/graphicDesignLandingData";
import {
  ACTIVE_COLOR_PRESET,
  colorTemplateOptions,
  getGraphicDesignThemeCss,
} from "../config/graphicDesignTheme";
import AboutSection from "../sections/graphic-design/AboutSection";
import BrandStrip from "../sections/graphic-design/BrandStrip";
import ContactBriefSection from "../sections/graphic-design/ContactBriefSection";
import FAQSection from "../sections/graphic-design/FAQSection";
import FinalCTA from "../sections/graphic-design/FinalCTA";
import Footer from "../sections/graphic-design/Footer";
import HeroSection from "../sections/graphic-design/HeroSection";
import Navbar from "../sections/graphic-design/Navbar";
import PageHeader from "../sections/graphic-design/PageHeader";
import PortfolioSection from "../sections/graphic-design/PortfolioSection";
import PricingSection from "../sections/graphic-design/PricingSection";
import ProcessSection from "../sections/graphic-design/ProcessSection";
import ServicesSection from "../sections/graphic-design/ServicesSection";
import TestimonialsSection from "../sections/graphic-design/TestimonialsSection";
import WhyChooseUs from "../sections/graphic-design/WhyChooseUs";
import "../styles/graphicDesignLanding.css";

const routePages = {
  "/": "home",
  "/tentang": "tentang",
  "/layanan": "layanan",
  "/portfolio": "portfolio",
  "/kontak": "kontak",
};

const legacyHashPages = {
  "#about": "tentang",
  "#tentang": "tentang",
  "#services": "layanan",
  "#pricing": "layanan",
  "#process": "layanan",
  "#faq": "layanan",
  "#portfolio": "portfolio",
  "#brief": "kontak",
};

function getPageFromHash() {
  const hash = window.location.hash || "#/";

  if (legacyHashPages[hash]) {
    return legacyHashPages[hash];
  }

  const route = hash.replace("#", "") || "/";
  return routePages[route] || "home";
}

export default function GraphicDesignLanding() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [activeTemplate, setActiveTemplate] = useState(() => {
    const savedTemplate = window.localStorage.getItem("graphic-design-template");
    const isValidTemplate = colorTemplateOptions.some((template) => template.id === savedTemplate);

    return isValidTemplate ? savedTemplate : ACTIVE_COLOR_PRESET;
  });

  const themeCss = useMemo(() => getGraphicDesignThemeCss(activeTemplate), [activeTemplate]);

  useEffect(() => {
    window.localStorage.setItem("graphic-design-template", activeTemplate);
  }, [activeTemplate]);

  useEffect(() => {
    const onHashChange = () => setActivePage(getPageFromHash());
    window.addEventListener("hashchange", onHashChange);

    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activePage]);

  const {
    siteConfig,
    navLinks,
    navCta,
    pageHeaderData,
    aboutSectionData,
    heroData,
    brandStripData,
    servicesSectionData,
    whyChooseUsData,
    processSectionData,
    portfolioSectionData,
    pricingSectionData,
    testimonialsSectionData,
    faqSectionData,
    finalCtaData,
    contactSectionData,
    footerLinks,
  } = graphicDesignLandingData;

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

  function renderActivePage() {
    if (activePage === "tentang") {
      return (
        <>
          <PageHeader data={pageHeaderData.tentang} />
          <AboutSection data={aboutSectionData} />
          <WhyChooseUs data={whyChooseUsData} />
          <FinalCTA data={finalCtaData} />
        </>
      );
    }

    if (activePage === "layanan") {
      return (
        <>
          <PageHeader data={pageHeaderData.layanan} />
          <ServicesSection data={servicesSectionData} />
          <ProcessSection data={processSectionData} />
          <PricingSection data={pricingSectionData} />
          <FAQSection data={faqSectionData} site={siteConfig} />
        </>
      );
    }

    if (activePage === "portfolio") {
      return (
        <>
          <PageHeader data={pageHeaderData.portfolio} />
          <PortfolioSection data={portfolioSectionData} />
          <TestimonialsSection data={testimonialsSectionData} />
          <FinalCTA data={finalCtaData} />
        </>
      );
    }

    if (activePage === "kontak") {
      return (
        <>
          <PageHeader data={pageHeaderData.kontak} />
          <ContactBriefSection data={contactSectionData} />
          <FAQSection data={faqSectionData} site={siteConfig} />
        </>
      );
    }

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

  return (
    <>
      <style>{themeCss}</style>
      <div className="landing">
        <div className="noise-overlay" />
        <Navbar
          links={navLinks}
          site={siteConfig}
          cta={navCta}
          templates={colorTemplateOptions}
          activeTemplate={activeTemplate}
          onTemplateChange={setActiveTemplate}
          activePage={activePage}
        />
        <main key={activePage} className="page-view">
          {renderActivePage()}
        </main>
        <Footer site={siteConfig} links={footerLinks} />
      </div>
    </>
  );
}
