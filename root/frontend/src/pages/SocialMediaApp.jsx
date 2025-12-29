import { Link } from "react-router-dom";

export default function SocialMediaApp(){

    return(
        <>  
            <button className="sign-out-btn">Sign Out</button>
            <div className="h-screen w-auto flex flex-col justify-center items-center gap-6">
                <h1 className="font-bold text-4xl">APP UNDER CONSTRUCTION</h1>
                <p>Explore other apps in the meantime</p>
                <Link to='/weather-app'><button className="btn-redirect">Weather App</button></Link>
                <Link to='/ticket-system'><button className="btn-redirect">Ticket System</button></Link>
                <Link to='/video-shorts'><button className="btn-redirect">Video Shorts</button></Link>
            </div>
        </>
    );
}