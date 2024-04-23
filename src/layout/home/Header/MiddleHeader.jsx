import { FaUserAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import SeacrchBox from "@/components/SeacrchBox";
import { Button } from "@/components/ui/button";
const MiddleHeader = ({setMobileNav}) => {
  return (
    <div className="sm:container flex justify-between items-center w-full py-4">
      <div className="flex justify-center items-center lg:gap-12 gap-2">
        <Button className="lg:hidden mb-2 text-white" variant="ghost" size="icon" onClick={() => setMobileNav(true)}>
          <FaBars size={30}/>
        </Button>
        <img
          className="sm:w-auto w-[70px]"
          src="https://demo-digitic.myshopify.com/cdn/shop/files/logo_103x.png?v=1654844836"
          alt="logo-digitic"
        />
        <div className="lg:flex hidden">
          <SeacrchBox />
        </div>
      </div>
      <div className="flex justify-center tems-center sm:gap-8 gap-4">
        <div className="flex justify-center items-center gap-2 cursor-pointer text-white">
          <FaUserAlt className="sm:text-[2rem] text-[1.2rem] text-[600] hover:rotate-[360deg] transition-all duration-300" />
          <p className="text-[16px] text-[600]">Login</p>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer text-white">
          <BsCart4 className="sm:text-[2rem] text-[1.2rem] text-[600] text-yellowish  hover:rotate-[360deg] transition-all duration-300" />
          <p className="text-[16px] text-[600] ">Cart</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
