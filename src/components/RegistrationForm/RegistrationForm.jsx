import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";

import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3")
    .max(50, "Maximum 50")
    .required("Required"),
  email: Yup.string().email("must be a valid email"),
});
export default function RegistrationForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <label className={css.label} htmlFor="name">
          Username
        </label>
        <Field type="text" name="name" id="name" className={css.input} />
        <ErrorMessage className={css.error} name="name" component="span" />
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
          Register
        </button>
      </Form>
    </Formik>
  );
}
