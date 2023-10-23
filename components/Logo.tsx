import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={"/logo.svg"} alt="curlylogic.dev logo" fill priority={true} />
    </Link>
  );
};

export default Logo;
