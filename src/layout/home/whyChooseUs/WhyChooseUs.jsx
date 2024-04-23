    import { Card, CardContent } from "@/components/ui/card";
    import {
    Carousel,
    CarouselContent,
    CarouselItem,
    } from "@/components/ui/carousel";
    import { whyChooseUsData } from "@/constants/constants";
import { Link } from "react-router-dom";

    const WhyChooseUs = () => {
    return (
        <Carousel
        opts={{
            align: "center",
        }}
        className="w-full"
        >
            <CarouselContent>
                {whyChooseUsData.map((_) => (
                <CarouselItem key={_.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xlg:basis-1/5">
                    <div className="p-1">
                    <Card className="bg-transparent shadow-none border-0">
                        <CardContent className="group flex items-center justify-center p-6 ">
                            <Link to={"/"} className="flex justify-center items-center gap-4 hover:text-[#bf4800]">
                                <img className="group-hover:rotate-[360deg] transition-all ease-linear duration-200" src={_.logo} alt="logo" />
                                <div className="flex flex-col items-start gap-1">
                                <h3 className="text-center text-xs font-bold">
                                    {_.title}
                                </h3>
                                <p className="text-center text-xs ">{_.subTitle}</p>
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
    };

    export default WhyChooseUs;
