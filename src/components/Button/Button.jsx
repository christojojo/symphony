import React, { Children } from "react";
import "../Button/Button.scss";

const Button = ({ children, variant='default', size, classNames, ...props }) => {
  return (
    <>
      <button
        className={`btn btn-${variant} ${size} flex justify-center items-center border transition-all py-[15px] px-[30px] h-[52px] font-forum text-20 leading-[22px] ${
          classNames ?? ""
        }`}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
