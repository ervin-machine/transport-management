import React from 'react'
import { Formik, Form, Field } from "formik";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Form as BForm, Alert } from "react-bootstrap";

function AddRoute() {

  return (
    <div className='add-route-form'>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ color: "white" }}
      >
        Profit Evidence
      </Typography>
      <div>
        <Formik
          initialValues={{
            route: "",
            startP: "",
            endP: "",
            price: "",
            vinjeta: "",
            vinjetaPrice: "",
            vinjetaRoute: "",
            fuelCompany: "",
            fuelLitres: "",
            fuelPrice: "",
            driverRoute: "",
            driverPrice: "",
          }}
          onSubmit={(values, actions) => {
            //handleSubmit(values, actions);
          }}
        >
          {({ errors, touched, setErrors }) => (
            <Form>
                  <div className="form-inputs">
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Route<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="route"
                        type="route"
                        id="route"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Start Point<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="startP"
                        type="startP"
                        id="startP"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        End Point<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="endP"
                        type="endP"
                        id="endP"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Price<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="price"
                        type="price"
                        id="price"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                  </div>
                
              {errors.type && touched.type ? (
                <Alert variant="danger">{errors.type}</Alert>
              ) : null}

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