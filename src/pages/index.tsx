import Layout from "./layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-h1 text-medium-emphasis">h1</h1>
            <h2 className="text-h2 text-medium-emphasis">h2</h2>
            <h3 className="text-h3 text-medium-emphasis">h3</h3>
            <p className="text-headline text-medium-emphasis">headline</p>
            <p className="text-body text-medium-emphasis">body</p>
            <p className="text-subheadline text-medium-emphasis">subheadline</p>
            <p className="text-small text-medium-emphasis">small text</p>
        </Layout>
    );
}
