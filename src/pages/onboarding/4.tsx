import Top5Selection from "../../lib/components/Top5Selection";

const movies = [
    {
        title: "The Shawshank Redemption (1994)",
        director: "Frank Darabont",
        id: 1,
    },
    {
        title: "Inception (2010)",
        director: "Christopher Nolan",
        id: 2,
    },
    {
        title: "Intouchables (2011)",
        director: "Olivier Nakache, Éric Toledano",
        id: 3,
    },
    {
        title: "WALL·E (2008)",
        director: "Andrew Stanton",
        id: 4,
    },
    {
        title: "Flipped (2010)",
        director: "Rob Reiner",
        id: 5,
    },
    {
        title: "The Dark Knight (2008)",
        director: "Christopher Nolan",
        id: 6,
    },
];

export default function MoviesSelection() {
    return (
        <Top5Selection
            things="movies"
            data={movies}
            prevPage="/onboarding/3"
            nextPage="/onboarding/5"
        />
    );
}
