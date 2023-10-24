import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged : false,
};


 const loginSlice = createSlice({

    name : 'login',
    initialState,
    reducers : {
        loggedIn : (state) => {
            state.isLogged = true;
        },
        loggedOut : (state) => {
            state.isLogged = false;
            state.count++;
        }
    }
});
;
export const { loggedIn ,loggedOut} = loginSlice.actions;

export const isLogged = (state) => state.login.isLogged;

export default loginSlice.reducer;