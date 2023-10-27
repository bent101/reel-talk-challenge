import Header from "@/lib/components/Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}
