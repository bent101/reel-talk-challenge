import Layout from "./layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-medium-emphasis text-h1">h1</h1>
            <h2 className="text-medium-emphasis text-h2">h2</h2>
            <h3 className="text-medium-emphasis text-h3">h3</h3>
            <p className="text-medium-emphasis text-headline">headline</p>
            <p className="text-medium-emphasis text-body">body</p>
            <p className="text-medium-emphasis text-subheadline">subheadline</p>
            <p className="text-medium-emphasis text-small">small text</p>
        </Layout>
    );
}
