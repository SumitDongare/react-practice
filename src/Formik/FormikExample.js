import { Field, Form, Formik } from "formik";
import React from "react";

export default function FormikExample() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName:"",
          email:"",
          gender:"male"
        }}
        onSubmit={(values) => {
          console.log("Submitted values",values);
        }}
      >
        <Form>
          <label htmlFor="firstName"> First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="example@example.com"
            type="email"
          />

          <div>
            <div>Radio buttons</div>
            <label>
                <Field name="gender" type="radio" value="male"></Field> Male
                <Field name="gender" type="radio" value="female"></Field> Female
            </label>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
