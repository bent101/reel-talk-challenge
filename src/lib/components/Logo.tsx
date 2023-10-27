import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center w-max gap-1">
            <Image
                className="inline"
                src={"/images/logo.svg"}
                alt={"Reel Talk"}
                width={24}
                height={26}
            />
            <span className="text-secondary whitespace-nowrap font-bold text-[17px]">
                REEL TALK
            </span>
        </Link>
    );
}
