import { Navigate } from "react-router-dom";
import PriceAdmin from "../protected-components/prices-admin";

export default function ProtectedRoute({isLoggedIn}){
    return isLoggedIn ? <PriceAdmin/>: <Navigate to="/login"/>
}