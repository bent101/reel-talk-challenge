import { Movie } from "@/lib/types";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function MoviesSearchBar({
    movies,
    select,
    things,
}: {
    movies: Movie[];
    select: (movie: Movie) => void;
    things: "movies" | "shows";
}) {
    const [query, setQuery] = useState("");
    const results = movies.filter(
        (movie) =>
            movie.director.toLowerCase().includes(query.toLowerCase()) ||
            movie.title.toLowerCase().includes(query.toLowerCase())
    );
    const showingResults = query.length > 0;

    return (
        <div className="relative mx-auto w-full max-w-[544px]">
            <input
                type="text"
                placeholder="Search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={clsx(
                    "absoulute inset-0 w-full rounded-lg bg-white/5 py-[14px] pl-12 pr-6 text-high-emphasis placeholder:text-gray",
                    showingResults ? "rounded-b-none" : ""
                )}
            />

            <Image
                src="/images/icons/search.svg"
                alt={""}
                width={16}
                height={16}
                className="pointer-events-none absolute left-4 top-4 w-4"
            />
            {showingResults && (
                <div className="relative inset-x-0 top-full z-10 h-0">
                    {results.map((movie) => (
                        <button
                            key={movie.id}
                            onClick={() => {
                                select(movie);
                                setQuery("");
                            }}
                            className="flex w-full items-center gap-3 bg-white px-4 py-1.5 text-left last:rounded-b-lg hover:bg-[#ddd]"
                        >
                            <Image
                                src={`/images/${things}/${movie.id}.png`}
                                alt={""}
                                width={56}
                                height={84}
                            />
                            <div className="flex-1 space-y-2">
                                <p>{movie.title}</p>
                                <p className="text-gray">{movie.director}</p>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
