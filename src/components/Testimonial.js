import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) setIndex(reviews.length - 1);
    else setIndex(index - 1);
  }
  function rightShiftHandler() {
    if (index + 1 > reviews.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[185vw] md:w-[700px] bg-white flex flex-col justify-center items-center p-10 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review={reviews[index]} />
        <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
          <button
            onClick={leftShiftHandler}
            className="cursor-pointer:hover text-violet-500"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={rightShiftHandler}
            className="cursor-pointer:hover text-violet-500"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
