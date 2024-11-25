import AppPromotion from "./components/app-promotion/app-promotion";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="p-5 font-inter">
      <Faq />
      <AppPromotion />
      <Footer />
    </div>
  );
}
