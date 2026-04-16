import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Insights />
      <Contact />
    </>
  );
}
