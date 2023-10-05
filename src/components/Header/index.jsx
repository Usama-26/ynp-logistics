/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
export default function Header() {
  return (
    <header className=" lg:block hidden">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center  mb-4 md:mb-0"
        >
          <Image
            src={"/images/header-logo.png"}
            height={170}
            width={103}
            alt="Company Logo"
            className="w-32"
          />
        </Link>
        <Navigation />
        <SocialLinks />
      </div>
    </header>
  );
}

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Management Team", path: "/team" },
  { title: "Contact", path: "/contact" },
];
function Navigation({}) {
  return (
    <nav className="mx-auto flex flex-wrap items-center text-base font-medium font-display justify-between ">
      {links.map(({ title, path }, index) => (
        <Link
          href={path}
          key={index}
          className="mx-4 py-2 border-b-2 border-transparent hover:border-primary"
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}

function SocialLinks() {
  return (
    <nav className="flex">
      <Link href={"/"} className="mx-2">
        <BsInstagram className="w-6 h-6 fill-black hover:fill-primary" />
      </Link>
      <Link href={"/"} className="mx-2">
        <BsFacebook className="w-6 h-6 fill-black hover:fill-primary" />
      </Link>
      <Link href={"/"} className="mx-2">
        <BsTwitter className="w-6 h-6 fill-black hover:fill-primary" />
      </Link>
      <Link href={"/"} className="mx-2">
        <FaLinkedin className="w-6 h-6 fill-black hover:fill-primary" />
      </Link>
    </nav>
  );
}
