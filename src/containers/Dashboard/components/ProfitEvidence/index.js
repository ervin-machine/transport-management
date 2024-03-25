import React from "react";
import "./ProfitEvidence.css";
import { Formik, Form, Field, getIn } from "formik";
import { ProfitEvidenceSchema } from "./ProfitEvidenceSchema";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Form as BForm, Alert } from "react-bootstrap";

function ProfitEvidence() {
  return (
    <div className="form-content">
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
            vinjetaPrice: "",
            fuelPrice: "",
            driverRoute: "",
            driverPrice: "",
          }}
          validationSchema={ProfitEvidenceSchema}
          onSubmit={(values, actions) => {
            //handleSubmit(values, actions);
          }}
        >
          {({ errors, touched, setErrors }) => (
            <Form>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Route</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Road Evidence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="form-inputs">
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Vinjeta<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="vinjeta"
                        type="vinjeta"
                        id="vinjeta"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Vinjeta Price<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="vinjetaPrice"
                        type="vinjetaPrice"
                        id="vinjetaPrice"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Vinjeta Route<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="vinjetaRoute"
                        type="vinjetaRoute"
                        id="vinjetaRoute"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Fuel Expense</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="form-inputs">
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Fuel Company<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="fuelCompany"
                        type="fuelCompany"
                        id="fuelCompany"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Fuel Quantity<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="fuelLitres"
                        type="fuelLitres"
                        id="fuelLitres"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Fuel Price<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="fuelPrice"
                        type="fuelPrice"
                        id="fuelPrice"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Driver Expense</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="form-inputs">
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Driver Route<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="driverRoute"
                        type="driverRoute"
                        id="driverRoute"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                    <BForm.Group>
                      <label className="subscribe-modal-label">
                        Driver Price<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="subscribe-modal-input"
                        name="driverPrice"
                        type="driverPrice"
                        id="driverPrice"
                      />
                      {errors.route && touched.route ? (
                        <Alert variant="danger">{errors.route}</Alert>
                      ) : null}
                    </BForm.Group>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Other Expenses</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
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
  );
}

export default ProfitEvidence;
