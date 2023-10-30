import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

/**
 * mm/dd/yyyy
 */
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;

export default function DateInput({
    autoFocus,
    setInputIsValid,
}: {
    autoFocus: boolean;
    setInputIsValid: (val: boolean) => void;
}) {
    const [birthdate, setBirthdate] = useState("");
    const birthdateIsValid = dateRegex.test(birthdate);
    setInputIsValid(birthdateIsValid);
    return (
        <>
            <input
                autoFocus={autoFocus}
                type="text"
                placeholder="MM/DD/YYYY"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className={clsx(
                    "w-full rounded-lg border bg-white/5 px-6 py-3 text-high-emphasis placeholder:text-gray",
                    birthdateIsValid
                        ? "border-primary"
                        : "border-medium-emphasis"
                )}
            />
            <Image
                src="/images/icons/check.svg"
                width={16}
                height={11}
                alt=""
                className={clsx(
                    "absolute right-4 top-5 transition-all duration-100",
                    birthdateIsValid ? "scale-100" : "scale-50 opacity-0"
                )}
            />
        </>
    );
}
