import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export function Logo() {
  return (
    <Link href="/">
      <figure className="h-[50px] w-[150px]">
        <Image src={logo} alt="walton" />
      </figure>
    </Link>
  );
}
