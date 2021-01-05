import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import "../styles/login.scss";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/global.scss";
export default function login() {
  const loginSchema = Yup.object().shape({
    Username: Yup.string()
      .min(2, "Must Be Greater Than 2 Characters")
      .max(70, "Too Long!"),
    Password: Yup.string()
      .min(5, "Must Be Longer Than 5 Characters")
      .max(40, "Cannot Be Longer Than 30 Characters"),
  });
  return (
    <div className="loginContainer">
        <h1>Login</h1>
      <Formik
        initialValues={{
          Username: "",
          Password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <div className="formContainer">
            <Form>
              <Field
                component={TextField}
                name="Username"
                type="text"
                label="Username"
                variant="outlined"
                required
                fullWidth
              />


              <Field
                component={TextField}
                name="Password"
                type="text"
                label="Password"
                variant="outlined"
                required
                fullWidth
              />
    
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                size="large"
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </Formik>
      <h2 className="textWithLine">Or Login With</h2>
          <Button className="githubButton" size="large"><GitHubIcon fontSize="medium"/> &nbsp;GitHub</Button>
    </div>
  );
}
