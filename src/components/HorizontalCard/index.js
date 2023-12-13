import React, { useState } from 'react';

const HorizontalCard = ({ title, description, additionalCost, onChangeHandler,isMonthly,checkboxCheck }) => {
  const [isChecked, setIsChecked] = useState(checkboxCheck);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex w-[100%] items-center bg-white rounded-md shadow-md m-4 max-w-md p-4">
      {/* Checkbox on the left */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={()=>{
            handleCheckboxChange();
            onChangeHandler(isChecked)
        }
    }
        className="w-6 h-6 mr-4 border border-gray-400 rounded cursor-pointer"
      />

      {/* Title and description in the middle */}
      <div className="flex-1">
        <h3 className="text-gray-600 font-bold text-lg">{title}</h3>
        <p className="text-gray-400 mt-2 text-sm">{description}</p>
      </div>

      {/* Additional cost on the right */}
      <div className="text-blue-500 font-bold"> {isMonthly ? `+$${additionalCost}/mo` : `+$${additionalCost}/yr`}</div>
    </div>
  );
};

export default HorizontalCard;
