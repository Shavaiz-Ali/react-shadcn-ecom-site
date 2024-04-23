import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FeaturedCarouselData } from "@/constants/constants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsStarFill,BsStarHalf, BsEye , BsHeart} from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { HiMiniArrowPath } from "react-icons/hi2";
import {useState } from "react";
const FeaturedCarousel = () => {
  return (
    <div className="w-full flex flex-col items-start gap-y-4 mt-4">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-[1.4rem] text-foreground font-medium">
          Featured Collection
        </h3>
        <div className="flex gap-5">
          <FaAngleLeft className="cursor-pointer text-gray-400 text-[1.2rem] text-foreground" />
          <FaAngleRight className="cursor-pointer text-gray-400 text-[1.2rem] text-foreground" />
        </div>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {FeaturedCarouselData.map((item) => (
            <CarouselItem
              key={item.id}
              className=" pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xlg:basis-1/5"
            >
              <div className="p-1">
                <Card className="group overflow-hidden">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <CardHeader className="relative">
                    <img
                        className="cursor-pointer h-36 w-36 aspect-auto object-contain transition-all ease-in-out duration-500"
                        src={ item.productImg1}
                        alt="Default product image"
                        onMouseEnter={(e) => e.target.src = item.productImg2}
                        onMouseLeave={(e) => e.target.src = item.productImg1}
                        aria-label="Default product image"
                      />
                      <div className="absolute top-0 right-0 h-6 w-6 flex justify-center items-center rounded-full hover:bg-yellowish cursor-pointer  mb-3">
                        <BsHeart />
                      </div>
                      <div className="absolute right-[-100%] group-hover:right-[3.5px] top-[30p%] flex flex-col gap-3 items-center transition-all ease-in-out duration-300">
                        <HiMiniArrowPath className="mt-2" />   
                        <BsEye />
                        <IoLockClosedOutline />
                      </div>
                    </CardHeader>
                    <CardTitle className="self-start text-yellowish">
                      {item.brand}
                    </CardTitle>
                    <CardDescription className="my-3 self-start text-black text-card-foreground font-medium">
                      {item.title}
                    </CardDescription>
                    <CardFooter className="self-start items-baseline flex-col p-0">
                      <div className="flex mb-3">
                        {Array.from({ length: item.rating }).map((_, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <BsStarFill className="text-yellowish" />
                          </div>
                        ))}
                        {item.rating === 4.5  ?(
                          <BsStarHalf className="text-yellowish" />
                        ) :  <BsStarFill className="text-gray-400" />}
                      </div>
                      <h3 className="text-start">${item.price}</h3>
                    </CardFooter>
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

export default FeaturedCarousel;
