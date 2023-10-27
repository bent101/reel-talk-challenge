import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white py-2">
            <div className="max-w-[1120px] px-4 mx-auto h-full flex items-center">
                <Logo />
                <Link
                    className="py-1.5 ml-4 px-2 text-secondary hover:underline"
                    href="/browse"
                >
                    Browse
                </Link>
                <Link
                    className="py-1.5 px-2 text-secondary hover:underline"
                    href="/community"
                >
                    Community
                </Link>
                <Link
                    className="py-1.5 px-2 text-secondary hover:underline"
                    href="/discussions"
                >
                    Discussions
                </Link>
                <div className="flex-1 mr-4">
                    <div className="relative max-w-[351px] mx-auto">
                        <input
                            type="text"
                            placeholder="Search"
                            className="absoulute w-full inset-0 pl-10 pr-6 pt-[0.4375rem] pb-[0.3125rem] bg-black/[8%] placeholder:text-gray rounded-lg"
                        />
                        <Image
                            width={16}
                            height={16}
                            src="/images/search.svg"
                            alt={""}
                            className="absolute pointer-events-none left-2.5 top-2.5 w-4"
                        />
                    </div>
                </div>
                <Link
                    href="/login"
                    className="px-4 mr-4 rounded border border-secondary text-secondary py-1.5"
                >
                    Login
                </Link>
                <Link
                    href="/login"
                    className="px-4 rounded bg-primary border border-primary text-secondary py-1.5"
                >
                    Signup
                </Link>
            </div>
        </header>
    );
}
