/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-background-color">
      <div className="container px-6 py-12 mx-auto text-white">
        <div className="grid grid-cols-1 gap-6 sm:gap-y-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src={"/images/jvh-logo@2x.png"}
              height={105}
              width={125}
              alt="JVH Logo"
            />

            <p>
              At JVH, we provide a space where creativity takes form, showcasing
              a diverse range of visual expressions that inspire, provoke
              thought, and evoke emotions.
            </p>
          </div>
          <div>
            <p className="text-xl">Quick Link</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <a href="/home" class="hover:underline hover:text-primary">
                Home
              </a>
              <a href="/exhibitions" class="hover:underline hover:text-primary">
                Exhibitions
              </a>
              <a
                href="/art-classes-and-studio-events"
                class="hover:underline hover:text-primary"
              >
                Art Classes & Studio Events
              </a>
              <a href="/frameshop" class="hover:underline hover:text-primary">
                Frameshop
              </a>
              <a href="/cafe" class="hover:underline hover:text-primary">
                Cafe
              </a>
              <a
                href="/exhibition-catalogue"
                class="hover:underline hover:text-primary"
              >
                Exhibition Catalogue
              </a>
            </div>
          </div>
          <div>
            <p className="text-xl">Contact Us</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <span className="inline-flex gap-2">
                <MdLocationOn className="lg:w-10 lg:h-10 w-5 h-5 fill-primary" />
                <span>
                  593 Jacqueline Dr, Garsfontein, Pretoria, 0042, South Africa
                </span>
              </span>
              <span className="inline-flex gap-2">
                <HiPhone className="w-5 h-5 fill-primary" />
                <a href="">0797809807</a>
              </span>
              <span className="inline-flex gap-2">
                <HiMail className="w-5 h-5 fill-primary" />
                <a href="">info@jvhartgallery.co.za</a>
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl">Follow Us</p>

            <div className="mt-5">
              <a
                href="/facebook"
                className="inline-block rounded-full bg-white p-2"
              >
                <FaFacebook className="w-5 h-5 fill-primary" />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700 h-2" />
        <div className="sm:flex sm:items-center sm:justify-between flex-col gap-2 lg:gap-0 lg:flex-row text-sm">
          <div className="flex gap-4 hover:cursor-pointer">
            <a
              href="/privacy-policy"
              className="hover:underline hover:text-primary"
            >
              Privacy Policy
            </a>
            |
            <a
              href="terms-and-conditions"
              className="hover:underline hover:text-primary"
            >
              Terms & Conditions
            </a>
          </div>
          <p className="font-sans lg:p-8 text-start md:text-center md:p-4">
            Copyright © 2023. All rights reserved.
          </p>
          <p className="font-sans lg:p-8 text-start md:text-center md:p-4">
            Crafted by:{" "}
            <a href="https://www.mrrobotdev.com" className="hover:underline">
              mrrobotdev.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
