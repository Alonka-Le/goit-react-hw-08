import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span>{user.name}</span>
      </p>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}
