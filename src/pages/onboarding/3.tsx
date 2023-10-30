import { useState } from "react";
import OnboardingLayout from "./layout";
import clsx from "clsx";
import Link from "next/link";
import { useTop5Selection } from "../../lib/use-top-5";

const genres = [
    "🔫 Action",
    "🪂 Adventure",
    "🔞 Adult",
    "🖍 Animation",
    "📚 Biography",
    "🇮🇳 Bollywood",
    "😂 Comedy",
    "🕵️‍ Crime",
    "☄️ Disaster",
    "🎥 Documentary",
    "🎭 Drama",
    "👪 Family",
    "🦄 Fantasy",
    "🎞 Film-Noir",
    "📜 History",
    "🧟 Horror",
    "🎲 Game-Show",
    "📢 Independent",
    "🌎 International",
    "🎧 Music",
    "🎶 Musical",
    "🔎 Mystery",
    "📰 News",
    "📺 Reality-TV",
    "❤ Romance",
    "💏 Rom-Com",
    "👽 Sci-Fi",
    "🗣 Talk-Show",
    "⏳ Short",
    "🏈 Sport",
    "😱 Thriller",
    "⚔ War",
    "🤠 Western",
];

const INITIAL_NUM_SHOWN_GENRES = 20;

export default function GenreSelection() {
    const top5Genres = useTop5Selection<string>();
    const [showingMore, setShowingMore] = useState(false);

    return (
        <OnboardingLayout>
            <h1 className="text-center text-h3 text-white">
                Select your top 5 genres for movies and TV
            </h1>
            <div className="relative w-full max-w-[544px]">
                <input
                    type="text"
                    placeholder="Search"
                    autoFocus
                    className="absoulute inset-0 w-full rounded-lg bg-white/5 py-[14px] pl-12 pr-6 text-high-emphasis placeholder:text-gray"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/icons/search.svg"
                    alt={""}
                    className="pointer-events-none absolute left-4 top-4 w-4"
                />
            </div>
            <div className="center flex flex-wrap justify-center gap-6">
                {genres
                    .slice(
                        0,
                        showingMore ? genres.length : INITIAL_NUM_SHOWN_GENRES
                    )
                    .map((genre) => {
                        const selected = top5Genres.isSelected(genre);
                        return (
                            <button
                                onClick={() => top5Genres.toggle(genre)}
                                key={genre}
                                className={clsx(
                                    "flex w-40 items-center rounded-lg border-2 p-2.5 text-left text-subheadline",
                                    selected
                                        ? "border-primary bg-primary"
                                        : "border-gray bg-white",
                                    top5Genres.selected.length === 5
                                        ? "cursor-default"
                                        : ""
                                )}
                            >
                                {genre}
                                <div className="relative ml-auto grid h-5 w-5 place-items-center rounded-[4px] border border-black bg-white">
                                    <img
                                        src="/images/icons/black-check.svg"
                                        alt="Selected"
                                        className={clsx(
                                            "relative transition-transform duration-200",
                                            selected ? "scale-100" : "scale-0"
                                        )}
                                    />
                                </div>
                            </button>
                        );
                    })}
            </div>
            <button
                onClick={() => setShowingMore(!showingMore)}
                className="mx-auto flex items-center gap-2 text-medium-emphasis"
            >
                show {showingMore ? "less" : "more"}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/icons/chevron-down.svg"
                    alt=""
                    className={showingMore ? "rotate-180" : "rotate-0"}
                />
            </button>
            <div className="flex w-full max-w-xl gap-8">
                <Link
                    href="/onboarding/2"
                    className="flex-1 rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    Back
                </Link>
                <Link
                    href="/onboarding/4"
                    className={clsx(
                        "flex-1 rounded-lg border-2 p-2.5 text-center font-semibold",
                        top5Genres.selected.length < 5
                            ? "pointer-events-none border-gray bg-gray text-disabled"
                            : "border-primary bg-primary text-secondary"
                    )}
                >
                    Next
                </Link>
            </div>
        </OnboardingLayout>
    );
}
