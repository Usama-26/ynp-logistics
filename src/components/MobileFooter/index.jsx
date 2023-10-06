import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
export default function MobileFooter() {
  return (
    <footer className="font-display">
      <div className="bg-home-hero py-40"></div>
      <div className=" bg-footer pt-10 text-white">
        <div className="flex flex-col px-5">
          <Image
            src={"/images/footer-logo.png"}
            width={180}
            height={109}
            alt="Y & P Logo"
            className="w-32 mb-5"
          />
          <p className="text-justify mb-5">
            Streamlining Global Logistics Solutions for Seamless Supply Chains.
            Delivering Efficiency and Reliability Worldwide.
          </p>
          <ul className="flex w-full justify-between mb-5">
            <li className="basis-1/2">
              <h3 className="text-xl font-bold mb-5">Links</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>About us</Link>
                </li>
                <li>
                  <Link href={"/"}>Services</Link>
                </li>
                <li>
                  <Link href={"/"}>Our Team</Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
            </li>
            <li className="basis-1/2">
              <h3 className="text-xl font-bold mb-5">Services</h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href={"/"}>Facilitation</Link>
                </li>
                <li>
                  <Link href={"/"}>Coordination</Link>
                </li>
                <li>
                  <Link href={"/"}>Air Service Licensing</Link>
                </li>
                <li>
                  <Link href={"/"}>Consultation</Link>
                </li>
                <li>
                  <Link href={"/"}>Supplies</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mb-5">
            <ul className="space-y-4">
              <h3 className="text-xl font-bold mb-5">Contact</h3>
              <li className="flex gap-2">
                <MdOutlineMail className="w-6 h-6" />
                <Link href={"/"}>pravesh@yplogistics.co.za</Link>
              </li>
              <li className="flex gap-2">
                <FiPhone className="w-6 h-6" />
                <Link href={"/"}>
                  Tel: +27 11 466 8681 <br /> Fax: +27 11 318 2047
                </Link>
              </li>
              <li className="flex gap-2">
                <IoLocationOutline className="w-6 h-6" />
                <Link href={"/"}>
                  3 Monte Carlo Crescent | Kyalami <br />
                  Business Park | Kyalami Boulevard
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="text-xl font-bold mb-5">Follow us</h3>
            <div className="flex gap-4">
              <Link href={"/"}>
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link href={"/"}>
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href={"/"}>
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <hr className="bg-transparent border-t border-white/50" />
        <div className="py-5 space-y-2">
          <p className="text-sm text-center">
            Copyright © Y & P Logistics | All Rights Reserved
          </p>
          <p className="text-sm text-center">
            Crafted by{" "}
            <Link href={"https://mrrobotdev.com"}> mrrobotdev.com</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
