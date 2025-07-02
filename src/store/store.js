import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./auth"

export const Store=configureStore({
    reducer:authReducer
})