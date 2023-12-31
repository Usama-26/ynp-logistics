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
      <div className=" footer-links bg-footer text-white">
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
                    <Link href={"/#aboutUs"}>About us</Link>
                  </li>
                  <li>
                    <Link href={"/#services"}>Services</Link>
                  </li>
                  <li>
                    <Link href={"/#team"}>Our Team</Link>
                  </li>
                  <li>
                    <Link href={"/#contact"}>Contact</Link>
                  </li>
                </ul>
              </li>
              <li className="basis-1/5">
                <ul className="space-y-4">
                  <li>
                    <Link href={"/services/#facilitation"}>Facilitation</Link>
                  </li>
                  <li>
                    <Link href={"/services/#coordination"}>Coordination</Link>
                  </li>
                  <li>
                    <Link href={"/services/#licensing"}>
                      Air Service Licensing
                    </Link>
                  </li>
                  <li>
                    <Link href={"/services/#consultation"}>Consultation</Link>
                  </li>
                  <li>
                    <Link href={"/services/#suppliers"}>Suppliers</Link>
                  </li>
                </ul>
              </li>
              <li className="basis-2/5">
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <MdOutlineMail className="w-6 h-6" />
                    <span>pravesh@yplogistics.co.za</span>
                  </li>
                  <li className="flex gap-2">
                    <FiPhone className="w-6 h-6" />
                    <span>
                      Tel: +27 11 466 8681 <br /> Fax: +27 11 318 2047
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <IoLocationOutline className="w-6 h-6" />
                    <span>
                      3 Monte Carlo Crescent | Kyalami <br />
                      Business Park | Kyalami Boulevard
                    </span>
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
          <p>
            Crafted by{" "}
            <Link
              href={"https://www.mrrobotdev.com"}
              target="_blank"
              className="hover:underline underline-offset-2"
            >
              mrrobotdev.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
