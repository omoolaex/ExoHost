import CallToAction from "@/components/homepage/CallToAction";
import WebHostingHero from "@/components/webhosting/hero";
import HostingPricing from "@/components/webhosting/HostingPricing";

export default function WebHostingPage () {
    return (
        <>
            <WebHostingHero />
            <HostingPricing />
            <CallToAction />
        </>
    )
}