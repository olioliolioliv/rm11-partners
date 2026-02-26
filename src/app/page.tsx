import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Tiers from "@/components/sections/Tiers";
import WhyRM11 from "@/components/sections/WhyRM11";
import WhatYouGet from "@/components/sections/WhatYouGet";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ApplicationForm from "@/components/sections/ApplicationForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Tiers />
        <WhyRM11 />
        <WhatYouGet />
        <FAQ />
        <FinalCTA />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
