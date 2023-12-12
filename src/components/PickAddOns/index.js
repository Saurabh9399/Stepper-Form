import React from "react";
import HorizontalCard from "../HorizontalCard";

const PickAddOns = ({ onNext, onBack }) => {
  const horrCarArray = [
    {
      title: "Online Service",
      additionalCost: 1,
      description: "Access to multiple games",
    },
    {
      title: "Large Storage",
      additionalCost: 2,
      description: "Extra 1 TB of cloud save",
    },
    {
      title: "Customizable Profile",
      additionalCost: 2,
      description: "Custom theme on your profile",
    },
  ];

  return (
    <div className="w-2/3 h-full mx-auto pt-[10%] flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold mb-4 ml-[16.5%]">Pick add-ons</h1>
      <p className="text-gray-600 mb-6 ml-[16.5%]">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="w-[75%] p-4 mx-auto flex flex-col items-start">
        {horrCarArray.map((item) => (
          <HorizontalCard
            title={item.title}
            additionalCost={item.additionalCost}
            description={item.description}
            key={item.title}
          />
        ))}{" "}
      </div>

      <div className="flex justify-around mt-[10%] w-[88%]">
        <div className="bg-gray-700 text-white px-6 py-3 rounded">
          <button type="button" onClick={onBack}>
            Go Back
          </button>
        </div>
        <div className="bg-gray-700 text-white rounded px-6 py-3">
          <button type="submit">Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default PickAddOns;
