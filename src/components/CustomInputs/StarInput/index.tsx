import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import { StyledStarInput } from "./style";

interface iStarInputProps{
  currentRating: number;
  callback: (number: number) => void;
}

const StarInput = ({ currentRating, callback }: iStarInputProps) => {
  return (
    <StyledStarInput>
      {[1, 2, 3, 4, 5].map((number, index) => (
        <span key={index}  onClick={() => callback(number)} role="listitem">
          {currentRating >= number ? (
            <MdStar size={21} fill="yellow" role="img"  />
          ) : (
            <MdStarOutline size={21} fill="yellow" role="img" />
          )}
        </span>
      ))}
    </StyledStarInput>
  );
};

export default StarInput;
