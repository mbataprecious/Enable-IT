import Avatar from "../Avatar/Avatar";
import { FiChevronDown } from "react-icons/fi";

//sting
import "./Appbar.scss";
function Appbar() {
  return (
    <header className="app-bar">
      <h6 className="heading">Dashboard</h6>
      <div className="user-box">
        <Avatar />
        <FiChevronDown />
      </div>
    </header>
  );
}

export default Appbar;
