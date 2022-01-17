// External imports
import {
  TextField,
  Stack,
  Checkbox,
  FormControlLabel,
  Divider,
  Typography,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

// Styles definition
const useStyles = makeStyles({
  body: {
    margin: 20,
  },
  checkbox: {
    marginRight: "auto",
  },
});

const ThankYouForm = ({}) => {
  const classes = useStyles();
  return (
    <Stack spacing={6} className={classes.body}>
      <Typography variant="h4"> Thanks for your time!</Typography>
      <Typography variant="body1">
        You will recive an email with a voucher code with a 10% disccount!
      </Typography>
    </Stack>
  );
};

const PersonalInfoForm = ({
  personalInfoValues,
  handlePersonalInfoChange = () =>
    console.log("TODO: Handle peronsal info change"),
  errors,
}) => {
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
        type="number"
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
};

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
        required
        type="text"
        name="visit"
        id="outlined-required"
        label="Did you enjoy your visit?"
        onChange={handleSurveyChange}
        value={surveyValues.visit}
        error={errors.visit ? true : false}
        helperText={errors.visit}
      />
      <FormControl required error={errors.findstore ? true : false}>
        <FormControlLabel
          control={
            <Checkbox
              className={classes.checkbox}
              name="findstore"
              value={surveyValues.findstore}
              indeterminate={
                surveyValues.findstore === undefined ? true : false
              }
              onChange={handleSurveyChange}
            />
          }
          labelPlacement="start"
          label="Did you find the store easly?*"
        />
        {errors.findstore ? (
          <FormHelperText>{errors.findstore}</FormHelperText>
        ) : null}
      </FormControl>
      <Divider />
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

const CardFormBody = ({
  step,
  personalInfoValues,
  handlePersonalInfoChange,
  personalInfoErrors,
  surveyValues,
  handleSurveyChange,
  surveyErrors,
}) => {
  return step === 0 ? (
    <SurveyForm
      surveyValues={surveyValues}
      handleSurveyChange={handleSurveyChange}
      errors={surveyErrors}
    />
  ) : step === 1 ? (
    <PersonalInfoForm
      personalInfoValues={personalInfoValues}
      handlePersonalInfoChange={handlePersonalInfoChange}
      errors={personalInfoErrors}
    />
  ) : (
    <ThankYouForm ></ThankYouForm>
  );
};

export default CardFormBody;

