import React from "react";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onEmailChange(e) {
      this.props.setEmailText(e.target.value);
  }

  onPasswordChange(e) {
    this.props.setPasswordText(e.target.value);
  }

  render() {
    return (
      <div className="auth">
        <h3>Sign In</h3>
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
            <button>Sign In</button>
          </div>
        </form>
      </div>
    );
  }
}
