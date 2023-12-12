import React from "react";
import FinishingUpCard from "../FinishingUpCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FinishingUp = ({ onNext, onBack }) => {
  const finalState = useSelector(store => store.user);
  console.log(finalState);
  return (
    <div className="w-2/3 h-full mx-auto pt-[5%] flex flex-col justify-start items-start">
      <h1 className="text-4xl font-bold mb-4 ml-[14.5%]">Finishing up</h1>
      <p className="text-gray-600 mb-6 ml-[14.5%]">
        Double-check everything looks OK before confirming.
      </p>

      <div className="w-[75%] mx-auto">
        <FinishingUpCard
         isMonthly={finalState?.monthly}
         planTitle={finalState?.plan?.title}
         planPrice={finalState?.monthly ? finalState?.plan?.priceForMonth : finalState?.plan?.priceForYear}
         addOns={finalState?.addons}
         />
      </div>

      <div className="w-[73%] mx-auto">
      <div className="flex justify-between items-cente m-4 w-[75%]">
        <div>
          <h3 className="text-gray-500 text-lg">Total (per month)</h3>
        </div>
        <div className="text-blue-500 font-bold text-xl">+$12/mo</div>
      </div>
      </div>

      <div className="flex justify-around mt-[6%] w-[88%]">
        <div className="text-gray-400 font-bold px-6 py-3 rounded">
        <Link to={"/pickaddons"}>
          <button type="button" onClick={onBack}>
            Go Back
          </button>
          </Link>
        </div>
        <div className="bg-blue-700 font-bold text-white rounded px-6 py-3">
        <Link to={"/thankyou"}>
          <button type="submit">Confirm</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
