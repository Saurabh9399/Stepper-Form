import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import PersonalInfoForm from "./components/PersonalInfoForm";
import StepperSidebar from "./components/StepperSIdebar";
import SelectYourPlan from "./components/SelectYourPlan";
import PickAddOns from "./components/PickAddOns";
import FinishingUp from "./components/FinishingUp";

function App() {
  const projectRoutes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <StepperSidebar />
          <PersonalInfoForm />
        </>
      ),
    },
    {
      path: "/plan",
      element: (
        <>
          <StepperSidebar />
          <SelectYourPlan />{" "}
        </>
      ),
    },
    {
      path: "/pickaddons",
      element: (
        <>
          <StepperSidebar />
          <PickAddOns />
        </>
      ),
    },
    {
      path: "/finish",
      element: (
        <>
          <StepperSidebar />
          <FinishingUp />
        </>
      ),
    },
  ]);

  return (
    <div className="relative flex w-[70%] min-h-screen justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 h-screen mx-[20%]">
      <RouterProvider router={projectRoutes}>
        <Outlet />
      </RouterProvider>
    </div>
  );
}

export default App;
