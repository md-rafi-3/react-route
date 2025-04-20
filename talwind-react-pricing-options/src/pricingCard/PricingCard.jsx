import React from "react";
import PricingFeture from "./PricingFeture";

const PricingCard = ({pricing}) => {
  const { name, price, description, features } = pricing;
  
  console.log(pricing)

  return (
    <div className="bg-amber-500 rounded-2xl p-4 w-fit flex flex-col ">
      <div>
        {/* card header */}
        <h1 className="text-3xl">{name}</h1>
        <h4 className="text-2xl">{price}</h4>
      </div>
      {/* body */}
      <div className="p-4 rounded-2xl mt-10 bg-amber-400 flex-1">
        <p >{description}</p>
        {
            features.map((feture,index) =><PricingFeture feture={feture} key={index}></PricingFeture>)
        }
      </div>
      <button className="btn w-full mt-4">Wide</button>
    </div>
  );
};

export default PricingCard;
