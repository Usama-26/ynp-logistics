import {
  Airplane,
  Consultation,
  Coordination,
  Delivery,
  Supplies,
} from "@/svgs";
import { Label } from "../Label";
import Link from "next/link";
const services = [
  {
    icon: <Delivery />,
    title: "Facilitation",
    paragraph: `Meticulous and efficient management of all paperwork Point-of-origin to point-of-sale. Optimal routing of cargo :To ensure the swift, smooth and secure passage of your goods...`,
  },
  {
    icon: <Airplane />,
    title: "Air Services Licensing",
    paragraph: `Application for a temporary air services license (Section 14 (1)). Application for an air service license (Section 14 (1))...`,
  },
  {
    icon: <Consultation />,
    title: "Consultation",
    paragraph: `Providing advice and information on: Current tariff schedules Customs facilities All relevant legislation and procedures...`,
  },
  {
    icon: <Coordination />,
    title: "Coordination",
    paragraph: `Air, sea, rail and road shipments Customs clearance Warehousing...`,
  },
  {
    icon: <Supplies />,
    title: "Supplies",
    paragraph: `Suppliers of fuel to the SANDF(Jet Fuel,Diesel and petrol). Suppliers of various food commodities in bulk to SANDF...`,
  },
];
export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#E8E8E880]">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <Label>Our Services</Label>
          <h1 className="lg:text-4xl text-2xl font-semibold text-center">
            Our Logistics Services
          </h1>
          <div className="py-6 lg:mx-32 mx-5">
            <div className="flex lg:flex-row flex-col flex-wrap justify-center">
              {services.map(({ icon, title, paragraph }, index) => (
                <div
                  className="lg:w-1/3 w-full lg:py-4 py-8 space-y-2 "
                  key={index}
                >
                  <div className="inline-block mx-auto">{icon}</div>
                  <h2 className="text-xl">{title}</h2>
                  <p className="text-[#666C89] px-10">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href={"services"} className="py-3 px-6 bg-primary text-white">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
