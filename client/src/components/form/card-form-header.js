// External imports
import React from "react";
import { Typography, Stepper, Step, StepLabel, Stack } from "@mui/material";

/**
 * Card form header. Allows multiple personalization to form header like; title and subtitle
 *
 */
const CardFormHeader = ({
  step = 0,
  title = "title",
  subtitle = "subtitle",
  steps = ['Survey', 'Personal information', 'Thank you'],
}) => {
  return (
      <Stack spacing={1}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{subtitle}</Typography>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      </Stack>

  );
};

export default CardFormHeader;
