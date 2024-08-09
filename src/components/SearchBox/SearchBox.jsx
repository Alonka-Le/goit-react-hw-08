import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter, changePhoneFilter } from "../../redux/filters/slice";
import {
  selectNameFilter,
  selectPhoneFilter,
} from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameValue = useSelector(selectNameFilter);
  const numberValue = useSelector(selectPhoneFilter);

  return (
    <div className={css.wrap}>
      <div className={css.container}>
        <label className={css.label}>Find contacts by name</label>
        <input
          type="text"
          value={nameValue}
          onChange={(e) => dispatch(changeNameFilter(e.target.value))}
          className={css.input}
        />
      </div>
      <div className={css.container}>
        <label className={css.label}>Find contacts by phone</label>
        <input
          type="number"
          value={numberValue}
          onChange={(e) => dispatch(changePhoneFilter(e.target.value))}
          className={css.input}
        />
      </div>
    </div>
  );
}
