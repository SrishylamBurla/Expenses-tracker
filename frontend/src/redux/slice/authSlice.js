import { createSlice } from "@reduxjs/toolkit"

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const authSlice = createSlice({
    name: "auth",
    initialState: { user: user },
    reducers: {
        loginAction: (state, action) => {
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        logoutAction: (state) => {
            state.user = null
            localStorage.removeItem("user")
        }
    }
})
export const { loginAction, logoutAction } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer