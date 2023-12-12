import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState:{
        name:"",
        email:"",
        phone:"",
        plan: {},
        monthly:true,
        addons:{},
        finalState:{},
        total:0

    },
    reducers:{
        addPersonalInfo:()=>{

        },
        selectYourPlanAction:()=>{

        },
        selectYearlyOrMonthly:()=>{

        },
        selectAddOns:()=>{

        },

    }
})

export default userSlice.reducer;

export const {addPersonalInfo,selectYourPlanAction,selectYearlyOrMonthly,selectAddOns} = userSlice.actions;