// External imports
import React, {useEffect, useState} from "react";
import { CardContent, Card} from "@mui/material";
import { makeStyles } from "@mui/styles";
// Internal imports
import { getMarketingCloudToken } from "../../api"; 
import CardFormHeader from "./card-form-header";
import CardFormBody from "./card-form-body";
import CardFormFooter from "./card-form-footer";
import { postUserData, fireJourney } from "../../api";

// Styles definition
const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
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

  const initialSurveyValues = {question: '', visit: '', findstore: undefined, suggestions: ''};
  const initialPersonalInfoValues = {email: '', firstname:'', secondname:'', mobilenumber: '', subscriber: false};

  const [surveyValues, setSurveyValues] = useState(initialSurveyValues);
  const [personalInfoValues, setPersonalInfoValues] = useState(initialPersonalInfoValues);

  const [personalInfoErrors, setPersonalInfoErrors] = useState({});
  const [surveyErrors, setSurveyErrors] = useState({});

  const [isSubmit, setSubmit] = useState(false);
  const [isNext, setNext] = useState(false);

  useEffect(() => {
    if(Object.keys(personalInfoErrors).length === 0 && isSubmit) {
      setStep(2);
      fetchData();
    }
  }, [personalInfoErrors])

  useEffect(() => {
    if(Object.keys(surveyErrors).length === 0 && isNext) setStep(1);
  },[surveyErrors])

  async function fetchData() {
    await postUserData();
    await fireJourney();
  }

  const handleSurveyChange = (event) => {
    const {name, value} = event.target;
    if(name !== "findstore") setSurveyValues({...surveyValues, [name] : value});
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

    if(!values.email) errors.email = "Email is required"
    else if(!regex.test(values.email)) errors.email = "Enter a valid email"
    if(!values.firstname) errors.firstname = "First name is required"
    if(!values.secondname) errors.secondname = "Second name is required"
    if(!values.mobilenumber) errors.mobilenumber = "Mobile number is required"
    else if(values.mobilenumber.length !== 9) errors.mobilenumber = "Enter a valid number"

    return errors; 
  }

  const validateSurvey = (values) => {
    const errors = {};

    if(!values.question) errors.question = "Answer is required!"
    if(!values.visit) errors.visit = "Answer is required!"
    if(values.findstore === undefined) errors.findstore = "Please select or deselect checkbox!"

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
