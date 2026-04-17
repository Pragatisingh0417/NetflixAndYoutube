"use client";

type PlatformCardProps = {
  name: string;
  logo: string;
};

export default function PlatformCard({ name, logo }: PlatformCardProps) {
  return (
    <div className="flex items-center justify-center cursor-pointer group">

      <img
        src={logo}
        alt={name}
        className="h-12 md:h-26 lg:h-30 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
      />

    </div>
  );
}