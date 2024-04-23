// components/index.js
import FeaturedCarousel from "./featuredCollection/FeaturedCarousel";
import Hero from "./hero/Hero";
import ProductsCarousel from "./productsSlider/ProductsCarousel";
import { TopProducts } from "./topProducts/TopProducts";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";

export const Home = () => {

  return (
    <>
      <Hero />
      <div className="sm:px-0 px-3 py-5 dark:bg-[#232f3e]  bg-[#f5f5f7]">
        <div className="sm:container">
          <WhyChooseUs />
          <ProductsCarousel />
          <FeaturedCarousel />
          <TopProducts/>
        </div>
      </div>
    </>
  );
};
