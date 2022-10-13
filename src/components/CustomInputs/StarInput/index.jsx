import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";

const StarInput = ({ currentRating, callback }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((number, index) => (
        <span key={index}  onClick={() => callback(number)} role="listitem">
          {currentRating >= number ? (
            <MdStar size={21} fill="yellow" role="img"  />
          ) : (
            <MdStarOutline size={21} fill="yellow" role="img" />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarInput;
