import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    // <Link href="/">
    //   <figure className="w-[90px] h-[18px]">
    //     <Image src={logo} alt="walton" />
    //   </figure>
    // </Link>
    <Link href="/">
      <h1 className="text-background text-2xl font-semibold uppercase">
        zeris
      </h1>
    </Link>
  );
}
