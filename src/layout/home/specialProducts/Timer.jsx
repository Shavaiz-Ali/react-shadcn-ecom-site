import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CountdownTimer = ({ discountEndTime }) => {

  CountdownTimer.propTypes = {
    discountEndTime: PropTypes.number.isRequired, // DiscountEndTime should be a string (date/time format)
  };

  const calculateTimeRemaining = () => {
    const currentTime = new Date().getTime();
    const timeDiff = discountEndTime - currentTime;

    if (timeDiff <= 0) {
      return null; // Discount has ended
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const remainingTime = calculateTimeRemaining();
      setTimeRemaining(remainingTime);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [discountEndTime]);
  

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex justify-center items-center gap-2 text-4xl font-bold text-black sm:text-2xl">
        {timeRemaining ? (
          <>
            <div className="text-[14px] text-gray-400 font-normal flex">{timeRemaining.days} days</div>
            <div className="bg-red-600 text-white h-6 w-6 text-[14px] font-medium flex justify-center items-center rounded-full">{timeRemaining.hours}</div>
            <span className="text-[14px]">:</span>
            <div className="bg-red-600 text-white h-6 w-6 text-[14px] font-medium flex justify-center items-center rounded-full">{timeRemaining.minutes}</div>
            <span className="text-[14px]">:</span>
            <div className="bg-red-600 text-white h-6 w-6 text-[14px] font-medium flex justify-center items-center rounded-full">{timeRemaining.seconds}</div>
          </>
        ) : (
          "Discount has ended!"
        )}
      </h1>
    </div>
  );
};

export default CountdownTimer;
