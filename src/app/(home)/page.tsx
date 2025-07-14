import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center item-center h-full">
     <Image src="/logoArp.png" alt="arpdev" width={500} height={500} className=" object-contain"/>
    </div>
  );
}
