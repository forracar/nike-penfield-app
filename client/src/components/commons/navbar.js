import { AppBar, Toolbar } from "@mui/material";
// Internal imports
import NikeLogo from "../../assets/nike-logo-bar.png";

const styles = {
  logo: {
    width: "80px",
    height: "30px",
    margin: "auto",
  },
};

const NavBar = ({}) => {
  return (
    <AppBar position="static" style={styles.header}>
      <Toolbar>
        <img src={NikeLogo} alt="Nike logo" style={styles.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;


