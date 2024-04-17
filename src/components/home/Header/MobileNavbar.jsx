import { NavbarData } from "@/constants/constants";
import { HiXMark } from "react-icons/hi2";
const MobileNavbar = ({ mobileNav, setMobileNav }) => {
  return (
    <div className={`fixed top-0  ${mobileNav ? "left-0" : "-left-full"} lg:hidden z-50 w-[350px] bg-[#131921] h-[100vh] flex flex-col items-start gap-4 px-2 py-4 transition-all duration-300 ease-in-out `}>
      <div className="absolute -right-7 top-0 ">
        <HiXMark
          onClick={() => setMobileNav(false)}
          className="h-8 w-8 cursor-pointer bg-[#232f3e] text-white"
        />
      </div>
      {NavbarData.map((item) => (
        <>
          <a
            href={"#"}
            className={`text-white w-full ${item.title === "Home" && "hidden"}`}
            key={item.id}
          >
                <p className={`text-white text-md`}>{!item.dropdwown && item.title}</p>
                <div className="flex flex-col justify-between items-start gap-y-4 w-full">
                  {item.dropdwown &&
                    item.dropdwownData.map((item) => (
                      <>
                        <p className="flex justify-between items-center w-full text-sm   text-white" key={item.id}>
                          {item.title}
                            {
                                item.popuUp && <span>+</span>
                            }
                        </p>
                      </>
                    ))}
                </div>
                  </a>
        </>
      ))}
    </div>
  );
};

export default MobileNavbar;
