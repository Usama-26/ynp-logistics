import Image from "next/image";

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
      <div className="p-4 bg-[#7ACEBB] space-y-6 text-white">
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
