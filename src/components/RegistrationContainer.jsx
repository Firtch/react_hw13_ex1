import React from "react";
import { connect } from "react-redux";
import Registration from "./Registration";
import {
  setEmailText,
  setPasswordText,
  setRepeatPasswordText,
} from "../store/registration/actions";
import { stat } from "fs";

class RegistrationContainer extends React.Component {
  render() {
    return (
      <Registration
        email={this.props.email}
        password={this.props.password}
        repeatPassword={this.props.repeatPassword}
        setEmailText={this.props.setEmailText}
        setPasswordText={this.props.setPasswordText}
        setRepeatPasswordText={this.props.setRepeatPasswordText}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.registration.email,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword,
  };
};

const mapDispatchToProps = {
  setEmailText,
  setPasswordText,
  setRepeatPasswordText,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
