import React from "react";
import Image from "next/image";
export const Card = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white shadow-md p-4 justify-center items-center">
      <Image src={'/iphone 14.jpg'} alt={""} width={100} height={50} className="object-contain" />
      <div className="text-sm">iPhone 14 Pro</div>
      <div className="text-sm">128 gb</div>
    </div>
  );
};

export default Card;
