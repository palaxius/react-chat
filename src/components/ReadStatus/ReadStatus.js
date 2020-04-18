import React from "react";
import checkSvg from "../../assets/check.svg";
import notCheckSvg from "../../assets/notCheck.svg";

const ReadStatus = ({ isMe, isReaded }) => {
  return (
    isMe &&
    (isReaded ? (
      <img
        className="message__icon-readed"
        src={checkSvg}
        alt="Message checked"
      />
    ) : (
      <img
        className="message__icon-readed"
        src={notCheckSvg}
        alt="Message didnt checked"
      />
    ))
  );
};

export default ReadStatus;
