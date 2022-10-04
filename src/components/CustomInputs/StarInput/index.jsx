import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";

const StarInput = ({ currentRating, callback }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((number) => (
        <span onClick={() => callback(number)}>
          {currentRating >= number ? (
            <MdStar size={21} fill="yellow" />
          ) : (
            <MdStarOutline size={21} fill="yellow" />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarInput;
