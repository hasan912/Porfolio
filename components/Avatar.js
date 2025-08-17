import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image
    src={'/avatar.png'}
    height={600}
    width={500}
    alt=""
    className="translate-z-0 w-auto h-auto "/>
  </div>;
};

export default Avatar;
