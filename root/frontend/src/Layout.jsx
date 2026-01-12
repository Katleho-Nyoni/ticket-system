import { Outlet } from "react-router-dom"
import Navigation from "./pages/Nav"

export default function LayOut(){
    return(
        <>
            <Navigation />
            <Outlet />
        </>
    );
}