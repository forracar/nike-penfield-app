// Internal imports
import NikeButton from "../commons/nike-button";
/**
 * Card form footer. Contain button logic for each form step.
 * Buttons logic is defined in main component: form.js
 *
 */
const CardFormFooter = ({
  handleSurveySubmit,
  handlePersonalInfoSubmit,
  step = 0,
}) => {
  return (
    <NikeButton
      text={step === 0 ? "Next" : "Submit"}
      onClick={step === 0 ? handleSurveySubmit : handlePersonalInfoSubmit}
    />
  );
};

export default CardFormFooter;
