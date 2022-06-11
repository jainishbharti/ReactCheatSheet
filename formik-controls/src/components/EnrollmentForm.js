import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl";

export const EnrollmentForm = () => {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

    const initialValues = {
        email:'',
        bio:'',
        course:'',
        skills:[],
        courseDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        bio: Yup.string().required('Bio is required'),
        course: Yup.string().required('Course is required'),
        skills: Yup.array().required('Skills is required'),
        courseDate: Yup.date().required('Course date is required').nullable()

    })

    const onSubmit = (values, submitProps) => {
        console.log('Form data', values);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    }
  return <Formik
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
                    control="textarea"
                    label="Bio"
                    name="bio"
                />
                <FormikControl
                    control="select"
                    label="Course"
                    name="course"
                    options={dropdownOptions}
                />
                <FormikControl
                    control="checkbox"
                    label="Skills"
                    name="skills"
                    options={checkboxOptions}
                />
                <FormikControl
                    control="date"
                    label="Course Date"
                    name="courseDate"
                />
                <button type="submit" disabled={!formik.isValid || formik.isSubmitting} >Submit</button>
            </Form>
        )
    }}
    
  </Formik>;
};
