import React from "react";

const BtnCustom = ({ className, text }) => {
  return (
    <button
      className={` text-lg font-DM rounded-full bg-white hover:bg-gradient-to-r from-[#FE651B] to-[#FFAA52] duration-500 hover:text-white hover:scale-110 ${className}`}
    >
      {text}
    </button>
  );
};

export default BtnCustom;
