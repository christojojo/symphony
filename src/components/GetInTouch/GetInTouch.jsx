
import React from "react";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

// Sample data array
const formData = [
  { label: "Name", type: "text" },
  { label: "Email", type: "text" },
  { label: "Mobile", type: "text" },
  { label: "Type of", type: "text" },
  { label: "Number of Guests", type: "text" },
  { label: "Estimated Budget", type: "text" },
  { label: "Date", type: "text" },
  { label: "Event Location", type: "text" },
  { label: "Tell us About Your Event", type: "textarea" },
];

const GetInTouch = () => {
  return (
    <div className="py-[60px] md:pt-[128px] md:pb-[137px] 3xl:pt-[128px] 3xl:pb-[137px] bg-enquiryForm">
      <div className="container">
        <div className="flex gap-[0] flex-col lg:flex-row 3xl:flex-row md:gap-[50px] 3xl:gap-[154px]">
          <div className="max-w-[536px] lg:max-w-[450px] w-full mx-auto pb-[45px] md:pb-0 3xl:pb-0">
            <figure className="relative pb-[142.164%]">
              <img
                src={Assets.getintouch}
                alt="enquiryform-img"
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </figure>
          </div>
          <div className="md:flex-grow 3xl:flex-grow">
            <div className="text-16 block md:hidden leading-[19px] font-normal pb-[30px] font-worksans">
              Enquiry Now
            </div>
            <h5 className="font-Silk md:font-Cormorant text-40 md:text-h5 3xl:text-h5 md:pt-3 3xl:pt-3 leading-[50px] md:leading-[70px] 3xl:leading-[70px] pb-[35px] 3xl:pb-[60px] max-w-full md:max-w-full 3xl:max-w-[395px]">
              GET IN TOUCH TODAY!
            </h5>
            <form action="">
              <div className="flex flex-wrap mx-[-15px]">
                {formData.map((item, index) => (
                  <div className={`w-full md:w-1/2 px-[15px] mb-[35px] xl:mb-[46px] ${item.type === "textarea" && 'md:w-full'}`} key={index}>
                    <label className="block text-16 leading-[18px]">
                      {item.label}
                    </label>
                    {item.type === "textarea" ? (
                      <textarea rows={3}  className="focus:outline-none bg-enquiryForm border-b border-formBorder w-full "></textarea>
                    ) : (
                      <input
                        type={item.type}
                        className="focus:outline-none bg-enquiryForm border-b border-formBorder w-full h-5 "
                      />
                    )}
                  </div>
                ))}
              </div>
              <Button
                variant="secondary"
                classNames={
                  "py-[18px] px-[66px] h-[58px] bg-enquiryForm hover:bg-enquiryForm w-full md:w-auto"
                }
              >
                {"Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
