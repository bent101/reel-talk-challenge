import Link from "next/link";
import PrimaryLink from "@/lib/components/PrimaryLink";
import clsx from "clsx";
import { useState } from "react";
import OnboardingLayout from "../layout";

export default function CreateAccountWithEmail() {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        password: "",
    });

    // this is bad (doesn't check email for validity or password for strength)
    // should use zod instead for better validation and feedback
    const formIsFilled = Object.values(formData).every((s) => s.length > 0);

    const [showPassword, setShowPassword] = useState(false);

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
            <div className="w-full max-w-[320px] space-y-6">
                <input
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                    }
                    required
                    className="w-full rounded-lg border border-medium-emphasis bg-white/5 px-6 py-3 text-high-emphasis placeholder:text-gray"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full rounded-lg border border-medium-emphasis bg-white/5 px-6 py-3 text-high-emphasis placeholder:text-gray"
                />
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                        required
                        className="w-full rounded-lg border border-medium-emphasis bg-white/5 px-6 py-3 text-high-emphasis placeholder:text-gray"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 grid h-full w-12 place-items-center"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={
                                showPassword
                                    ? "/images/icons/visible.svg"
                                    : "/images/icons/invisible.svg"
                            }
                            alt={
                                showPassword ? "Hide password" : "Show password"
                            }
                        />
                    </button>
                </div>
            </div>
            <p className="text-medium-emphasis">
                Already have an account?{" "}
                <PrimaryLink href="/login">Log in</PrimaryLink>
            </p>
            <div className="flex w-full max-w-xl gap-8">
                <Link
                    href="/"
                    className="flex-1 rounded-lg border-2 border-white p-2.5 text-center font-semibold text-white"
                >
                    Cancel
                </Link>
                <Link
                    href="/onboarding/2"
                    className={clsx(
                        "flex-1 rounded-lg border-2 p-2.5 text-center font-semibold",
                        !formIsFilled
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
