import React from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

function Footer() {
  const footerData = [
    {
      title: "Useful Links",
      navigations: [
        { title: "About Us", link: "useful-links/About-Us" },
        { title: "Our Works", link: "useful-links/Our-Works" },
        { title: "Gallery", link: "useful-links/Gallery" },
        { title: "Portfolio", link: "useful-links/Portfolio" },
        { title: "Store", link: "useful-links/Store" },
        { title: "Careers", link: "useful-links/Careers" },
        { title: "Contact", link: "useful-links/Contact" },
      ],
    },
    {
      title: "Wedding Planning",
      navigations: [
        { title: "Wedding Venues", link: "wedding-planning/Wedding-Venues" },
        {
          title: "Wedding Decorations",
          link: "wedding-planning/Wedding-Decorations",
        },
        {
          title: "Beach Wedding Planning",
          link: "wedding-planning/Beach-Wedding-Planning",
        },
        {
          title: "Wedding Florist Sydney",
          link: "wedding-planning/Wedding-Florist-Sydney",
        },
        { title: "Indian Wedding", link: "wedding-planning/Indian-Wedding" },
        {
          title: "Indian Beach Wedding",
          link: "wedding-planning/Indian-Beach-Wedding",
        },
        {
          title: "Wedding Planning",
          link: "wedding-planning/Wedding-Planning",
        },
      ],
    },
    {
      title: "Event planning",
      navigations: [
        {
          title: "Corporate Event Styling",
          link: "Event-planning/Corporate-Event-Styling",
        },
        {
          title: "Birthday Decorations",
          link: "Event-planning/Birthday Decorations",
        },
        { title: "Puja Decorations", link: "Event-planning/Puja Decorations" },
        { title: "Holy Communion", link: "Event-planning/Holy-Communion" },
        { title: "House Warming", link: "Event-planning/House Warming" },
        { title: "Holy Communion", link: "Event-planning/Holy Communion" },
      ],
    },
    {
      title: "Event Decor",
      navigations: [
        {
          title: "Corporate Event Styling",
          link: "Event-Decor/Corporate Event Styling",
        },
        {
          title: "Birthday Decorations",
          link: "Event-planning/Birthday Decorations",
        },
        { title: "Puja Decorations", link: "Event-planning/Puja Decorations" },
        { title: "Holy Communion", link: "Event-planning/Holy-Communion" },
        { title: "House Warming", link: "Event-planning/House Warming" },
        { title: "Holy Communion", link: "Event-planning/Holy Communion" },
      ],
    },
  ];

  const usefulLinks = Object.values(footerData).filter(
    (section) => section.title === "Useful Links"
  );
  const WeddingPlanning = Object.values(footerData).filter(
    (section) => section.title === "Wedding planning"
  );
  const EventPlanning = Object.values(footerData).filter(
    (section) => section.title === "Event planning"
  );
  const EventDecor = Object.values(footerData).filter(
    (section) => section.title === "Event Decor"
  );

  return (
    <div className="footer bg-black">
      <div className="container">
        <div className="py-[80px] md:pt-[108px] 3xl:pt-[108px] pb-[80px] md:pb-[149px] 3xl:pb-[149px] text-white">
          <div className="flex flex-col gap-[30px] md:gap-0 3xl:gap-0  3xl:flex-row justify-between items-center pb-[60px] md:pb-[110px] 3xl:pb-[110px]">
            <div className="text-40 3xl:text-60 leading-[50px] md:leading-[70px] 3xl:leading-[70px] font-Cormorant">
              GET STARTED NOW!
            </div>
            <div className="flex flex-col">
              <div className="">
                <a
                  href="tel:+61 410 201 111"
                  className="block text-26 md:text-26 3xl:text-40 pb-[10px] leading-[26px] md:leading-[38px] 3xl:leading-[38px]"
                >
                  +61 410 201 111
                </a>
              </div>
              <div>
                <a
                  href="https://symphonyevents.com.au/"
                  className="block text-26 md:text-26 3xl:text-40 leading-[26px] md:leading-[38px] 3xl:leading-[38px]"
                  target="_blank"
                >
                  info@symphonyevents.com.au
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col 3xl:flex-row pb-4 md:pb-20">
            <div className="flex-1">
              {Object.values(footerData).map((section, index) => {
                if (section.title === "Useful Links") {
                  return (
                    <div key={index}>
                      <div className="text-[25px] leading-[22px] pb-[30px]">
                        {section.title}
                      </div>
                      <ul>
                        {section.navigations.map((nav, idx) => (
                          <li key={idx} className="pb-[20px]">
                            <a
                              href={nav.link}
                              className="text-18 leading-[22px] opacity-70 hover:opacity-100 transition-all"
                            >
                              {nav.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null; 
              })}
            </div>
            <div className="flex-1">
              {Object.values(footerData).map((section, index) => {
                if (section.title === "Wedding Planning") {
                  return (
                    <div key={index}>
                      <div className="text-[25px] leading-[22px] pb-[30px]">
                        {section.title}
                      </div>
                      <ul>
                        {section.navigations.map((nav, idx) => (
                          <li key={idx} className="pb-[20px]">
                            <a
                              href={nav.link}
                              className="text-18 leading-[22px] opacity-70 hover:opacity-100 transition-all"
                            >
                              {nav.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null; 
              })}
            </div>
            <div className="flex-1">
              {Object.values(footerData).map((section, index) => {
                if (section.title === "Event planning") {
                  return (
                    <div key={index}>
                      <div className="text-[25px] leading-[22px] pb-[30px]">
                        {section.title}
                      </div>
                      <ul>
                        {section.navigations.map((nav, idx) => (
                          <li key={idx} className="pb-[20px]">
                            <a
                              href={nav.link}
                              className="text-18 leading-[22px] opacity-70 hover:opacity-100 transition-all"
                            >
                              {nav.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="flex-1">
              {Object.values(footerData).map((section, index) => {
                if (section.title === "Event Decor") {
                  return (
                    <div key={index}>
                      <div className="text-[25px] leading-[22px] pb-[30px]">
                        {section.title}
                      </div>
                      <ul>
                        {section.navigations.map((nav, idx) => (
                          <li key={idx} className="pb-[20px]">
                            <a
                              href={nav.link}
                              className="text-18 leading-[22px] opacity-70 hover:opacity-100 transition-all"
                            >
                              {nav.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row 3xl:flex-row gap-[20px] pb-[40px] md:pb-[75px]">
            <span className="block pr-[32px] text-20 leading-[22px]">
              Follow us
            </span>
            <ul className="flex gap-[50px]">
              <li>
                <a href="#" target="_blank" className="hover:opacity-50 transition-all">
                  <img src={Assets.instagram} alt="insta-icon" height={20.8} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:opacity-50 transition-all">
                  <img src={Assets.facebook} alt="fb" height={20.8}/>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:opacity-50 transition-all">
                  <img src={Assets.pintrest} alt="pintrest" height={20.8}/>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" className="hover:opacity-50 transition-all">
                  <img src={Assets.youtube} alt="youtube" height={20.8}/>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row 3xl:flex-row gap-[30px] md:gap-0 justify-between">
            <div className="flex flex-col md:flex-row  gap-[30px]">
              <span className="text-18 leading-[22px] text-[#707070] font-normal">Copyright © 2024 Symphony Events. All Rights Reserved</span>
              <a href="#" className="pl-0 md:pl-[20px] text-18 leading-[22px] text-[#707070] font-normal hover:text-white transition-all">privacy policy</a>
            </div>
            <div>
              <span className="text-18 leading-[22px] text-[#707070] font-normal">
                Designed by: <a href="https://webandcrafts.com/" className="text-18 leading-[22px] text-[#707070] font-normal hover:text-white transition-all">Webandcrafts</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
