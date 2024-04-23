import { useState } from "react";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div className="flex flex-col justify items-center bg-[#131921] transition-all duration-300  sm:px-0 px-3">
        <div className="sm:container w-full">
          <div className="flex lg:justify-between justify-center items-center py-2 w-full  text-xs">
            <p className="text-xs lg:block hidden text-white">
              Free Shipping Over $100 & Free Returns
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="flex justify-center items-center gap-2">
                <p className="text-white">
                  <span className="sm:block hidden"></span>
                  Hotline:(888) 4344 6000-(888) 1338 8193
                </p>{" "}
                <span className="text-white">|</span>
                <p className="text-white">English</p>
              </div>
            </div>
          </div>
        </div>
        <MiddleHeader setMobileNav={setMobileNav} />
      </div>
        <Navbar />  
      {mobileNav && (
        <div
          className={`w-full h-full transition-all ease-in duration-300`}
        >
          <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
        </div>
      )}
    </>
  );
};

export default Header;
