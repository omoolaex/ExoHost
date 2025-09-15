import DomainRegistration from "@/components/domain-registration/DomainRegistration";
import ExoHostDomainSections from "@/components/domain-registration/DomainSections";
import DomainTips from "@/components/domain-registration/DomainTips";
import DomainVariety from "@/components/domain-registration/DomainVariety";
import PricingTable from "@/components/domain-registration/PricingTable";
import CallToAction from "@/components/homepage/CallToAction";

export default function DomainRegistrationPage () {
    return (
        <>
            <DomainRegistration />
            <DomainVariety />
            <DomainTips />
            <CallToAction />
            <ExoHostDomainSections />
            <PricingTable />
        </>
    );
}