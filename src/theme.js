import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#212121",
    },
  },
  action: {
    focus: "#212121"
  },
  typography: {
    fontFamily: "Helvetica",
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
