import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged : false,
    count : 0
};


 const loginSlice = createSlice({

    name : 'login',
    initialState,
    reducers : {
        loggedIn : (state) => {
            console.log("ddd");
            state.isLogged = true;
            state.count++;
            console.log(state.isLogged);
        },
        loggedOut : (state) => {
            state.isLogged = false;
            state.count++;
        }
    }
});
console.log(loginSlice);
export const { loggedIn ,loggedOut} = loginSlice.actions;

export const isLogged = (state) => state.isLogged;
export const count= (state) => state.count; 

export default loginSlice.reducer;