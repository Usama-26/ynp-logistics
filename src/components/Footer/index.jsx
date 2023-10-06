import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="font-display">
      <div className="bg-home-hero py-40"></div>
      <div className=" bg-[#27272a] text-white">
        <div className="max-w-7xl ml-auto">
          <div className="flex gap-10 items-center">
            <div className="basis-3/12 py-1 bg-footer">
              <Image
                src={"/images/footer-logo.png"}
                width={180}
                height={109}
                alt="Y & P Logo"
                className="w-32 mx-auto"
              />
            </div>
            <ul className="basis-9/12 font-medium flex w-full justify-between">
              <li className="basis-1/5">
                <h4 className="text-lg">Links</h4>
              </li>
              <li className="basis-1/5">
                <h4 className="text-lg">Services</h4>
              </li>
              <li className="basis-2/5">
                <h4 className="text-lg">Contact</h4>
              </li>
              <li className="basis-1/5">
                <h4 className="text-lg">Follow us</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-footer text-white">
        <div className="max-w-7xl ml-auto pb-8">
          <div className="flex py-4 gap-10 items-center">
            <div className="basis-3/12 py-1 bg-footer">
              <p className="">
                Streamlining Global Logistics Solutions for Seamless Supply
                Chains. Delivering Efficiency and Reliability Worldwide.
              </p>
            </div>
            <ul className="basis-9/12 flex w-full justify-between">
              <li className="basis-1/5">
                <ul className="space-y-4">
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
              <li className="basis-1/5">
                <ul className="space-y-4">
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
              <li className="basis-2/5">
                <ul className="space-y-4">
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
              </li>
              <li className="basis-1/5">
                <div className="flex gap-4">
                  <Link href={"/"}>
                    <FaFacebook className="w-8 h-8" />
                  </Link>
                  <Link href={"/"}>
                    <FaTwitter className="w-8 h-8" />
                  </Link>
                  <Link href={"/"}>
                    <FaLinkedin className="w-8 h-8" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-transparent border-t border-white/50" />
        <div className="  py-4 mx-auto max-w-6xl flex justify-between">
          <p>Copyright © Y & P Logistics | All Rights Reserved</p>
          <p>Crafted by mrrobotdev.com</p>
        </div>
      </div>
    </footer>
  );
}
