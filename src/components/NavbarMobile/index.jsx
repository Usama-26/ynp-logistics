import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu, BiMenuAltRight, BiSearch, BiX } from "react-icons/bi";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    toggleScroll();
  };

  const toggleScroll = () => {
    if (disableScroll) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    setDisableScroll(!disableScroll);
  };

  return (
    <>
      <div
        id="Navbar"
        className=" bg-white block lg:hidden relative overflow-hidden"
      >
        <SidePanel show={isOpen} togglePanel={togglePanel} />
        <div className="mx-5  flex justify-between items-center ">
          <Link href={"/"}>
            <Image
              src={"/images/header-logo.png"}
              height={170}
              width={103}
              alt="Company Logo"
              className="w-24"
            />
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={togglePanel}
              className="focus:outline-none active:outline-none z-[9999]"
            >
              {isOpen ? (
                <BiX className="w-10 h-10 fill-black" />
              ) : (
                <BiMenu className="w-10 h-10 fill-black" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Management Team", path: "/team" },
  { title: "Contact", path: "/contact" },
];
function SidePanel({ show, togglePanel }) {
  return (
    <div
      className={`w-screen h-screen bg-white text-black overflow-hidden fixed top-0 left-0 z-50 yellow-gradient transition-transform duration-500 ${
        !show && "translate-x-full"
      }`}
    >
      <nav className="p-4 relative top-20">
        <ul className="list-none overflow-hidden text-center">
          {links.map(({ title, path }, index) => {
            return (
              <li
                key={index}
                className={`py-2 transition-transform ${
                  show ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <Link
                  onClick={togglePanel}
                  href={path}
                  className="font-medium focus:outline-none"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
