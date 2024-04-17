import { CarouselDemo } from "./Carousel";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
const Hero = () => {

  const gridData = [
    {
      id: 1,
      img:"https://demo-digitic.myshopify.com/cdn/shop/files/catbanner-01.jpg?v=1655701506",
      title: "Best Sale",
      productName: "Laptop Max",
      Price: "From $1699.00 or $64.62/mo.",
    },
    {
      id: 2,
      img:"https://demo-digitic.myshopify.com/cdn/shop/files/catbanner-03.jpg?v=1654859212",
      title: "New Arrival",
      productName: "Buy Ipad Air",
      Price: "From $599.00 or $49.91/mo.",
    },
    {
      id: 3,
      img:"https://demo-digitic.myshopify.com/cdn/shop/files/catbanner-02.jpg?v=1654859195",
      title: "15% Off",
      productName: "Smartwatch 7",
      Price: "Shop the latest brand styles and color.",
    },
    {
      id: 4,
      img:"https://demo-digitic.myshopify.com/cdn/shop/files/catbanner-04.jpg?v=1654859228",
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
