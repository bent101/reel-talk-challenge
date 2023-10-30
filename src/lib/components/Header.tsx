import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white py-2">
            <div className="mx-auto flex h-full max-w-[1120px] items-center px-4">
                <Logo />
                <Link
                    className="ml-4 px-2 py-1.5 text-secondary underline-offset-4 hover:underline"
                    href="/browse"
                >
                    Browse
                </Link>
                <Link
                    className="px-2 py-1.5 text-secondary underline-offset-4 hover:underline"
                    href="/community"
                >
                    Community
                </Link>
                <Link
                    className="px-2 py-1.5 text-secondary underline-offset-4 hover:underline"
                    href="/discussions"
                >
                    Discussions
                </Link>
                <div className="mr-4 flex-1">
                    <div className="relative mx-auto max-w-[351px]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="absoulute inset-0 w-full rounded-lg bg-black/[8%] py-2 pl-12 pr-6 placeholder:text-gray"
                        />
                        <Image
                            src="/images/icons/search.svg"
                            alt={""}
                            width={16}
                            height={16}
                            className="pointer-events-none absolute left-6 top-[11px] w-4"
                        />
                    </div>
                </div>
                <Link
                    href="/login"
                    className="mr-4 rounded border border-secondary px-4 py-1.5 text-secondary"
                >
                    Login
                </Link>
                <Link
                    href="/onboarding/1"
                    className="rounded border border-primary bg-primary px-4 py-1.5 text-secondary"
                >
                    Signup
                </Link>
            </div>
        </header>
    );
}
