import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUsSection";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/ServicesSection";
import { Label } from "@/components/Label";
import WebLayout from "@/layouts/WebLayout";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
import ContactUs from "@/components/ContactUsSection";

export default function Home() {
  return (
    <WebLayout>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <ContactUs />
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
                      <p className="bg-[#041C3799] lg:text-sm text-xs inline-block px-2 border-l-4 border-primary">
                        Logistics & Supply Chain Solutions
                      </p>
                      <h1 className="lg:text-6xl text-2xl font-semibold">
                        Your Gateway to any Destination in the World
                      </h1>
                      <p className="lg:text-base text-xs">
                        Connecting You to the World:{" "}
                        <br className="block lg:hidden" /> Your Gateway to
                        Seamless Logistics <br />
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

function AboutUs() {
  return (
    <section id="aboutUs" className="py-20">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-8 lg:px-20 px-5">
          <div className="basis-1/2">
            <Image
              src={"/images/home/truck-group.png"}
              height={590}
              width={850}
              alt="Truck Photo"
              className=""
            />
          </div>
          <div className="basis-1/2 space-y-4">
            <Label>About us</Label>
            <h1 className="lg:text-4xl text-2xl font-semibold">
              Our Company Overview
            </h1>
            <p className="text-[#666C89] text-justify">
              Devi Padayachy embraced her high level of knowledge, skills and
              impeccable reputation in the freight industry to form Y&P
              Logistics more than a decade ago. We credit the short term success
              to the niche service that we offer our current and prospective
              clients. We are prepared to offer our clients advice on efficient
              ways and cost effective means of importing and exporting their
              goods.
            </p>
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTabs() {
  const tabs = ["Who We Are", "What We Do", "Our Market"];
  const panels = [
    ` Y&P Logistics are clearing & forwarding, import and export
  specialists. We offer fast, efficient & cost-effective logistical
  support. The reputation of Y&P Logistics has been built on its
  transportation of hazardous and military-related cargo – both of
  which require specialist management.`,
    `           As a logistic specialist we have the knowledge, experience and
  global network to ensure every cargo – whether hazardous,
  sensitive or more conventional – reaches its destination safely,
  on time and on budget`,
    `  Y&P logistics current success is measured by the niche service we
  offer our present clients and future clients. The infrastructure
  is fully IT based with Compo Clear and EDI access to (South
  African Revenue Service) SARS, Customs systems that competes with
  well-established companies offering similar services. We have been
  accredited with DCACC permit to Custom clear military commodities.`,
  ];
  return (
    <div>
      <Tab.Group>
        <Tab.List className={"lg:space-x-4 space-x-2"}>
          {tabs.map((tab) => (
            <Tab key={tab} as={Fragment}>
              {({ selected }) => (
                <button
                  className={`py-3 px-4 lg:text-base text-sm  ${
                    selected ? "bg-primary text-white" : "bg-[#F4F4F4]"
                  }`}
                >
                  {tab}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {panels.map((para, index) => (
            <Tab.Panel key={index} as={Fragment}>
              <p className="mt-4 text-[#666C89] text-justify">{para}</p>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
