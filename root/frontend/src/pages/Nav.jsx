import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { PiSignIn } from "react-icons/pi";


export default function Navigation() {
  return (
    <>
      <div className="gap-14">
        <nav className="flex flex-col border-r-amber-600 gap-12">
            <Link to="/" className="font-bold flex flex-row gap-4"> <FcHome className="size-6"/> <span>Home</span> </Link>
            <Link to="/notifications" className="font-bold flex flex-row gap-4"> <FcAbout className="size-6" /> <span>Notifications</span> </Link>
            <Link to="/log/ticket" className="font-bold flex flex-row gap-4"> <FcAssistant className="size-6" /> <span>Log Ticket</span></Link>
            <Link to="/user/login" className="font-bold flex flex-row gap-4"> <PiSignIn className="size-6" /> Sign In</Link>
        </nav>
      </div>
    </>
  );
}
