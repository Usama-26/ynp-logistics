import { Email, Location, Phone } from "@/svgs";
import { Label } from "../Label";

export default function ContactUs() {
  return (
    <section className=" bg-[#ACE8DA]">
      <div className="container mx-auto">
        <div className=" max-w-5xl lg:mx-auto w-full mx-5 py-10 flex items-center lg:flex-row flex-col gap-8 ">
          <div className="lg:basis-2/5 w-full">
            <div className=" space-y-3">
              <Label>Contact</Label>
              <h1 className="lg:text-4xl text-2xl font-semibold">
                Get in touch with us
              </h1>
              <p>
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </p>
              <div className="space-y-6">
                <div className="flex lg:flex-row flex-col lg:text-left text-center items-center gap-4 ">
                  <Email />
                  <div>
                    <p>Email</p>
                    <p>pravesh@yplogistics.co.za</p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:text-left text-center items-center gap-4 ">
                  <Phone />
                  <div>
                    <p>Call Us</p>
                    <p>Tel: +27 11 466 8681 | Fax: +27 11 318 2047</p>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:text-left text-center items-center gap-4 ">
                  <Location />
                  <div>
                    <p>
                      3 Monte Carlo Crescent | Kyalami <br /> Business Park |
                      Kyalami Boulevard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:basis-3/5 basis-full">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
function Form() {
  return (
    <form className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <input
        type="text"
        className="border-2 py-2 px-4 placeholder:text-black bg-transparent"
        placeholder="Your Name*"
      />
      <input
        type="email"
        className="border-2 py-2 px-4 placeholder:text-black bg-transparent"
        placeholder="Email*"
      />
      <input
        type="text"
        className="border-2 py-2 px-4 placeholder:text-black bg-transparent"
        placeholder="Phone Number*"
      />
      <input
        type="text"
        className="border-2 py-2 px-4 placeholder:text-black bg-transparent"
        placeholder="City*"
      />
      <textarea
        className="border-2 py-2 px-4 placeholder:text-black bg-transparent resize-none lg:col-span-2"
        placeholder="Your Message*"
        rows={5}
      ></textarea>
      <button className="bg-[#161616] py-3 px-4 text-white w-3/5 ">
        Submit Message
      </button>
    </form>
  );
}
