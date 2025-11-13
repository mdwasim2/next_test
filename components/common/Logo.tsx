import Image, { StaticImageData } from "next/image";

export default function Logo({
  className = "",
  src,
  title,
}: {
  className?: string | StaticImageData;
  src?: string;
  title?: string;
}) {
  return (
    <div className="flex items-center space-x-2">
      <div>
        <Image src={src} alt="logo" width={50} height={50} />
      </div>
      <span className="text-2xl font-bold  text-transparent">{title}</span>
    </div>
  );
}
