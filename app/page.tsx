import AppPromotion from "./components/app-promotion/app-promotion";
import BabyFoodCollection from "./components/baby-food-collection/baby-food-collection";
import CTA2 from "./components/cta-2/cta2";
import Faq from "./components/faq/faq";
import FoodCTA from "./components/food-cta/food-cta";
import Footer from "./components/footer/footer";
import Reviews from "./components/reviews/reviews";

export default function Home() {
  return (
    <div className="p-5 font-inter">
      <BabyFoodCollection />
      <FoodCTA />
      <Reviews />
      <CTA2 />
      <Faq />
      <AppPromotion />
      <Footer />
    </div>
  );
}
