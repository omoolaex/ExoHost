import CallToAction from "@/components/homepage/CallToAction";
import WhoisLookupHero from "@/components/whois-lookup/domainchecker";
import HostingPlans from "@/components/whois-lookup/HostingPlans";
import WhyWhois from "@/components/whois-lookup/WhyWhois";

export default function WhoisLookupPage () {
    return (
        <>
            <WhoisLookupHero />
            <WhyWhois />
            <HostingPlans />
            <CallToAction />
        </>
    )
}