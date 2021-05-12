import React, { Component } from "react";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { signUpStart } from "../../redux/user/user.actions";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      console.log("here");
      this.props.signUpStart({ email, password, displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            onChange={this.handleChange}
            value={this.state.displayName}
            label="Display Name"
            name="displayName"
            required
          />
          <FormInput
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            name="email"
            required
          />
          <FormInput
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            label="Password"
            name="password"
            required
          />
          <FormInput
            type="password"
            onChange={this.handleChange}
            value={this.state.confirmPassword}
            label="Confirm Password"
            name="confirmPassword"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
