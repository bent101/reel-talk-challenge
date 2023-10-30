import { ReactNode } from "react";
import Layout from "../layout";
import OnboardingProgress from "@/lib/components/OnboardingProgress";
import { useRouter } from "next/router";
import Head from "next/head";

export default function OnboardingLayout({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();
    const curStep = +router.pathname.charAt(12);

    return (
        <Layout>
            <Head>
                <title>Onboarding | Reel Talk</title>
            </Head>
            <div className="mx-auto flex max-w-[930px] flex-col items-center gap-14 px-4 py-12">
                <div className="mx-auto w-full max-w-[437px]">
                    <OnboardingProgress numSteps={5} curStep={curStep} />
                </div>
                {children}
            </div>
        </Layout>
    );
}
