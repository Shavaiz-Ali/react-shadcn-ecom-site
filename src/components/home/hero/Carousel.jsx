import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const carouselData = [
    {
      id: 1,
      img: "https://demo-digitic.myshopify.com/cdn/shop/files/main-banner-2_830x550.jpg?v=1655455867;",
      title: "SUPERCHARGED FOR PROS.",
      subtitle: "Special Sale",
      discountDetail: "From $999.00 or $41.62/mo.for 24 mo. Footnote*",
    },
    {
      id: 1,
      img: "https://demo-digitic.myshopify.com/cdn/shop/files/main-banner-1_830x550.jpg?v=1655701492;",
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
            <Card className="relative overflow-hidden">
              <CardContent className="reltive flex items-center justify-center p-0">
                <img className="" src={_.img} alt="carousel-img-slide-1" />
                <div className="absolute top-[50px] sm:left-[50px] left-[20px] flex flex-col items-start ">
                    <p className="text-[14px] text-[300] text-[#bf4800] font-sans">
                      {_.title}
                    </p>
                    <p className="sm:text-[3.2rem] text-[2rem] text-[600] text-[#1c1b1b] font-bold">
                      {_.subtitle}
                    </p>
                    <p className="text-[16px] text-[600] text-[#1c1b1b] font-sans w-[300px] mt-3">
                      {_.discountDetail}
                    </p>
                    <Button variant="default" className="h-12 w-32 rounded-full mt-8">Buy Now</Button>
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
