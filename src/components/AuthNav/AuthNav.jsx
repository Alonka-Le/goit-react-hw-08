import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  const isActive = ({ isActive }) => {
    return `${css.link} ${isActive ? css.active : ""}`;
  };
  return (
    <div className={css.nav}>
      <NavLink className={isActive} to="/register">
        Register
      </NavLink>
      <NavLink className={isActive} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
