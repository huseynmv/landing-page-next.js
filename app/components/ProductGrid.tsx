"use client";

import { useState } from "react";
import Image from "next/image";
import manat from "../../public/icons/manat.svg";
import chat from "../../public/icons/Chat.svg";
import scales from "../../public/icons/scales_1.svg";
import raiting from "../../public/icons/raiting.svg";
import type { ProductProps } from "../types/products";

export default function ProductGrid({ data }: ProductProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filteredProducts = !activeFilter
    ? data.flatMap((section) => section.products)
    : data.find((section) => section.title === activeFilter)?.products || [];

  return (
    <div className="mt-[95px] product_wrapper">
      <p className="font-[400] text-[14px] text-[#EA2427] leading-[17px]">
        Özəl təkliflər
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-[4px]">
        <div>
          <p className="font-[700] text-[24px] text-primary leading-[29px] title_text">
            Payız gəldi şərtlər daha da sadələşdi!
          </p>
        </div>
        <div className="flex items-center justify-end pr-[24px] filter_container">
          <div className="inline-flex gap-[28px] rounded-[25px] nav-bg dark:nav-bg px-[26px] py-[14px] filter">
            {data.map((section) => (
              <button
                key={section.title}
                onClick={() => setActiveFilter(section.title)}
                className={`filter_text text-primary dark:text-primary ${
                  activeFilter === section.title ? "opacity-100" : "opacity-50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-12 lg:grid-cols-12 gap-[29px] mt-[70px] gap-y-[80px] product_grid_wrapper">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-span-1 sm:col-span-3 nav-bg dark:nav-bg rounded-[24px] flex flex-col items-center px-[20px] product_item_wrapper"
          >
            <div className="relative -mt-[39px] product_img_container">
              <Image
                src={product.image}
                alt={product.name}
                width={248}
                height={218}
                className="rounded-[24px] product_img object-cover"
                style={{ border: "1px solid #ededed" }}
              />
              <div className="absolute top-[13px] left-[13px] rounded-[10px] bg-[#EA2427] flex items-center justify-center px-[12px] py-[9px] discount_percentage">
                <p className="font-[700] text-[10px] text-[#fff] leading-[12px]">
                  -{Math.round((product.discount / product.price) * 100)}%
                </p>
              </div>
              <div
                className="absolute top-[13px] right-[13px] rounded-[32px] px-[12px] py-[6px] flex items-center justify-center bg-[#ffffff] product_scale_icon_wrapper"
                style={{ boxShadow: "0px 9px 25px 0px #00000017" }}
              >
                <Image src={scales} alt="" width={18} height={18} />
              </div>
            </div>
            <div className="w-full flex items-center gap-[13px] pt-[9px] comment_wrapper">
              <div className="flex items-center gap-[2px]">
                <Image src={raiting} alt="" width={11} height={11} />
                <p className="font-[400] text-[10px] text-primary dark:text-primary leading-[12px]">
                  {product.rate}
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <Image src={chat} alt="" width={14} height={14} />
                <p className="font-[400] text-[10px] text-primary dark:text-primary leading-[12px]">
                  {product.reviewCount} Rəy
                </p>
              </div>
            </div>
            <p className="font-[400] text-[14px] text-primary dark:text-primary leading-[17px] w-full pt-[7px] product_title whitespace-normal">
              {product.name}
            </p>
            <div className="w-full flex gap-[15px] pt-[26px] price_wrapper">
              <div>
                <div className="relative">
                  <p className="absolute h-[1px] w-[72%] line-color dline-color bottom-[8px] discount_line"></p>
                  <div className="flex items-center">
                    <p className="font-[500] text-[14px] discount-color dark:discount-color leading-[17px] opacity-50 product_price">
                      {product.price}
                    </p>
                    <Image
                      src={manat}
                      alt=""
                      width={10}
                      height={10}
                      style={{ opacity: 0.5 }}
                    />
                  </div>
                </div>
                <div className="flex items-center relative discounted_price_wrapper">
                  <p className="font-[700] text-[20px] text-primary leading-[22px] product_discounted_price">
                    {product.discounted_price}
                  </p>
                  <Image src={manat} alt="" width={10} height={10} />
                </div>
              </div>
              <div className="w-[1px] bg-[#DEDEDE]"></div>
              <div>
                <p className="font-[500] text-[14px] discount-color dark:discount-color leading-[17px] opacity-50 product_price">
                  {product.perMonth.month} ay
                </p>
                <div className="flex items-center discounted_price_wrapper">
                  <p className="font-[700] text-[20px] text-primary leading-[22px] product_discounted_price">
                    {product.perMonth.price}
                  </p>
                  <Image src={manat} alt="" width={10} height={10} />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between pb-[20px] pt-[22px] add_card_wrapper">
              <div className="flex items-center rounded-[12px] btn-bg dark:btn-bg py-[12.5px] pl-[14px] pr-[6px] add_card_container">
                <Image
                  src={scales}
                  alt=""
                  width={15}
                  height={18}
                  className="product_card_icon"
                />
                <p className="font-[500] text-[14px] text-primary dark:text-primary leading-[20px] px-[32px] add_card_button block sm:hidden">
                  Səbətə at
                </p>
                <p className="font-[500] text-[14px] text-primary dark:text-primary leading-[20px] px-[32px] add_card_button hidden sm:block">
                  Səbətə əlavə et
                </p>
              </div>
              <div className="btn-bg dark:btn-bg p-[12.5px] rounded-[12px] flex items-center justify-center compare_button">
                <Image
                  src={scales}
                  alt=""
                  width={20}
                  height={20}
                  className="compare_icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
