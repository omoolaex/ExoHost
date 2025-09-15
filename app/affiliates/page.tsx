import AffiliateBanners from "@/components/Affiliates/banners";
import AffiliateHero from "@/components/Affiliates/Hero";
import AffiliateSteps from "@/components/Affiliates/HowItWorks";
import AffiliatePayoutInfo from "@/components/Affiliates/payout";
import CallToAction from "@/components/homepage/CallToAction";


export default function () {
    return (
        <>
            <AffiliateHero />
            <AffiliateSteps />
            <AffiliatePayoutInfo />
            <AffiliateBanners />
            <CallToAction />
        </>
    )
}