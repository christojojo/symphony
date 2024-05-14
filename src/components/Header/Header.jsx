import React, { useState } from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

function Header() {
  const navbarLi = [
    "Wedding Planning",
    "Event Planning",
    "Wedding Packages",
    "About Us",
    "Portfolio",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 z-50 w-full">
      <div className="max-w-[1639px] mx-auto py-[18px] px-[20px] h-[80px] hidden xl:flex justify-between items-center font-forum ">
        <div className="logo flex justify-left items-center">
          <a href="https://symphonyevents.com.au/">
            <figure>
              <img src={Assets.logo} alt="" />
            </figure>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-[20px] 2xl:gap-[40px] text-18 ">
            {navbarLi.map((item, index) => (
              <li key={index} className="flex items-center ">
                <a
                  href="#"
                  className="text-16 xl:text-18 hover:text-primary transition-all whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul className=" hidden 2xl:flex justify-center items-center gap-[40px] text-18 pl-[105px]">
            <li>
              <a href="#" className="hover:text-primaryHover transition-all">store</a>
            </li>
            <li>
              <a href="#" className="hover:text-primaryHover transition-all">
                <img src={Assets.userIcon} alt="icon" width={17} height={19}/>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primaryHover transition-all">
                <img src={Assets.storeIcon} alt="icon" />
              </a>
            </li>
          </ul>
          <div className="flex justify-end ml-[20px] 2xl:ml-[100px] 3xl:ml-[100px]">
            <Button
              children={"enquire now"}
              variant={"secondary"}
              classNames={"py-[11px] px-[32px] h-[45px] "}
            ></Button>
          </div>
        </div>
      </div>
      <div className="header-responsive xl:hidden">
        <div className="max-w-full px-[20px]">
          <div className="flex justify-between pt-[25px] pb-[15px]">
            <div className="logo flex justify-left items-center">
              <a href="https://symphonyevents.com.au/">
                <figure className="max-w-[141px]">
                  <img src={Assets.logo} alt="" />
                </figure>
              </a>
            </div>
            <div className="flex gap-[25px] items-center">
              <div>
                <a href="#">
                  <img src={Assets.userIcon} alt="icon" width={18} height={20}/>
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={Assets.storeIcon} alt="icon" width={18} height={20}/>
                </a>
              </div>
              <div>
                <button
                  className="flex justify-center items-center h-6 w-6"
                  onClick={toggleMenu}
                >
                  {isOpen ? (
                    <span className="material-symbols-outlined text-6 font-semibold">
                      close
                    </span>
                  ) : (
                    <img src={Assets.menuIcon} alt="icon" />
                  )}
                </button>
              </div>
            </div>
            <nav
              className={`fixed top-[66px] left-0 w-full h-full bg-white p-[35px] z-50 transition-all duration-500 ${
                isOpen ? "" : "translate-x-full"
              }`}
            >
              <ul>
                {navbarLi.map((item, index) => (
                  <li key={index} className="py-3">
                    <a
                      href="#"
                      className="text-[18px] hover:text-primary transition-all whitespace-nowrap"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  children={"Enquire Now"}
                  variant={"primary"}
                  classNames={"h-[49px] w-full"}
                ></Button>
              </div>             
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
