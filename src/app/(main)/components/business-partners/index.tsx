import { BusinessPartnerCards } from "./components/business-partner-cards";

export const BusinessPartners = () => {
  return (
    <div className="h-[45vh] bg-[#FCFAF9] py-10 w-full flex flex-col items-center justify-center">
      <p className="text-[#1D274EBF] text-lg">
        Join the 10.000+ companies trusting subang paint
      </p>
      <h2 className="text-2xl">Business Partners</h2>
      <BusinessPartnerCards />
    </div>
  );
};
