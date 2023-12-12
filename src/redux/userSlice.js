import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState:{
        personalInfo:{
            name:"",
            email:"",
            phone:""
        },
        plan: {},
        monthly:true,
        addons:{},
        finalState:{},
        total:0

    },
    reducers:{
        addPersonalInfo:(state,action)=>{
           state.personalInfo = action.payload;
        },
        selectYourPlanAction:(state,action)=>{
            state.plan = action.payload;
        },
        selectYearlyOrMonthly:(state,action)=>{
            state.monthly = action.payload;
        },
        selectAddOns:(state,action)=>{
            state.addons = action.payload;
        },

    }
})

export default userSlice.reducer;

export const {addPersonalInfo,selectYourPlanAction,selectYearlyOrMonthly,selectAddOns} = userSlice.actions;