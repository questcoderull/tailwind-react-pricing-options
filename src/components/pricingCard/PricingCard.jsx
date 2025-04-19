import React from "react";
import PricingFeature from "../pricingFeaturs/PricingFeature";

const PricingCard = ({ data }) => {
  const { features } = data;
  return (
    <div className="border bg-amber-600 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h3 className="text-5xl">{data.name}</h3>
        <h4 className="text-2xl">
          ${data.price}/{data.billingCycle}
        </h4>
      </div>

      {/* card body */}
      <div className="bg-amber-500 p-4 rounded-2xl mt-10">
        <p>{data.description}</p>

        <div className="mt-5">
          {/* {features.map((feature) => (
            <p>{feature}</p>
          ))} */}

          {/* instead of using p tag, we will can use any component. and that's why i am gonna make another compnent */}
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
