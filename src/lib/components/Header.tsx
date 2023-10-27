import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white py-2">
            <div className="mx-auto flex h-full max-w-[1120px] items-center px-4">
                <Logo />
                <Link
                    className="ml-4 px-2 py-1.5 text-secondary hover:underline"
                    href="/browse"
                >
                    Browse
                </Link>
                <Link
                    className="px-2 py-1.5 text-secondary hover:underline"
                    href="/community"
                >
                    Community
                </Link>
                <Link
                    className="px-2 py-1.5 text-secondary hover:underline"
                    href="/discussions"
                >
                    Discussions
                </Link>
                <div className="mr-4 flex-1">
                    <div className="relative mx-auto max-w-[351px]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="absoulute inset-0 w-full rounded-lg bg-black/[8%] pb-[0.3125rem] pl-10 pr-6 pt-[0.4375rem] placeholder:text-gray"
                        />
                        <Image
                            width={16}
                            height={16}
                            src="/images/search.svg"
                            alt={""}
                            className="pointer-events-none absolute left-2.5 top-2.5 w-4"
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
                    href="/login"
                    className="rounded border border-primary bg-primary px-4 py-1.5 text-secondary"
                >
                    Signup
                </Link>
            </div>
        </header>
    );
}
