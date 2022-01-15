// External imports
import React, {useEffect, useState} from "react";
import { CardContent, Card} from "@mui/material";
import { makeStyles } from "@mui/styles";
// Internal imports
import {getUserData, getMarketingCloudToken} from "../../api"; 
import CardFormHeader from "./card-form-header";
import CardFormBody from "./card-form-body";
import CardFormFooter from "./card-form-footer";

// Styles definition
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
  }
});

/**
 * Main form component. Contains all user input data and logic validation.
 *
 */
function Form() {
  const classes = useStyles();

  const [step, setStep] = useState(0);

  const initialSurveyValues = {question: '', suggestions: ''};
  const initialPersonalInfoValues = {email: '', firstname:'', secondname:'', mobilenumber: '', subscriber: false};

  const [surveyValues, setSurveyValues] = useState(initialSurveyValues);
  const [personalInfoValues, setPersonalInfoValues] = useState(initialPersonalInfoValues);

  const [personalInfoErrors, setPersonalInfoErrors] = useState({});
  const [surveyErrors, setSurveyErrors] = useState({});

  const [isSubmit, setSubmit] = useState(false);
  const [isNext, setNext] = useState(false);

  useEffect(() => {
    if(Object.keys(personalInfoErrors).length === 0 && isSubmit) {
      // TODO: - Generate voucher unic id code
      // TODO: - Save data
      getUserData();
      // TODO: - Fire journey
      //  1. Get token
      //  2. Fire event
      getMarketingCloudToken();
    }
  }, [personalInfoErrors])
  useEffect(() => {
    if(Object.keys(surveyErrors).length === 0 && isNext) setStep(1);
  },[surveyErrors])

  const handleSurveyChange = (event) => {
    const {name, value} = event.target;
    setSurveyValues({...surveyValues, [name]: value});
  }

  const handlePersonalInfoChange = (event) => {
    const {name, value, checked} = event.target;
    if(name !== "subscriber") setPersonalInfoValues({...personalInfoValues, [name] : value});
    else setPersonalInfoValues({...personalInfoValues, [name]: checked})
  };

  const handleSurveySubmit = (event) => {
    event.preventDefault();
    setSurveyErrors(validateSurvey(surveyValues));
    setNext(true);
  }

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
        <CardFormHeader title="Customer" subtitle="We want to hear you" step={step}/>
        <CardFormBody
          step={step}
          personalInfoValues={personalInfoValues}
          handlePersonalInfoChange={handlePersonalInfoChange}
          personalInfoErrors={personalInfoErrors}
          surveyValues={surveyValues}
          handleSurveyChange={handleSurveyChange}
          surveyErrors={surveyErrors}
        />
        <CardFormFooter step={step} handlePersonalInfoSubmit={handlePersonalInfoSubmit} handleSurveySubmit={handleSurveySubmit}/>
      </CardContent>
    </Card>
  );
}

export default Form;