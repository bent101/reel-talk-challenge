import Head from "next/head";
import Layout from "../layout";

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>Login | Reel Talk</title>
            </Head>
            <p className="pt-32 text-center text-medium-emphasis">login page</p>
        </Layout>
    );
}
