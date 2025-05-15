import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import catalog from "../../public/icons/category-main.svg";
import search from "../../public/icons/Search.svg";
import language from "../../public/icons/languageIcon.svg";
import scales from "../../public/icons/scales_1.svg";
import heart from "../../public/icons/Heart.svg";
import cart from "../../public/icons/Cart.svg";
import user from "../../public/icons/User.svg";

export default function Header() {
  return (
    <div className="py-[20px] flex items-center gap-[15px] justify-between header_wrapper">
      <Image
        src={logo}
        alt="logo_icon"
        height={50}
        width={50}
        className="logo"
      />
      <div className="flex items-center rounded-[25px] gap-[10px] bg-[#333333] pl-[19.5px] pr-[18.5px] py-[15.5px] catalog">
        <Image
          src={catalog}
          alt="catalog_icon "
          height={18}
          width={18}
          color="#ffffff"
          className="catalog_icon"
        />
        <p className="font-[700] text-[16px] text-[#ffffff] leading-[19px] m-[0px] ">
          Kataloq
        </p>
      </div>
      <div className="w-[42.17%] rounded-[12px] nav-bg dark:nav-bg input_wrapper">
        <div className="flex items-center relative py-[15px] pl-[20px] search">
          <input
            type="text"
            name=""
            id=""
            placeholder="Məhsul axtar..."
            className="relative font-[400] text-[16px] text-primary leading-[20px] opacity-50 search_input outline-hidden"
          />
          <Image
            src={search}
            width={19.75}
            height={20}
            alt=""
            className="absolute right-[24px] search_icon"
          />
        </div>
      </div>
      <div className="w-[20.4%] rounded-[12px] nav-bg dark:nav-bg city_input">
        <div className="flex items-center relative py-[15px] pl-[20px]">
          <input
            type="text"
            name=""
            id=""
            placeholder="Sumqayıt şəhəri"
            className="relative font-[400] text-[16px] text-primary leading-[20px] opacity-50 outline-hidden"
          />
          <Image
            src={language}
            width={10}
            height={5}
            alt=""
            className="absolute right-[24px] "
          />
        </div>
      </div>
      <div className="flex items-center gap-[8px] header_icons">
        <div className="p-[12.5] rounded-[12px] nav-bg dark:nav-bg">
          <Image src={scales} alt="" width={25} height={25} color="red" className="dark:invert dark:brightness-0 dark:contrast-100" />
        </div>
        <div className="relative p-[12.5px] rounded-[12px] nav-bg dark:nav-bg">
          <Image src={cart} alt="Cart" width={25} height={25} className="dark:invert dark:brightness-0 dark:contrast-100"  />
          <span className="absolute -top-[4px] text-[#fff] text-[10px] font-[800] -right-[7px] px-[5px] py-[2px] rounded-[18px] bg-[#EA2427] leading-none">
            4+
          </span>
        </div>

        <div className="p-[12.5] rounded-[12px] nav-bg dark:nav-bg">
          <Image src={heart} alt="" width={25} height={25} className="dark:invert dark:brightness-0 dark:contrast-100" />
        </div>
        <div className="p-[12.5] rounded-[12px] nav-bg dark:nav-bg">
          <Image src={user} alt="" width={25} height={25} className="dark:invert dark:brightness-0 dark:contrast-100" />
        </div>
      </div>
    </div>
  );
}
