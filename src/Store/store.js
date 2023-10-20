import { configureStore } from "@reduxjs/toolkit";
import {loginReducer} from "../Slice/loginSlice";

export const store=configureStore({
    reducer:{
        login:loginReducer,
    }
})