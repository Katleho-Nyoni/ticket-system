import { signOutUser } from "../auth/authenticate";
import { Link, useNavigate } from "react-router-dom";
import { TfiHome } from "react-icons/tfi";
import { FaWpforms } from "react-icons/fa6";
import { PiSignOut } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RiAdminFill } from "react-icons/ri";


export default function Navigation() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOutUser();
    navigate("/user/login");
  }

  return (
    <>
      <div className="gap-100 bg-slate-800 text-white h-screen w-80 left-0 flex flex-col justify-stretch">
        <nav className="flex flex-col gap-12 mt-6 ml-2">
            <Link to="/" className="font-bold flex flex-row gap-4"> <TfiHome className="size-5"/> <span>Home</span> </Link>
            <Link to="/ticket-system/log/ticket" className="font-bold flex flex-row gap-4"> <FaWpforms className="size-5" /> <span>Log Ticket</span></Link>
            <Link to="/ticket-system/admin/login" className="font-bold flex flex-row gap-4"> <RiAdminFill className="size-5" /> <span>As Admin</span></Link>
        </nav>
        <nav className="flex flex-col justify-items-end gap-12  ml-2">
            <Link to="/ticket-system/profile" className="font-bold flex flex-row gap-4"> <CgProfile className="size-5" /> Profile</Link>
            <button  className="font-bold flex flex-row gap-4 cursor-pointer" onClick={handleSignOut}> <PiSignOut className="size-5"  /> Sign Out</button>
        </nav>
      </div>
    </>
  );
}

export function TransparentNav() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOutUser();
    navigate("/user/login");
  }

  return(
    <>
      <div className="bg-transparent h-20 w-full flex flex-row justify-between items-center p-4 absolute top-0 left-0">
        <nav>
          <Link to='/' > <button className="home-btn">Home</button> </Link>
          <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
        </nav>
      </div>
    </>
  );
}