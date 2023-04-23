import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png";



const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Picture of the author"
        width="20px"
        height="20px"
      />
    </Link>
  );
};

export default Logo;
