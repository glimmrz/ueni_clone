import Link from "next/link";
import logo from "@/assets/logoue.svg";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <figure className="w-[90px] h-[18px]">
        <Image src={logo} alt="walton" />
      </figure>
    </Link>
  );
}
