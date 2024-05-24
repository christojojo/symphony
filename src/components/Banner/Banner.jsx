import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Assets from "../../common/Assets";

function Banner() {
  const videosData = [
    {
      title: "TELLING THE STORY OF YOUR LOVE",
      src: "https://dev.uiwac.webc.in/juniors-2023/christo/lession1/symphony/images/bnr2.mp4",
    },
    {
      title: "TELLING THE STORY OF YOUR LOVE",
      src: "https://dev.uiwac.webc.in/juniors-2023/christo/lession1/symphony/images/bannervideo2.mp4",
    },
  ];

  const videoRefs = useRef(videosData.map(() => React.createRef()));
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(true);

  useEffect(() => {
    const updateProgress = () => {
      if (videoRefs.current && videoRefs.current[0].current) {
        const video = videoRefs.current[0].current;
        const currentProgress = (video.currentTime / video.duration) * 100;
        setProgress(currentProgress);
        setShowProgressBar(currentProgress < 100);
      }
    };

    const interval = setInterval(updateProgress, 100);

    if (videoRefs.current && videoRefs.current[0].current) {
      videoRefs.current[0].current.addEventListener("timeupdate", updateProgress);
    }

    return () => {
      clearInterval(interval);
      if (videoRefs.current && videoRefs.current[0].current) {
        videoRefs.current[0].current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  const handleVideoEnded = () => {
    setShowProgressBar(false);
  };

  const VideoLoader = () => {
    return (
      <div
        className={`loader bg-black opacity-60 text-white max-w-[273px] w-full absolute bottom-[6.4%] right-[16%] z-10 ${
          showProgressBar ? '' : 'hidden'
        }`}
      >
        <div className="flex gap-[22px] py-[15px] px-[22px]">
          <div className="text-center pr-[22px] relative">
            <div className="after:content-[''] after:absolute after:top-0 after:right-0 after:w-[1px] after:h-full after:bg-white after:opacity-20">
              <img src={Assets.videloader} alt="Loader" />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="font-Cormorant font-normal text-20 leading-[22px] text-center">
              ABIA award Winner 2023
            </p>
          </div>
        </div>
        <span
          className="h-[2px] bg-white block relative"
          style={{ width: `${progress}%`, minWidth: "0%" }}
        ></span>
      </div>
    );
  };

  return (
    <section className="relative h-banner-height-responsive xl:h-banner-height mt-[66px] lg:mt-20">
      <Swiper spaceBetween={0} slidesPerView={1} className="h-full">
        {videosData.map((video, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative h-full">
              <video
                ref={videoRefs.current[index]}
                className="absolute inset-0 w-full h-full object-cover"
                src={video.src}
                autoPlay
                loop
                muted
                onEnded={handleVideoEnded}
              />
              <VideoLoader />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center py-32">
                <div className="text-center text-white">
                  <h1 className="text-50 md:text-50 3xl:text-h1 lg:text-h1 font-light max-w-[274px] md:max-w-[728px] 3xl:max-w-[720px] leading-[61px] md:leading-[91px] 3xl:leading-[91px]">
                    {video.title}
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner;
