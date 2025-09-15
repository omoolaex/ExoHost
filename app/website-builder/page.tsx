import CallToAction from "@/components/homepage/CallToAction";
import SiteBuilderFeatures from "@/components/website-builder/features";
import WebsiteBuilderHero from "@/components/website-builder/hero";
import WebsiteBuilderPricing from "@/components/website-builder/pricing";
import SiteSecuritySection from "@/components/website-builder/security";
import StepsToGetStarted from "@/components/website-builder/steps";
import WhyChooseExoHost from "@/components/website-builder/WhyChooseExoHost";


export default function WebsiteBuilderPage () {
    return (
        <>
            <WebsiteBuilderHero />
            <WebsiteBuilderPricing />
            <WhyChooseExoHost />
            <StepsToGetStarted />
            <SiteBuilderFeatures />
            <SiteSecuritySection />
            <CallToAction />
        </>
    )
}