import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting:", values);
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    number: Yup.string()
      .matches(/^\d{3}-\d{2,3}-\d{2,4}$/, "Invalid phone number format")
      .required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
      initialValues={{
        name: "",
        number: "",
      }}
    >
      <Form className={styles.form}>
        <label className={styles.labelForm}>
          <span>Name</span>
          <Field type="text" name="name" className={styles.inputForm} />

          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label className={styles.labelForm}>
          <span>Number</span>
          <Field type="tel" name="number" className={styles.inputForm} />

          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </label>
        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
