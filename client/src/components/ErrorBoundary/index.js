import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";

// reference: https://material-ui.com/components/dialogs/
function ErrorPrompt({ open, onClose, errorInfo }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Error"}</DialogTitle>
      <DialogContent>
        <DialogContentText>{errorInfo}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// reference: https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <>
          {this.props.children}
          <ErrorPrompt
            open={true}
            onClose={() => {
              this.setState({ error: null, errorInfo: null });
            }}
            errorInfo={
              this.state.error
                ? this.state.error.toString()
                : "Something went wrong."
            }
          />
        </>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
export default ErrorBoundary;
