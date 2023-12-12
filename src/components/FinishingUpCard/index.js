import React from 'react';

const FinishingUpCard = () => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-md shadow-md m-4 w-[75%]">
      {/* Arcade (Monthly) and Change link */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-black text-lg">Arcade (Monthly)</h3>
          <p className="text-gray-500 text-sm underline underline-offset-1">Change</p>
        </div>
        <div className="text-gray-600 font-extrabold">+$9/mo</div>
      </div>

      {/* Horizontal Rule */}
      <hr className="my-4 border-t border-gray-300" />

      {/* Online Service */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-gray-400 text-md">Online Service</h3>
        </div>
        <div className="text-gray-500 font-medium">+$1/mo</div>
      </div>

      {/* Large Storage */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-gray-400 text-md">Large Storage</h3>
        </div>
        <div className="text-gray-500 font-medium">+$2/mo</div>
      </div>
    </div>
  );
};

export default FinishingUpCard;
