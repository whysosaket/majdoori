import AppPromotion from "./components/app-promotion/app-promotion";
import CTA2 from "./components/cta-2/cta2";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import Reviews from "./components/reviews/reviews";

export default function Home() {
  return (
    <div className="p-5 font-inter">
      <Reviews />
      <CTA2 />
      <Faq />
      <AppPromotion />
      <Footer />
    </div>
  );
}
