import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { autoLoginUser } from "./actions/userActions";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import CocktailsContainer from "./containers/CocktailsContainer";

class App extends Component {
  componentDidMount() {
    this.props.autoLoginUser();
  }

  render() {
    console.log(this);
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" render={(props) => <SignUp {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/cocktails" component={CocktailsContainer} />
            <Route
              path="/cocktails"
              render={(props) => <CocktailsContainer {...props} />}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.user,
  loggedIn: user.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  autoLoginUser: () => dispatch(autoLoginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
