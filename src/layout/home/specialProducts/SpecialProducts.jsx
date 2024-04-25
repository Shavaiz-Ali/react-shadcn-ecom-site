import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { specialProductsData } from "@/constants/specialProductsData";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SpecialProductImageSlider from "./SpecialProductImageSlider";
import SpecialProductsAboutImageSlider from "./SpecialProductsAboutImageSlider";

const SpecialProducts = () => {
  return (
    <div className="flex flex-col items-start gap-y-6  w-full">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-[1.4rem] text-foreground font-medium">
          Special Products
        </h3>
        <div className="flex gap-5">
          <FaAngleLeft className="cursor-pointer text-gray-400 text-[1.2rem] text-foreground" />
          <FaAngleRight className="cursor-pointer text-gray-400 text-[1.2rem] text-foreground" />
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full ml-0"
      >
        <CarouselContent className="m-0 w-full">
          {specialProductsData.map((item) => (
            <CarouselItem
              className="md:basis-1/2 xlg:basis-1/3 w-full"
              key={item.id}
            >
              <div className="p-2 flex">
                <Card className="w-full space-y-5 border-0 bg-transparent shadow-none">
                  <CardContent className="flex md:flex-row flex-col aspect-auto items-center justify-center p-6 gap-x-3 w-full rounded-xl border bg-card text-card-foreground shadow">
                    <SpecialProductImageSlider slideImages={item.slider_1} />
                    <SpecialProductsAboutImageSlider
                      slideAbout={item.aboutSlide_1}
                    />
                  </CardContent>
                  <CardContent className="flex md:flex-row flex-col aspect-auto items-center justify-center p-6 gap-x-3 w-full rounded-xl border bg-card text-card-foreground shadow ml-0">
                    <SpecialProductImageSlider slideImages={item.slider_2} />
                    <SpecialProductsAboutImageSlider
                      slideAbout={item.aboutSlide_2}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-8 right-0 flex justify-center items-center gap-4">
          <CarouselPrevious className="static bg-transparent  hover:bg-transparent h-5 w-5 border-none" />
          <CarouselNext className="static bg-transparent hover:bg-transparent h-5 w-5 border-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default SpecialProducts;
