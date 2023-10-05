import { Bolt, Cost, Shield } from "@/svgs";
import Image from "next/image";

const features = [
  {
    icon: <Bolt />,
    title: "Right on time",
    paragraph: `At our logistics company, we're all about being 'Right on Time.' We excel in streamlining global logistics, guaranteeing seamless supply chains for our clients. With our commitment to efficiency and reliability, we ensure your shipments arrive precisely when and where they should.`,
  },
  {
    icon: <Cost />,
    title: "Cost Saving",
    paragraph: `Y & P logistics not only prioritizes punctuality but also offers cost-saving solutions. We optimize routes, minimize expenses, and maximize your budget efficiency to ensure your logistics needs are met affordably and efficiently.`,
  },
  {
    icon: <Shield />,
    title: "Safe & Secure",
    paragraph: `We combines precision with a strong focus on safety and security. We prioritize the protection of your cargo and deliver peace of mind throughout the supply chain journey.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h1 className="lg:text-4xl text-2xl font-semibold text-center">
          Why Choose Us
        </h1>
        <div className="py-20 flex lg:flex-row flex-col gap-8 lg:px-20 px-5">
          <div className="basis-1/2">
            <Image
              src={"/images/home/why-choose-us.png"}
              height={650}
              width={792}
              alt="Truck Photo"
              className="w-96 mx-auto"
            />
          </div>
          <div className="basis-1/2 space-y-4">
            {features.map(({ icon, title, paragraph }, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col gap-8 lg:text-left text-center"
              >
                <span className="lg:mx-0 mx-auto basis-3/12">{icon}</span>
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold">{title}</h1>
                  <p className="text-justify text-[#666C89]">{paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
