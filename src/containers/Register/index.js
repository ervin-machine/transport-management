import React, { useState } from "react";
import { Formik, Field, FieldArray } from "formik";
import { Container, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { TextField } from "formik-material-ui";
import { FormStepper } from "../PublicComponents/FormStepper";
import { registerSchema } from "../../schemas/RegisterSchema"
import { object } from "yup";

const Register = (props) => {
  const { setSection } = props;
  const [step, setStep] = useState(0);
  const trucksGroup = { model: "", manufactureyear: "" };
  const trailersGroup = { linkname: "", linkurl: "" };
  const driversGroup = {firstname: "", lastname: "", licenses: "", birth: "" };

  return (
    <Container sx={{ bgcolor: "rgb(24, 24, 24);", paddingY: 3, marginTop: 5 }}>
      <Typography sx={{ color: "white" }} variant="h3" align="center" component="h2">
        Register
      </Typography>
      <Card sx={{ marginTop: 2 }}>
        <CardContent sx={{ paddingY: 10, paddingX: 5 }}>
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
            {({ values, validateForm, setTouched }) => (
              <FormStepper setSection={setSection} validateForm={validateForm} setTouched={setTouched} step={step} setStep={setStep}>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <Field fullWidth name="firstname" component={TextField} label="First Name" sx={{ color: "white !important" }} />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="lastname" component={TextField} label="Last Name" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="companyName" component={TextField} label="Company Name" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="email" component={TextField} label="Email" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="password" component={TextField} label="Password" type="password" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="phoneNumber" component={TextField} label="Phone Number" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="address" component={TextField} label="Address" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="postalCode" component={TextField} label="Postal Code" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="city" component={TextField} label="City" />
                  </Grid>
                  <Grid item md={6}>
                    <Field fullWidth name="country" component={TextField} label="Country" />
                  </Grid>
                </Grid>
                
                <FieldArray name="trucks">
                  {({ push, remove }) => (
                    <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2, height: "400px", overflowY: "auto" }}>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h2">
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
                                <Field fullWidth name={`trucks.${index}.model`} component={TextField} label="Truck Model" />
                              </Grid>
                              <Grid item md={6}>
                                <Field fullWidth name={`trucks.${index}.manufactureyear`} component={TextField} label="Manufacture Year" />
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
                                <Field fullWidth name={`trailers.${index}.model`} component={TextField} label="Trailer Model" />
                              </Grid>
                              <Grid item md={6}>
                                <Field fullWidth name={`trailers.${index}.type`} component={TextField} label="Trailer Type" />
                              </Grid>
                              <Grid item md={6}>
                                <Field fullWidth name={`trailers.${index}.capacity`} component={TextField} label="Trailer Capacity" />
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
                                <Field fullWidth name={`drivers.${index}.firstname`} component={TextField} label="First Name" />
                              </Grid>
                              <Grid item md={6}>
                                <Field fullWidth name={`drivers.${index}.lastname`} component={TextField} label="Last Name" />
                              </Grid>
                              <Grid item md={6}>
                                <Field fullWidth name={`drivers.${index}.licenses`} component={TextField} label="Licenses" />
                              </Grid>
                              <Grid item md={6}>
                                <Field fullWidth name={`drivers.${index}.birth`} component={TextField} label="Birth" />
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