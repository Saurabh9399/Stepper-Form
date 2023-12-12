import React, { useState } from "react";
import SelectYourPlanCard from "../SelectYourPlanCard";
import arcadeIcon from "../../assets/images/icon-arcade.svg";
import advancedIcon from "../../assets/images/icon-advanced.svg";
import proIcon from "../../assets/images/icon-pro.svg";
import YearAndMonthToggleComponent from "../YearAndMonthToggleComponent";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectYearlyOrMonthly,
  selectYourPlanAction,
} from "../../redux/userSlice";

const SelectYourPlan = ({ onNext, onBack }) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [validationError, setValidationError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PlansArray = [
    {
      title: "Arcade",
      priceForMonth: "9",
      icon: arcadeIcon,
      priceForYear: "90",
    },
    {
      title: "Advanced",
      priceForMonth: "12",
      icon: advancedIcon,
      priceForYear: "120",
    },
    { title: "Pro", priceForMonth: "15", icon: proIcon, priceForYear: "150" },
  ];

  const handleCardClick = (plan) => {
    console.log(plan, isMonthly);
    setSelectedPlan((prevSelectedPlan) => {
      // Toggle the selection state of the clicked card
      if (prevSelectedPlan && prevSelectedPlan.title === plan.title) {
        return null; // Deselect the card if it was already selected
      } else {
        return plan; // Select the clicked card
      }
    });
  };

  const handleSubmitClick = () => {
    console.log(selectedPlan);

    if (!selectedPlan) {
      setValidationError("Please select a plan!");
      return;
    }

    navigate("/pickaddons")

    dispatch(selectYourPlanAction(selectedPlan));
    dispatch(selectYearlyOrMonthly(isMonthly));
  };

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
            duration={isMonthly ? "mo" : "yr"}
            isMonthly={isMonthly}
            onClick={() => handleCardClick(item)}
            isSelected={selectedPlan && selectedPlan.title === item.title}
          />
        ))}
      </div>
      <div className="w-[88%] mt-[3%]">
        <YearAndMonthToggleComponent
          setIsMonthly={setIsMonthly}
          isMonthly={isMonthly}
        />
      </div>

      {validationError && (
        <div className="w-[88%] mt-[3%]">
          <span className="text-red-600">{validationError}</span>
        </div>
      )}

      <div className="flex justify-around mt-[10%] w-[88%]">
        <div className="text-gray-400 font-bold px-6 py-3 rounded">
          <Link to={"/"}>
            <button type="button" onClick={onBack}>
              Go Back
            </button>
          </Link>
        </div>
        <div className="bg-gray-700 text-white rounded px-6 py-3">
          <button type="submit" onClick={handleSubmitClick}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectYourPlan;
