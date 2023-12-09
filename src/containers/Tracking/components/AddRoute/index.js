import React from 'react'
import { Formik, Form, Field } from "formik";
import Typography from "@mui/material/Typography";
import { AddRouteSchema } from './AddRouteSchema';
import { Form as BForm, Alert } from "react-bootstrap";

function AddRoute() {

  return (
    <div className='form-content'>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        Add Route
      </Typography>
      <div>
        <Formik
          initialValues={{
            driver: "",
            truck: "",
            deadline: "",
            price: "",
            companyName: "",
            country: "",
            distance: "",
            type: "",
            placefrom: "",
            placeto: ""
          }}
          validationSchema={AddRouteSchema}
          onSubmit={(values, actions) => {
            //handleSubmit(values, actions);
          }}
        >
          {({ errors, touched, setErrors }) => (
            <Form>
                  <div className="form-inputs">
                    <BForm.Group>
                      <label className="add-route-label">
                        Driver<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="driver"
                        type="driver"
                        id="driver"
                      />
                      {errors.driver && touched.driver ? (
                        <Alert variant="danger">{errors.driver}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Truck<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="truck"
                        type="truck"
                        id="truck"
                      />
                      {errors.truck && touched.truck ? (
                        <Alert variant="danger">{errors.truck}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Deadline<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="deadline"
                        type="deadline"
                        id="deadline"
                      />
                      {errors.deadline && touched.deadline ? (
                        <Alert variant="danger">{errors.deadline}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Price<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="price"
                        type="price"
                        id="price"
                      />
                      {errors.price && touched.price ? (
                        <Alert variant="danger">{errors.price}</Alert>
                      ) : null}
                    </BForm.Group>
                    </div>
                    <div className="form-inputs">
                    <BForm.Group>
                      <label className="add-route-label">
                        Distance<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="distance"
                        type="distance"
                        id="distance"
                      />
                      {errors.distance && touched.distance ? (
                        <Alert variant="danger">{errors.distance}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Type<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="type"
                        type="type"
                        id="type"
                      />
                      {errors.type && touched.type ? (
                        <Alert variant="danger">{errors.type}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Company Name<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="companyname"
                        type="companyname"
                        id="companyname"
                      />
                      {errors.companyname && touched.companyname ? (
                        <Alert variant="danger">{errors.companyname}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Country<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="country"
                        type="country"
                        id="country"
                      />
                      {errors.country && touched.country ? (
                        <Alert variant="danger">{errors.country}</Alert>
                      ) : null}
                    </BForm.Group>
                    </div>
                    <div className="form-inputs">
                    <BForm.Group>
                      <label className="add-route-label">
                        Place From<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="placefrom"
                        type="placefrom"
                        id="placefrom"
                      />
                      {errors.placefrom && touched.placefrom ? (
                        <Alert variant="danger">{errors.placefrom}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="add-route-label">
                        Place To<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="add-route-input"
                        name="placeto"
                        type="placeto"
                        id="placeto"
                      />
                      {errors.placeto && touched.placeto ? (
                        <Alert variant="danger">{errors.placeto}</Alert>
                      ) : null}
                    </BForm.Group>
                  </div>
                

              <button className={`subscribe-modal-button `} type="submit" block>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddRoute