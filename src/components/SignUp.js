import React, { Component } from "react";

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
  render() {
    return (
      <>
        <form className="signForm">
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
          <button type="submit">Log In</button>
        </form>
      </>
    );
  }
}

export default SignUp;
