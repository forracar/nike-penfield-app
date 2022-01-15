import { Button } from "@mui/material";

const styles = {
  button: {
    minWidth: "150px",
  },
};

const NikeButton = ({ text, onClick, type = "submit", disabled = false }) => {
  return (
    <Button
      style={styles.button}
      type={type}
      variant="contained"
      color="primary"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default NikeButton;
