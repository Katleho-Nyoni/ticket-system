import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";


export default function Navigation() {
  return (
    <>
      <div>
        <nav>
            <Link to="/">
              <FcHome /> <span>Home</span>
            </Link>
            <Link to="/notifications">
              <FcAbout /> <span>Notifications</span>
            </Link>
            <Link to="/ticketing"> <FcAssistant /> <span>Log Ticket</span></Link>
        </nav>
      </div>
    </>
  );
}
