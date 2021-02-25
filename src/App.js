import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import CocktailsContainer from "./containers/CocktailsContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
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

export default App;
