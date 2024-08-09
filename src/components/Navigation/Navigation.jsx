import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isActive = ({ isActive }) => {
    return `${css.link} ${isActive ? css.active : ""}`;
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={isActive} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={isActive} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
