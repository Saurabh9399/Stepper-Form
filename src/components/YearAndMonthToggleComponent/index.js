import React from 'react'

const YearAndMonthToggleComponent = ({isMonthly,setIsMonthly}) => {
  return (
    <div className="flex items-center justify-around w-2/3 bg-gray-200 p-4 rounded-md relative mx-auto">
      <button
        className={`text-gray-600 font-bold ${
          isMonthly ? "text-blue-500" : ""
        }`}
        onClick={() => setIsMonthly(true)}
      >
        Monthly
      </button>
      <div className="flex items-center relative">
        <div
          className={`w-10 h-6 bg-white rounded-full shadow-inner absolute`}
        ></div>
        <div
          className={`w-5 h-5 bg-black rounded-full absolute -left-1 ${
            isMonthly ? "" : "left-5"
          }`}
        ></div>
      </div>
      <button
        className={`text-gray-600 font-bold ${
          !isMonthly ? "text-blue-500" : ""
        }`}
        onClick={() => setIsMonthly(false)}
      >
        Yearly
      </button>
    </div>
  )
}

export default YearAndMonthToggleComponent
