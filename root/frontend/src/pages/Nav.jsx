import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { PiSignOut } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";


export default function Navigation() {
  return (
    <>
      <div className="gap-14 bg-slate-800 text-white h-screen w-80 left-0">
        <nav className="flex flex-col border-r-amber-600 gap-12">
            <Link to="/" className="font-bold flex flex-row gap-4"> <FcHome className="size-6"/> <span>Home</span> </Link>
            <Link to="/notifications" className="font-bold flex flex-row gap-4"> <FcAbout className="size-6" /> <span>Notifications</span> </Link>
            <Link to="/log/ticket" className="font-bold flex flex-row gap-4"> <FcAssistant className="size-6" /> <span>Log Ticket</span></Link>
            <Link to="/admin/login" className="font-bold flex flex-row gap-4"> <RiAdminFill className="size-6" /> <span>As Admin</span></Link>
            <Link to="/user/login" className="font-bold flex flex-row gap-4"> <PiSignOut className="size-6" /> Sign Out</Link>
        </nav>
      </div>
    </>
  );
}

export function TransparentNav() {

  return(
    <>
      <div className="bg-transparent h-20 w-full flex flex-row justify-between items-center p-4 absolute top-0 left-0">
        <nav>
          <Link to='/' > <button className="home-btn">Home</button> </Link>
          <button className="sign-out-btn">Sign Out</button>
        </nav>
      </div>
    </>
  );
}