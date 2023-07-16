import ProductsSlider from "@/components/ProductsSlider";
import About from "@/components/SECTIONS/About";
import AdiClubInviteSection from "@/components/SECTIONS/AdiClubInviteSection";
import Footer from "@/components/SECTIONS/Footer";
import Header from "@/components/SECTIONS/Header";
import HighlightsSection from "@/components/SECTIONS/HighlightsSection";
import MainBanner from "@/components/SECTIONS/MainBanner";
import ProductsSection from "@/components/SECTIONS/ProductsSection";
import XCrazyFastSection from "@/components/SECTIONS/XCrazyFastSection";
import WishModal from "@/components/WishModal";

export default function Home() {
  return (
    <main className="">
      <Header />
      <MainBanner />
      <XCrazyFastSection />
      <HighlightsSection />
      <ProductsSection />
      <About />
      <AdiClubInviteSection />
      <Footer />
      <WishModal />
    </main>
  );
}
