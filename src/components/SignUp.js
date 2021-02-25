import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/userActions";

class SignUp extends Component {
  state = {
    email: "",
    username: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      email: "",
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <form className="signForm" onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          ></input>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          ></input>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (userInfo) => dispatch(createUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);
