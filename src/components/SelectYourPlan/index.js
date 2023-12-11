import React from "react";
import SelectYourPlanCard from "../SelectYourPlanCard";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import YearAndMonthToggleComponent from "../YearAndMonthToggleComponent";

const SelectYourPlan = ({ onNext, onBack }) => {
  const [isMonthly, setIsMonthly] = React.useState(true);
  const PlansArray = [
    { title: "Arcade", priceForMonth: "9", icon: arcadeIcon,priceForYear:"90" },
    { title: "Advanced", priceForMonth: "12", icon: advancedIcon,priceForYear:"120" },
    { title: "Pro", priceForMonth: "15", icon: proIcon,priceForYear:"150" },
  ];
  return (
    <div className="w-2/3 h-full mx-auto pt-[10%] flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold mb-4 ml-[16.5%]">Select your plan</h1>
      <p className="text-gray-600 mb-6 ml-[16.5%]">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex ml-[14%]">
        {PlansArray.map((item) => (
          <SelectYourPlanCard
            title={item.title}
            icon={item.icon}
            price={isMonthly ? item.priceForMonth : item.priceForYear}
            key={item.title}
            duration={isMonthly? "mo" : "yr"}
            isMonthly={isMonthly}
          />
        ))}
      </div>
      <div className="w-[88%] mt-[3%]">
        <YearAndMonthToggleComponent setIsMonthly={setIsMonthly} isMonthly={isMonthly} />
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

export default SelectYourPlan;
