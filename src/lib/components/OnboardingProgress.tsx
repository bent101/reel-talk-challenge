import clsx from "clsx";
import { range } from "../utils";
import Link from "next/link";

export default function OnboardingProgress({
    numSteps,
    curStep,
}: {
    numSteps: number;
    curStep: number;
}) {
    return (
        <div className="flex">
            {range(2, numSteps).map((step) => (
                <div key={step} className="relative h-1 flex-1 bg-gray">
                    <div
                        className={clsx(
                            "absolute inset-0 bg-primary transition-all duration-300",
                            step <= curStep ? "w-full" : "w-0"
                        )}
                    />
                    <div className="absolute right-0 top-0 z-10 w-max -translate-y-2 translate-x-2.5">
                        <Dot curStep={curStep} step={step} />
                    </div>
                    {step === 2 && (
                        <div className="absolute left-0 top-0 z-10 w-max -translate-x-2.5 -translate-y-2">
                            <Dot curStep={curStep} step={1} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function Dot({ curStep, step }: { curStep: number; step: number }) {
    return (
        <div
            className={clsx(
                "relative h-5 w-5 rounded-full transition-colors delay-200 duration-200",
                step <= curStep ? "bg-primary" : "bg-gray"
            )}
        >
            <div
                className={clsx(
                    "absolute inset-1 rounded-full bg-medium-emphasis transition-transform delay-300 duration-200",
                    step === curStep ? "scale-100" : "scale-0"
                )}
            ></div>
        </div>
    );
}
