import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex w-max items-center gap-1">
            <Image
                className="inline"
                src={"/images/icons/logo.svg"}
                alt={"Reel Talk"}
                width={24}
                height={26}
            />
            <span className="whitespace-nowrap text-[17px] font-bold text-secondary">
                REEL TALK
            </span>
        </Link>
    );
}
