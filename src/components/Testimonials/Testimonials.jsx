import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import "swiper/css/pagination";
import Assets from "../../common/Assets";
import Button from "../Button/Button";

const testimonialsResponsiveData = [
  {
    title: "“Wow! Elegance wedding & customer service”",
    text: "Jack and his team were absolute professionals who really spent a lot of time in understanding the client’s needs and then work hard in making it a reality. Our function’s decorations, both at home…",
    author: "Brenna & Fadell Wedding",
    location: "Sydney - Australia",
    images: [Assets.testiImg1, Assets.testiImg2, Assets.testiImg3, Assets.testiImg2]
  },
  {
    title: "“Wow! Elegance wedding & customer service”",
    text: "Jack and his team were absolute professionals who really spent a lot of time in understanding the client’s needs and then work hard in making it a reality. Our function’s decorations, both at home…",
    author: "Brenna & Fadell Wedding",
    location: "Sydney - Australia",
    images: [Assets.testiImg1, Assets.testiImg2, Assets.testiImg3, Assets.testiImg2]
  },
  // Add more testimonials as needed
];


const Testimonials = () => {
  
  return (
    <>
    <div className="bg-grey py-[150px] font-Cormorant hidden sm:block">
      <div className="container">
        <div className="pb-[80px]">
          <h5 className="text-h5 leading-[69px] text-center">TESTIMONIALS</h5>
        </div>
        <div className="flex">
          <div className="w-[41%] pr-[77.5px]">
            <div className="swiper-container ">
              <Swiper className="testimonial-swiper-1">
                <SwiperSlide>
                  <div className="max-w-[536px]">
                    <figure className="relative pb-[122.94%]">
                      <img
                        src={Assets.testimonials}
                        alt="testimonialsImg"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[536px]">
                    <figure className="relative pb-[122.94%]">
                      <img
                        src={Assets.testimonials}
                        alt="testimonialsImg"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="max-w-[536px]">
                    <figure className="relative pb-[122.94%]">
                      <img
                        src={Assets.testimonials}
                        alt="testimonialsImg"
                        className="absolute top-0 left-0 w-full h-full object-contain"
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-[59%] pl-[77.5px] ">
            <div className="swiper-container">
              <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="testimonial-swiper-2 pb-[124px]"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide>
                  <div className="pt-[46px]">
                    <div className="pb-[35px]">
                      <figure>
                        <img src={Assets.quotesImg} alt="quotesimg" />
                      </figure>
                    </div>
                    <p className=" text-40 font-light leading-[50px] max-w-[673px] pb-[55px]">
                      Symphony Events were absolutely our the incredible right
                      through the process from our first meeting to execution…
                    </p>
                    <div className="">
                      <h6 className="text-25 font-semibold leading-[30px]">
                        Ana John & Juan Luis
                      </h6>
                      <span className="block text-20 leading-[30px]">
                        Sydney - Australia
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="pt-[46px]">
                    <div className="pb-[35px]">
                      <figure>
                        <img src={Assets.quotesImg} alt="" />
                      </figure>
                    </div>
                    <p className=" text-40 font-light leading-[50px] max-w-[673px] pb-[55px]">
                      Symphony Events were absolutely our the incredible right
                      through the process from our first meeting to execution…
                    </p>
                    <div className="">
                      <h6 className="text-25 font-semibold leading-[30px]">
                        Ana John & Juan Luis
                      </h6>
                      <span className="block text-20 leading-[30px]">
                        Sydney - Australia
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="pt-[46px]">
                    <div className="pb-[35px]">
                      <figure>
                        <img src={Assets.quotesImg} alt="" />
                      </figure>
                    </div>
                    <p className=" text-40 font-light leading-[50px] max-w-[673px] pb-[55px]">
                      Symphony Events were absolutely our the incredible right
                      through the process from our first meeting to execution…
                    </p>
                    <div className="">
                      <h6 className="text-25 font-semibold leading-[30px]">
                        Ana John & Juan Luis
                      </h6>
                      <span className="block text-20 leading-[30px]">
                        Sydney - Australia
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <Button variant="secondary" classNames={"bg-grey "}>
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="block sm:hidden bg-grey font-forum">
      <div className="container">
        <div className="py-[60px]">
          <div className="font-forum text-16 leading-[18px] pb-[40px]">TESTIMONIALS</div>          
          {/* <div>
          <Swiper
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
          <h5 className="text-35 font-Silk font-light leading-[43px] pb-[17px]">“Wow! Elegance wedding & customer service”</h5>
            <p className="text-18 leading-[30px] pb-[33px]">Jack and his team were absolute professionals who really spent a lot of time in understanding the client’s needs and then work hard in making it a reality. Our function’s decorations, both at home…</p>
            <div className="text-23 leading-[33px] pb-[50px]">
            Brenna & Fadell Wedding 
            <span className="block text-20 leading-[33px]">Sydney - Australia</span>
            </div>
            <div className="flex flex-col gap-[11px]">
              <div className="flex-grow">
                <div className="max-w-[334px]">
                <figure className="relative pb-[74.25%]">
                  <img src={Assets.testiImg1} alt="img" className="absolute top-0 left-0 object-contain" />
                </figure>
                </div>
                
              </div>
              <div className="flex gap-[9px]">
                <div className="w-full">
                <div className="max-w-[105px] w-full">
                  <figure className="relative pb-[99.61%]">
                    <img src={Assets.testiImg2} alt="img" className="absolute top-0 left-0 object-contain"/>
                  </figure>
                </div>
                </div>
                
                <div className="w-full">
                <div className="max-w-[105px] w-full">
                  <figure className="relative pb-[99.61%]">
                    <img src={Assets.testiImg3} alt="img" className="absolute top-0 left-0 object-contain"/>
                  </figure>
                </div>
                </div>
               
                <div className="w-full">
                <div className="max-w-[105px] w-full">
                  <figure className="relative pb-[99.61%]">
                    <img src={Assets.testiImg2} alt="img" className="absolute top-0 left-0 object-contain"/>
                  </figure>
                </div>
                </div>
                
              </div>
            </div>
           
          </div>
        </SwiperSlide>    
        <SwiperSlide>
        <div>
          <h5 className="text-35 font-Silk font-light leading-[43px] pb-[17px]">“Wow! Elegance wedding & customer service”</h5>
            <p className="text-18 leading-[30px] pb-[33px]">Jack and his team were absolute professionals who really spent a lot of time in understanding the client’s needs and then work hard in making it a reality. Our function’s decorations, both at home…</p>
            <div className="text-23 leading-[33px] pb-[50px]">
            Brenna & Fadell Wedding 
            <span className="block text-20 leading-[33px]">Sydney - Australia</span>
            </div>
            <div className="flex flex-col gap-[11px]">
              <div className="flex-grow">
                <div className="max-w-[334px]">
                <figure className="relative pb-[74.25%]">
                  <img src={Assets.testiImg1} alt="img" className="absolute top-0 left-0 object-contain" />
                </figure>
                </div>
                
              </div>
              <div className="flex gap-[9px]">
                <div className="w-full">
                <div className="max-w-[105px] w-full">
                  <figure className="relative pb-[99.61%]">
                    <img src={Assets.testiImg2} alt="img" className="absolute top-0 left-0 object-contain"/>
                  </figure>
                </div>
                </div>
                
                <div className="w-full">
                <div className="max-w-[105px] w-full">
                  <figure className="relative pb-[99.61%]">
                    <img src={Assets.testiImg3} alt="img" className="absolute top-0 left-0 object-contain"/>
                  </figure>
                </div>
                </div>
               
                <div className="w-full">
                <div className="max-w-[105px] w-full">
                  <figure className="relative pb-[99.61%]">
                    <img src={Assets.testiImg2} alt="img" className="absolute top-0 left-0 object-contain"/>
                  </figure>
                </div>
                </div>
                
              </div>
            </div>
           
          </div>
        </SwiperSlide>    
    
      </Swiper>
          </div> */}
          <Swiper
      pagination={{ type: 'fraction' }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {testimonialsResponsiveData.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div>
            <h5 className="text-35 font-Silk font-light leading-[43px] pb-[17px]">{testimonial.title}</h5>
            <p className="text-18 leading-[30px] pb-[33px]">{testimonial.text}</p>
            <div className="text-23 leading-[33px] pb-[50px]">
              {testimonial.author}
              <span className="block text-20 leading-[33px]">{testimonial.location}</span>
            </div>
            <div className="flex flex-col gap-[11px]">
              <div className="flex-grow">
                <div className="max-w-[334px]">
                  <figure className="relative pb-[74.25%]">
                    <img src={testimonial.images[0]} alt="img" className="absolute top-0 left-0 object-contain" />
                  </figure>
                </div>
              </div>
              <div className="flex gap-[9px]">
                {testimonial.images.slice(1).map((image, imgIndex) => (
                  <div className="w-full" key={imgIndex}>
                    <div className="max-w-[105px] w-full">
                      <figure className="relative pb-[99.61%]">
                        <img src={image} alt={`img-${imgIndex}`} className="absolute top-0 left-0 object-contain"/>
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
          <div className="mt-[40px]">
          <Button variant="secondary" classNames={'w-full !h-[49px] bg-grey'}>ALL TESTIMONIALS</Button>
          </div>
        </div>
      </div>    
    </div>
    </>    
  );
};

export default Testimonials;
