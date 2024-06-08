import React from "react";
import { Form } from "formik";
import { Button, Stack, Step, StepLabel, Stepper, Grid } from "@mui/material";

export const FormStepper = (props) => {
  const { children, setSection, validateForm, setTouched, step, setStep } = props;
  const stepsArray = React.Children.toArray(children);
  const currentStep = stepsArray[step];

  return (
    <Form>
      <Stepper alternativeLabel activeStep={step} sx={{ marginBottom: 5 }}>
        {stepsArray.map((child, index) => (
          <Step key={child.props.label} completed={step > index}>
            <StepLabel>{child.props.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentStep}
      <Stack direction="row" spacing={2} sx={{ marginTop: 5 }}>
        <Grid>
          {step === 0 ? null : <Button
            variant="outlined"
            onClick={() => {
              setStep(step - 1)
            }}
          >
            Back
          </Button>}
          {step === stepsArray.length - 1 ? null :
          <Button
            variant="outlined"
            onClick={() => {
              validateForm().then(validation => {
              if(Object.keys(validation).length === 0) {
                setStep(step + 1);
              }
              else {
                setTouched(validation)
              }
              })
            }}
          >
            Next
          </Button>}
          {step === stepsArray.length - 1 ? 
            <Button variant="contained" type="submit" onClick={() => {
              validateForm().then(validation => {
                if(Object.keys(validation).length === 0) {
                  setSection("Login")
                }
                else {
                  setTouched(validation)
                }
                })
              }}>
              Submit
            </Button> :
            null
            }
        </Grid>
      </Stack>
    </Form>
  );
};