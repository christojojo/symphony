

import React from 'react';
import Assets from '../../common/Assets';
import Button from '../Button/Button';

function EventDesign() {
  return (
    <div className="py-[60px] 3xl:py-[110px] font-forum bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-[225px] md:max-w-[383px] 3xl:max-w-[383px] w-full mx-auto pb-[37px] md:pb-[109px] 3xl:pb-[109px]">
            <figure className='relative overflow-hidden rounded-tl-[268px] rounded-tr-[268px] bg-slate-100 pb-[129.05%]'>
              <img
                src={Assets.eventDesign}
                alt="A couple celebrating at an event"
                className='absolute w-full h-full top-0 left-0 object-cover'
              />
            </figure>
          </div>
          <div className='flex flex-col md:flex-col-reverse 3xl:flex-col-reverse'>
          <h2 className="text-[35px] md:text-h2 3xl:text-h2 font-Silk md:font-Cormorant 3xl:font-Cormorant font-extralight md:font-normal 3xl:font-normal leading-[43px] md:leading-[87px] 3xl:leading-[87px] max-w-[474px] text-center pb-[37px] md:pb-[60px] 3xl:pb-[60px]">
            Event Design For the Romance
          </h2>
          <div className="text-18 leading-[19px] pb-[50px] md:pb-[30px] 3xl:pb-[30px] text-center">
            Let’s Celebrate
          </div>
          </div>          
          <p className="text-20 md:text-[23px] 3xl:text-[23px] leading-[30px] md:leading-[35px] 3xl:leading-[35px] pb-[40px] md:pb-[66px] 3xl:pb-[66px] max-w-[685px] text-center">
            Our team values the significance of this journey. This is an
            opportunity to unite families, define legacies, and what better reason
            to dust off the vintage champagne?
          </p>
          <Button variant='primary'>Enquire Now</Button>
        </div>
      </div>
    </div>
  );
}

export default EventDesign;
