import { BusinessPartnerCards } from "./components/business-partner-cards";

export const BusinessPartners = () => {
  return (
    <div className="h-[45vh] w-full flex flex-col items-center justify-center">
      <p className="text-[#FFFFFFB3] text-lg">
        Join the 10.000+ companies trusting subang paint
      </p>
      <h2 className="text-2xl">Business Partners</h2>
      <BusinessPartnerCards />
    </div>
  );
};
