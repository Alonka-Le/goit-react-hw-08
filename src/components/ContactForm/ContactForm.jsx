import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3")
      .max(50, "Maximum 50")
      .required("Required"),
    number: Yup.string().min(9, "Minimum 9").required("Required"),
  });
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor="name">
            Username
          </label>
          <Field type="text" name="name" id="name" className={css.input} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor="number">
            Phone
          </label>
          <Field type="tel" name="number" id="number" className={css.input} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit" className={css.btn}>
          Add new contact
        </button>
      </Form>
    </Formik>
  );
}
