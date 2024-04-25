import { lazy, Suspense } from "react";

// components/index.js
const FeaturedCarousel = lazy(() => import("./featuredCollection/FeaturedCarousel"));
const Hero = lazy(() => import("./hero/Hero"));
const ProductsCarousel = lazy(() => import("./productsSlider/ProductsCarousel"));
const TopProducts = lazy(() => import("./topProducts/TopProducts"));
const WhyChooseUs = lazy(() => import("./whyChooseUs/WhyChooseUs"));
const SpecialProducts = lazy(() => import("./specialProducts/SpecialProducts"));

const LoadingPlaceholder = () => <div>Loading...</div>; // Customizable fallback UI

export const Home = () => {
  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <>
        <Hero />
        <div className="sm:px-0 px-3 py-5 dark:bg-[#232f3e]  bg-[#f5f5f7]">
          <div className="sm:container">
            <WhyChooseUs />
            <ProductsCarousel />
            <FeaturedCarousel />
            <TopProducts />
            <SpecialProducts />
          </div>
        </div>
      </>
    </Suspense>
  );
};
