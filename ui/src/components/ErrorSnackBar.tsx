import React, { Dispatch, SetStateAction } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ErrorSnackBar = ({
  message,
  setErrorMessage,
}: {
  message: string | null;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
}) => {
  const handleClose = () => setErrorMessage(null);

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={!!message}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        severity="error"
        onClose={handleClose}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ErrorSnackBar;
