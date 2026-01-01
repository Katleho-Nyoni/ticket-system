import { Outlet } from "react-router-dom";
import Navigation from "./Nav";

export default function TicketSystem(){

    return(
        <>
            <Outlet />   
            <Navigation />
        </>
    );
}