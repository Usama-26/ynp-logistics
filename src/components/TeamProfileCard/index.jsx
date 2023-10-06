import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";
export default function TeamProfileCard({
  image,
  name,
  designation,
  phone,
  email,
}) {
  return (
    <div className="relative w-80 mx-auto shadow-lg">
      <Image
        src={`/images/home/${image}.png`}
        width={364}
        height={421}
        alt="Devi Parayadachy"
        className="w-full h-80 object-contain"
      />
      <div className="relative p-4 bg-[#7ACEBB] space-y-6 text-white">
        <div className="absolute right-0 -top-5 inline-block bg-[#E4B160]">
          <div className="flex gap-2 p-2 ">
            <Link href={"/"}>
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link href={"/"}>
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link href={"/"}>
              <FaLinkedin className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="uppercase font-medium">{name}</h1>
          <h6>{designation}</h6>
        </div>
        <div className="flex justify-between text-sm">
          <span>{phone}</span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
}
