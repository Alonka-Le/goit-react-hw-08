import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";

import * as Yup from "yup";
import css from "./LoginForm.module.css";
const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email("must be a valid email"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form autoComplete="off" className={css.container}>
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <Field type="email" name="email" id="email" className={css.input} />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.label} htmlFor="password">
          Password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.input}
        />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
