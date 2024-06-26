
import React, { useState } from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";
import UserIcon from "../SvgIcons/UserIcon";
import BasketIcon from "../SvgIcons/BasketIcon";

function Header() {
  const navbarLi = [
    { title: "Wedding Planning", id: 1 },
    { title: "Event Planning", id: 2 },
    { title: "Wedding Packages", id: 3 },
    { title: "About Us", id: 4 },
    { title: "Portfolio", id: 5 }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white fixed top-0 left-0 z-[999] w-full shadow-md">
      <div className="max-w-[1639px] mx-auto py-[18px] px-[20px] h-[80px] hidden xl:flex justify-between items-center font-forum ">
        <div className="logo flex justify-left items-center">
          <a href="https://www.google.com/" title="logo">
            <figure>
              <img src={Assets.logo} alt="logo" />
            </figure>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-[20px] 2xl:gap-[40px] text-18 ">
            {navbarLi.map((item) => (
              <li key={item.id} className="flex items-center relative">
                <a
                  href="#"
                  title={item.title}
                  className="text-16 xl:text-18 transition-all ease-in-out duration-300 whitespace-nowrap pb-1
                   after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primaryHover after:transition-all after:ease-in-out after:duration-500 hover:after:w-full"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <ul className="hidden 2xl:flex justify-center items-center gap-[40px] text-18 pl-[105px]">
            <li className="relative pb-1">
              <a
                href="#"
                title="store"
                className="transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primaryHover after:transition-all after:ease-in-out after:duration-500 hover:after:w-full"
              >
                store
              </a>
            </li>
            <li>
              <a href="#" title="user" className="transition-all">
              <UserIcon classNames={'hover:text-primaryHover transition-all ease-in-out duration-300'}/>
              </a>
            </li>
            <li>
              <a href="#" title="basket" className="">
                <BasketIcon classNames={'text-white hover:text-primaryHover transition-all ease-in-out duration-300'}/>
              </a>
            </li>
          </ul>
          <div className="flex justify-end ml-[20px] 2xl:ml-[100px] 3xl:ml-[100px]">
            <Button
              children={"enquire now"}
              variant={"secondary"}
              classNames={"w-[175px] !h-[45px] "}
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
                  <img src={Assets.userIcon} alt="icon" width={18} height={20} />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={Assets.storeIcon} alt="icon" width={18} height={20} />
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
                {navbarLi.map((item) => (
                  <li key={item.id} className="py-3">
                    <a
                      href="#"
                      title={item.title}
                      className="text-[18px] hover:text-primary transition-all whitespace-nowrap"
                    >
                      {item.title}
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
