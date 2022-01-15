// External imports
import React, {useEffect, useState} from "react";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Checkbox,
  Stack,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// Internal imports
import NikeButton from "./nikebutton";

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    border: 0,

    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    color: "black",
    height: "auto",
    padding: "0 30px",
    width: "50%",
    minWidth: '450px'
  },
  body: {
    margin: 20,
  },
});

const steps = [
  'Survey',
  'Personal information'
]

const CardHeader = ({step = 0}) => {
  return (
    <React.Fragment>
      <Typography variant="h4">Customer</Typography>
      <Typography variant="body1">We want to hear from you </Typography>
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

const PersonalInfoForm = ({personalInfoValues, handlePersonalInfoChange, errors}) => {
  const classes = useStyles();

  return (
    <Stack spacing={4} className={classes.body}>
      <TextField
        required
        type="email"
        name="email"
        id="outlined-required"
        label="Email"
        onChange={handlePersonalInfoChange}
        value={personalInfoValues.email}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        required
        type="text"
        name="firstname"
        id="outlined-required"
        label="First name"
        value={personalInfoValues.firstname}
        onChange={handlePersonalInfoChange}
        error={errors.firstname ? true : false}
        helperText={errors.firstname}
      />
      <TextField
        required
        type="text"
        name="secondname"
        id="outlined-required"
        label="Second name"
        value={personalInfoValues.secondname}
        onChange={handlePersonalInfoChange}
        error={errors.secondname ? true : false}
        helperText={errors.secondname}
      />
      <TextField
        required
        type="text"
        name="mobilenumber"
        id="outlined-required"
        label="Mobile number"
        value={personalInfoValues.mobilenumber}
        onChange={handlePersonalInfoChange}
        error={errors.mobilenumber ? true : false}
        helperText={errors.mobilenumber}
      />
      <FormControlLabel
        control={
          <Checkbox
            name="subscriber"
            value={personalInfoValues.subscriber}
            onChange={handlePersonalInfoChange}
          />
        }
        label="Sign up for emails and get updates from Nike products"
      />
    </Stack>
  );
}

const SurveyForm = ({ handleSurveyChange, surveyValues, errors }) => {
  const classes = useStyles();

  return (
    <Stack spacing={4} className={classes.body}>
      <TextField
        required
        type="text"
        name="question"
        id="outlined-required"
        label="You will buy again in Nike store?"
        onChange={handleSurveyChange}
        value={surveyValues.question}
        error={errors.question ? true : false}
        helperText={errors.question}
      />
      <TextField
        type="text"
        name="suggestions"
        id="outlined-required"
        label="Suggestions"
        value={surveyValues.suggestions}
        onChange={handleSurveyChange}
      />
    </Stack>
  );
};

const CardBody = ({step, personalInfoValues, handlePersonalInfoChange, personalInfoErrors, surveyValues, handleSurveyChange, surveyErrors }) => {

  return step === 0 ? (
    <SurveyForm 
      surveyValues={surveyValues}
      handleSurveyChange={handleSurveyChange}
      errors={surveyErrors}
    />
  ) : (
    <PersonalInfoForm
      personalInfoValues={personalInfoValues}
      handlePersonalInfoChange={handlePersonalInfoChange}
      errors={personalInfoErrors}
    />
  );
};

const CardFooter = ({ handleSurveySubmit, handlePersonalInfoSubmit, step=0}) => {

  return <NikeButton text={step === 0 ? "Next" : "Submit"} onClick={step === 0 ? handleSurveySubmit : handlePersonalInfoSubmit} />;
};

function Form() {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  // SURVEY DATA
  const initialSurveyValues = {question: '', suggestions: ''};
  const [surveyValues, setSurveyValues] = useState(initialSurveyValues);
  const [surveyErrors, setSurveyErrors] = useState({});
  const [isNext, setNext] = useState(false);

  // PERSONAL INFO DATA
  const initialPersonalInfoValues = {email: '', firstname:'', secondname:'', mobilenumber: '', subscriber: false};
  const [personalInfoValues, setPersonalInfoValues] = useState(initialPersonalInfoValues);
  const [personalInfoErrors, setPersonalInfoErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  useEffect(() => {
    if(Object.keys(personalInfoErrors).length === 0 && isSubmit) console.log("Submit: ", personalInfoValues, surveyValues);
  }, [personalInfoErrors])

  useEffect(() => {
    if(Object.keys(surveyErrors).length === 0 && isNext) setStep(1);
  },[surveyErrors])

  const handleSurveyChange = (event) => {
    const {name, value} = event.target;
    setSurveyValues({...surveyValues, [name]: value});
  }

  const handleSurveySubmit = (event) => {
    event.preventDefault();
    setSurveyErrors(validateSurvey(surveyValues));
    setNext(true);
  }

  const handlePersonalInfoChange = (event) => {
    const {name, value, checked} = event.target;
    if(name !== "subscriber") setPersonalInfoValues({...personalInfoValues, [name] : value});
    else setPersonalInfoValues({...personalInfoValues, [name]: checked})
  };

  const handlePersonalInfoSubmit = (event) => {
    event.preventDefault();
    setPersonalInfoErrors(validatePersonalInfo(personalInfoValues));
    setSubmit(true);
  }
  

  const validatePersonalInfo = (values) => {
    const errors = {};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.email) errors.email = "Email is required!"
    else if(!regex.test(values.email)) errors.email = "Enter a valid email"
    if(!values.firstname) errors.firstname = "First name is required!"
    if(!values.secondname) errors.secondname = "Second name is required!"
    if(!values.mobilenumber) errors.mobilenumber = "Mobile number is required!"

    return errors; 
  }

  const validateSurvey = (values) => {
    const errors = {};

    if(!values.question) errors.question = "Answer is required!"

    return errors;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeader step={step}/>
        <CardBody
          step={step}
          personalInfoValues={personalInfoValues}
          handlePersonalInfoChange={handlePersonalInfoChange}
          personalInfoErrors={personalInfoErrors}
          surveyValues={surveyValues}
          handleSurveyChange={handleSurveyChange}
          surveyErrors={surveyErrors}
        />
        <CardFooter step={step} handlePersonalInfoSubmit={handlePersonalInfoSubmit} handleSurveySubmit={handleSurveySubmit}/>
      </CardContent>
    </Card>
  );
}

export default Form;
