import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    plan: null,
    monthly: true,
    finalState: {},
    horrCardArray: [
      {
        title: "Online Service",
        additionalCostForM: 1,
        additionalCostForY: 10,
        description: "Access to multiple games",
        checked: false,
      },
      {
        title: "Large Storage",
        additionalCostForM: 2,
        additionalCostForY: 20,
        description: "Extra 1 TB of cloud save",
        checked: false,
      },
      {
        title: "Customizable Profile",
        additionalCostForM: 2,
        additionalCostForY: 20,
        description: "Custom theme on your profile",
        checked: false,
      },
    ],
  },
  reducers: {
    addPersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    selectYourPlanAction: (state, action) => {
      state.plan = action.payload;
    },
    selectYearlyOrMonthly: (state, action) => {
      state.monthly = action.payload;
    },
    updateHorrCardArray: (state, action) => {
      state.horrCardArray = action.payload;
    },
    addFinalState: (state, action) => {
      state.finalState = action.payload;
    },
  },
});

export default userSlice.reducer;

export const {
  addPersonalInfo,
  selectYourPlanAction,
  selectYearlyOrMonthly,
  addFinalState,
  updateHorrCardArray,
} = userSlice.actions;
