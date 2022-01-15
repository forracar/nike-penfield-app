import { TextField, Stack, Checkbox, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Styles definition
const useStyles = makeStyles({
  body: {
    margin: 20
  }
});

const PersonalInfoForm = ({personalInfoValues, handlePersonalInfoChange, errors}) => {
    const classes = useStyles();
    return (
      <Stack spacing={4} className={classes.body}>
        <TextField
          required
          type="email"
          name="email"
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

const CardFormBody = ({step, personalInfoValues, handlePersonalInfoChange, personalInfoErrors, surveyValues, handleSurveyChange, surveyErrors }) => {
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

  export default CardFormBody;