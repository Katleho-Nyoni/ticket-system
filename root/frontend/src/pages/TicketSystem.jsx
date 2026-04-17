// import { Outlet } from "react-router-dom";
// import Navigation from "./Nav";
import {Helmet} from 'react-helmet'

export default function TicketSystem(){

    return(
        <>
            <div className="flex max-h-screen">
                <div className="h-170 flex flex-col ml-40 justify-center gap-20">
                    <h1 className="font-bold text-6xl">Welcome</h1>
                    <h1 className="font-bold text-4xl">Ticket Management System</h1>
                    <p className="text-xl">This section will later allow users to use an AI Agent I will build.</p>
                </div>
            </div>

            {/* <div>
                <Navigation />
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>   */}
        </>
    );
}