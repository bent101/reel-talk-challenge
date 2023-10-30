import PrimaryLink from "@/lib/components/PrimaryLink";
import Image from "next/image";
import Link from "next/link";
import OnboardingLayout from "../layout";

export default function CreateAccount() {
    return (
        <OnboardingLayout>
            <div className="flex flex-col items-center">
                <h1 className="text-h1 text-white">Create your account</h1>
                <p className="text-body text-medium-emphasis">
                    By continuing, you agree to our{" "}
                    <PrimaryLink href="/tos">Terms of Service</PrimaryLink> and{" "}
                    <PrimaryLink href="/privacy-policy">
                        Privacy Policy
                    </PrimaryLink>
                    .
                </p>
            </div>

            <div className="mx-auto w-full max-w-[256px] space-y-4">
                <Link
                    href="/onboarding/2"
                    className="block rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    <Image
                        width={16}
                        height={16}
                        src="/images/icons/apple.svg"
                        className="mr-2.5 inline-block -translate-y-px"
                        alt=""
                    />
                    Continue with Apple
                </Link>
                <Link
                    href="/onboarding/2"
                    className="block rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    <Image
                        width={16}
                        height={16}
                        src="/images/icons/google.svg"
                        className="mr-2.5 inline-block -translate-y-px"
                        alt=""
                    />
                    Continue with Google
                </Link>
                <Link
                    href="/onboarding/2"
                    className="block rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    <Image
                        width={16}
                        height={16}
                        src="/images/icons/facebook.svg"
                        className="mr-2.5 inline-block -translate-y-px"
                        alt=""
                    />
                    Continue with Facebook
                </Link>
                <div className="h-2" />
                <Link
                    href="/onboarding/1/email"
                    className="block rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    Continue with Email
                </Link>
            </div>

            <p className="text-medium-emphasis">
                Already have an account?{" "}
                <PrimaryLink href="/login">Log in</PrimaryLink>
            </p>
            <div className="flex w-full max-w-xl gap-8">
                <Link
                    href="/"
                    className="mx-auto max-w-[256px] flex-1 rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    Cancel
                </Link>
            </div>
        </OnboardingLayout>
    );
}
