import { Label } from "@/components/Label";
import { Index } from "./index";
import WebLayout from "@/layouts/WebLayout";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  return (
    <WebLayout>
      <Hero />
    </WebLayout>
  );
}
function Hero() {
  const slides = [
    {
      path: "/images/home/bg-hero-1.jpg",
    },
    {
      path: "/images/home/bg-hero-2.jpg",
    },
    {
      path: "/images/home/bg-hero-3.jpg",
    },
    {
      path: "/images/home/bg-hero-4.jpg",
    },
  ];
  return (
    <section className="w-full relative">
      <Splide
        className="mx-auto mt-0 relative"
        id="mySplide"
        hasTrack={false}
        options={{
          perPage: 1,
          perMove: 1,
          rewind: true,
          focus: "center",
          arrows: false,
          autoplay: true,
          pagination: true,
          interval: 3000,
          width: "100%",
          type: "fade",
          breakpoints: {
            640: {
              width: "100%",
            },
          },
        }}
      >
        <SplideTrack>
          {slides.map(({ path, index }) => (
            <SplideSlide key={index}>
              <div className="relative text-white">
                <Image
                  src={path}
                  width={1024}
                  height={720}
                  alt="Hero Image"
                  className="w-full lg:h-[600px] md:h-[350px] h-[250px] object-cover"
                />
                <div className=" absolute w-full h-full top-0  bg-black/50 flex items-center">
                  <div className="container mx-auto flex items-center">
                    <div className="lg:space-y-4 space-y-2 mx-5 lg:mx-0 lg:basis-5/12">
                      <Label>Logistics & Supply Chain Solutions</Label>
                      <h1 className="lg:text-6xl text-2xl font-semibold">
                        Your Gateway to any Destination in the World
                      </h1>
                      <p className="lg:text-base text-xs">
                        Connecting You to the World: Your Gateway to Seamless
                        Logistics <br />
                        Solutions for Every Destination.
                      </p>
                      <button className="bg-primary text-sm lg:text-base  lg:px-6 lg:py-3 px-4 py-2">
                        Explore More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </section>
  );
}
