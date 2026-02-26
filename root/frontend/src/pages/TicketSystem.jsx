import { Outlet } from "react-router-dom";
import Navigation from "./Nav";

export default function LayOut(){

    return(
        <>
            <div className="flex">
                <Navigation />
                <main className="flex-1 p-6">
                    <Outlet />
                    <div className="h-screen flex flex-col justify-center gap-20">
                        <h1 className="font-bold text-6xl">Welcome to the Ticket System</h1>
                        <p className="text-xl">This section will later allow users to use an AI Agent I will build.</p>
                    </div>
                </main>
            </div>  
        </>
    );
}