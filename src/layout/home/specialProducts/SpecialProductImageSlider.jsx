import { useState } from "react";
import PropTypes from 'prop-types'; // Added for prop types

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { BsEye, BsHeart } from "react-icons/bs";
import { HiMiniArrowPath } from "react-icons/hi2";
import { IoLockClosedOutline } from "react-icons/io5";

const SpecialProductImageSlider = ({ slideImages }) => {
  // Prop Type Definitions
  SpecialProductImageSlider.propTypes = {
    slideImages: PropTypes.shape({
      light_activeSlide: PropTypes.string.isRequired,
      dark_activeSlide: PropTypes.string.isRequired,
      discountPercentage: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          light: PropTypes.string.isRequired,
          dark: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };

  const [lightActiveSlide, setLightActiveSlide] = useState(slideImages.light_activeSlide);
  const [darkActiveSlide, setDarkActiveSlide] = useState(slideImages.dark_activeSlide);

  return (
    <div className="group relative overflow-hidden flex flex-col items-center gap-y-4 w-full">
      <img className="cursor-pointer dark:hidden" src={lightActiveSlide} alt="" />
      <img className="cursor-pointer hidden dark:block" src={darkActiveSlide} alt="" />
      <div className="absolute top-0 flex justify-between items-center w-full mb-3">
        <div className="h-6 w-12 bg-yellowish flex justify-center items-center rounded-full text-black text-[12px] font-sans">-{slideImages.discountPercentage}%</div>
        <div className=" h-6 w-6 flex justify-center items-center rounded-full hover:bg-yellowish cursor-pointer ">
          <BsHeart />
        </div>
      </div>
      <div className="absolute right-[-100%] group-hover:right-[3.5px] top-[8%] flex flex-col gap-3 items-center transition-all ease-in-out duration-300">
        <HiMiniArrowPath className="mt-2" />
        <BsEye />
        <IoLockClosedOutline />
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-full max-w-sm"
      >
        <div className="absolute hidden group-hover:flex z-50 top-[50%] -translate-y-[50%]   justify-between items-center w-full">
          <FaAngleLeft className="cursor-pointer text-gray-400 text-[1.2rem] text-foreground" />
          <FaAngleRight className="cursor-pointer text-gray-400 text-[1.2rem] text-foregroun" />
          <CarouselPrevious className="bg-transparent border-0 shadow-none hover:bg-transparent " />
          <CarouselNext className="bg-transparent border-0 shadow-none hover:bg-transparent " />
        </div>
        <CarouselContent>
          {slideImages.images.map((image) => (
            <CarouselItem key={image.id} className="basis-1/2 px-3">
              <div className="">
                <Card className="p-0 w-full cursor-pointer shadow-none border-0">
                  <CardContent
                    className=" aspect-square flex justify-center items-center p-0 cursor-pointer border rounded"
                    // eslint-disable-next-line no-constant-condition
                  >
                    <img className="w-full dark:hidden" src={image.light} alt=""   onClick={() => setLightActiveSlide(image.light)} />
                    <img className="w-full hidden dark:block" src={image.dark} alt=""   onClick={() => setDarkActiveSlide(image.dark)}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SpecialProductImageSlider;
