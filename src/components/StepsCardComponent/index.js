import React from "react";

const StepsCardComponent = ({ step, style, stepTitle, active }) => {
  return (
    <div className={`flex mx-[3rem] items-center justify-center ${style}`}>
      <div
        className={`${
          active ? "bg-blue-200 text-black" : "bg-transparent"
        } rounded-full w-10 h-10 flex items-center justify-center mr-2 border border-gray-100`}
      >
        <span className="text-xl font-bold">{step}</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm mb-1 text-gray-400">STEP {step}</span>
        <h2 className="text-base font-bold mb-2 opacity-90">{stepTitle}</h2>
      </div>
    </div>
  );
};

export default StepsCardComponent;
