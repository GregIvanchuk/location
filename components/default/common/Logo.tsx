import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  logoSrc: string;
}

const Logo: FC<LogoProps> = ({logoSrc}) => {
  return (
    <div>
      <Link href={"/"}>
        <Image
          className=""
          src={logoSrc}
          alt={"Logo of translation-agency "}
          aria-label=""
          width={40}
          height={40}
          sizes="100vw"
        />
        {/* Logo */}
      </Link>
    </div>
  );
};

export default Logo;
