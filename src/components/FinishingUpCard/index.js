import React from "react";
import { useNavigate } from "react-router-dom";

const FinishingUpCard = ({
  isMonthly,
  planPrice,
  planTitle,
  horrCardArray,
}) => {
  const onlineService = horrCardArray[0].checked;
  const largeStorage = horrCardArray[1].checked;
  const customizable = horrCardArray[2].checked;

  const navigate = useNavigate();

  const handleChangeClick = () => {
    navigate("/plan");
  };

  return (
    <div className="flex flex-col bg-white p-6 rounded-md shadow-md m-4 w-[75%]">
      {/* Arcade (Monthly) and Change link */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-black text-lg">
            {isMonthly ? `${planTitle}(Monthly)` : `${planTitle}(Yearly)`}
          </h3>
          <p
            className="text-gray-500 text-sm underline underline-offset-1 hover:text-blue-500 cursor-pointer"
            onClick={handleChangeClick}
          >
            Change
          </p>
        </div>
        <div className="text-gray-600 font-extrabold">
          {isMonthly ? `+$${planPrice}/mo` : `+$${planPrice}/yr`}
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-4 border-t border-gray-300" />

  {/*If No Addons */}
      {!onlineService && !largeStorage && !customizable && (
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-gray-400 text-md">No Add-Ons.</h3>
          </div>
          
        </div>
      )}

      {/* Online Service */}
      {onlineService && (
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-gray-400 text-md">{horrCardArray[0]?.title}</h3>
          </div>
          <div className="text-gray-500 font-medium">
            {isMonthly
              ? `+$${horrCardArray[0]?.additionalCostForM}/mo`
              : `+$${horrCardArray[0]?.additionalCostForY}/yr `}
          </div>
        </div>
      )}

      {/* Large Storage */}
      {largeStorage && (
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-gray-400 text-md">{horrCardArray[1]?.title}</h3>
          </div>
          <div className="text-gray-500 font-medium">
            {isMonthly
              ? `+$${horrCardArray[1]?.additionalCostForM}/mo`
              : `+$${horrCardArray[1]?.additionalCostForY}/yr`}
          </div>
        </div>
      )}
      {customizable && (
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-gray-400 text-md">{horrCardArray[2]?.title}</h3>
          </div>
          <div className="text-gray-500 font-medium">
            {isMonthly
              ? `+$${horrCardArray[2]?.additionalCostForM}/mo`
              : `+$${horrCardArray[2]?.additionalCostForY}/yr`}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinishingUpCard;
