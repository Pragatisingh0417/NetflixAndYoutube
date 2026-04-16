"use client";

import { useRef } from "react";
import LiveCard from "./LiveCardNew";

const liveStreams = [
    {
        title: "Live Concert Night",
        image: "/images/movie-1.jpg",
        channel: "Music Live",
        viewers: "12K",
    },
    {
        title: "Gaming Stream",
        image: "/images/movie-7.jpg",
        channel: "Pro Gamer",
        viewers: "8.4K",
    },
    {
        title: "Podcast Live",
        image: "/images/movie-3.jpg",
        channel: "Talk Show",
        viewers: "3.2K",
    },
    {
        title: "Tech Review Live",
        image: "/images/movie-8.jpg",
        channel: "Tech Guru",
        viewers: "5.1K",
    },
    {
        title: "Gaming Stream",
        image: "/images/movie-7.jpg",
        channel: "Pro Gamer",
        viewers: "8.4K",
    },
];

export default function LiveRow() {
    const rowRef = useRef<HTMLDivElement>(null);
    console.log("LiveCard:", LiveCard);
    const scroll = (dir: "left" | "right") => {
        if (rowRef.current) {
            rowRef.current.scrollBy({
                left: dir === "left" ? -400 : 400,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto  relative group mt-10">

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 px-6">
                🔴 Live Now
            </h2>

            {/* LEFT BUTTON */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
                ◀
            </button>

            {/* RIGHT BUTTON */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/60 p-3 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
                ▶
            </button>

            {/* Scroll Row */}
            <div
                ref={rowRef}
                className="flex gap-6 px-6 overflow-x-auto scrollbar-hide"
            >
                {liveStreams.map((stream, i) => (
                    <LiveCard key={i} {...stream} />
                ))}
            </div>

        </div>
    );
}