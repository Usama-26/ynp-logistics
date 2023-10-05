import React from "react";
export function Label({children}) {
  return (
    <p className="text-sm lg:text-base inline-block px-2 border-l-4 border-primary bg-[#041C3799]">
      {children}
    </p>
  );
}
