import Image from "next/image";

const Bulb = () => {
  return <div className="absolute -left-36 -bottom-10 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[240px] xl:[300px]">
    <Image
    src={'/bulb.png'}
    height={300}
    width={240}
    className=" w-full h-full"
    alt=""

    />
  </div>;
};

export default Bulb;
