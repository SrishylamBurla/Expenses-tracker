import { Navigate, Outlet } from "react-router-dom"
import getUserFromStorage from "../../utils/getUserFromStorage"


export const PrivateRoute = () =>{
    const token = getUserFromStorage()
    return token ? <Outlet /> : <Navigate to={"/login"} />

}