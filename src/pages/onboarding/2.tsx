import DateInput from "@/lib/components/DateInput";
import { range } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import OnboardingLayout from "./layout";
import clsx from "clsx";
import { useState } from "react";

export default function Birthday() {
    const [inputIsValid, setInputIsValid] = useState(false);

    return (
        <OnboardingLayout>
            <div className="max-w-xl space-y-2.5 px-4">
                <p className="text-center text-h3 text-white">
                    Welcome, Karl!
                    <br />
                    Mind sharing your birthdate?
                </p>
                <p className="text-center text-medium-emphasis">
                    To personalize your content recommendations and to ensure
                    it&apos;s all age-appropriate, could you kindly share your
                    date of birth with us?
                </p>
            </div>
            <div className="relative w-full max-w-xs">
                <DateInput autoFocus setInputIsValid={setInputIsValid} />
            </div>

            <div className="flex flex-col items-center gap-4 rounded-lg bg-white/5 p-6">
                <div className="text-5xl font-semibold text-high-emphasis">
                    We love our birthday movies&nbsp; 🎉
                </div>
                <div className="flex gap-3">
                    {range(1, 6).map((i) => (
                        <Image
                            key={i}
                            src={`/images/birthday-movies/${i}.png`}
                            alt=""
                            width={72}
                            height={110}
                        />
                    ))}
                </div>
            </div>

            <div className="flex w-full max-w-xl gap-8">
                <Link
                    href="/onboarding/1"
                    className="flex-1 rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    Back
                </Link>
                <Link
                    href="/onboarding/3"
                    className={clsx(
                        "flex-1 rounded-lg border-2 p-2.5 text-center font-semibold",
                        !inputIsValid
                            ? "pointer-events-none border-gray bg-gray text-disabled"
                            : "border-primary bg-primary text-secondary"
                    )}
                >
                    Next
                </Link>
            </div>
        </OnboardingLayout>
    );
}
