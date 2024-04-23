import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { productsSlider } from "@/constants/constants";
import { Link } from "react-router-dom";

const ProductsCarousel = () => {
  return (
    <div className="bg-white dark:bg-[#020817] shadow-md rounded-md my-4 ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full ml-0"
      >
        <CarouselContent className="m-0">
          {productsSlider.map((item) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 xlg:basis-1/4"
              key={item.id}
            >
              <div className="py-6">
                <Card className="bg-transparent shadow-none border-0 p-0">
                  <CardContent className="flex aspect-auto items-center justify-center p-6 border-r border-b">
                    <Link className="flex justify-center items-center gap-4">
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-center text-xs font-bold truncate">
                          {item.productName}
                        </h3>
                        <p className="text-center text-sm">{item.stoke} items</p>
                      </div>
                      <div className="w-full">
                        <img
                          className="w-20 h-20 object-contain rounded-sm" // Use Tailwind classes for size and shape
                          src={item.productImage}
                          alt="product-image"
                        />
                      </div>
                    </Link>
                  </CardContent>
                  <CardContent className="flex aspect-auto items-center justify-center p-6 border-r">
                    <Link className="flex justify-center items-center gap-4">
                      <div className="flex flex-col items-start gap-2">
                        <h3 className="text-center text-xs font-bold truncate">
                          {item.productName}
                        </h3>
                        <p className="text-center text-sm">{item.stoke} items</p>
                      </div>
                      <div className="w-full">
                        <img
                          className="w-20 h-20 object-contain rounded-sm" // Use Tailwind classes for size and shape
                          src={item.productImage}
                          alt="product-image"
                        />
                      </div>
                    </Link>
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

export default ProductsCarousel;
