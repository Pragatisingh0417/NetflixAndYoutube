type ShortCardProps = {
  title: string;
  image: string;
};

export default function ShortCard({ title, image }: ShortCardProps) {
  return (
    <div className="w-60 h-100 flex-shrink-0 relative rounded-lg overflow-hidden cursor-pointer group">

      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />

      {/* Overlay */}
      {/* <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent">
        <p className="text-xs text-white line-clamp-2">{title}</p>
      </div> */}

    </div>
  );
}