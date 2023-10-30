// this is an abstraction for the top 5 movies page and top 5 shows page
// (they are almost identical)

import Image from "next/image";
import OnboardingLayout from "../../pages/onboarding/layout";
import { useTop5Selection } from "../use-top-5";
import clsx from "clsx";
import { range } from "@/lib/utils";
import Link from "next/link";
import { Movie } from "@/lib/types";
import MoviesSearchBar from "./MoviesSearchBar";

export default function Top5Selection({
    things,
    data,
    prevPage,
    nextPage,
}: {
    things: "movies" | "shows";
    data: Movie[];
    prevPage: string;
    nextPage: string;
}) {
    const top5 = useTop5Selection<Movie>();

    return (
        <OnboardingLayout>
            <div className="max-w-[630px] space-y-2.5 px-4">
                <p className="text-center text-h3 text-white">
                    Select your top 5{" "}
                    {things === "movies" ? "movies" : "TV shows"}
                </p>
                <p className="pb-4 text-center text-medium-emphasis">
                    Selecting your top 5{" "}
                    {things === "movies" ? "movies" : "TV shows"} will enable us
                    to suggest like-minded users and nearby communities for
                    exciting watch parties and movie premiere gatherings.
                </p>
                <MoviesSearchBar
                    movies={data.filter((thing) => !top5.isSelected(thing))}
                    select={top5.toggle}
                    things={things}
                />
            </div>

            <div className="w-full max-w-[696px]">
                <h2 className="pb-4 text-headline text-white">
                    {things === "movies" ? "Movies" : "TV Shows"} you might like
                </h2>
                <div className="flex items-start gap-5">
                    {data.map((movie) => {
                        return (
                            <div className="contents" key={movie.id}>
                                <Cover
                                    movie={movie}
                                    selected={top5.isSelected(movie)}
                                    toggle={() => top5.toggle(movie)}
                                    things={things}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0 h-44 bg-[#2d2d2d] p-8">
                <div className="mx-auto flex max-w-[592px] flex-col gap-4 md:flex-row md:gap-12">
                    <div className="flex-1 space-y-5">
                        <h2 className="text-headline text-high-emphasis">
                            Your top 5 selections
                        </h2>
                        <div className="flex gap-3">
                            {range(0, 4).map((i) => (
                                <div className="contents" key={i}>
                                    <Slot top5={top5} i={i} things={things} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 space-y-4">
                        <Link
                            href={prevPage}
                            className="block rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                        >
                            Back
                        </Link>
                        <Link
                            href={nextPage}
                            className={clsx(
                                "block rounded-lg border-2 p-2.5 text-center font-semibold",
                                top5.selected.length === 0
                                    ? "border-white text-white"
                                    : "border-primary bg-primary text-secondary"
                            )}
                        >
                            {top5.selected.length === 0 ? "Skip" : "Next"}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-32" />
        </OnboardingLayout>
    );
}

function Slot({
    top5,
    i,
    things,
}: {
    top5: ReturnType<typeof useTop5Selection<Movie>>;
    i: number;
    things: "movies" | "shows";
}) {
    const movie = top5.selected[i];
    return (
        <div
            key={i}
            className="relative h-[73px] w-[51px] border border-dashed border-medium-emphasis"
        >
            {movie && (
                <div className="absolute -inset-px">
                    <Image
                        src={`/images/${things}/${movie.id}.png`}
                        alt={""}
                        width={51}
                        height={73}
                    />
                    <button
                        aria-label={`Unselect ${movie.title}`}
                        onClick={() => top5.toggle(movie)}
                        className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-white"
                    >
                        <div className="h-px w-2 bg-black" />
                    </button>
                </div>
            )}
        </div>
    );
}

function Cover({
    movie,
    selected,
    toggle,
    things,
}: {
    movie: Movie;
    selected: boolean;
    toggle: () => void;
    things: "movies" | "shows";
}) {
    return (
        <button onClick={toggle} key={movie.id} className="relative w-[96px]">
            <figure className="w-full">
                <Image
                    src={`/images/${things}/${movie.id}.png`}
                    alt=""
                    width={96}
                    height={142}
                    className={clsx(
                        "h-[142px] w-full rounded-[0.25rem] border-2",
                        selected ? "border-primary" : "border-transparent"
                    )}
                />
                <figcaption className="pt-1 text-center text-small text-medium-emphasis">
                    {movie.title}
                </figcaption>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/icons/circle-check.svg"
                    alt="Selected"
                    className={clsx(
                        "absolute right-2 top-2 transition-transform duration-200",
                        selected ? "scale-100" : "scale-0"
                    )}
                />
            </figure>
        </button>
    );
}
