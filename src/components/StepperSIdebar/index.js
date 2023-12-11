import React, { useEffect, useState } from "react";
import sidebarImage from "../../assets/images/bg-sidebar-desktop.svg";
import StepsCardComponent from "../StepsCardComponent";
import { Link,useLocation } from "react-router-dom";

const StepperSidebar = () => {
    const [active,setActive] = useState(false);
    const location = useLocation();
  const numSteps = [
    { step: 1, stepTitle: "YOUR INFO", route: "" },
    { step: 2, stepTitle: "SELECT PLAN", route: "plan" },
    { step: 3, stepTitle: "ADD-ONS", route: "pickaddons" },
    { step: 4, stepTitle: "SUMMARY", route: "finish" },
  ];

  useEffect(() => {
    const currentRoute = location.pathname.replace("/","");
    setActive(currentRoute);
  },[location]);

  return (
    <div className="relative w-[25%] h-full bg-slate-200 overflow-hidden rounded-lg">
      <img
        src={sidebarImage}
        alt="sidebar"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute h-1/2 top-0 left-0 right-0 flex flex-col justify-between items-start text-white p-6">
        {numSteps.map((i, index) => (
          <Link to={"/"+i.route} >
            <StepsCardComponent
              key={index + 1}
              step={i.step}
              stepTitle={i.stepTitle}
              style={`mt-4`} // Adjust the spacing as needed
              route={i.route}
              active={active === i.route}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StepperSidebar;
