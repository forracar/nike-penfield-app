import React from "react";
import { Typography, Stepper, Step, StepLabel } from "@mui/material";
const defaultSteps = [
    'Survey',
    'Personal information'
]
/**
 * Card form header. Allows multiple personalization to form header like; title and subtitle
 *
 */
const CardFormHeader = ({step = 0, title="title", subtitle="subtitle", steps=defaultSteps}) => {
    return (
      <React.Fragment>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </React.Fragment>
    );
};

export default CardFormHeader;