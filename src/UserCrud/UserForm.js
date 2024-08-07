import React from 'react'
import { Field, Form, Formik } from "formik";

export default function UserForm({userToBeUpdated, onUserFormSubmit}) {
  return (
    <div>
      <div className="user-creation-form">
        <Formik
         enableReinitialize={true}
          initialValues={{
            firstName: userToBeUpdated?.firstName || "", 
            lastName: userToBeUpdated?.lastName || "", 
            email: userToBeUpdated?.email ||"",
            mobile:userToBeUpdated?.mobile ||""
          }}
          onSubmit={(values, {resetForm}) => {
            console.log("Submitted values", values);
            onUserFormSubmit(values, userToBeUpdated?.id )
            resetForm()

          }} 
        >
           
               <Form>
               <Field id="firstName" name="firstName" placeholder="First Name" />
   
               <Field id="lastName" name="lastName" placeholder="Last Name" />
   
               <Field
                 id="email"
                 name="email"
                 placeholder="email"
                 type="email"
               />
   
               <Field id="mobile" name="mobile" placeholder="mobile" />
   
               <button type="submit">Submit</button>
               
             </Form>
            
          
        </Formik>
      </div>
    </div>
  )
}
