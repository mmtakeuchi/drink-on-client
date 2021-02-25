import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../actions/userActions";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
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
    this.props.loginUser(this.state);
    this.setState({
      username: "",
      password: "",
    });
  };
  render() {
    console.log(this);
    return (
      <div>
        <form className="signForm" onSubmit={this.handleSubmit}>
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
        <Link to="/">HOME</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userInfo) => dispatch(loginUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(Login);
