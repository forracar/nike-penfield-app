// Internal imports
import NikeButton from "../commons/nike-button";
/**
 * Card form footer. Contain button logic for each form step.
 * Buttons logic is defined in main component: form.js
 *
 */
const CardFormFooter = ({
  handleSurveySubmit = () => console.log("TODO: Survey submit"),
  handlePersonalInfoSubmit = () => console.log("TODO: Personal info submit"),
  step = 0,
}) => {
  return ( step === 2 ? null :
    <NikeButton
      text={step === 0 ? "Next" : "Submit"}
      onClick={step === 0 ? handleSurveySubmit : handlePersonalInfoSubmit}
    />
  );
};

export default CardFormFooter;
