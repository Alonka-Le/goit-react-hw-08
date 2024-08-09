import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLogeddIn = useSelector(selectIsLoggedIn);
  return isLogeddIn ? <Navigate to={redirectTo} /> : component;
}
