import ShortCard from "./ShortCard";

const shorts = [
    "/images/movie-5.jpg",
    "/images/movie-2.jpg",
    "/images/movie-3.jpg",
    "/images/movie-4.webp",
    "/images/movie-1.jpg",
    "/images/movie-2.jpg",
    "/images/movie-3.jpg",
    "/images/movie-5.jpg",
    "/images/movie-4.webp",
    "/images/movie-4.webp",


];

export default function ShortsRow() {
    return (
        <div className="max-w-7xl mx-auto mb-12">

            <h2 className="text-2xl font-semibold mb-4 px-6">
                Shorts
            </h2>

            <div className="flex gap-4 px-6 overflow-x-auto scrollbar-hide">
                {shorts.map((img, i) => (
                    <ShortCard
                        key={i}
                        title={`Short Video ${i + 1}`}
                        image={img}
                    />
                ))}
            </div>

        </div>
    );
}