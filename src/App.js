import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { loginStatus } from "./actions/userActions";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import CocktailsContainer from "./containers/CocktailsContainer";
import Container from "@material-ui/core/Container";

class App extends Component {
  componentDidMount() {
    this.props.loginStatus();
  }

  render() {
    // console.log(this.props.user);
    return (
      <BrowserRouter>
        <CssBaseline />
        <Container maxWidth="xl">
          <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" render={(props) => <SignUp {...props} />} />
              <Route path="/login" render={(props) => <Login {...props} />} />
              <Route path="/cocktails" component={CocktailsContainer} />
            </Switch>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  loginStatus: () => dispatch(loginStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
