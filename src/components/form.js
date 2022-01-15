// External imports
import React, {useEffect, useState} from "react";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Divider,
  Stack,
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

const CardHeader = () => {
  return (
    <React.Fragment>
      <Typography variant="h4">Customer</Typography>
      <Typography variant="body1">We want to hear from you </Typography>
    </React.Fragment>
  );
};

const CardBody = ({ values, handleChange, errors }) => {
  const classes = useStyles();

  return (
    <Stack spacing={4} className={classes.body}>
      <Typography variant="body1">Email </Typography>
      <TextField
        required
        type="email"
        name="email"
        id="outlined-required"
        label="Email"
        onChange={handleChange}
        value={values.email}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <Divider />
      <TextField
        type="text"
        name="question"
        id="outlined-required"
        multiline
        label="Will you purchase again at Nike Store?"
        value={values.question}
        onChange={handleChange}
        error={errors.question ? true : false}
        helperText={errors.question}
      />
      <TextField
        type="text"
        name="suggestions"
        id="outlined-required"
        multiline
        label="Suggestions"
        value={values.suggestions}
        onChange={handleChange}
        error={errors.suggestions ? true : false}
        helperText={errors.suggestions}
      />
    </Stack>
  );
};

const CardFooter = ({ handleFormSubmit}) => {
  return <NikeButton text="Submit" onClick={handleFormSubmit} />;
};

function Form() {
  const classes = useStyles();

  const initialValues = {email: '', question:'', suggestions:''};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit) console.log("Submit");
  }, [formErrors])

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormValues({...formValues, [name] : value});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!values.email) errors.email = "Email is required!"
    else if(!regex.test(values.email)) errors.email = "Enter a valid email"
    if(!values.question) errors.question = "Answer is required!"
    if(!values.suggestions) errors.suggestions = "Suggestions are required!"

    return errors; 
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardHeader />
        <CardBody
          values={formValues}
          handleChange={handleChange}
          errors={formErrors}
        />
        <CardFooter handleFormSubmit={handleFormSubmit} />
      </CardContent>
    </Card>
  );
}

export default Form;
