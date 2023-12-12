import React, { useState } from "react";
import HorizontalCard from "../HorizontalCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAddOns } from "../../redux/userSlice";

const PickAddOns = ({ onNext, onBack }) => {
  const [selectedAddons, setSelectedAddons] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMonthly = useSelector((store) => store.user.monthly);

  const horrCarArray = [
    {
      title: "Online Service",
      additionalCostForM: 1,
      additionalCostForY:10,
      description: "Access to multiple games",
    },
    {
      title: "Large Storage",
      additionalCostForM: 2,
      additionalCostForY:20,
      description: "Extra 1 TB of cloud save",
    },
    {
      title: "Customizable Profile",
      additionalCostForM: 2,
      additionalCostForY:20,
      description: "Custom theme on your profile",
    },
  ];

  const handleCheckboxChange = (addon) => {
    if (selectedAddons.includes(addon)) {
      setSelectedAddons((prevSelected) => prevSelected.filter((item) => item !== addon));
    } else {
      setSelectedAddons((prevSelected) => [...prevSelected, addon]);
    }
  };

  const handleAddOnsClick = () => {
    dispatch(selectAddOns(selectedAddons))
    navigate("/finish")
  }

  return (
    <div className="w-2/3 h-full mx-auto pt-[5%] flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold mb-4 ml-[16.5%]">Pick add-ons</h1>
      <p className="text-gray-600 mb-6 ml-[16.5%]">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="w-[75%] mx-auto flex flex-col items-start">
        {horrCarArray.map((item) => (
          <HorizontalCard
            title={item.title}
            additionalCost={isMonthly?item.additionalCostForM:item.additionalCostForY}
            description={item.description}
            key={item.title}
            onChange={() => handleCheckboxChange(item)}
            isChecked={selectedAddons.includes(item)}
            isMonthly={isMonthly}
          />
        ))}{" "}
      </div>

      <div className="flex justify-around mt-[3%] w-[88%]">
        <div className="text-gray-400 font-bold px-6 py-3 rounded">
          <Link to={"/plan"}>
            <button type="button" onClick={onBack}>
              Go Back
            </button>
          </Link>
        </div>
        <div className="bg-gray-700 text-white rounded px-6 py-3">
         
            <button type="submit" disabled={selectedAddons.length === 0} onClick={handleAddOnsClick}>
              Next Step
            </button>
        </div>
      </div>
    </div>
  );
};

export default PickAddOns;
