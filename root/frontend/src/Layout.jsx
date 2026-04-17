import { Outlet } from "react-router-dom"
import Navigation from "./pages/Nav"

export default function LayOut(){
    return(
        <>
            <div className="flex">
                <Navigation />
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div> 


            
        </>
    );
}