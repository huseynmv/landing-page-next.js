import Image from "next/image";
import type { InfoCardsProps } from "../types/cards";

export default function InfoCards({ data }: InfoCardsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[30px] justify-items-center info_card_wrapper">
      {data.map((item) => (
        <div
          key={item.id}
          className="rounded-[24px] nav-bg dark:nav-bg pt-[22px] pl-[23px] pb-[33px] w-full max-w-[320px] info_card_container"
        >
          <div
            key={item.id}
            className="icon-bg dark:icon-bg h-[50px] w-[50px] flex items-center justify-center rounded-[15px] mb-[27px] info_card_icon_container"
          >
            <Image
              key={item.id}
              src={item.icon}
              alt={item.title}
              width={29}
              height={29}
              className="info_card_icon"
            />
          </div>
          <p className="font-[700] text-[24px] text-secondary dark:text-secondary leading-[33.47px] info_card_title mt-[27px]">
            {item.title}
          </p>
          <span className="font-[400] text-[16px] text-secondary dark:text-secondary leading-[20.53px] opacity-60 block info_card_subtitle">
            {item.description}
          </span>
        </div>
      ))}
    </div>
  );
}
