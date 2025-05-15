"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import ArrowLeft from "../../public/icons/Arrows-Left.svg";
import ArrowRight from "../../public/icons/Arrows-Right.svg";
import Link from "next/link";
import type { SliderProps } from "../types/sliders";

export default function Slider({ data }: SliderProps) {
  return (
    <div className="relative w-full p-0 m-0">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={1.4}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 200,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1220: {
            slidesPerView: 1.1,
            spaceBetween: 15,
          },
          1440: {
            slidesPerView: 1.3,
            spaceBetween: 0,
          },
        }}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide key={item.id || i} className="w-full relative">
            <Link href={item.button_url}>
              <Image
                src={item.image}
                alt={`Slide ${i + 1}`}
                width={800}
                height={400}
                className="rounded-[35px] object-cover w-[935px] slider_img"
                style={{ minHeight: 526.75 }}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="left_arrow px-[12.5px] py-[12.5px] rounded-[12px] bg-[#fff] custom-prev cursor-pointer absolute top-1/2 left-[-25px] -translate-y-1/2 z-10"
        style={{ boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <Image src={ArrowLeft} alt="Previous" width={15} height={12} />
      </div>
      <div
        className="right_arrow px-[12.5px] py-[12.5px] rounded-[12px] bg-[#fff] custom-next cursor-pointer absolute top-1/2 right-[-25px] -translate-y-1/2 z-10"
        style={{ boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.1)" }}
      >
        <Image src={ArrowRight} alt="Next" width={15} height={12} />
      </div>
    </div>
  );
}
