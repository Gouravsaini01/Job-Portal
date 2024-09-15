import Companies from "@/components/admin/Companies";
import { createSlice } from "@reduxjs/toolkit";
const companySlice= createSlice({
    name:"job",
    initialState:{
        singleCompany:null,
        companies:[],
        searchCompanyByText:""
    },
    reducers:{
        setSingleCompany:(state,action)=>{
            state.singleCompany=action.payload;
        },
        setCompanies:(state,action)=>{
            state.companies=action.payload;
        },
        setsearchCompanyByText:(state,action)=>{
            state.searchCompanyByText=action.payload;
        },
    }
})
export const {setSingleCompany,setCompanies,setsearchCompanyByText}=companySlice.actions;
export default companySlice.reducer;