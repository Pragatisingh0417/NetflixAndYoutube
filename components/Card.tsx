type CardProps = {
    title: string;
    image: string;
    duration?: string;
    index?: number; // NEW
};

export default function Card({ title, image, duration, index }: CardProps) {
    return (
        <div className="relative w-52 flex-shrink-0 mr-4 group cursor-pointer">

            {/* NUMBER */}
            {index !== undefined && (
                <span className="absolute -left-3 bottom-0 text-[100px] font-bold z-20 stroke-text pointer-events-none">
                    {index + 1}
                </span>
            )}

            {/* IMAGE */}
            <div className="relative z-10">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72 object-cover rounded-lg group-hover:scale-105 transition duration-300"
                />
            </div>

        </div>
    );
}