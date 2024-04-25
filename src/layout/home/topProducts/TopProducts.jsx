import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TopProductsData } from "@/constants/constants";

export default function TopProducts() {

  return (
    <div className="my-8">
      <Carousel className="w-full">
        <CarouselContent>
          {TopProductsData.map((item) => (
            <CarouselItem key={item.id} className=" pl-1 sm:basis-1/2 lg:basis-1/3 xlg:basis-1/4">
              <div className="p-1">
                <Card className={`group overflow-hidden p-0`}>
                  <CardContent className={`relative flex flex-col aspect-square p-0 cursor-pointer dark:text-white ${item.id === 1 && "text-white"}`}>
                    <img
                      src={item.image_light_mode }
                      alt={item.title}
                      className="w-full dark:hidden hover:scale-110 duration-500"
                    />
                    <img
                      src={item.image_dark_mode }
                      alt={item.title}
                      className="w-full hidden dark:block hover:scale-110 duration-500"
                    />
                    <div className="absolute top-8 left-4">
                      <h3 className="uppercase text-[14px] font-medium">{item.category}</h3>
                      <h3 className="text-[1.5rem] font-medium ">{item.title}</h3>
                      <h3 className="text-[14px] dark:text-foreground mt-2">{item.description}</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
