import React, { useState } from "react";
import { Formik, Field, FieldArray } from "formik";
import { Container, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Form as BForm, Alert } from "react-bootstrap";
import { FormStepper } from "../PublicComponents/FormStepper";
import { registerSchema } from "../../schemas/RegisterSchema"
import { object } from "yup";
import "./Register.css"

const Register = (props) => {
  const { setSection } = props;
  const [step, setStep] = useState(0);
  const trucksGroup = { model: "", manufactureyear: "" };
  const trailersGroup = { linkname: "", linkurl: "" };
  const driversGroup = {firstname: "", lastname: "", licenses: "", birth: "" };

  return (
    <Container sx={{ bgcolor: "rgb(24, 24, 24);", marginTop: 5, overflowY: "auto", height: "90vh" }}>
      <Typography sx={{ color: "white" }} variant="h3" align="center" component="h2">
        Register
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent sx={{ bgcolor: "rgb(24, 24, 24);", paddingY: 10, paddingX: 5 }}>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              trucks: [trucksGroup],
              trailers: [trailersGroup],
              drivers: [driversGroup]
            }}
            validationSchema={object(registerSchema[step])}
            onSubmit={async (values, actions) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ values, validateForm, setTouched, errors, touched }) => (
              <FormStepper setSection={setSection} validateForm={validateForm} setTouched={setTouched} step={step} setStep={setStep}>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">
                        First Name<span className="important">*</span>
                      </label>{" "}
                      <br />
                      <Field
                        className="register-input"
                        name="firstname"
                        type="firstname"
                        id="firstname"
                      />
                      {errors.firstname && touched.firstname ? (
                        <Alert variant="danger">{errors.firstname}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">
                        Last Name<span className="important">*</span>
                      </label>
                      <br />
                      <Field className="register-input" name="lastname" id="lastname" />
                      {errors.lastname && touched.lastname ? (
                        <Alert variant="danger">{errors.lastname}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>

                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Company Name</label>
                      <br />
                      <Field className="register-input" name="companyName" id="companyName" />
                      {errors.companyName && touched.companyName ? (
                        <Alert variant="danger">{errors.companyName}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Email</label>
                      <br />
                      <Field className="register-input" name="email" id="email" type="email" />
                      {errors.email && touched.email ? (
                        <Alert variant="danger">{errors.email}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Password</label>
                      <br />
                      <Field className="register-input" name="password" id="password" type="password" />
                      {errors.password && touched.password ? (
                        <Alert variant="danger">{errors.password}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Phone Number</label>
                      <br />
                      <Field className="register-input" name="phoneNumber" id="phoneNumber" />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <Alert variant="danger">{errors.phoneNumber}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Address</label>
                      <br />
                      <Field className="register-input" name="address" id="address" />
                      {errors.address && touched.address ? (
                        <Alert variant="danger">{errors.address}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Postal Code</label>
                      <br />
                      <Field className="register-input" name="postalCode" id="postalCode" />
                      {errors.postalCode && touched.postalCode ? (
                        <Alert variant="danger">{errors.postalCode}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">City</label>
                      <br />
                      <Field className="register-input" name="city" id="city" />
                      {errors.city && touched.city ? (
                        <Alert variant="danger">{errors.city}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>
                    
                  <Grid item md={6}>
                    <BForm.Group>
                      <label className="register-label">Country</label>
                      <br />
                      <Field className="register-input" name="country" id="country" />
                      {errors.country && touched.country ? (
                        <Alert variant="danger">{errors.country}</Alert>
                      ) : null}
                    </BForm.Group>
                  </Grid>

                </Grid>
                
                <FieldArray name="trucks">
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2, height: "400px", overflowY: "auto" }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2" color={"white"}>
                          Add Trucks
                        </Typography>
                      </Grid>
                      {values.trucks.map((_, index) => (
                        <>
                        <Grid item md={10}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography>Truck {index + 1}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`trucks.${index}.model`} label="Truck Model" />
                              </Grid>
                              <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`trucks.${index}.manufactureyear`} label="Manufacture Year" />
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                        </Grid>
                          {index > 0 && (
                            <Grid item md={2}>
                              <Button variant="outlined" color="error" onClick={() => remove(index)}>
                                Delete
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => push(trucksGroup)}>
                          Add Truck
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>

                <FieldArray name="trailers">
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2, height: "400px", overflowY: "auto" }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Add Trailers
                        </Typography>
                      </Grid>
                      {values.trailers.map((_, index) => (
                        <>
                        <Grid item md={12}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography>Trailer {index + 1}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`trailers.${index}.model`} label="Trailer Model" />
                              </Grid>
                              <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`trailers.${index}.type`} label="Trailer Type" />
                              </Grid>
                              <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`trailers.${index}.capacity`} label="Trailer Capacity" />
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                        </Grid>
                          {index > 0 && (
                            <Grid item md={2}>
                              <Button variant="outlined" color="error" onClick={() => remove(index)}>
                                Delete
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => push(trailersGroup)}>
                          Add Trailer
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>
                <FieldArray name="drivers">
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2, height: "400px", overflowY: "auto" }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
                          Add Drivers
                        </Typography>
                      </Grid>
                      {values.drivers.map((_, index) => (
                        <>
                        <Grid item md={12}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography>Driver {index + 1}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`drivers.${index}.firstname`} label="First Name" />
                              </Grid>
                              <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`drivers.${index}.lastname`} label="Last Name" />
                              </Grid>
                              <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`drivers.${index}.licenses`} label="Licenses" />
                              </Grid>
                              <Grid item md={6}>
                                <Field className="register-input" fullWidth name={`drivers.${index}.birth`} label="Birth" />
                              </Grid>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                        </Grid>
                          {index > 0 && (
                            <Grid item md={2}>
                              <Button variant="outlined" color="error" onClick={() => remove(index)}>
                                Delete
                              </Button>
                            </Grid>
                          )}
                        </>
                      ))}{" "}
                      <Grid item xs={12}>
                        <Button variant="outlined" onClick={() => push(driversGroup)}>
                          Add Driver
                        </Button>
                      </Grid>
                    </Grid>
                  )}
                </FieldArray>
              </FormStepper>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Register;