import { Label } from "@/components/Label";
import WebLayout from "@/layouts/WebLayout";
import Image from "next/image";

export default function Services() {
  return (
    <WebLayout>
      <Hero />
      <ServiceSection image={"/images/home/truck-group.png"}>
        <h1 className="lg:text-4xl text-2xl font-semibold">Facilitation</h1>
        <p className="text-[#666C89] text-justify">
          Providing meticulous paperwork management and efficient cargo routing
          for swift, secure deliveries, along with expert customs broking and
          negotiations to minimize duties and expedite processes.
        </p>
      </ServiceSection>
      <ServiceSection
        order={"lg:flex-row-reverse"}
        image={"/images/home/truck-group.png"}
      >
        <h1 className="lg:text-4xl text-2xl font-semibold">Coordination</h1>
        <p className="text-[#666C89] text-justify">
          Offering a wide range of logistics services including transportation
          via air, sea, rail, and road, meticulous customs clearance, secure
          warehousing solutions, comprehensive insurance coverage throughout
          transportation and storage, and diligent supervision and inspection.
        </p>
      </ServiceSection>
      <ServiceSection image={"/images/home/truck-group.png"}>
        <h1 className="lg:text-4xl text-2xl font-semibold">Consultation</h1>
        <p className="text-[#666C89] text-justify">
          Offering guidance on tariff schedules, customs regulations, and legal
          procedures, while also conducting assessments of freight choices and
          risk factors, including hazardous cargo transport and potential
          natural or political disasters.
        </p>
      </ServiceSection>
      <ServiceSection
        order={"lg:flex-row-reverse"}
        image={"/images/home/truck-group.png"}
      >
        <h1 className="lg:text-4xl text-2xl font-semibold">
          Air Services Licensing
        </h1>
        <p className="text-[#666C89] text-justify">
          Submitting applications for temporary and standard air service
          licenses, license amendments, as well as requests for exemptions from
          specific regulatory sections, such as Section 12(1) and Section
          16(4)(e).
        </p>
      </ServiceSection>
      <ServiceSection
        order={"lg:flex-row-reverse"}
        image={"/images/home/truck-group.png"}
      >
        <h1 className="lg:text-4xl text-2xl font-semibold">Suppliers</h1>
        <p className="text-[#666C89] text-justify">
          Offering fuel supply services (jet fuel, diesel, petrol) to the SANDF,
          as well as bulk food commodity supply and medical supplies/equipment
          provision to government hospitals.
        </p>
      </ServiceSection>
    </WebLayout>
  );
}

function Hero() {
  return (
    <section className="w-full relative">
      <div className="relative text-white">
        <Image
          src={"/images/services/banner-img.jpg"}
          width={1024}
          height={720}
          alt="Hero Image"
          className="w-full md:h-96 h-48 object-cover"
        />

        <div className=" absolute w-full h-full top-0 lg:px-96 px-10 bg-black/50 flex lg:justify-start justify-center items-center">
          <div className="space-y-4">
            <p className="bg-[#041C3799] text-sm lg:text-base inline-block px-2 border-l-4 border-primary">
              Services
            </p>
            <h1 className="lg:text-6xl text-3xl font-semibold">Our Services</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSection({ order, image, children }) {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div
          className={` flex lg:flex-row flex-col ${order} gap-8 lg:px-20 px-5`}
        >
          <div className="basis-1/2">
            <Image
              src={image}
              height={590}
              width={850}
              alt="Truck Photo"
              className=""
            />
          </div>
          <div className="basis-1/2 space-y-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
