import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../Slice/loginSlice";


 const store = configureStore({
    reducer:{
        login:loginSlice,
    },

});

export default store;