import React from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

const GetInTouch = () => {
  return (
    <div className="py-[60px] md:pt-[128px] md:pb-[137px] 3xl:pt-[128px] 3xl:pb-[137px] bg-enquiryForm">
      <div className="container">
        <div className="flex gap-[0] flex-col md:flex-row 3xl:flex-row md:gap-[50px]  3xl:gap-[154px]">
          {/* <div className="max-w-[335px] 3xl:max-w-[536px] w-full  pb-[45px]">
          <figure className="relative overflow-hidden bg-slate-100 pb-[70.34%]">
            <img src={Assets.getInTouch} alt="enquiry form img" className="absolute w-full h-full top-0 left-0 object-cover"/>
          </figure>
        </div> */}
          <div className="pb-[45px] md:pb-0 3xl:pb-0">
            <figure>
              <img src={Assets.getInTouch} alt="enquiryform img" />
            </figure>
          </div>
          <div className="md:flex-grow 3xl:flex-grow">
            <div className="text-16 block md:hidden leading-[19px] font-normal pb-[30px] font-worksans">
              Enquiry Now
            </div>
            <h5 className="text-40 md:text-h5 3xl:text-h5 md:pt-3 3xl:pt-3 font-silk leading-[50px] md:leading-[70px] 3xl:leading-[70px] pb-[35px] 3xl:pb-[60px] max-w-[260px] md:max-w-full 3xl:max-w-[395px]">
              GET IN TOUCH TODAY!
            </h5>
            <form action="">
              <div className="flex flex-col gap-0 md:gap-[30px] 3xl:gap-[30px] md:flex-row 3xl:flex-row">
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px] ">
                    {" "}
                    Name
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px]">
                    {" "}
                    Email
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col gap-0 md:gap-[30px] 3xl:gap-[30px] md:flex-row 3xl:flex-row">
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px] ">
                    {" "}
                    Mobile
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px]">
                    {" "}
                    Type of
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col gap-0 md:gap-[30px] 3xl:gap-[30px] md:flex-row 3xl:flex-row">
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px] ">
                    {" "}
                    Number of Guests
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px]">
                    {" "}
                    Estimated Budget
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col gap-0 md:gap-[30px] 3xl:gap-[30px] md:flex-row 3xl:flex-row">
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px] ">
                    {" "}
                    Date    
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
                <div className="mb-[35px] 3xl:mb-[46px] w-full">
                  <label htmlFor="" className="block text-16 leading-[18px]">
                    {" "}
                    Event Location
                  </label>
                  <input
                    type="text"
                    class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 p-[2px]"
                  />{" "}
                </div>
              </div>

              <div className="pb-[55px]">
                <label htmlFor="" className="block text-16 leading-[18px]">
                  {" "}
                  Tell us About Your Event
                </label>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  className="focus:outline-none bg-enquiryForm p-2 border-b border-formBorder w-full"
                ></textarea>
                {/* <input
                type="text"
                class="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-[75px] p-[2px]"
              />{" "} */}
              </div>
            </form>
            <Button classNames={''}>{"Submit"}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
