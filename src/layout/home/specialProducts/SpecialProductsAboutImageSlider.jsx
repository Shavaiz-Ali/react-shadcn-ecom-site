import { BsStarFill, BsStarHalf } from "react-icons/bs";
import CountdownTimer from "./Timer";
import PropTypes from 'prop-types';

const SpecialProductsAboutImageSlider = ({ slideAbout }) => {
  // Prop Type Definitions
  SpecialProductsAboutImageSlider.propTypes = {
    slideAbout: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      discountPrice: PropTypes.number.isRequired,
      discountEndTime: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="flex flex-col items-start gap-y-3 w-full">
      <h3 className="text-[14px] text-yellowish font-medium">
        {slideAbout.brand}
      </h3>
      <p className="text-[16px] font-medium">{slideAbout.title}</p>
      <div className="flex mb-3">
        {Array.from({ length: slideAbout.rating }).map((_, index) => (
          <div key={index} className="flex items-center gap-1">
            <BsStarFill className="text-yellowish" />
          </div>
        ))}
        {slideAbout.rating === 4.5 ? (
          <BsStarHalf className="text-yellowish" />
        ) : (
          <BsStarFill className="text-gray-400" />
        )}
      </div>
      <p className="text-red-600 font-medium">
        <span className="text-black line-through">${slideAbout.price}.00</span>
        ${slideAbout.discountPrice}.00
      </p>
      <CountdownTimer discountEndTime={slideAbout.discountEndTime} />

      <button className="px-6 py-2 rounded-full bg-[#232f3e] text-white hover:bg-yellowish duration-300">Option</button>
    </div>
  );
};

export default SpecialProductsAboutImageSlider;
