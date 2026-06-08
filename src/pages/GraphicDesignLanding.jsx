import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useTheme } from "../context/ThemeContext";
import { graphicDesignLandingData } from "../data/graphicDesignLandingData";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";
import ServicesPage from "./ServicesPage";

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
  const { activeTemplate, setActiveTemplate, templates, themeCss } = useTheme();

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

  function renderActivePage() {
    if (activePage === "tentang") {
      return (
        <AboutPage
          pageHeaderData={pageHeaderData.tentang}
          aboutSectionData={aboutSectionData}
          whyChooseUsData={whyChooseUsData}
          finalCtaData={finalCtaData}
        />
      );
    }

    if (activePage === "layanan") {
      return (
        <ServicesPage
          siteConfig={siteConfig}
          pageHeaderData={pageHeaderData.layanan}
          servicesSectionData={servicesSectionData}
          processSectionData={processSectionData}
          pricingSectionData={pricingSectionData}
          faqSectionData={faqSectionData}
        />
      );
    }

    if (activePage === "portfolio") {
      return (
        <PortfolioPage
          pageHeaderData={pageHeaderData.portfolio}
          portfolioSectionData={portfolioSectionData}
          testimonialsSectionData={testimonialsSectionData}
          finalCtaData={finalCtaData}
        />
      );
    }

    if (activePage === "kontak") {
      return (
        <ContactPage
          siteConfig={siteConfig}
          pageHeaderData={pageHeaderData.kontak}
          contactSectionData={contactSectionData}
          faqSectionData={faqSectionData}
        />
      );
    }

    return (
      <HomePage
        heroData={heroData}
        brandStripData={brandStripData}
        servicesSectionData={servicesSectionData}
        whyChooseUsData={whyChooseUsData}
        portfolioSectionData={portfolioSectionData}
        finalCtaData={finalCtaData}
      />
    );
  }

  return (
    <>
      <style>{themeCss}</style>
      <div className="landing">
        <div className="noise-overlay" />
        <Header
          links={navLinks}
          site={siteConfig}
          cta={navCta}
          templates={templates}
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
