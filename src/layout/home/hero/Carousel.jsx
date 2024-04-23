import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// images 
import slide_1 from "@/assets/images/hero-images/slide-1.webp"
import slide_2 from "@/assets/images/hero-images/slide-2.webp"
export function CarouselDemo() {
  const carouselData = [
    {
      id: 1,
      img: slide_1,
      title: "SUPERCHARGED FOR PROS.",
      subtitle: "Special Sale",
      discountDetail: "From $999.00 or $41.62/mo.for 24 mo. Footnote*",
    },
    {
      id: 2,
      img: slide_2,
      title: "SUPERCHARGED FOR PROS.",
      subtitle: "Special Sale",
      discountDetail: "From $999.00 or $41.62/mo.for 24 mo. Footnote*",
    },
  ];
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {carouselData.map((_) => (
          <CarouselItem key={_.id}>
            <Card className="w-full overflow-hidden">
              <CardContent className="relative flex items-center justify-center p-0">
                <img className="lg:w-auto w-full rounded-l-xl" src={_.img} alt="carousel-img-slide-1" />
                <div className="absolute xs:top-[50px] top-[35px] sm:left-[50px] left-[20px] flex flex-col items-start ">
                    <p className="text-[14px] text-[300] text-[#bf4800] font-sans">
                      {_.title}
                    </p>
                    <p className="sm:text-[3.2rem] xs:text-[2rem] text-[1.3rem] text-[600] text-[#1c1b1b] font-bold">
                      {_.subtitle}
                    </p>
                    <p className="xs:text-[16px] text-[14px] xs:text-[600] font-normal text-[#1c1b1b] font-sans w-[300px] mt-3">
                      {_.discountDetail}
                    </p>
                    <Button variant="default" className="h-12 w-32 rounded-full xs:mt-8 mt-4">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-[40px] left-[50%] -translate-x-[50%]">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
