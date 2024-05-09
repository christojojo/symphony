import React from "react";
import Assets from "../../common/Assets";
import Button  from "../Button/Button";

function Header() {
  const navbarLi = [
    "Wedding Planning",
    "Event Planning",
    "Wedding Packages",
    "About Us",
    "Portfolio",
  ];

  return (
    <header className="bg-white fixed top-0 left-0 z-50 w-full">
      <div className="max-w-[1639px] mx-auto py-[18px] h-[80px] flex justify-between items-center font-forum">
        <div className="logo flex justify-left items-center">
          <a href="https://symphonyevents.com.au/">
          <figure>
            <img src={Assets.logo} alt="" />
          </figure>
          </a>
        </div>
        <div className="flex justify-center items-center">
        <ul className="flex gap-[40px] text-18">
          {navbarLi.map((item, index) => (
            <li key={index} className="flex items-center ">
                <a href="" className="text-[18px] hover:text-primary transition-all">{item}</a>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center items-center gap-[40px] text-18 pl-[105px]">
            <li><a href="#" >store</a></li>
            <li><a href="#"><img src={Assets.userIcon} alt="icon" /></a></li>
            <li><a href="#"><img src={Assets.storeIcon} alt="icon" /></a></li>
        </ul>
        <div className="flex justify-end ml-[100px]">
        <Button children={'enquire now'} variant={'secondary'} classNames={'py-[11px] px-[32px] h-[45px]'}></Button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;


