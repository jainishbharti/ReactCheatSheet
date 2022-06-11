import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl";

export const RegistrationForm = () => {
  const options = [
    { key: "Email", value: "email-MOC" },
    { key: "Telephone", value: "telephone-MOC" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    modeOfContact: Yup.string().required("Mode of contact is required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephone-MOC",
      then: Yup.string().required("Phone is required"),
    }),
  });

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    submitProps.setSubmitting(false);
        submitProps.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of Contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phone"
            />
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
