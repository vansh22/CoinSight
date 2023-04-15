import { Snackbar } from "@mui/material";
import React from "react";
import { CryptoState } from "../CryptoContext";
import MuiAlert from "@mui/material/Alert";

const Alert = () => {
  // Alerts can be created using snackbars in mui
  // Snackbars provide brief notifications.
  const { alert, setAlert } = CryptoState();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({ open: false });
  };
  return (
    <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={alert.type}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default Alert;
