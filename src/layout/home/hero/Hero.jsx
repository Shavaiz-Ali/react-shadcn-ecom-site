import { CarouselDemo } from "./Carousel";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

// imges 
import laptop from "@/assets/images/hero-images/grid-img-1.webp"
import ipad from "@/assets/images/hero-images/grid-img-2.webp"
import watch from "@/assets/images/hero-images/grid-img-3.webp"
import headphone from "@/assets/images/hero-images/grid-img-4.webp"
const Hero = () => {

  const gridData = [
    {
      id: 1,
      img:laptop,
      title: "Best Sale",
      productName: "Laptop Max",
      Price: "From $1699.00 or $64.62/mo.",
    },
    {
      id: 2,
      img:ipad,
      title: "New Arrival",
      productName: "Buy Ipad Air",
      Price: "From $599.00 or $49.91/mo.",
    },
    {
      id: 3,
      img:watch,
      title: "15% Off",
      productName: "Smartwatch 7",
      Price: "Shop the latest brand styles and color.",
    },
    {
      id: 4,
      img:headphone,
      title: "Free Engraving",
      productName: "AirPods Max",
      Price: "High-fidelity playback & ultra-low destortion.",
    },
  ];
  return (
    <div className="sm:container lg:flex justify-center items-center gap-4 w-full sm:px p-3">
      <CarouselDemo />
      <div className="xs:grid grid-cols-2 gap-4 w-full lg:mt-0 mt-4">
        {
            gridData.map((item) => (
              <Card key={item.id} className="p-0 xs:mt-0 mt-4 cursor-pointer overflow-hidden">
                <CardContent className="relative p-0">
                  <img src={item.img} alt={item.productName} className="w-full hover:scale-105 transition-all ease-in-out duration-300"/>
                  <div className="absolute top-[30px] left-[20px] flex flex-col items-start">
                    <p className="text-[16px] text-[600] text-[#bf4800]">{item.title}</p>
                    <p className="text-[1.5rem] text-[600] font-bold text-[#1c1b1b] ">{item.productName}</p>
                    <p className="text-[14px] text-[600] w-[150px] text-[#1c1b1b]">{item.Price}</p>
                  </div>
                </CardContent>
              </Card>
            ))
  
        }
      </div>
    </div>
  );
};

export default Hero;
