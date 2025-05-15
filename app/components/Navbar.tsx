import Image from "next/image";
import Link from "next/link";
import language from "../../public/icons/languageIcon.svg";
import mobileMenu from "../../public/icons/menu.svg";
import ThemeToggle from "../theme/ThemeToggle";
export default function Navbar() {
  return (
    <nav>
      <div className="flex justify-between nav-bg dark:nav-bg pl-[34px] pr-[17px]  rounded-[25px] items-center nav_wrapper">
        <div className="flex gap-[35px] item-center pt-[17px] pb-[18px] nav_items">
          <Link
            href="#"
            className="font-[700] text-[14px] text-[#333333] leading-[10px]"
          >
            Kampaniyalar
          </Link>
          <Link
            href="#"
            className="font-[500] text-[14px] text-[#333333] leading-[10px] opacity-50"
          >
            Xidmətlər
          </Link>
          <Link
            href="#"
            className="font-[500] text-[14px] text-[#333333] leading-[10px] opacity-50"
          >
            Mağazalar
          </Link>
          <Link
            href="#"
            className="font-[500] text-[14px] text-[#333333] leading-[10px] opacity-50"
          >
            Aylıq ödəniş
          </Link>
          <Link
            href="#"
            className="font-[500] text-[14px] text-[#333333] leading-[10px] opacity-50"
          >
            Digər
          </Link>
        </div>
        <Image
          src={mobileMenu}
          width={20}
          height={11}
          alt=""
          className="lg:hidden"
        />
        <div className="flex gap-[26px] items-center">
          <Link
            href="#"
            className="underline font-[400] text-[14px] leading-[17px] text-right last_version"
            style={{ textDecoration: "underline" }}
          >
            Əvvəlki versiyaya keçid
          </Link>
          <div className="flex gap-[19px] items-center">
            <div className="flex justify-center items-center gap-[7px]">
              <Link href="#" className="">
                <p className="tracking-[0%] font-[700] text-[14px] leading-[10px]">
                  Aze
                </p>
              </Link>
              <Image width={8} height={3.5} alt="img" src={language} />
            </div>
            <ThemeToggle></ThemeToggle>
          </div>
        </div>
      </div>
    </nav>
  );
}
