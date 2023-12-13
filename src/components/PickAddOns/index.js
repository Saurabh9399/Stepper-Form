import React from "react";
import HorizontalCard from "../HorizontalCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateHorrCardArray } from "../../redux/userSlice";

const PickAddOns = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMonthly = useSelector((store) => store.user.monthly);
 const horrCardArray = useSelector((store) => store.user.horrCardArray);

 const handleCheckboxChange = (item, checked) => {

  // Update the checked property in horrCardArray
  const updatedArray = horrCardArray.map((arrayItem) =>
    arrayItem.title === item.title
      ? { ...arrayItem, checked: checked }
      : arrayItem
  );

  // Update the Redux store with the modified array
  dispatch(updateHorrCardArray(updatedArray));

  console.log("Updated Array", updatedArray);
};



  const handleAddOnsClick = () => {
    navigate("/finish")
  }

  return (
    <div className="w-2/3 h-full mx-auto pt-[5%] flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold mb-4 ml-[16.5%]">Pick add-ons</h1>
      <p className="text-gray-600 mb-6 ml-[16.5%]">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="w-[75%] mx-auto flex flex-col items-start">
        {horrCardArray.map((item) => (
          <HorizontalCard
            title={item.title}
            additionalCost={isMonthly?item.additionalCostForM:item.additionalCostForY}
            description={item.description}
            key={item.title}
            onChangeHandler={(checked)=>handleCheckboxChange(item,!checked)}
            checkboxCheck={item.checked}
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
         
            <button type="submit" onClick={handleAddOnsClick}>
              Next Step
            </button>
        </div>
      </div>
    </div>
  );
};

export default PickAddOns;
