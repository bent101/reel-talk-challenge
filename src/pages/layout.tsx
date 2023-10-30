import Header from "@/lib/components/Header";
import Head from "next/head";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Head>
                <title>Reel Talk</title>
            </Head>
            <Header />
            <main>{children}</main>
        </div>
    );
}
