import React from 'react';
import thankYouSvg from "../../assets/images/icon-thank-you.svg"

const ThankYou = () => {
  return (
    <div className="bg-white p-8 rounded-md shadow-md m-4 flex flex-col justify-center items-center w-[85%]">
      {/* SVG Icon in the row above "Thank you!" */}
      <div className="mb-4">
        <img src={thankYouSvg} alt='thankyousvg'/>
      </div>

      {/* "Thank you!" in bold with extra-large font size in the 2nd row */}
      <h3 className="text-black font-bold text-3xl mb-4">Thank you!</h3>

      {/* Description in light grey color in the 3rd row */}
      <p className="text-gray-500 flex flex-wrap w-[60%]">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{' '}
          support@loremgaming.com
        .
      </p>
    </div>
  );
};

export default ThankYou;
