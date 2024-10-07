import About from "@/components/about";
import LandPage from "@/components/landpage";
import Products from "@/components/products";
import Services from "@/components/service";
import WhyChoose from "@/components/whychoose";
import Collections from "@/components/collection";
import Features from "@/components/features";
import Offer from "@/components/offer";
import Partneres from "@/components/partners";

export default function Home() {
  return (
    <main>
      <LandPage />
      <About />
      {/* <Offer /> */}
      {/* <WhyChoose /> */}
      <Features />
      <Services />
      <Products />
      {/* <Partneres /> */}
    </main>
  );
}
