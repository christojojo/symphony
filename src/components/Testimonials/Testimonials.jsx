import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import "swiper/css/pagination";
import Assets from "../../common/Assets";
import Button from "../Button/Button";
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';


SwiperCore.use([Navigation, Pagination]);

const testimonialsData = [
  {
    img: Assets.testimonials,
    quote: "Symphony Events were absolutely our the incredible right through the process from our first meeting to execution…",
    author: "Ana John & Juan Luis",
    location: "Sydney - Australia"
  },
  {
    img: Assets.testimonials,
    quote: "Symphony Events made our wedding day perfect. Their attention to detail was outstanding.",
    author: "Emily & James",
    location: "Melbourne - Australia"
  },
  {
    img: Assets.testimonials,
    quote: "Symphony Events made our wedding day perfect. Their attention to detail was outstanding.",
    author: "Emily & James",
    location: "Melbourne - Australia"
  },
];


const testimonialsResponsiveData = [
  {
    title: "“Wow! Elegance wedding & customer service”",
    text: "Jack and his team were absolute professionals who really spent a lot of time in understanding the client’s needs and then work hard in making it a reality. Our function’s decorations, both at home…",
    author: "Brenna & Fadell Wedding",
    location: "Sydney - Australia",
    images: [Assets.testiImg1, Assets.testiImg2, Assets.testiImg2, Assets.testiImg2]
  },
  {
    title: "“Wow! Elegance wedding & customer service”",
    text: "Jack and his team were absolute professionals who really spent a lot of time in understanding the client’s needs and then work hard in making it a reality. Our function’s decorations, both at home…",
    author: "Brenna & Fadell Wedding",
    location: "Sydney - Australia",
    images: [Assets.testiImg1, Assets.testiImg2, Assets.testiImg2, Assets.testiImg2]
  },
];


const Testimonials = () => {
  
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  
  useEffect(() => {
    if (swiper1Ref.current && swiper2Ref.current) {
      const swiper1 = swiper1Ref.current.swiper;
      const swiper2 = swiper2Ref.current.swiper;

      swiper1.on('slideChange', () => {
        swiper2.slideTo(swiper1.activeIndex);
      });

      swiper2.on('slideChange', () => {
        swiper1.slideTo(swiper2.activeIndex);
      });
    }
  }, []);

  return (
    <>
  <div className="bg-grey py-[60px] 3xl:py-[150px] font-Cormorant hidden sm:block">
      <div className="container">
        <div className="pb-[50px] 3xl:pb-[80px]">
          <h5 className="text-[40px] 3xl:text-h5 leading-[45px] 3xl:leading-[69px] text-center">TESTIMONIALS</h5>
        </div>
        <div className="flex flex-col lg:flex-row 3xl:flex-row ">
          <div className="w-full lg:w-[41%] 3xl:w-[41%] pr-0 lg:pr-[30px] 3xl:pr-[77.5px]">
            <div className="swiper-container">
              <Swiper className="testimonial-swiper-1" ref={swiper1Ref}>
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full lg:max-w-[536px] 3xl:max-w-[536px]">
                      <figure className="relative pb-[122.94%]">
                        <img
                          src={testimonial.img}
                          alt="testimonialsImg"
                          className="absolute top-0 left-0 w-full h-full object-contain"
                        />
                      </figure>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full lg:w-[59%] 3xl:w-[59%] pr-0 md:pl-[30px] 3xl:pl-[77.5px]">
            <div className="swiper-container">
              <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                className="testimonial-swiper-2 pb-[50px] 3xl:pb-[124px]"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                ref={swiper2Ref}
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="pt-[30px] 3xl:pt-[46px]">
                      <div className="pb-[25px] 3xl:pb-[35px]">
                        <figure className="max-w-[50px] 3xl:max-w-[100%]">
                          <img src={Assets.quotesImg} alt="quotesimg" />
                        </figure>
                      </div>
                      <p className="text-[35px] 3xl:text-40 font-light leading-[45px] 3xl:leading-[50px] max-w-[673px] pb-[35px] 3xl:pb-[55px]">
                        {testimonial.quote}
                      </p>
                      <div>
                        <h6 className="text-25 font-semibold leading-[30px]">
                          {testimonial.author}
                        </h6>
                        <span className="block text-20 leading-[30px]">
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Button variant="secondary" classNames={"bg-grey w-full md:w-auto 3xl:w-auto"}>
              View All Testimonials
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="responsive block sm:hidden bg-grey font-forum">
      <div className="container">
        <div className="py-[60px]">
          <div className="font-forum text-16 leading-[18px] pb-[40px]">TESTIMONIALS</div>          
         
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
                    <div className=" w-full">
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
