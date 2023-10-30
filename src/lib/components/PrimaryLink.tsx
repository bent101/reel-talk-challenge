import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export default function PrimaryLink({
    children,
    href,
}: {
    children: ReactNode;
    href: string;
}) {
    return (
        <Link
            href={href}
            className="font-semibold text-primary underline-offset-4 hover:underline"
        >
            {children}
        </Link>
    );
}
