import React from "react";

export default class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  onEmailChange = (e) => {
    this.props.setEmailText(e.target.value);
  };

  onPasswordChange = (e) => {
    this.props.setPasswordText(e.target.value);
  };

  onRepeatPasswordChange = (e) => {
    this.props.setRepeatPasswordText(e.target.value);
  };

  render() {
    return (
      <div className="auth">
        <h3>REGISTRATION</h3>
        <form>
          <div>
            <input
              type="text"
              name="login"
              autoComplete="off"
              placeholder="E-mail"
              spellCheck={false}
              value={this.props.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              value={this.props.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="repeatPassword"
              autoComplete="off"
              placeholder="Repeat password"
              value={this.props.repeatPassword}
              onChange={this.onRepeatPasswordChange}
            />
          </div>
          <div>
            <button>Rgister</button>
          </div>
        </form>
      </div>
    );
  }
}
