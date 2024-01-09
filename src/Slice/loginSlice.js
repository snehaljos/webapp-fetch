import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged : false,
    userObj : null,
};


 const loginSlice = createSlice({

    name : 'login',
    initialState,
    reducers : {
        loggedIn : (state,user) => {
            state.isLogged = true;
            state.userObj=user.payload;
        },
        loggedOut : (state) => {
            state.isLogged = false;
            state.count++;
            state.userObj=null;
        },
        updateUser : (state,user) => {
            state.userObj=user.payload;
        }
    }
});
;
export const { loggedIn ,loggedOut,updateUser} = loginSlice.actions;

export const isLogged = (state) => state.login.isLogged;
export const userObj = (state) => state.login.userObj;

export default loginSlice.reducer;