import React, { useState } from "react";
import "./App.css";
import { login } from "./actions/session";
import { addUser } from "./actions/user";
import {
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { useInput } from "./components/Utility"

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signUp: false }; // start with sign in page
  }

  toggleSignUp() {
    this.setState({ signUp: !this.state.signUp });
  }

  render() {
    return (
      <div className="popup_background">
        <div className="popup_inner">
          <h1>Sign {this.state.signUp ? "up" : "in"}</h1>
          {this.state.signUp ? (
            <SignUpForm
              toggle={this.toggleSignUp.bind(this)}
              afterSubmit={() => {this.props.closePopup(); this.props.login();}}
            />
          ) : (
            <SignInForm
              toggle={this.toggleSignUp.bind(this)}
              afterSubmit={ () => {this.props.closePopup(); this.props.login();}}
            />
          )}
          <Button onClick={this.props.closePopup}>close</Button>
        </div>
      </div>
    );
  }
}

function SignInForm({ toggle, afterSubmit }) {
  const [error, setError] = useState();
  const {
    value: userName,
    bind: bindUserName,
    reset: resetUserName,
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      userName,
      password,
    };
    const res = await login(user).catch((error) =>
      setError(error.response.data)
    );
    resetUserName();
    resetPassword();
    afterSubmit();
  };
  if (error) throw error;
  return (
    <Grid>
      <TextField label="Username" name="user_name" {...bindUserName} />
      <TextField
        label="Password"
        name="password"
        type="password"
        {...bindPassword}
      />
      <div>
        <Button type="submit" onClick={handleSubmit}>
          Sign in
        </Button>
        <Button onClick={toggle}>No account? Create one!</Button>
      </div>
    </Grid>
  );
}

function SignUpForm({ toggle, afterSubmit }) {
  const [error, setError] = useState();
  const {
    value: userName,
    bind: bindUserName,
    reset: resetUserName,
  } = useInput("");
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput("");
  const {
    value: password2,
    bind: bindPassword2,
    reset: resetPassword2,
  } = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== password2) setError("password does not match");
    const user = {
      userName,
      password,
    };
    const res = await addUser(user).catch((error) =>
      setError(error.response.data)
    );
    resetUserName();
    resetPassword();
    resetPassword2();
    afterSubmit();
  };
  if (error) throw error;
  return (
    <Grid>
      <TextField label="Username" name="new_user_name" {...bindUserName} />
      <TextField
        label="Password"
        name="new_password"
        type="password"
        {...bindPassword}
      />
      <TextField
        label="Confirm password"
        name="new_password2"
        type="password"
        {...bindPassword2}
      />
      <div>
        <Button type="submit" onClick={handleSubmit}>
          Sign up
        </Button>
        <Button onClick={toggle}>Sign in instead</Button>
      </div>
    </Grid>
  );
}

export default Popup;
