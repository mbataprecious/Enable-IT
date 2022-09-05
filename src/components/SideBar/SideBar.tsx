import { NavLink } from "react-router-dom";
import logo from "../../assets/images/p-logo.svg";
import { menuList } from "../../utils";

//style
import "./SideBar.scss";

const navClass = ({ isActive }: { isActive: boolean }) =>
  "nav-link" + (isActive ? " active" : "");

function SideBar() {
  return (
    <aside className="side-bar-container">
      <div className="side">
        <nav>
          <img src={logo} className="logo" alt="logo" />
          <hr />
          <ul className="menue">
            {menuList.map(({ Icon, route }) => {
              return (
                <li className="menue-item" key={route}>
                  <NavLink to={route} className={navClass}>
                    <Icon className="icon" />
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
