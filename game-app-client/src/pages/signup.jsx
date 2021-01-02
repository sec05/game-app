import * as React from "react";
import { Formik, Form, Field, } from "formik";
import { Button, LinearProgress,  } from "@material-ui/core";
import { TextField,  } from "formik-material-ui";
import * as Yup from "yup"

export default function signup() {
    const SignupSchema = Yup.object().shape({
        Username: Yup.string().min(2, 'Must Be Greater Than 2 Characters').max(70, 'Too Long!'),
        Password: Yup.string().min(5, 'Must Be Longer Than 5 Characters').max(40, 'Cannot Be Longer Than 30 Characters'),
        PasswordConf: Yup.string().min(5, 'Must Be Longer Than 5 Characters').max(40, 'Cannot Be Longer Than 30 Characters').oneOf([Yup.ref('Password'), null], 'Passwords must match'),
      });
  return (
    <Formik
      initialValues={{
         
        Username: "",
        Password: "",
        PasswordConf: "",

      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting, errors, touched }) => (
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
          <br />
          
          <Field
            component={TextField}
            name="Password"
            type="text"
            label="Password"
            variant="outlined"
            required
            fullWidth
          />
          <br/>
          
          <Field
            component={TextField}
            name="PasswordConf"
            type="text"
            label="Confirm Password"
            variant="outlined"
            required
            fullWidth
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}