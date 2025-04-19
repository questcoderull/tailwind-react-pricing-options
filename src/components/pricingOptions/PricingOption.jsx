import React, { use } from "react";
import PricingCard from "../pricingCard/PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const pricingDara = use(pricingPromise);

  return (
    <div>
      <h2 className="text-3xl">Get our membership</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {pricingDara.map((data) => (
          <PricingCard key={data.id} data={data}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
