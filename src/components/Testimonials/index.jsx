import { Splide } from "@splidejs/react-splide";
import { Label } from "../Label";
import { SplideTrack } from "@splidejs/react-splide";
import { SplideSlide } from "@splidejs/react-splide";
import { Quote, Quote2 } from "@/svgs";
import { RiStarSFill } from "react-icons/ri";

export default function Testimonials() {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 lg:px-0 px-5">
            <Label>Testimonials</Label>
            <h1 className="lg:text-4xl text-2xl font-semibold">
              What Our Customers Say
            </h1>
          </div>
          <div className="py-10">
            <Splide
              hasTrack={false}
              options={{
                arrows: false,
              }}
            >
              {/* <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  Prev
                </button>
                <button className="splide__arrow splide__arrow--next">
                  Next
                </button>
              </div> */}
              <SplideTrack>
                <SplideSlide>
                  <div className="flex lg:flex-row flex-col">
                    <div className="lg:basis-1/2 basis-full lg:px-12 px-5  py-8 bg-[#F4F4F4]">
                      <div className="space-y-6">
                        <div className="flex lg:justify-between justify-center items-center w-full">
                          <div className="lg:text-left text-center">
                            <h1 className="text-xl font-medium">
                              Kathleen Smith
                            </h1>
                            <h1 className="">Fuel Company</h1>
                          </div>
                          <div className="hidden lg:block">
                            <Quote />
                          </div>
                        </div>
                        <p className="italic text-[#666C89] text-sm line-clamp-5">
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking to further
                          the overall value proposition. Organically grow the
                          holistic world view of disruptive innovation via
                          workplace diversity and empowerment.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:basis-1/2 basis-full lg:px-12 px-4 py-8 bg-[#7ACEBB] text-white">
                      <div className="space-y-6">
                        <div className="flex lg:justify-between justify-center items-center w-full">
                          <div className="lg:text-left text-center">
                            <h1 className="text-xl font-medium">John Martin</h1>
                            <h1 className="">Restoration Company</h1>
                          </div>
                          <div className="hidden lg:block">
                            <Quote2 />
                          </div>
                        </div>
                        <p className="italic text-sm line-clamp-5">
                          Leverage agile frameworks to provide a robust synopsis
                          for strategy foster collaborative thinking to further
                          the overall value proposition. Organically grow the
                          holistic world view of disruptive innovation via
                          workplace diversity and empowerment.
                        </p>
                        <div className="flex justify-center lg:justify-start">
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                          <RiStarSFill className="w-8 h-8 fill-[#FDAF3B]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}
