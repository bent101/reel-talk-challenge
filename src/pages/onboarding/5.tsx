import Top5Selection from "../../lib/components/Top5Selection";

const shows = [
    {
        title: "Breaking Bad (2008–2013)",
        director: "Vince Gilligan",
        id: 1,
    },
    {
        title: "Band of Brothers (2001)",
        director: "",
        id: 2,
    },
    {
        title: "Chernobyl (2019)",
        director: "Johan Renck",
        id: 3,
    },
    {
        title: "The Wire (2002–2008)",
        director: "Clark Johnson",
        id: 4,
    },
    {
        title: "The Sopranos (1997–2007)",
        director: "David Henry Chase",
        id: 5,
    },
    {
        title: "Game of Thrones (2011–2019)",
        director: "",
        id: 6,
    },
];

export default function MoviesSelection() {
    return (
        <Top5Selection
            things="shows"
            data={shows}
            prevPage="/onboarding/4"
            nextPage="/"
        />
    );
}
