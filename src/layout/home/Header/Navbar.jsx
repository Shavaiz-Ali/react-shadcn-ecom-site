import ThemeSwitcher from "@/components/themeSwitcher";
import { NavbarData } from "@/constants/constants";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SeacrchBox from "@/components/SeacrchBox";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="bg-[#232f3e] w-full py-2 sm:px-0 px-3 border-0">
      <div className="sm:container flex justify-between items-center w-full">
        <div className="lg:hidden">
          <SeacrchBox />
        </div>
        <div className="lg:flex hidden justify-center items-center gap-8">
          {NavbarData.map((item) => (
            <Link
              to={item.link}
              className={`text-white text-[14px] uppercase text-[600] font-medium font-sans ${
                item.dropdwown
                  ? "relative w-[18rem] after:w-[1px] after:opacity-20 after:h-full after:bg-white after:absolute after:top-0 after:right-0"
                  : ""
              }`}
              key={item.id}
            >
              {!item.dropdwown && item.title}
              {item.dropdwown && (
                <DropdownMenu className="relative w-full lg:flex hidden hover:bg-transparent">
                  <DropdownMenuTrigger asChild>
                    <Button
                      className=" text-[14px] uppercase text-[600] font-sans  gap-1 p-0 w-full flex justify-between"
                      variant="ghost"
                    >
                      <h3 className="flex justify-center items-center gap-2">
                        <span>
                          <svg
                            id="Capa_1"
                            height="20px"
                            width="20px"
                            fill="#ffffff"
                            className="icon icon-header-menu"
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M20.833,10C14.851,10,10,14.85,10,20.833c0,5.983,4.851,10.833,10.833,10.833c5.983,0,10.834-4.85,10.834-10.833
                            C31.667,14.85,26.816,10,20.833,10z M20.833,25c-2.298,0-4.166-1.869-4.166-4.167c0-2.298,1.868-4.167,4.166-4.167
                            c2.299,0,4.167,1.869,4.167,4.167C25,23.131,23.132,25,20.833,25z"
                            ></path>
                            <path
                              d="M79.167,31.667c5.979,0,10.833-4.85,10.833-10.833C90,14.85,85.146,10,79.167,10c-5.98,0-10.834,4.85-10.834,10.833
                              C68.333,26.816,73.187,31.667,79.167,31.667z M79.167,16.667c2.298,0,4.166,1.869,4.166,4.167c0,2.298-1.868,4.167-4.166,4.167
                              C76.868,25,75,23.131,75,20.833C75,18.535,76.868,16.667,79.167,16.667z"
                            ></path>
                            <path
                              d="M50,39.167c-5.983,0-10.833,4.851-10.833,10.833c0,5.983,4.85,10.833,10.833,10.833c5.979,0,10.833-4.85,10.833-10.833
                                C60.833,44.017,55.979,39.167,50,39.167z M50,54.167c-2.298,0-4.167-1.868-4.167-4.167c0-2.298,1.869-4.167,4.167-4.167
                                s4.167,1.868,4.167,4.167C54.167,52.299,52.298,54.167,50,54.167z"
                            ></path>
                            <path
                              d="M20.833,39.167C14.851,39.167,10,44.017,10,50c0,5.983,4.851,10.833,10.833,10.833c5.983,0,10.834-4.85,10.834-10.833
                                C31.667,44.017,26.816,39.167,20.833,39.167z M20.833,54.167c-2.298,0-4.166-1.868-4.166-4.167c0-2.298,1.868-4.167,4.166-4.167
                                C23.132,45.833,25,47.702,25,50C25,52.299,23.132,54.167,20.833,54.167z"
                            ></path>
                            <path
                              d="M50,68.333c-5.983,0-10.833,4.851-10.833,10.834C39.167,85.149,44.017,90,50,90c5.979,0,10.833-4.851,10.833-10.833
                                C60.833,73.184,55.979,68.333,50,68.333z M50,83.333c-2.298,0-4.167-1.868-4.167-4.166C45.833,76.868,47.702,75,50,75
                                s4.167,1.868,4.167,4.167C54.167,81.465,52.298,83.333,50,83.333z"
                            ></path>
                            <path
                              d="M50,10c-5.983,0-10.833,4.85-10.833,10.833c0,5.983,4.85,10.833,10.833,10.833c5.979,0,10.833-4.85,10.833-10.833
                                C60.833,14.85,55.979,10,50,10z M50,25c-2.298,0-4.167-1.869-4.167-4.167c0-2.298,1.869-4.167,4.167-4.167s4.167,1.869,4.167,4.167
                                C54.167,23.131,52.298,25,50,25z"
                            ></path>
                            <path
                              d="M79.167,39.167c-5.98,0-10.834,4.851-10.834,10.833c0,5.983,4.854,10.833,10.834,10.833C85.146,60.833,90,55.983,90,50
                                C90,44.017,85.146,39.167,79.167,39.167z M79.167,54.167C76.868,54.167,75,52.299,75,50c0-2.298,1.868-4.167,4.167-4.167
                                c2.298,0,4.166,1.868,4.166,4.167C83.333,52.299,81.465,54.167,79.167,54.167z"
                            ></path>
                          </svg>
                        </span>
                        {item.dropdwown && item.title}
                      </h3>
                      <span className="pr-2">
                        <FaAngleDown />{" "}
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[18rem] bg-[#131921] dark:bg-white rounded-t-none text-white dark:text-black border-none lg:flex flex-col hidden">
                    {item.dropdwown &&
                      item.dropdwownData.map((item, index) => {
                        return (
                          <DropdownMenuItem
                            className="bg-none focus:bg-transparent w-full h-12 border-b border-white/[0.12] dark:border-black/[0.12] rounded-none p-0"
                            key={index}
                          >
                            <Link
                              to={item.link}
                              onMouseEnter={() =>
                                item.popuUp && setRotate(true)
                              }
                              onMouseLeave={() =>
                                item.popuUp && setRotate(false)
                              }
                              className={`text-white hover:text-yellowish dark:text-black ${
                                item.popuUp &&
                                "flex justify-between items-center w-full "
                              }`}
                            >
                              {item.title}
                              {item.popuUp && (
                                <span className="text-sm text-white dark:text-black">
                                  <FaAngleRight
                                    className={`${
                                      rotate &&
                                      "rotate-[180deg] transition-all ease-linear duration-200"
                                    }`}
                                  />
                                </span>
                              )}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
