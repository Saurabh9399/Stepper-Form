import React, { useEffect, useState } from "react";
import FinishingUpCard from "../FinishingUpCard";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFinalState } from "../../redux/userSlice";

const FinishingUp = ({ onNext, onBack }) => {
  const finalState = useSelector((store) => store.user);
  const horrCardArray = useSelector((store) => store.user.horrCardArray);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
  
  if (finalState.monthly) {
    const total =
      Number(finalState?.plan?.priceForMonth) +
      (horrCardArray[0]?.checked ? Number(horrCardArray[0]?.additionalCostForM) : 0) +
      (horrCardArray[1]?.checked ? Number(horrCardArray[1]?.additionalCostForM) : 0) +
      (horrCardArray[2]?.checked ? Number(horrCardArray[2]?.additionalCostForM) : 0);

      setTotalAmount(total);
  }
  else{
    const total =
    Number(finalState?.plan?.priceForYear) +
    (horrCardArray[0]?.checked ? Number(horrCardArray[0]?.additionalCostForY) : 0) +
    (horrCardArray[1]?.checked ? Number(horrCardArray[1]?.additionalCostForY) : 0) +
    (horrCardArray[2]?.checked ? Number(horrCardArray[2]?.additionalCostForY) : 0);

    setTotalAmount(total);
  }
},[finalState.monthly, finalState?.plan?.priceForMonth, finalState?.plan?.priceForYear, horrCardArray])

const handleFInalSubmit = () => {
  const finalObj = {
    name: finalState.name,
    email: finalState.email,
    phone: finalState.phone,
    plan: finalState.plan,
    addons: horrCardArray,
    finalAmount: totalAmount
  }

  dispatch(addFinalState(finalObj));
  navigate("/thankyou");
}


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
          planPrice={
            finalState?.monthly
              ? finalState?.plan?.priceForMonth
              : finalState?.plan?.priceForYear
          }
          horrCardArray={horrCardArray}
        />
      </div>

      <div className="w-[73%] mx-auto">
        <div className="flex justify-between items-cente m-4 w-[75%]">
          <div>
            <h3 className="text-gray-500 text-lg">
              Total (per {finalState.monthly ? "month" : "year"})
            </h3>
          </div>
          <div className="text-blue-500 font-bold text-xl">
            +${totalAmount}/{finalState.monthly ? "mo" : "yr"}
          </div>
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
          
            <button type="submit" onClick={handleFInalSubmit}>Confirm</button>
         
        </div>
      </div>
    </div>
  );
};

export default FinishingUp;
