import ProductsSlider from "@/components/ProductsSlider";
import Header from "@/components/SECTIONS/Header";
import HighlightsSection from "@/components/SECTIONS/HighlightsSection";
import MainBanner from "@/components/SECTIONS/MainBanner";
import XCrazyFastSection from "@/components/SECTIONS/XCrazyFastSection";

export default function Home() {
  return (
    <main className="">
      <Header />
      <MainBanner />
      <XCrazyFastSection />
      <HighlightsSection />
    </main>
  );
}
