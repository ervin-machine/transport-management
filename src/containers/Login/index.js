import React from 'react'
import { Formik, Form, Field } from "formik";
import { LoginSchema } from '../../schemas/LoginSchema';
import { Form as BForm, Alert } from "react-bootstrap";
import "./Login.css"

function Login(props) {
  const { setSection } = props;

  return (
    <div className='login-container'>
      <div className='login-content'>
        <div className='login-frame'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus ut leo at pharetra. Proin nunc nibh, 
            fermentum vestibulum lectus at, rhoncus maximus ex. Sed convallis ultricies ultrices. Mauris rhoncus ultricies neque, 
            in imperdiet neque ornare vel. Nunc porttitor lorem a lacus suscipit sodales. Nullam malesuada blandit elementum. In 
            lobortis interdum ultrices.</p>
        </div>
        <div className='login-frame'>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, actions) => {
            //handleSubmit(values, actions);
          }}
        >
          {({ errors, touched, setErrors }) => (
            <Form>
                  <div className="login-form">
                    <BForm.Group>
                      <label className="login-label">
                        Email<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="login-input"
                        name="email"
                        type="email"
                        id="email"
                      />
                      {errors.driver && touched.driver ? (
                        <Alert variant="danger">{errors.driver}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="login-label">
                        Password<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="login-input"
                        name="password"
                        type="password"
                        id="password"
                      />
                      {errors.truck && touched.truck ? (
                        <Alert variant="danger">{errors.truck}</Alert>
                      ) : null}
                    </BForm.Group>
                  </div>
              <button className={`login-button `} type="submit" block onClick={() => setSection('Dashboard')}>
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className='new-user-content'>
          <p>If you don't have account, </p>
          <button className='new-user-button' onClick={() => setSection('Register')}>Create One</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login