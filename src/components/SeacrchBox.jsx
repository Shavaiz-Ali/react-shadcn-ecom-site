import { IoSearchOutline } from "react-icons/io5";

const SeacrchBox = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <input
        className="bg-white border-none outline-none text-xs text-gray-500 sm:w-[450px] w-[160px] py-3 px-2 rounded-l-[4px]"
        type="text"
        name="search"
        id="search"
        placeholder="Search product here..."
      />
      <div className="py-[10px] px-5 bg-[#febd69] cursor-pointer rounded-r-[4px]">
        <IoSearchOutline className="text-black text-[20px] text-[600]" />
      </div>
    </div>
  );
};

export default SeacrchBox;
