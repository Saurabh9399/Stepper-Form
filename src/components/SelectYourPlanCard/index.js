import React, { useState } from 'react'

const SelectYourPlanCard = ({ icon, title, price,duration,isMonthly }) => {
  const [cardBorder,setCardBorder] = useState("");
  const handleSelectYourPlanCardClick = (e) => { 
    setCardBorder("border border-cyan-400")
  }
  return (
    <div className={`flex flex-col bg-white p-4 rounded-md shadow-md m-4 w-[9rem] h-[12rem] ${cardBorder}`} onClick={handleSelectYourPlanCardClick}>
    <div className="flex items-start rounded-full mb-4">
      <img src={icon} alt='arcade-adv-pro' />
    </div>
    <h3 className="text-black font-bold text-lg mt-4 mr-4">{title}</h3>
    <p className="text-gray-500 mt-2 mmr-4">${price}$/{duration}</p>
   {!isMonthly && <p className='text-gray-400 text-sm'> 2 month free</p>}
  </div>
  )
}

export default SelectYourPlanCard
