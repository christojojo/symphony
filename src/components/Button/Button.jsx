import React, { Children } from "react";
import "../Button/Button.scss";

const Button = ({
  children,
  variant = "default",
  size,
  classNames,
  icon,
  ...props
}) => {
  return (
    <>
      <button
        className={`btn btn-${variant} ${size} flex justify-center items-center whitespace-nowrap
         border transition-all py-[15px] px-[30px] h-[52px] font-forum text-20 leading-[22px] ${
          classNames ?? ""
        }`}
        {...props}
      >
        {icon && (
          <img src={icon} alt="instaIcon" className="mr-2.5" />
          // <span className="mr-2.5 icon-wrap">{icon}</span>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
