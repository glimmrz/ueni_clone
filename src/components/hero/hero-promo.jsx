import hp_lg from "@/assets/hp_lg.png";
import hp_br from "@/assets/hp_br.png";
import hp_tr from "@/assets/hp_tr.png";
import hp_lt from "@/assets/hp_lt.png";
import Image from "next/image";

export function HeroPromo() {
  return (
    <div className="w-full relative">
      {/* Main image */}
      <div className="sticky md:sticky left-0 right-0 m-auto w-fit">
        <Image src={hp_lg} alt="" className="object-contain" />
      </div>
      {/* Left Side-Image */}
      <div className="hidden md:block absolute left-28 top-12 m-auto h-fit w-fit">
        <Image src={hp_lt} alt="" className="object-contain" />
      </div>

      {/* Top-right  */}
      <div className="hidden md:block absolute right-8 top-0 m-auto h-fit w-fit">
        <Image src={hp_tr} alt="" className="object-contain" />
      </div>

      {/* Bottom-right  */}
      <div className="hidden md:block absolute right-0 top-60 m-auto h-fit w-fit">
        <Image src={hp_br} alt="" className="object-contain" />
      </div>
    </div>
  );
}
